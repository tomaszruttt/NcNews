import { Link } from "@reach/router";
import React from "react";
import VoteUpdater from "../VoteUpdater/VoteUpdater";
import "./ArticleCard.css";

const ArticleCard = ({
  title,
  topic,
  author,
  comment_count,
  article_id,
  votes,
  identifier,
}) => {
  return (
    <section className="ArticleCard">
      <Link to={`/articles/${article_id}`}>
        <h2>{title}</h2>
      </Link>
      <VoteUpdater votes={votes} id={article_id} identifier={identifier} />
      <p>Topic: {topic}</p>
      <p>Posted by {author}</p>
      <Link to={`/articles/${article_id}`}>
        <p>{comment_count} Comments</p>
      </Link>
    </section>
  );
};

export default ArticleCard;
