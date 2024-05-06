import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import { pusherServer } from "@/app/libs/pusher";
interface IParams {
    conversationId?:string;
}

export async function DELETE(
    request: Request,
    {params} :{params:IParams}
){
    try{
        const { conversationId} = params;
        const currentUser = await getCurrentUser();
        if(!currentUser?.id){
            return new NextResponse('Unauthorized',{status:401});
        }
        const existingConversation =await prisma.conversation.findUnique({
            where: {
                id:conversationId
            },
            include:{
                users:true
            }
        });
        if(!existingConversation){
            return new NextResponse("Invaild ID",{status:400})
        }
        const deleteConversation = await prisma.conversation.deleteMany({
            where:{
                id:conversationId,
                userIds:{
                    hasSome: [currentUser.id]
                }
            }
        });
        existingConversation.users.forEach((user)=>{
            if(user.email){
                pusherServer.trigger(user.email,'conversation:remove',existingConversation);
                
            }
        })
        return NextResponse.json(deleteConversation);

    } catch(error:any){
        console.log(error,"Error_conversation");
        return new NextResponse("Internal Errro",{status:500});
    }
}
export async function PUT(
    request: Request,
    { params }: { params: IParams }
) {
    try {
        const { conversationId } = params;
        const currentUser = await getCurrentUser();
        if (!currentUser?.id) {
            return new NextResponse('Unauthorized', { status: 401 });
        }
        const existingConversation = await prisma.conversation.findUnique({
            where: {
                id: conversationId
            },
            include: {
                users: true
            }
        });
        if (!existingConversation) {
            return new NextResponse("Invalid ID", { status: 400 })
        }
        
        // Update the conversation status in the database
        const updatedConversation = await prisma.conversation.update({
            where: {
                id: conversationId
            },
            data: {
                status: 'blocked' // Set the status to 'blocked' or any other value you prefer
            }
        });

        // Send a success response
        return new NextResponse("Conversation blocked successfully", { status: 200 });

    } catch (error: any) {
        console.log(error, "Error_conversation");
        return new NextResponse("Internal Error", { status: 500 });
    }
}
