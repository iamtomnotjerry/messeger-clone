'use client'

import { useEffect } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { getSession } from 'next-auth/react';
import useConversation from '../hooks/useConversation';
import EmptyState from '../components/EmptyState';

const Home = () => {
    const { isOpen } = useConversation();
    const router = useRouter();

    useEffect(() => {
        async function checkAuth() {
            const session = await getSession();
            // If user is not authenticated, redirect to the home page
            if (!session) {
                router.push('/');
            }
        }
        checkAuth();
    }, []);

    return (
        <div className={clsx(
            "lg:pl-80 h-full lg:block",
            isOpen ? "block" : 'hidden'
        )}>
            <EmptyState />
        </div>
    )
}

export default Home;
