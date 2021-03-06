import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";
import ArticlesList from "./components/ArticlesList/ArticlesList";
import { Router } from "@reach/router";
import IndividualArticle from "./components/IndividualArticle/IndividualArticle";

class App extends Component {
  state = {
    username: "jessjelly",
  };

  logout = () => {
    this.setState({ username: null });
  };
  render() {
    const { username } = this.state;
    return (
      <div className="App">
        <Title username={username} logout={this.logout} />

        <section className="Body">
          <Navbar />
          <Router>
            <ArticlesList path="/" />
            <ArticlesList path="/articles" />
            <ArticlesList path="/articles/topics/:topic" />
            <IndividualArticle
              username={username}
              path="/articles/:article_id"
            />
            <IndividualArticle path="/articles/:article_id/comments" />
          </Router>
        </section>
      </div>
    );
  }
}

export default App;
