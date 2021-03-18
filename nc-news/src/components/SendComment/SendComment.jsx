import React, { Component } from "react";
import "./SendComment.css";
import * as api from "../../api";

class SendComment extends Component {
  state = {
    comment: "",
    hidden: false,
  };
  render() {
    const { comment } = this.state;
    return (
      <form className="SendComment" onSubmit={this.handleSubmit}>
        <label className="SendComment-label">Write: </label>
        <textarea
          className="SendComment-textarea"
          rows="3"
          cols="50"
          size="200"
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
        {this.state.hidden && (
          <p className="SendComment-warning">Please fill</p>
        )}
      </form>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { comment } = this.state;
    const { article_id, addComment, username } = this.props;
    if (comment.length) {
      api
        .postComment(article_id, username, comment)
        .then((comment) => {
          addComment(comment);
          this.setState({ comment: "", hidden: false });
        })
        .catch(console.log);
    } else
      this.setState(() => {
        return { hidden: true };
      });
  };
}

export default SendComment;
