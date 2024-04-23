// pages/users.js
'use client'
import { signOut } from "next-auth/react";

import { getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import EmptyState from "../components/EmptyState";

const Users = () => {
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

    const handleLogout = async () => {
        await signOut();
        router.push('/');
    };

    return ( 
        <div className="hidden lg:block lg:pl-80 h-full">
            <EmptyState/>
        </div>
    );
}

export default Users;
