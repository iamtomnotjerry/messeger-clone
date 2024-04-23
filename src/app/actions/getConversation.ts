import getCurrentUser from "./getCurrentUser";
import prisma from "@/app/libs/prismadb";

const getConversations = async () => {
    try {
        const currentUser = await getCurrentUser();

        // Check if currentUser is valid
        if (!currentUser?.id) {
            return [];
        }

        // Fetch conversations for the current user
        const conversations = await prisma.conversation.findMany({
            orderBy: { lastMessageAt: 'desc' },
            where: { userIds: { has: currentUser.id } },
            include: {
                users: true,
                messages: {
                    include: { sender: true, seen: true }
                }
            }
        });

        return conversations;
    } catch (error) {
        console.error("Error in getConversations:", error);
        return [];
    }
};

export default getConversations;
