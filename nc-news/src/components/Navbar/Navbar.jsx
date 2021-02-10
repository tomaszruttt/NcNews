import React, { Component } from "react";
import "./Navbar.css";
import * as api from "../../api";
import { Link } from "@reach/router";

class Navbar extends Component {
  state = {
    topics: [],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics() {
    api.getTopics().then((topics) => {
      this.setState({ topics, isLoading: false });
    });
  }

  render() {
    const { topics, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading....</p>;
    }
    return (
      <nav className="Navbar">
        {topics.map(({ slug }) => {
          return (
            <button className="Navbar-link">
              <Link to={`/articles/topics/${slug}`} key={slug}>
                {slug}
              </Link>
            </button>
          );
        })}
      </nav>
    );
  }
}

export default Navbar;
