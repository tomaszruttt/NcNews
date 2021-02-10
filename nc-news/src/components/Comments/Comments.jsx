import React from "react";
import VoteUpdater from "../VoteUpdater/VoteUpdater";
import "./Comments.css";

const Comments = ({ votes, created_at, author, body, comment_id }) => {
  return (
    <section className="Comments">
      <p>{author}</p>
      <p>{created_at}</p>
      <p>{body}</p>
      <VoteUpdater votes={votes} id={comment_id} identifier="comments" />
    </section>
  );
};

export default Comments;
