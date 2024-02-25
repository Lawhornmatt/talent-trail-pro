import React from "react";
import Link from "next/link";


export default function Nav() {
   return (
    <div>
        <ul>
            <li>
                <Link href="/"> Login </Link>
            </li>
            <li>
                <Link href="/home"> Home </Link>
            </li>
            <li>
                <Link href="/add">Add</Link> 
            </li>
            <li>
                <Link href="/settings">Settings</Link> 
            </li>
        </ul>
    </div>
   );
}

