import React, { Component } from "react";
import "./IndividualArticle.css";
import * as api from "../../api";
import { Link } from "@reach/router";
import Comments from "../Comments/Comments";

class IndividualArticle extends Component {
  state = {
    article: {},
    comments: [],
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
    const { article, comments } = this.state;
    console.log(comments);
    return (
      <>
        <section className="IndividualArticle">
          <h2>{article.title}</h2>
          {/* <p>Topic: {article.topic}</p> */}
          <p>Author: {article.author}</p>
          <p>{article.body}</p>
          <Link to={`/articles/topics/${article.topic}`}>
            <p>Back</p>
          </Link>
        </section>
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
