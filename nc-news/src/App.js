import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";
import ArticlesList from "./components/ArticlesList/ArticlesList";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Title />
      <Navbar />
      <Router>
        <ArticlesList path="/" />
        <ArticlesList path="/articles/topics/:topic" />
      </Router>
    </div>
  );
}

export default App;
