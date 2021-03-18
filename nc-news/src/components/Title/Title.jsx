import React from "react";
import { Link } from "@reach/router";
import "./Title.css";
import { SquirrelIcon, PersonIcon } from "@primer/octicons-react";

const Title = ({ username, logout, login }) => {
  return (
    <header className="Title">
      <SquirrelIcon size={40} className="Icon" />
      <Link className="Title-link" to={"/articles"}>
        <h1 className="Title-h1">NC News</h1>
      </Link>
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
      {!username && (
        <>
          <h4 className="Title-username">
            <PersonIcon className="Title-user-icon" size={24} /> {username}
          </h4>
          <button className="Title-button" onClick={login}>
            Login
          </button>
        </>
      )}
    </header>
  );
};

export default Title;
