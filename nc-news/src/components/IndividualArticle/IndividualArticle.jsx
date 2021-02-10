import React, { Component } from "react";
import "./IndividualArticle.css";
import * as api from "../../api";
import { Link } from "@reach/router";
import Comments from "../Comments/Comments";
import VoteUpdater from "../VoteUpdater/VoteUpdater";

class IndividualArticle extends Component {
  state = {
    article: {},
    comments: [],
    identifier: "articles",
  };

  componentDidMount(props) {
    const { article_id } = this.props;
    this.fetchIndividualArticle(article_id);
    this.fetchComments(article_id);
  }

  fetchIndividualArticle(article_id) {
    api.getIndividualArticle(article_id).then((article) => {
      this.setState({ article });
    });
  }

  fetchComments(article_id) {
    api.getComments(article_id).then((comments) => {
      this.setState({ comments });
    });
  }

  render() {
    const { article, comments, identifier } = this.state;
    const { votes, article_id, title, author, body } = article;
    console.log(identifier);
    return (
      <>
        <section className="IndividualArticle">
          <h2>{title}</h2>
          {/* <p>Topic: {article.topic}</p> */}
          <p>Author: {author}</p>
          <p>{body}</p>
          <Link to={`/articles/topics/${article.topic}`}>
            <p>Back</p>
          </Link>
        </section>
        <VoteUpdater votes={votes} id={article_id} identifier={identifier} />
        <section className="Comments">
          <h3>Comments</h3>

          {comments.map((comment) => {
            return <Comments key={comments.comment_id} {...comment} />;
          })}
        </section>
      </>
    );
  }
}

export default IndividualArticle;
