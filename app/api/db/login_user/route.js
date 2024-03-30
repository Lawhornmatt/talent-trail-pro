import clientPromise from "../../../_lib/mongodb";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from 'next/navigation'

export async function GET() {

    try {
        const { getUser } = getKindeServerSession();
        const userData = await getUser();

        const client = await clientPromise;

        const data = await client.db(process.env.MONGO_DB).collection("users")
         .find({ k_id: userData.id })
         .toArray();

        if (data._eventsCount === 0) {
             return Response.json("No user found");
        } else {
             return Response.json(data);
        };

    } catch (e) {
        console.error(e);
        return Response.json("Something went wrong");
    };
};