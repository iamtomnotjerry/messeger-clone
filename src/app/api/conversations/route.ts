import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import { pusherServer } from "@/app/libs/pusher";

export async function POST(request: Request) {
    try {

        const currentUser = await getCurrentUser();
        const body = await request.json();
        console.log(body)
        const { userId, isGroup, members, name } = body;

        // Check if currentUser is valid
        if (!currentUser?.id || !currentUser?.email) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        // Validate data for group conversation
        if (isGroup && (!members || members.length < 2 || !name)) {
            return new NextResponse('Invalid data for group conversation', { status: 400 });
        }

        if (isGroup) {
            // Create new group conversation
            const newConversation = await prisma.conversation.create({
                data: {
                    name,
                    isGroup,
                    users: {
                        connect: [
                            ...members.map((member: { value: string }) => ({ id: member.value })),
                            { id: currentUser.id }
                        ]
                    }
                },
                include: { users: true }
            });
            newConversation.users.forEach((user)=>{
                if(user.email){
                    pusherServer.trigger(user.email,'conversation:new',newConversation)
                }
            })
            return NextResponse.json(newConversation);
        }

        // Find existing conversation for single user
        const existingConversation = await prisma.conversation.findFirst({
            where: {
                OR: [
                    { userIds: { equals: [currentUser.id, userId] } },
                    { userIds: { equals: [userId, currentUser.id] } }
                ]
            },
            include: { users: true }
        });

        if (existingConversation) {
            return NextResponse.json(existingConversation);
        }

        // Create new conversation for single user
        const newConversation = await prisma.conversation.create({
            data: {
                users: {
                    connect: [{ id: currentUser.id }, { id: userId }]
                }
            },
            include: { users: true }
        });
        newConversation.users.map((user)=>{
            if(user.email){
                pusherServer.trigger(user.email,'conversation:new', newConversation);
            }
        })
        return NextResponse.json(newConversation);
    } catch (error) {
        console.error("Error:", error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
