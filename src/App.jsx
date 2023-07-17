import "./App.css";
import Nav from "./Components/Nav";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Articles from "./Pages/Articles";
import Comments from "./Pages/Comments";
import Topics from "./Pages/Topics";

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </main>
  );
}

export default App;
