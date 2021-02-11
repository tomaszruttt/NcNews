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
      <p className="ArticleCard-topic">Nc/Topic/{topic}</p>
      <Link className="ArticleCard-title" to={`/articles/${article_id}`}>
        <h2>{title}</h2>
      </Link>
      <VoteUpdater votes={votes} id={article_id} identifier={identifier} />

      {/* <p>Posted by {author}</p> */}
      <Link className="ArticleCard-Link" to={`/articles/${article_id}`}>
        <p>{comment_count} Comments</p>
      </Link>
    </section>
  );
};

export default ArticleCard;
