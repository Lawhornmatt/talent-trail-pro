import clientPromise from "../../../_lib/mongodb";

export async function GET() {
   
   try {
       const client = await clientPromise;

       const users = await client.db(process.env.MONGO_DB).collection("users").find().toArray();
       
    //    console.log(users);
       return Response.json(users)
   } catch (e) {
       console.error(e);
   }
};