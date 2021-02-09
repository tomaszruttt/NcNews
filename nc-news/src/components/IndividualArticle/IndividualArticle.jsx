import React, { Component } from "react";
import "./IndividualArticle.css";
import * as api from "../../api";
import { Link } from "@reach/router";

class IndividualArticle extends Component {
  state = {
    article: {},
  };

  componentDidMount(props) {
    const { article_id } = this.props;
    this.fetchIndividualArticle(article_id);
  }

  fetchIndividualArticle(article_id) {
    api.getIndividualArticle(article_id).then((article) => {
      this.setState({ article });
    });
  }

  render() {
    const { article } = this.state;
    console.log(article);
    return (
      <section className="IndividualArticle">
        <h2>{article.title}</h2>
        {/* <p>Topic: {article.topic}</p> */}
        <p>Author: {article.author}</p>
        <p>{article.body}</p>
        <Link to={`/articles/topics/${article.topic}`}>
          <p>Back</p>
        </Link>
      </section>
    );
  }
}

export default IndividualArticle;
