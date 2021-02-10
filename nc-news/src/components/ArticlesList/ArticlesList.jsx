import React, { Component } from "react";
import "./ArticlesList.css";
import ArticleCard from "../ArticleCard/ArticleCard";
import * as api from "../../api";

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps) {
    const { topic } = this.props;
    console.log(topic, prevProps.topic);
    if (topic !== prevProps.topic) {
      console.log("different topic found");
      this.fetchArticles(topic);
    }
  }

  fetchArticles(topic) {
    api.getArticles(topic).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  }

  render() {
    const { articles } = this.state;
    return (
      <div className="ArticlesList">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </div>
    );
  }
}

export default ArticlesList;
