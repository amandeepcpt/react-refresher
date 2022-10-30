import React, { useState, Fragment } from "react";
import Todo from "./components/Todo";

const getMyName = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject("Something went wrong!!");
      resolve("Hello aman");
    }, 5000);
  });
};

function App() {
  // let count = 1;
  // hook
  const [count, setCount] = useState(1);
  const [myName, setMyName] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(count, "count");
  console.log(setCount, "setCount");

  const onClick = async () => {
    // setCount(count + 1);
    setLoading(true);
    // const name = await getMyName();
    // console.log(name, "name");
    // setMyName(name);
    // setLoading(false);

    getMyName().then((name) => {
      console.log(name, "name");
      setMyName(name);
      setLoading(false);
    });
  };

  const renderMyName = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else {
      return <p>{myName}</p>;
    }
  };

  return (
    // <Fragment>
    //   <div>Amandeep</div>
    //   <div>28</div>
    //   <div>Web Developer</div>
    // </Fragment>
    <Fragment>
      {/* <Todo name="Walk the dog" completed={true} textColor="red" />
      <Todo name="Prepare the breakfast" textColor="green" completed={false} />
      <Todo name="Meeting with team" completed={true} textColor="yellow" /> */}

      <div>asdasdasd</div>

      <Todo completed={true} backgroundColor="red">
        <p
          style={{
            color: "white",
          }}
        >
          Walk the dog
        </p>
        <p
          style={{
            color: "white",
          }}
        >
          is completed: false
        </p>
      </Todo>
      <Todo backgroundColor="green" completed={false}>
        Prepare the breakfast
      </Todo>
      <Todo completed={true} backgroundColor="yellow" color="white">
        Meeting with team
      </Todo>
    </Fragment>
  );

  // return (
  //   <div className="App">
  //     <h1>Hello CodeSandbox</h1>
  //     <h2>Start editing to see some magic happen!</h2>
  //     {/* <button onClick={onClick}>{count}</button> */}

  //     <button onClick={onClick}>Get My Name</button>
  //     {/* Conditional Rendering */}
  //     {loading ? <p>Loading....</p> : <p>{myName}</p>}
  //     <div style={{ backgroundColor: "red", fontWeight: "bold" }}>
  //       {loading && <p>Loading....</p>}
  //       {!loading && <p>{myName}</p>}
  //     </div>
  //     {renderMyName()}
  //   </div>
  // );
}

export default App;
