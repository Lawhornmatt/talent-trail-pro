'use client'
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from 'react';

export default function LogInOut() {

    const {
        user
    } = useKindeBrowserClient();
    
    useEffect(() => {}, [user]);

    return (
        <div className="flex flex-col items-center justify-around space-y-4">
            {user ? (
                    <LogoutLink className="bg-blue-300 p-2">Log out</LogoutLink>
                ) : (
                    <>
                        <LoginLink className="bg-blue-300 p-2">Sign in</LoginLink>
                        <RegisterLink className="bg-blue-300 p-2">Sign up</RegisterLink>
                    </>
                )
            }
        </div>
    );
};

// <div className="flex flex-col items-center justify-around space-y-4">
// <LoginLink className="bg-blue-300 p-2">Sign in</LoginLink>
// <RegisterLink className="bg-blue-300 p-2">Sign up</RegisterLink>
// </div>