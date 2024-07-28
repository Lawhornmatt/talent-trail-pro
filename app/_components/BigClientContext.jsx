'use client'
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import JobLister from "./JobLister";

export default function ClientShenanigans(AllDatData) {

    return (
        <div className="w-full h-full flex flex-col">

                  {/* THE CLIENT JOB LISTER */}
                  <JobLister jobData={AllDatData.allUserData}/>
                  
                  {/* Empty div simple to keep footer at bottom of page */}
                  <div className="m-auto"></div>
                  
                  {/* FootNav */}
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
        </div>
    )
};