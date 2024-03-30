import clientPromise from "../../../_lib/mongodb";

export async function GET() {
   
   try {
       const client = await clientPromise;

       const data = await client.db(process.env.MONGO_DB).collection("jobapps").find().toArray();
       
       return Response.json(data);
   } catch (e) {
       console.error(e);
       return Response.json("Something went wrong");
   };
};