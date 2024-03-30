import Image from "next/image";
import Nav from "./_components/Nav"
import ClientButton from "./_components/clientButton";
import ClientDisplay from "./_components/clientDisplay";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

const {
  getBooleanFlag,
  getUser,
  isAuthenticated
} = getKindeServerSession();

async function deleteUser() {
  'use server'
  console.log('On the server');
  // DELETE & Delete Cookie
};

async function addJobApp() {
  'use server'
  console.log('On the server');
  // POST
};

async function getUserData() {
  return await getUser();
};


export default async function Home() {

  try {
    const userData = await getUserData();
    return (
      <main className="flex flex-col items-center justify-between space-y-6 h-screen">
        {/* SERVER RENDERABLE COMPONENTS */}
        <div className="flex flex-row w-full justify-around items-center p-2">
  
          <div className="bg-slate-300 flex flex-col w-1/3 space-y-2">
            <span>Settings:</span>
            <ClientButton title="Dark Mode" message="This changes the client"/>
            <button className="bg-blue-300" onClick={deleteUser}>Delete User</button>
            <ClientButton title="Etc etc" message="Client Stuff"/>
          </div>
  
          <div className="bg-slate-300 flex flex-col w-1/3 space-y-2">
            <Nav user={userData}/>
          </div>
  
          <form className="flex flex-col w-1/3" action={addJobApp}> 
            <input className="border-4" placeholder="Job Title" type="text" name="job_title"/>
            <input className="border-4" placeholder="Company" type="text" name="company"/>
            <input className="border-4" placeholder="Date" type="text" name="date"/>
            <button className="bg-blue-200" type="submit">Submit JobApp</button>
          </form>
        </div>
        
        <hr className="w-full min-h-[3px] bg-gray-700"/>
  
        <div className="flex flex-row justify-around space-x-12 w-full h-3/4">
              <div className="bg-slate-300 w-1/2 h-full">
                  <span>Server Side User Info Dumped Here:</span>
                  <pre className="p-4 rounded bg-slate-950 text-green-300">
                      User:
                      {JSON.stringify(userData, null, 2)}
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
        
        {/* CLIENT DISPLAY COMPONENTS */}
        {/* <ClientDisplay/> */}
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
