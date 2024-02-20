'use client'
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";

export default function ClientDisplay() {

    const {
        permissions,
        isLoading,
        user,
        accessToken,
        organization,
        userOrganizations,
        getPermission,
        getBooleanFlag,
        getIntegerFlag,
        getFlag,
        getStringFlag,
        getClaim,
        getAccessToken,
        getToken,
        getIdToken,
        getOrganization,
        getPermissions,
        getUserOrganizations
    } = useKindeBrowserClient();

    return (
        <div className="flex flex-row justify-around space-x-12 w-full h-3/4">
            <div className="bg-slate-300 w-1/2 h-full">
                <span>Client Side User Info Dumped Here:</span>
                <pre className="p-4 rounded bg-slate-950 text-green-300">
                    User:
                    {JSON.stringify(user, null, 2)}
                </pre>    
                <pre className="p-4 rounded bg-slate-950 text-green-300">
                    permissions:
                    {JSON.stringify(permissions, null, 2)}
                </pre>    
                <pre className="p-4 rounded bg-slate-950 text-green-300">
                    isLoading:
                    {JSON.stringify(isLoading, null, 2)}
                </pre>    
                <pre className="p-4 rounded bg-slate-950 text-green-300">
                    accessToken:
                    {JSON.stringify(accessToken, null, 2)}
                </pre>    
                <pre className="p-4 rounded bg-slate-950 text-green-300">
                    organization:
                    {JSON.stringify(organization, null, 2)}
                </pre>    
                <pre className="p-4 rounded bg-slate-950 text-green-300">
                    userOrganizations:
                    {JSON.stringify(userOrganizations, null, 2)}
                </pre>
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