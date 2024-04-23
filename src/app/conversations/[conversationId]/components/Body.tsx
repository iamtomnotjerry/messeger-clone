'use client'
import useConversation from "@/app/hooks/useConversation";
import { FullMessageType } from "@/app/types";
import { useEffect, useRef, useState } from "react";
import MessageBox from "./MessageBox";
import axios from "axios";
import { pusherClient } from "@/app/libs/pusher";
import { find } from "lodash";

interface BodyProps {
  initialMessages: FullMessageType[];
}

const Body: React.FC<BodyProps> = ({ initialMessages }) => {
  const [messages, setMessages] = useState(initialMessages);
  const bottomRef = useRef<HTMLDivElement>(null);

  const { conversationId } = useConversation();
  const selectedConversationId = Array.isArray(conversationId) ? conversationId[0] : conversationId;

  useEffect(() => {
    if (selectedConversationId) {
      axios.post(`/api/conversations/${selectedConversationId}/seen`, [selectedConversationId]);
    }
  }, [selectedConversationId]);

  useEffect(() => {
    pusherClient.subscribe(selectedConversationId);
    bottomRef?.current?.scrollIntoView();

    const messagehandler = (message: FullMessageType) => {
      axios.post(`/api/conversations/${selectedConversationId}/seen`, [selectedConversationId]);

      setMessages((current) => {
        if (find(current, { id: message.id })) {
          return current;
        }
        return [...current, message];
      });

      bottomRef?.current?.scrollIntoView();
    };

    const updateMessageHandler = (newMessage: FullMessageType) => {
      setMessages((current) =>
        current.map((currentMessage) => {
          if (currentMessage.id === newMessage.id) {
            return newMessage;
          }
          return currentMessage;
        })
      );
    };

    pusherClient.bind('messages:new', messagehandler);
    pusherClient.bind('message:update', updateMessageHandler);

    return () => {
      pusherClient.unsubscribe(selectedConversationId);
      pusherClient.unbind('messages:new', messagehandler);
      pusherClient.unbind('message:update', updateMessageHandler);
    };
  }, [selectedConversationId]);

  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message, i) => (
        <MessageBox
          isLast={i === messages.length - 1}
          key={message.id}
          data={message}
        />
      ))}
      <div ref={bottomRef} className="pt-24" />
    </div>
  );
};

export default Body;
