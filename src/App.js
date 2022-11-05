import React, { useState, Fragment } from "react";
import { Activity } from "react-bootstrap-icons";
import Todo from "./components/Todo";
import Greeting from "./components/Greeting";
import { ReactComponent } from "./icons/circle.svg";
import { BootStrapIcon, DownloadIcon } from "./AppIcons";

// const getMyName = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // reject("Something went wrong!!");
//       resolve("Hello aman");
//     }, 5000);
//   });
// };

// function App() {
//   // let count = 1;
//   // hook
//   const [count, setCount] = useState(1);
//   const [myName, setMyName] = useState("");
//   const [loading, setLoading] = useState(false);

//   console.log(count, "count");
//   console.log(setCount, "setCount");

//   const onClick = async () => {
//     // setCount(count + 1);
//     setLoading(true);
//     // const name = await getMyName();
//     // console.log(name, "name");
//     // setMyName(name);
//     // setLoading(false);

//     getMyName().then((name) => {
//       console.log(name, "name");
//       setMyName(name);
//       setLoading(false);
//     });
//   };

//   const renderMyName = () => {
//     if (loading) {
//       return <p>Loading...</p>;
//     } else {
//       return <p>{myName}</p>;
//     }
//   };

//   return (
//     // <Fragment>
//     //   <div>Amandeep</div>
//     //   <div>28</div>
//     //   <div>Web Developer</div>
//     // </Fragment>
//     <Fragment>
//       {/* <Todo name="Walk the dog" completed={true} textColor="red" />
//       <Todo name="Prepare the breakfast" textColor="green" completed={false} />
//       <Todo name="Meeting with team" completed={true} textColor="yellow" /> */}
//       {[].map((element) => {
//         return (
//           <>
//             <div>{count}</div>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//           </>
//         );
//       })}

//       {/* <Todo completed={true} backgroundColor="red">
//         <p
//           style={{
//             color: "white",
//           }}
//         >
//           Walk the dog
//         </p>
//         <p
//           style={{
//             color: "white",
//           }}
//         >
//           is completed: false
//         </p>
//       </Todo>
//       <Todo backgroundColor="green" completed={false}>
//         Prepare the breakfast
//       </Todo>
//       <Todo completed={true} backgroundColor="yellow" color="white">
//         Meeting with team
//       </Todo> */}
//     </Fragment>
//   );

//   // return (
//   //   <div className="App">
//   //     <h1>Hello CodeSandbox</h1>
//   //     <h2>Start editing to see some magic happen!</h2>
//   //     {/* <button onClick={onClick}>{count}</button> */}

//   //     <button onClick={onClick}>Get My Name</button>
//   //     {/* Conditional Rendering */}
//   //     {loading ? <p>Loading....</p> : <p>{myName}</p>}
//   //     <div style={{ backgroundColor: "red", fontWeight: "bold" }}>
//   //       {loading && <p>Loading....</p>}
//   //       {!loading && <p>{myName}</p>}
//   //     </div>
//   //     {renderMyName()}
//   //   </div>
//   // );
// }

// array with strings
// const members = ["Aman", "Sayed", "Jyoti", "Shivani", "Shubham", "Aman"];

// array with objects
const members = [
  {
    id: Math.random(),
    name: "Aman",
  },
  {
    id: Math.random(),
    name: "Sayed",
  },
  {
    id: Math.random(),
    name: "Jyoti",
  },
  {
    id: Math.random(),
    name: "Shivani",
  },
];

// rendering list using data

const App = () => {
  // property ie props
  // Key prop in array list - react
  // Dynamic list rendering - react
  return (
    <>
      <DownloadIcon />
      <BootStrapIcon />
      <ReactComponent />
      <Activity size={48} color="blue" onClick={() => alert("hello")} />
      {members.map((member) => {
        return <Greeting key={member.id} name={member.name} />;
      })}
      {/* <Greeting name="Aman" />
      <Greeting name="Sayed" />
      <Greeting name="Jyoti" />
      <Greeting name="Shivani" /> */}
    </>
  );
};

export default App;
