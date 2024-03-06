import React from "react";

const Home = (props) => {
  let name2 = "samad ahmed";
  return (
    <>
      <div>Hello {props.hello}</div>
      <div>Hello {props.name}</div>
      <div>{name2}</div>
    </>
  );
};

export default Home;
