import React, { Component } from "react";
import "./VoteUpdater.css";
import * as api from "../../api";
import { ThumbsupIcon, ThumbsdownIcon } from "@primer/octicons-react";

class VoteUpdater extends Component {
  state = { voteChange: 0 };

  handleClick = (voteDiff) => {
    const { id, identifier } = this.props;
    this.setState((currentState) => {
      return { voteChange: currentState.voteChange + voteDiff };
    });
    api.updateVotes(id, voteDiff, identifier);
  };

  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;
    console.log(votes);
    return (
      <div className="VoteUpdater">
        <button
          disabled={voteChange === 1}
          onClick={() => {
            this.handleClick(1);
          }}
        >
          <ThumbsupIcon className="VoteUpdater-thumb-up" size={14} />
        </button>
        <p>{votes + voteChange}</p>
        <button
          disabled={voteChange === -1}
          onClick={() => {
            this.handleClick(-1);
          }}
        >
          <ThumbsdownIcon className="VoteUpdater-thumb-down" size={14} />
        </button>
      </div>
    );
  }
}

export default VoteUpdater;
