'use client'
import { AuthContextProvider } from "../context/AuthContext";

export default function ClientDisplay() {
    return (
        <div className="flex flex-row justify-around space-x-12 w-full h-3/4">
            <div className="bg-slate-300 w-1/2 h-full">
                <span>User Info Dumped Here:</span>
                <textarea
                  className="w-full h-5/6"
                  readOnly
                  id="user_info"
                  placeholder="<User>"
                ></textarea>
            </div>

            <div className="bg-slate-300 w-1/2 h-full">
                <span>DB Info Dumped Here:</span>
                <textarea
                  className="w-full h-5/6"
                  readOnly
                  id="db_info"
                  placeholder="<JobApps>"
                ></textarea>
            </div>
        </div>
    )
};