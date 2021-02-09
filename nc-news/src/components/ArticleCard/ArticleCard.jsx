import React from "react";
import "./ArticleCard.css";

const ArticleCard = ({ title, topic, author, comment_count }) => {
  return (
    <section className="ArticleCard">
      <h2>{title}</h2>
      <p>Topic: {topic}</p>
      <p>Author: {author}</p>
      <p>Comments: {comment_count}</p>
    </section>
  );
};

export default ArticleCard;
