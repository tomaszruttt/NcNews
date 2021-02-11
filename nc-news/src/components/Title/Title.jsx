import React from "react";
import "./Title.css";
import { SquirrelIcon, OctofaceIcon } from "@primer/octicons-react";

const Title = () => {
  return (
    <header className="Title">
      <SquirrelIcon size={40} className="Icon" />
      <h1 className="Title-h1">NC News</h1>
    </header>
  );
};

export default Title;
