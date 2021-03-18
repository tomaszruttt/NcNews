import React from "react";
import { defaultProps } from "spinners-react/lib/esm/style-inject.es-bc4b7987";
import DeleteComment from "../DeleteComment/DeleteComment";
import VoteUpdater from "../VoteUpdater/VoteUpdater";
import "./Comment.css";

const Comments = ({
  votes,
  created_at,
  author,
  body,
  comment_id,
  deleteComment,
  username,
}) => {
  console.log(username, author);
  return (
    <section className="Comments">
      <p className="Comments-date-author">
        Commented by: {author} on {created_at.slice(0, 10)} at{" "}
        {created_at.slice(11, 16)}{" "}
      </p>
      <p className="Comments-body">{body}</p>
      <div className="Comment-buttons">
        <VoteUpdater votes={votes} id={comment_id} identifier="comments" />
        {author === username ? (
          <DeleteComment
            id={comment_id}
            deleteComment={deleteComment}
            username={username}
          />
        ) : null}
      </div>
    </section>
  );
};

export default Comments;
