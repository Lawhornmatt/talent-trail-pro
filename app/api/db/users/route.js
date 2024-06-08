import clientPromise from "../../../_lib/mongodb";

export async function GET() {
   
   try {
       const client = await clientPromise;

       const data = await client.db(process.env.MONGO_DB).collection("users").find().toArray();
       
       return Response.json(data);
   } catch (e) {
       console.error(e);
   };
};