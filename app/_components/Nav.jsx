import React from "react";
import Link from "next/link";


export default function Nav() {
   return (
    <ul className="space-y-2">
        <li>
            <Link href="/" className="bg-blue-300 p-1"> Login </Link>
        </li>
        <li>
            <Link href="/home" className="bg-blue-300 p-1"> Home </Link>
        </li>
        <li>
            <Link href="/add" className="bg-blue-300 p-1">Add</Link> 
        </li>
        <li>
            <Link href="/settings" className="bg-blue-300 p-1">Settings</Link> 
        </li>
    </ul>
   );
}

