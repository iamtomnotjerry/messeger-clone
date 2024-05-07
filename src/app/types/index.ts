import {Conversation, Message, User} from "@prisma/client";

export type FullMessageType = Message & {
    sender: User,
    seen: User[]
};


export interface FullConversationType {
    id: string;
    name?: string | null; // Adjusted to allow for undefined as well
    messages: FullMessageType[];

    isGroup?: boolean | null; // Change the type definition to accept nullable boolean
    users?: User[];
}