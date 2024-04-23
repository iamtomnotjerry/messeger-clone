'use client';

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children
}) => {
    return (
        <div>
            <Transition.Root show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 overflow-y-auto z-50" onClose={onClose}>
                    <div className="flex items-center justify-center min-h-screen">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="relative max-w-lg w-full bg-white rounded-lg shadow-xl">
                                <button
                                    className="absolute top-0 right-0 p-2 -mt-3 -mr-3 text-gray-400 rounded-full hover:bg-gray-200 focus:outline-none"
                                    onClick={onClose}
                                >
                                    <span className="sr-only">Close</span>
                                    <IoClose className="h-6 w-6" />
                                </button>
                                <div className="p-4">{children}</div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );
};

export default Modal;
