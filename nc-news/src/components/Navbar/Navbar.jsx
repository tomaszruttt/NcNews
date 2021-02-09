import React, { Component } from "react";
import "./Navbar.css";
import * as api from "../../api";
import { Link } from "@reach/router";

class Navbar extends Component {
  state = {
    topics: [],
  };

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics() {
    api.getTopics().then((topics) => {
      this.setState({ topics });
    });
  }

  render() {
    const { topics } = this.state;
    return (
      <nav className="Navbar">
        {topics.map(({ slug }) => {
          return (
            <Link
              className="Navbar-link"
              to={`/articles/topics/${slug}`}
              key={slug}
            >
              {slug}
            </Link>
          );
        })}
      </nav>
    );
  }
}

export default Navbar;
