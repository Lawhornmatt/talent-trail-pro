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

  }

  const objSample = Object.keys(sampleobj).length;

    return (
      <div>
         <Nav/>
      <h1> Hello Home </h1>
      number of applications {objSample}
      </div>
    );
  }
  