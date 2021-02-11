import React from "react";
import VoteUpdater from "../VoteUpdater/VoteUpdater";
import "./Comments.css";

const Comments = ({ votes, created_at, author, body, comment_id }) => {
  return (
    <section className="Comments">
      {/* <p className="Comments-author">Commented by: {author}</p> */}
      <p className="Comments-date-author">
        Commented by: {author} on {created_at.slice(0, 10)} at{" "}
        {created_at.slice(11, 16)}{" "}
      </p>
      <p className="Comments-body">{body}</p>
      <VoteUpdater votes={votes} id={comment_id} identifier="comments" />
    </section>
  );
};

export default Comments;
