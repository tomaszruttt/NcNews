import React from "react";
import "./SortArticles.css";

const SortArticles = ({ sortArticlesBy, sortByOrder }) => {
  const handleChange = (event) => {
    const query = event.target.value;
    // console.log(query);
    sortArticlesBy(query);
  };

  const handleButtons = (event) => {
    const order = event.target.value;
    // console.log(order);
    sortByOrder(order);
  };

  return (
    <section className="SortArticles">
      <section>
        <label className="SortArticles-label">Sort By </label>
        <select className="SortArticles-menu" onChange={handleChange}>
          <option value="created_at" key="created_at">
            Date
          </option>
          <option value="comment_count" key="comment_count">
            Comments
          </option>
          <option value="votes" key="votes">
            Votes
          </option>
        </select>
      </section>
      <section>
        <button
          className="SortArticles-button"
          onClick={handleButtons}
          key="desc"
          value="desc"
        >
          Asc
        </button>
        <button
          className="SortArticles-button"
          onClick={handleButtons}
          key="asc"
          value="asc"
        >
          Desc
        </button>
      </section>
    </section>
  );
};

export default SortArticles;
