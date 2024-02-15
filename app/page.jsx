import Image from "next/image";
import ClientButton from "../components/clientButton";

export default function Home() {

  async function logIn() {
    'use server'
    console.log('On the server');
    // POST
  };
  async function logOut() {
    'use server'
    console.log('On the server');
    // POST & Delete Cookie
  };
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

  return (
    <main className="flex flex-col items-center justify-between p-4 space-y-6 h-screen">
      <div className="flex flex-row w-full justify-around items-center h-1/4">

        <div className="bg-slate-300 flex flex-col w-1/3 space-y-2">
          <span>Settings:</span>
          <ClientButton title="Dark Mode" message="This changes the client"/>
          <button className="bg-blue-300" onClick={deleteUser}>Delete User</button>
          <ClientButton title="Etc etc" message="Client Stuff"/>
        </div>

        <div className="flex flex-col items-center justify-around space-y-4">
          <button className="bg-blue-300 p-2" onClick={logIn}>Log In</button>
          <button className="bg-blue-300 p-2" onClick={logOut}>Log Out</button>
        </div>

        <div className="bg-slate-300 w-1/3 h-full">
            <span>User Info Dumped Here:</span>
            <textarea
              className="w-full h-5/6"
              readOnly
              id="user_info"
              placeholder="<User>"
            ></textarea>
        </div>
      </div>
      
      <hr className="w-full h-[3px] bg-gray-700"/>
      
      <div className="flex flex-row justify-around space-x-12 w-full h-3/4">
        
        <form className="flex flex-col w-1/2" action={addJobApp}> 
          <input className="border-4" placeholder="Job Title" type="text" name="job_title"/>
          <input className="border-4" placeholder="Company" type="text" name="company"/>
          <input className="border-4" placeholder="Date" type="text" name="date"/>
          <button className="bg-blue-200" type="submit">Submit JobApp</button>
        </form>
        
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
    </main>
  );
}
