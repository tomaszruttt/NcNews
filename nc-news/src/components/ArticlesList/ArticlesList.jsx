import React, { Component } from "react";
import "./ArticlesList.css";
import ArticleCard from "../ArticleCard/ArticleCard";
import * as api from "../../api";
import SortArticles from "../SortArticles/SortArticles";

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    identifier: "articles",
    sortBy: "created_at",
    order: "desc",
  };

  componentDidMount(props) {
    const { topic } = this.props;
    const { sortBy, order } = this.state;
    this.fetchArticles(topic, sortBy, order);
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    const { sortBy, order } = this.state;
    // console.log(topic, prevProps.topic);
    if (topic !== prevProps.topic) {
      this.fetchArticles(topic, sortBy, order);
    } else if (sortBy !== prevState.sortBy) {
      this.fetchArticles(topic, sortBy, order);
    } else if (order !== prevState.order) {
      this.fetchArticles(topic, sortBy, order);
    }
  }

  fetchArticles = (topic, sortBy, order) => {
    console.log(sortBy, order);
    api.getArticles(topic, sortBy, order).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };
  sortArticlesBy = (query) => {
    console.log(query);
    this.setState({ sortBy: query });
  };

  sortByOrder = (order) => {
    console.log(order);
    this.setState({ order });
  };
  render() {
    const { articles, identifier } = this.state;
    console.log(identifier);

    return (
      <>
        <SortArticles
          sortArticlesBy={this.sortArticlesBy}
          sortByOrder={this.sortByOrder}
        />
        <div className="ArticlesList">
          {articles.map((article) => {
            return (
              <ArticleCard
                key={article.article_id}
                identifier={identifier}
                {...article}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default ArticlesList;
