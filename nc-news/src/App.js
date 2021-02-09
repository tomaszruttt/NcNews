import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";
import ArticlesList from "./components/ArticlesList/ArticlesList";
import { Router } from "@reach/router";
import IndividualArticle from "./components/IndividualArticle/IndividualArticle";

function App() {
  return (
    <div className="App">
      <Title />
      <Navbar />
      <Router>
        <ArticlesList path="/" />
        <ArticlesList path="/articles" />
        <ArticlesList path="/articles/topics/:topic" />
        <IndividualArticle path="/articles/:article_id" />
        <IndividualArticle path="/articles/:article_id/comments" />
      </Router>
    </div>
  );
}

export default App;
