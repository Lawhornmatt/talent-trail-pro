import Nav from "../_components/Nav";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import clientPromise from "../_lib/mongodb";

// async function applicationsShow() {
//   const res = await fetch ('API Here')
//   return res.json;
// }

const {
  getBooleanFlag,
  getUser,
  isAuthenticated
} = getKindeServerSession();

// Requests all user data upon component mount
async function reqUserData() {

  // Return this if failure
  const yaFailed = { auth: null, db_user: null, db_jobs: null };

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
      return { auth: kindeUserData, db_user: dbUserData[0], db_jobs: dbJobData };
    };

  } catch (e) {
    console.error(e);
    return yaFailed;
  };
}

export default async function Home() {
 
//  const application = await applicationsShow();
 const allUserData = await reqUserData();
  
 const jobData = allUserData.db_jobs;

//  jobData.push({
//   "company": "amazon",
//   "job_title": "web developer",
//   "status": "going",
//   "creation": "2024-02-21T17:11:58.044+00:00"});

//  console.log(jobData);
 
  
 return (
      <main className="flex flex-col items-center justify-start p-4 space-y-6 h-screen">
        <Nav/>
        <h1> Hello Home </h1>
        <p>number of applications: {jobData.length}</p>
        <h1>Hardcode test</h1>
        {/* {[{
          "company": "amazon",
          "job_title": "web developer",
          "status": "going",
          "creation": "2024-02-21T17:11:58.044+00:00"},
          {
            "company": "amazon",
            "job_title": "web developer",
            "status": "going",
            "creation": "2024-02-21T17:11:58.044+00:00"},
            {
              "company": "amazon",
              "job_title": "web developer",
              "status": "going",
              "creation": "2024-02-21T17:11:58.044+00:00"}]
              .map((jobs) => (
                <div key={jobs.creation}>
            <h1>Company</h1>
              <p>{jobs.company}</p>

            <h1>Job Title</h1>
              <p>{jobs.job_title}</p>
            
            <h1>Status</h1>
              <p>{jobs.status}</p>

            <h1>Date Applied</h1>
              <p>{jobs.creation}</p>
          </div>
              ))} */}
        {/* {jobData.map((stuff) => (
          <div key={stuff.creation}>
            <h1>Company</h1>
              <p>{stuff.company}</p>

            <h1>Job Title</h1>
              <p>{stuff.job_title}</p>
            
            <h1>Status</h1>
              <p>{stuff.status}</p>

            <h1>Date Applied</h1>
              <p>{stuff.creation}</p>
          </div>
        {allUserData > 0 && <p className="noApps">No Applications? Time to start the trail!</p>}
        ))} */}

        {jobData.map((job) => (
          <div key={job.creation}>
          <h1>Company</h1>
            <span>{job.company}</span>

            <h1>Job Title</h1>
              <p>{job.job_title}</p>
            
            <h1>Status</h1>
              <p>{job.status}</p>

            <h1>Date Applied</h1>
              <p>{JSON.stringify(new Date(job.creation))}</p>
          </div>
        ))}
      </main>
    );
  }
  