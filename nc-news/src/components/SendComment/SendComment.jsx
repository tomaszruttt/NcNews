import React, { Component } from "react";
import "./SendComment.css";
import * as api from "../../api";

class SendComment extends Component {
  state = {
    comment: "",
  };
  render() {
    const { comment } = this.state;
    return (
      <form className="SendComment" onSubmit={this.handleSubmit}>
        <label className="SendComment-label">Write: </label>
        <input
          type="text"
          id="comment"
          onChange={(event) => this.setState({ comment: event.target.value })}
          value={comment}
        />
        <button
          className="SendComment-button"
          disabled={!this.props.username}
          type="submit"
        >
          Post Comment
        </button>
      </form>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { comment } = this.state;
    const { article_id, addComment, username } = this.props;
    // const username = "weegembump";
    console.log(comment, article_id, username);
    api
      .postComment(article_id, username, comment)
      .then((comment) => {
        addComment(comment);
        this.setState({ comment: "" });
      })
      .catch(console.log);
  };
}

export default SendComment;
