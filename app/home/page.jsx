import Nav from "../_components/Nav";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import clientPromise from "../_lib/mongodb";
import Title from "../_components/Title";
import FootNav from "../_components/FootNav";
import JobLister from "../_components/JobLister";
import ClientShenanigans from "../_components/BigClientContext";

const {
  getBooleanFlag,
  getUser,
  isAuthenticated
} = getKindeServerSession();

const SampleJob = {
  company:"LETS GOOOOoooo",
  job_title:"TESTING",
  status:"DELETE ME",
  creation: Date.now(),
  from: "Matty"
};

// Requests all user data upon component mount
// Done thru server
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
      const dbUserData = await client
        .db(process.env.MONGO_DB)
        .collection("users")
        // ATTENTION: I suspect this spot also needs to be serialized with JSON.stringify()
        // Do later tho cuz I suspect it'll require us clearing all user data and repopulating
        .find({ k_id: kindeUserData.id })
        .toArray();

      // if there is no dbUserData, then user successfully authenticated
      // but has not used our product before and thus is not in database
      // as a first time log-in, add user to db
      if (!dbUserData[0]) {
        await client
          .db(process.env.MONGO_DB)
          .collection("users")
          .insertOne({
            username: kindeUserData.given_name,
            email: kindeUserData.email,
            randoPermission: false,
            k_id: kindeUserData.id
          }
        );

        // This 'yaFailed' should be changed later
        // For a better 1st user experience
        return yaFailed;
      };

      // Find all jobs attached to that database user id
      const dbJobData = await client
        .db(process.env.MONGO_DB)
        .collection("jobapps")
        .find({ uid: JSON.stringify(dbUserData[0]._id)})
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
  const justJobs = [];
  const allUserData = await reqUserData();
  const dostuff = allUserData.db_jobs.map(
    job => (
      justJobs.push({
        company: job.company,
        title: job.job_title, 
        status: job.status, 
        creation: JSON.stringify(new Date(job.creation)),
        uid: job.uid,
        id: JSON.stringify(job._id),
      })
    ));
  // console.log(justJobs);
   
  // const jobData = allUserData.db_jobs;
  // const mongoUID = JSON.stringify(allUserData.db_user._id)

  // const jobArray = [];
  
  // jobData.map((job) => {
  //    let cleanJob = { 
  //      company: job.company, 
  //      title: job.job_title, 
  //      status: job.status, 
  //      creation: JSON.stringify(new Date(job.creation)) }
  //    jobArray.push(cleanJob);
  // })

  //Adds a hard baked sample job to the online database
  /*async function addJobToMongo() {
    await client.db(process.env.MONGO_DB)
        .collection("jobapps")
        .insertOne(SampleJob);
  }*/

  // Server Action -- a function we can use by the user
  // const handleAddJob = async () => {
  //   "use server";
  //   const client = await clientPromise;
  //   try {
  //     await client
  //     .db(process.env.MONGO_DB)
  //     .collection("jobapps")
  //     .insertOne({
  //       company:"This owrk?",
  //       job_title:"TESTING",
  //       status:"WhAts Up",
  //       creation: Date.now(),
  //       uid: mongoUID
  //     });
  //     console.log('Job Added');
  //   } catch (e) {
  //     console.error(e);
  //   };
  // };

  return (
      <main className="flex flex-col items-center justify-start h-screen">
          <Title/>
          
          {/* <button className="bg-red-500" onClick={() => addJobToMongo}>ADD A JOB</button> */}
{/* 
          <form action={handleAddJob}>
            <button type="submit" className="bg-red-500">ADD A JOB</button>
          </form> */}

          <ClientShenanigans allUserData={justJobs}/>
      </main>
    );
  }
  