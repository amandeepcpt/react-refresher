import React from "react";

const Greeting = ({ name = "****" }) => {
  return <h1>Hello {name}</h1>;
};

// const Greeting = (props) => {
//   const { name } = props;
//   return <h1>Hello {name}</h1>;
// };

// const Greeting = (props) => {
//   return <h1>Hello {props.name}</h1>;
// };

// Greeting.defaultProps = {
//   name: "****",
// };

export default Greeting;
