import { Link } from "@reach/router";
import React from "react";
import "./ArticleCard.css";

const ArticleCard = ({ title, topic, author, comment_count, article_id }) => {
  return (
    <section className="ArticleCard">
      <Link to={`/articles/${article_id}`}>
        <h2>{title}</h2>
      </Link>

      <p>Topic: {topic}</p>
      <p>Posted by {author}</p>
      <Link to={`/articles/${article_id}`}>
        <p>{comment_count} Comments</p>
      </Link>
    </section>
  );
};

export default ArticleCard;
