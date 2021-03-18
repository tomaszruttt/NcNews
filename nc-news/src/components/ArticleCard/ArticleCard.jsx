import { Link } from "@reach/router";
import React from "react";
import VoteUpdater from "../VoteUpdater/VoteUpdater";
import "./ArticleCard.css";
import cooking from "./cooking.jpg";
import coding from "./coding.jpg";
import football from "./football.jpg";

const ArticleCard = ({
  title,
  topic,
  author,
  comment_count,
  article_id,
  votes,
  identifier,
}) => {
  console.log(topic);
  return (
    <section className="ArticleCard">
      <p className="ArticleCard-topic">Nc/Topic/{topic}</p>
      <section className="ArtCard-Title-Image">
        <Link className="ArticleCard-title" to={`/articles/${article_id}`}>
          <h2>{title}</h2>
        </Link>
        <img className="Image" src={`${cooking}`} alt={topic} />
      </section>
      <VoteUpdater votes={votes} id={article_id} identifier={identifier} />
      <Link className="ArticleCard-Link" to={`/articles/${article_id}`}>
        <p className="ArticleCard-comments">{comment_count} Comments</p>
      </Link>
    </section>
  );
};

export default ArticleCard;
