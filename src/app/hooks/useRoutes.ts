import {useMemo} from 'react';
import { usePathname } from 'next/navigation';

import {HiChat,HiHome} from "react-icons/hi";

import {
    HiArrowLeftOnRectangle,
    HiUsers,
    HiOutlineClipboard 
} from "react-icons/hi2";

import {signOut} from "next-auth/react";
import useConversation from './useConversation';

const useRouters = () => {
    const pathname = usePathname();
    const {conversationId} = useConversation();
    const routes = useMemo(()=>[
        {
            label: 'Chat',
            href: '/conversations',
            icon: HiChat,
            active: pathname === '/conversations' || !!conversationId
        },
        {
            label: 'Users',
            href: '/users',
            icon: HiUsers,
            active: pathname === '/users' 
        },
        {
            label: 'Rules',
            href: '/rules',
            icon: HiOutlineClipboard ,
            active: pathname === '/rules' 
        },
        {
            label: 'Home',
            href: 'home',
            active: pathname === '/home',
            icon: HiHome,
        },
        {
            label: 'Logout',
            href: '#',

            onClick: ()=>signOut(),
            icon: HiArrowLeftOnRectangle,
        },
        
    ],[pathname,conversationId])
    return routes;
}
export default useRouters;