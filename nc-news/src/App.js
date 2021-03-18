import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";
import ArticlesList from "./components/ArticlesList/ArticlesList";
import { Router } from "@reach/router";
import IndividualArticle from "./components/IndividualArticle/IndividualArticle";
import ErrorDisplayer from "./components/ErrorDisplayer/ErrorDisplayer";

class App extends Component {
  state = {
    username: "jessjelly",
  };

  logout = () => {
    this.setState({ username: null });
  };
  login = () => {
    this.setState({ username: "jessjelly" });
  };
  render() {
    const { username } = this.state;
    return (
      <div className="App">
        <Title username={username} login={this.login} logout={this.logout} />

        <section className="Main">
          <Navbar />
          <Router>
            <ArticlesList path="/" />
            <ArticlesList path="/articles" />
            <ArticlesList path="/articles/topics" />

            <ArticlesList path="/articles/topics/:topic" />
            <IndividualArticle
              username={username}
              path="/articles/:article_id"
            />
            <IndividualArticle
              path="/articles/:article_id/comments"
              username={this.username}
            />
            <ErrorDisplayer default />
          </Router>
        </section>
      </div>
    );
  }
}

export default App;
