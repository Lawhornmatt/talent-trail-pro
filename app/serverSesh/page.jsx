import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function serverSesh() {
    const {
        getAccessToken,
        getBooleanFlag,
        getFlag,
        getIdToken,
        getIntegerFlag,
        getOrganization,
        getPermission,
        getPermissions,
        getStringFlag,
        getUser,
        getUserOrganizations,
        isAuthenticated
    } = getKindeServerSession();

    console.log('getAccessToken: ',await getAccessToken());
    console.log('getBooleanFlag: ',await getBooleanFlag("bflag", false));
    console.log('getFlag: ',await getFlag("flag", "x", "s"));
    console.log('getIntegerFlag: ',await getIntegerFlag("iflag", 99));
    console.log('getOrganization: ',await getOrganization());
    console.log('getPermission: ',await getPermission("eat:chips"));
    console.log('getPermissions: ',await getPermissions());
    console.log('getStringFlag: ',await getStringFlag("sflag", "test"));
    console.log('getUser: ',await getUser());
    console.log('getUserOrganizations: ',await getUserOrganizations());
    console.log('isAuthenticated: ',await isAuthenticated());
    return (
        <div className="container">
            <div className="card hero">
                <p className="text-display-1 hero-title">
                    Let’s start authenticating <br /> with KindeAuth
                </p>
                <p className="text-body-1 hero-tagline">Configure your app</p>

                <Link
                    href="https://kinde.com/docs/sdks/nextjs-sdk"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-light btn-big"
                >
                    Go to docs
                </Link>
                <br />
                <Link
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-light btn-big"
                >
                    Return to app
                </Link>
            </div>
        </div>
    );
}