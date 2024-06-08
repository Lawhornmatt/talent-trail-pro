import React from "react";
import Link from "next/link";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";


export default function FootNav() {
    return (
        <div className="bg-blue-600 w-full h-1/6 justify-around flex">
            <div className="h-3 w-3 bg-green-500">
                <span>A</span>
            </div>
            <div className="h-3 w-3 bg-green-500">
                <span>B</span>
            </div>
            <div className="h-3 w-3 bg-green-500">
                <span>C</span>
            </div>
        </div>
    );
}

