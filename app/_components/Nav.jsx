import React from "react";
import Link from "next/link";
import {LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";


export default function Nav({ user }) {
    return (
        <ul className="flex flex-col items-center justify-around space-y-2">
            <li>
                <Link href="/" className="bg-blue-300 px-1"> Login </Link>
            </li>
            <li>
                <Link href="/home" className="bg-blue-300 px-1"> Home </Link>
            </li>
            <li>
                <Link href="/add" className="bg-blue-300 px-1">Add</Link> 
            </li>
            <li>
                <Link href="/settings" className="bg-blue-300 px-1">Settings</Link> 
            </li>
            {
            user ? (
                        <li>
                            <LogoutLink className="bg-blue-300 px-1">Log out</LogoutLink>
                        </li>
                    ) : (
                        <li>
                            <LoginLink className="bg-blue-300 px-1">Sign in</LoginLink>
                        </li>
                    )
            }
        </ul>
    );
}

