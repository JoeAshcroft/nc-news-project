import "../Utils/App.css";
import Nav from "../src/Components/Nav";
import { Routes, Route } from "react-router-dom";
import Homepage from "../src/Components/Pages/Homepage";
import Articles from "../src/Components/Pages/Articles";
import Comments from "../src/Components/Pages/Comments";
import Topics from "../src/Components/Pages/Topics";
import SingleArticle from "../src/Components/Pages/SingleArticle";

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/topics" element={<Topics />} />

        <Route path="/articles/:articleId" element={<SingleArticle />} />
        <Route path="/articles/:articleId/comments" element={<Comments />} />
      </Routes>
    </main>
  );
}

export default App;
