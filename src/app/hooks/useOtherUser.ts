import { useSession } from "next-auth/react";
import { useMemo } from "react";
import { FullConversationType } from "../types";
import {User} from "@prisma/client";

const useOtherUser = (conversation: FullConversationType| {
    users:User[]
})=>{
    const session = useSession();
    const otherUser = useMemo(() => {
        const currentUserEmail = session?.data?.user?.email;
        const users = conversation.users || []; // Add a check for undefined
        const otherUser = users.filter((user) => user.email !== currentUserEmail);
        return otherUser[0];
    }, [session?.data?.user?.email, conversation.users]);
    return otherUser;
};

export default useOtherUser;