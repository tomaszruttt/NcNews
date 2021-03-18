import React from "react";
import * as api from "../../api";
import "./DeleteComment.css";

const DeleteComment = ({ id, deleteComment }) => {
  //   console.log(id);

  const handleButton = (event) => {
    const id = event.target.value;
    console.log(id);
    api.removeComment(id).then((codeStatus) => {
      if (codeStatus === 204) {
        deleteComment(id);
        console.log(codeStatus);
      }
    });
  };

  return (
    <button
      className="Delete-button"
      onClick={handleButton}
      key={id}
      value={id}
    >
      delete
    </button>
  );
};

export default DeleteComment;
