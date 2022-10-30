import React from "react";

// named props
// children props

const Todo = ({ backgroundColor, completed, color, children, name }) => {
  return (
    <>
      <h1
        style={{
          background: backgroundColor,
          color,
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {children}
        {/* {name} */}
      </h1>
    </>
  );
  // return (
  //   <>
  //     <h1
  //       style={{
  //         background: textColor,
  //         textDecoration: completed ? "line-through" : "none",
  //       }}
  //     >
  //       {name}
  //     </h1>
  //   </>
  // );
};

export default Todo;
