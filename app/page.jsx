import Image from "next/image";
import Nav from "./_components/Nav"
import ClientButton from "./_components/clientButton";
import LogInOut from "./_components/logInOut";
import ClientDisplay from "./_components/clientDisplay";

export default function Home() {

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
      {/* SERVER RENDERABLE COMPONENTS */}
      <Nav/>
      <div className="flex flex-row w-full justify-around items-center h-1/4">

        <div className="bg-slate-300 flex flex-col w-1/3 space-y-2">
          <span>Settings:</span>
          <ClientButton title="Dark Mode" message="This changes the client"/>
          <button className="bg-blue-300" onClick={deleteUser}>Delete User</button>
          <ClientButton title="Etc etc" message="Client Stuff"/>
        </div>

        <LogInOut />

        <form className="flex flex-col w-1/3" action={addJobApp}> 
          <input className="border-4" placeholder="Job Title" type="text" name="job_title"/>
          <input className="border-4" placeholder="Company" type="text" name="company"/>
          <input className="border-4" placeholder="Date" type="text" name="date"/>
          <button className="bg-blue-200" type="submit">Submit JobApp</button>
        </form>

        

      </div>
      
      <hr className="w-full h-[3px] bg-gray-700"/>
      
      {/* CLIENT DISPLAY COMPONENTS */}
      <ClientDisplay/>
    </main>
  );
}
