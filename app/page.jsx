import Image from "next/image";
import Nav from "./_components/Nav"
import ClientButton from "./_components/clientButton";
import ClientDisplay from "./_components/clientDisplay";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import clientPromise from "./_lib/mongodb";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";

export default async function Home() {

  try {

    return (
      <main className="flex flex-col items-center justify-center space-y-6 h-screen w-full">

          <LoginLink className="bg-blue-300 px-1">Log In Via Google</LoginLink>

          <RegisterLink className="bg-blue-300 px-1">Sign Up via Google</RegisterLink>

          <p className="w-1/2">What is TalentTrail? Are you applying to fiftybajillion jobs every day and cant keep 
            track with who you’ve applied to and when? TalentTrail makes it easy to see exactly this information. 
            Just add a card with your job app info: Now you can see what position and when you applied to the company 
            Did you hear back? Turn that oppurtunity gold to show its new status: Or archive it for when they get back 
            to you later: Sort by date, status, etc to see how you fair on the job hunt trail and plan accordingly.
          </p>

          <p className="w-1/2">Blah blha blah blah tutorial what is this app explanation yada yada see the figma
          mock-up to see what this ought to look like
          </p>

          <LoginLink className="bg-blue-300 px-1">Log In Via Google</LoginLink>

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
