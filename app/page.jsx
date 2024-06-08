import Image from "next/image";
import Nav from "./_components/Nav"
import ClientButton from "./_components/clientButton";
import ClientDisplay from "./_components/clientDisplay";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import clientPromise from "./_lib/mongodb";

const {
  getBooleanFlag,
  getUser,
  isAuthenticated
} = getKindeServerSession();

//placeholder function
async function deleteUser() {
  'use server'
  console.log('On the server');
  // DELETE & Delete Cookie
};

//placeholder function
async function addJobApp() {
  'use server'
  console.log('On the server');
  // POST
};

// Requests all user data upon component mount
async function reqUserData() {

  // Return this if failure
  const yaFailed = {auth: null, db_user: null, db_jobs: null};

  try {
    // Collect user data from authentication service
    const kindeUserData = await getUser();

    // Return nulls if user is not logged in
    if (!kindeUserData) {
         return yaFailed;
    } else {
      // create Mongo client to connect to DB
      const client = await clientPromise;

      // fetch user data based on the authentication kinde id (the k_id)
      const dbUserData = await client.db(process.env.MONGO_DB).collection("users")
       .find({ k_id: kindeUserData.id })
       .toArray();

      // if there is no dbUserData, then user successfully authenticated
      // but has not used our product before and thus is not in database
      // as a first time log-in, add user to db
      if (!dbUserData[0]) {
        await client.db(process.env.MONGO_DB).collection("users")
          .insertOne({     
            username: kindeUserData.given_name,
            email: kindeUserData.email,
            randoPermission: false,
            k_id: kindeUserData.id
          }
        );

        return yaFailed;
      };

      // Find all jobs attached to that database user id
      const dbJobData = await client.db(process.env.MONGO_DB).collection("jobapps")
        .find({ uid: dbUserData[0]._id})
        .toArray();

      // Return all the requested data as a central object
      return {auth: kindeUserData, db_user: dbUserData[0], db_jobs: dbJobData};
    };

  } catch (e) {
    console.error(e);
    return yaFailed;
  };
}


export default async function Home() {

  try {

    const allUserData = await reqUserData();

    return (
      <main className="flex flex-col items-center justify-between space-y-6 h-screen">
        <div className="flex flex-row w-full justify-around items-center p-2">
  
          {/* SETTINGS || some client components */}
          <div className="bg-slate-300 flex flex-col w-1/3 space-y-2">
            <span>Settings:</span>
            <ClientButton title="Dark Mode" message="This changes the client"/>
            <button className="bg-blue-300" onClick={deleteUser}>Delete User</button>
            <ClientButton title="Etc etc" message="Client Stuff"/>
          </div>
  
          {/* NAV || pure server component */}
          <div className="bg-slate-300 flex flex-col w-1/3 space-y-2">
            <Nav user={allUserData.auth}/>
          </div>

          {/* ADD JOBS FORM || not sure whats going on here, guess its a placeholder */}
          <form className="flex flex-col w-1/3" action={addJobApp}> 
            <input className="border-4" placeholder="Job Title" type="text" name="job_title"/>
            <input className="border-4" placeholder="Company" type="text" name="company"/>
            <input className="border-4" placeholder="Date" type="text" name="date"/>
            <button className="bg-blue-200" type="submit">Submit JobApp</button>
          </form>
        </div>
        
        <hr className="w-full min-h-[3px] bg-gray-700"/>
  
        {/* DISPLAY || requests all data server side, renders entirely server side */}
        <div className="flex flex-row justify-around space-x-12 w-full h-3/4">

              {/* Kinde Auth Info Display */}
              <div className="bg-slate-300 w-1/2 h-full">
                  <span>Kinde Serverside Info:</span>
                  <pre className="p-4 rounded bg-slate-950 text-green-300">
                      {JSON.stringify(allUserData.auth, null, 2)}
                  </pre>
              </div>
  
              {/* DB Info Display */}
              <div className="bg-slate-300 w-1/2 h-full">
                  <span>DB User Info:</span>
                  <pre className="p-4 rounded bg-slate-950 text-green-300">
                      User Collection:
                      {JSON.stringify(allUserData.db_user, null, 2)}
                  </pre>
                  <pre className="p-4 rounded bg-slate-950 text-green-300">   
                      Jobapps:
                      {JSON.stringify(allUserData.db_jobs, null, 2)}
                  </pre>
              </div>
          </div>
      </main>
    );
  } catch(e) {
    console.error(e);
    return(
      <main className="flex flex-col items-center justify-between space-y-6 h-screen">
        <p>Something Went Wrong</p>
      </main>
    );
  }

  
}
