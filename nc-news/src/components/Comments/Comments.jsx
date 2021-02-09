import React from "react";
import "./Comments.css";

const Comments = ({ votes, created_at, author, body }) => {
  return (
    <section className="Comments">
      <p>{author}</p>
      <p>{created_at}</p>
      <p>{body}</p>
    </section>
  );
};

export default Comments;
