import React from "react";
import Link from "next/link";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";


export default function Nav({ user }) {
    return (
        <ul className="flex flex-col items-center justify-around space-y-2">
            <li>
                <Link href="/add" className="bg-blue-300 px-1">Add</Link> 
            </li>
            <li>
                <Link href="/settings" className="bg-blue-300 px-1">Settings</Link> 
            </li>
            <li>
                <LogoutLink className="bg-blue-300 px-1">Log Out</LogoutLink>
            </li>
        </ul>
    );
}

