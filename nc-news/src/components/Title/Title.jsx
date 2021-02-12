import React from "react";
import { Link } from "@reach/router";
import "./Title.css";
import { SquirrelIcon, PersonIcon } from "@primer/octicons-react";

const Title = ({ username, logout }) => {
  return (
    <header className="Title">
      {/* <Link></Link> */}
      <SquirrelIcon size={40} className="Icon" />
      <h1 className="Title-h1">NC News</h1>
      {username && (
        <>
          <h4 className="Title-username">
            <PersonIcon className="Title-user-icon" size={24} /> {username}
          </h4>
          <button className="Title-button" onClick={logout}>
            Logout
          </button>
        </>
      )}
    </header>
  );
};

export default Title;
