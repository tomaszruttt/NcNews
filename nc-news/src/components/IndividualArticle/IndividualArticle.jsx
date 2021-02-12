import React, { Component } from "react";
import "./IndividualArticle.css";
import * as api from "../../api";
import { Link } from "@reach/router";
import Comments from "../Comments/Comments";
import VoteUpdater from "../VoteUpdater/VoteUpdater";
import SendComment from "../SendComment/SendComment";
import { SpinnerCircular } from "spinners-react";

class IndividualArticle extends Component {
  state = {
    article: {},
    comments: [],
    identifier: "articles",
    isLoading: true,
  };

  componentDidMount(props) {
    const { article_id } = this.props;
    this.fetchIndividualArticle(article_id);
    this.fetchComments(article_id);
  }

  fetchIndividualArticle(article_id) {
    api.getIndividualArticle(article_id).then((article) => {
      this.setState({ article, isLoading: false });
    });
  }

  fetchComments(article_id) {
    api.getComments(article_id).then((comments) => {
      this.setState({ comments });
    });
  }
  addComment = (newComment) => {
    this.setState((currenState) => {
      return { comments: [newComment, ...currenState.comments] };
    });
  };

  render() {
    const { article, comments, identifier, isLoading } = this.state;
    const { votes, article_id, title, author, body } = article;
    const { username } = this.props;
    console.log(username);
    return (
      <>
        {isLoading && <SpinnerCircular />}

        <section className="IndividualArticle">
          <h2>{title}</h2>
          {/* <p>Topic: {article.topic}</p> */}
          <p className="IndArt-author">Posted by: {author}</p>
          <p className="IndArt-body">{body}</p>
          <section className="IndArt-buttons">
            <Link to={`/articles/topics/${article.topic}`}>
              <button className="IndArt-button">back</button>
            </Link>
            <VoteUpdater
              votes={votes}
              id={article_id}
              identifier={identifier}
            />
          </section>
        </section>
        <SendComment
          username={username}
          article_id={article_id}
          addComment={this.addComment}
        />
        <section className="Comments">
          <h2>Comments</h2>

          {comments.map((comment) => {
            return <Comments key={comments.comment_id} {...comment} />;
          })}
        </section>
      </>
    );
  }
}

export default IndividualArticle;
