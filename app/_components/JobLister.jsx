'use client'
export default function JobLister({jobData}) {

    return (
        <div className="bg-blue-600 mt-3 w-full flex flex-col justify-center items-center gap-y-2">
            <p className="text-center bg-slate-200">number of applications: {jobData.length}</p>   
            {console.log(jobData)}
            {jobData.map((job) => (
                <div key={job.creation} className="bg-blue-50 flex flex-col w-1/2">
                    <div className="flex flex-row gap-x-2">
                        <h1 className="font-bold">Company:  </h1>
                        <p>{job.company}</p>
                    </div>
                
                    <div className="flex flex-row gap-x-2">
                        <h1 className="font-bold">Job Title:  </h1>
                        <p>{job.title}</p>
                    </div>
                
                    <div className="flex flex-row gap-x-2">
                        <h1 className="font-bold">Status:  </h1>
                        <p>{job.status}</p>
                    </div>
                
                    <div className="flex flex-row gap-x-2">
                        <h1 className="font-bold">Date Applied:  </h1>
                        <p>{job.creation}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};