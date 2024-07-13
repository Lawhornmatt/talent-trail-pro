import React from "react";
import Link from "next/link";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";


export default function FootNav() {
    return (
        <div className="bg-blue-600 w-full h-9 justify-around flex">
            <div className="bg-green-500">
                <LogoutLink>LogOut</LogoutLink>
            </div>
            <div className="bg-green-500">
                <span>Settings</span>
            </div>
            <div className="bg-green-500">
                <span>AddJob</span>
            </div>
        </div>
    );
}

