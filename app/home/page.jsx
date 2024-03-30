import Nav from "../_components/Nav";

export default function Home() {
 
  const sampleobj = {

    'obj1' : {
      place: "Meta",
      location: "Remote",
    },

    "obj2": {
      place: "Meta",
      location: "Remote",
    },

    "obj3": {
      place: "Meta",
      location: "Remote",
    }
  };

  const objSample = Object.keys(sampleobj).length;

  return (
      <main className="flex flex-col items-center justify-start p-4 space-y-6 h-screen">
        <Nav/>
        <h1> Hello Home </h1>
        <p>number of applications: {objSample}</p>
      </main>
    );
  }
  