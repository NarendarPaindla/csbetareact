import React, { useContext } from "react";
import MyContext from "./MyContext";

const Child = () => {
  const contextValue = useContext(MyContext);

  return <p><h1>{contextValue}</h1></p>;
};

export default Child;