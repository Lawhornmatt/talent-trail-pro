'use client'
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

export default function LogInOut() {

    const [user, setUser] = useState(null);
    const router = useRouter();

    const doA= async () => {
        return "blah"
    }

    const doB = async () => {
        return "blah"
    }

    return (
        <div className="flex flex-col items-center justify-around space-y-4">
            <LoginLink className="bg-blue-300 p-2">Sign in</LoginLink>
            <RegisterLink className="bg-blue-300 p-2">Sign up</RegisterLink>
            {/* 
            {user ? (
                <button className="bg-blue-300 p-2" onClick={doB}>Log Out</button>       
                ) : (
                <button className="bg-blue-300 p-2" onClick={doA}>Log In</button>
            )}
             */}
        </div>
    );
};

/*
I used a variety of tutorials
to understand integrating 
NextJS + Firebase
CREDITS:
https://www.youtube.com/watch?v=S_sV6bYWKXQ&t=624s
https://www.youtube.com/watch?v=lQftwBTCejE&t=1659s
Most replicated: https://www.youtube.com/watch?v=n7Em_HH0jWI
*/