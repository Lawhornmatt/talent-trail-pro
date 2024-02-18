import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function Dashboard() {
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

    console.log(await getAccessToken());
    console.log(await getBooleanFlag("bflag", false));
    console.log(await getFlag("flag", "x", "s"));
    console.log(await getIntegerFlag("iflag", 99));
    console.log(await getOrganization());
    console.log(await getPermission("eat:chips"));
    console.log(await getPermissions());
    console.log(await getStringFlag("sflag", "test"));
    console.log(await getUser());
    console.log(await getUserOrganizations());
    console.log(await isAuthenticated());
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
            </div>
        </div>
    );
}