'use client'
import { useRouter } from "next/navigation";
import {format} from "date-fns";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import { FullConversationType } from "@/app/types";
import useOtherUser from "@/app/hooks/useOtherUser";
import Avartar from "@/app/components/Avatar";
import AvartarGroup from "@/app/components/AvatarGroup";

interface CustomMessage {
    id: string;
    body: string | null;
    image: string | null;
    createdAt: Date;
    seen?: { email: string }[]; // Define the 'seen' property
    conversationId: string;
    senderId: string;
}

interface ConversationBoxProps {
    data: FullConversationType;
    selected?: boolean;
    searchQuery: string; // Add searchQuery prop
    setSearchQuery: (query: string) => void; // Add setSearchQuery prop
}

const ConversationBox: React.FC<ConversationBoxProps> = ({
    data,
    selected,
    searchQuery,
    setSearchQuery
}) => {
    const otherUser = useOtherUser(data);
    const session = useSession();
    const router = useRouter();

    const lastMessage = data.messages[data.messages.length - 1] as CustomMessage; // Cast lastMessage to CustomMessage

    const userEmail = session.data?.user?.email;

    const handleClick = () => {
        router.push(`/conversations/${data.id}`);
    };

    const isMatch = () => {
        if (!searchQuery) return true;
        const conversationName = data.name || otherUser.name || "";
        return conversationName.toLowerCase().includes(searchQuery.toLowerCase());
    };

    if (!isMatch()) return null;

    const hasSeen = lastMessage && lastMessage.seen && lastMessage.seen.some(user => user.email === userEmail);

    const lastMessageText = () => {
        if (lastMessage?.image) {
            return 'Sent an image';
        }
        if (lastMessage?.body) {
            return lastMessage.body;
        }
        return "Started a conversation";
    };

    return (
        <div onClick={handleClick}
            className={clsx(`
                w-full, 
                relative
                flex
                items-center
                space-x-3
                hover:bg-neutral-100
                rounded-lg
                transition
                cursor-pointer
                p-3
            `,
                selected ? 'bg-neutral-100' : 'bg-white'
            )}
        >
            {data.isGroup ? (
                <AvartarGroup users={data.users} />
            ) : (
                <Avartar user={otherUser} />
            )}

            <div className="
                min-w-0 flex-1
            ">
                <div className="focus:outline-none">
                    <div className="
                        flex
                        justtify-between
                        items-center
                        mb-1
                    ">
                        <p className="text-md font-medium text-gray-900">
                            {data.name || otherUser.name}
                        </p>
                        {lastMessage?.createdAt && (
                            <p className="text-xs text-gray-400 font-light">
                                {format(new Date(lastMessage.createdAt), 'p')}
                            </p>
                        )}
                    </div>
                    <p className={clsx(`
                        truncate
                        text-sm

                    `,
                        hasSeen ? 'text-gray-500' : "text-black font-medium"
                    )}>
                        {lastMessageText()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ConversationBox;
