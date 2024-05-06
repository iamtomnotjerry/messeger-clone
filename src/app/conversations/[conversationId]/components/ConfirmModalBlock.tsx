"use client"

import Button from "@/app/components/Button";
import Modal from "@/app/components/Model";
import useConversation from "@/app/hooks/useConversation";
import { Dialog } from "@headlessui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import {FiAlertTriangle}from "react-icons/fi"
interface ConfirmModalProps {
    isOpen?: boolean;
    onClose: () => void;
}

const ConfirmModalBlock: React.FC<ConfirmModalProps> = ({
    isOpen,
    onClose
}) =>{
    const router = useRouter();
    const {conversationId} = useConversation();
    const [isLoading, setIsLoading] = useState(false);
    const onBlock = useCallback(async () => {
        try {
            // Set loading state to true to indicate that the operation is in progress
            setIsLoading(true);
    
            // Send a DELETE request to the API endpoint to block the conversation
            await axios.put(`/api/conversations/${conversationId}`);
    
            // Once the conversation is successfully blocked, redirect to the conversations page
            router.push('/conversations');
    
            // Refresh the page to reflect the updated conversation list
            router.refresh();
        } catch (error) {
            // If an error occurs during the blocking process, display an error toast
            toast.error('Something went wrong while blocking the conversation.');
        } finally {
            // Regardless of success or failure, set loading state back to false
            setIsLoading(false);
        }
    }, [conversationId, router]);
    
    return(
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 justify-center flex-shrink-0 items-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10
                ">
                    <FiAlertTriangle className="h-6 w-6 text-red-600"/>
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:text-left sm:ml-0">
                    <Dialog.Title as="h3" className="test-base font-semibold leading-6 text-gray-900">
                        Block conversation
                    </Dialog.Title>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">
                            Are you sure you want to block this conversation?
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <Button disabled={isLoading} danger onClick={onBlock}>
                    Block
                </Button>
                <Button disabled={isLoading} secondary onClick={onClose}>
                    Cancel
                </Button>
            </div>
        </Modal>
    );
}

export default ConfirmModalBlock;