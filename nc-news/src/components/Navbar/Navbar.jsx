import React, { Component } from "react";
import "./Navbar.css";
import * as api from "../../api";
import { Link } from "@reach/router";
import { SpinnerCircular } from "spinners-react";
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
    {
      isLoading && <SpinnerCircular />;
    }
    return (
      <nav className="Navbar">
        {topics.map(({ slug }) => {
          return (
            <Link
              className="Navbar-Link"
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
