'use client'

import { User } from "@prisma/client";
import Image from "next/image";
import useActive from "../hooks/useActive";

interface AvatarProps {
    user?: User;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
    const { members } = useActive();
    const isActive = user && members.indexOf(user.email!) !== -1;

    return (
        <div className="relative">
            <div className="
                relative
                inline-block
                rounded-full
                overflow-hidden
                h-9
                w-9
                md:h-11
                md:w-11
                flex-shrink-0
                flex-grow-0
            ">
                <Image
                    alt="Avatar"
                    src={user?.image || '/images/placeholder.png'}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                />
            </div>
            {isActive && (
                <span className="
                    absolute
                    block
                    rounded-full
                    bg-green-500
                    ring-2
                    ring-white
                    top-0
                    right-0
                    -mt-1
                    -mr-1
                    h-2
                    w-2
                    md:h-3
                    md:w-3
                ">
                </span>
            )}
        </div>
    );
}

export default Avatar;
