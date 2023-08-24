import "../Utils/App.css";
import Nav from "../src/Components/Nav";
import { Routes, Route } from "react-router-dom";
import Homepage from "../src/Components/Pages/Homepage";
import Articles from "../src/Components/Pages/Articles";
import Topics from "../src/Components/Pages/Topics";
import SingleArticle from "../src/Components/Pages/SingleArticle";
import ArticleAndComments from "../src/Components/Pages/ArticleAndComments";

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/articles/:articleId" element={<SingleArticle />} />
        <Route
          path="/articles/:articleId/comments"
          element={<ArticleAndComments />}
        />
      </Routes>
    </main>
  );
}

export default App;
