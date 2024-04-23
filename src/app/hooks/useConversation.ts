import { useParams } from "next/navigation";
import { useMemo } from "react";

const useConversation = () => {
    const params = useParams();
    console.log("Params:", params); // Log params object
    const conversationId = useMemo(() => {
        // Check if conversationId exists in params
        if (!params?.conversationId) {
            return '';
        }
        // Return the conversationId
        return params.conversationId;
    }, [params?.conversationId]);

    console.log("Conversation ID:", conversationId); // Log conversationId

    // Instead of checking conversationId, check if params.conversationId exists
    const isOpen = useMemo(() => !!params?.conversationId, [params?.conversationId]);

    return useMemo(() => ({
        isOpen,
        conversationId
    }), [isOpen, conversationId]);
}

export default useConversation;
