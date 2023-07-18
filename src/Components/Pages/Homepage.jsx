import Header from "../Header";
import ArticleCard from "../ArticleCard";
import { useState, useEffect } from "react";
import { getArticles } from "../../../Utils/api";

const Homepage = () => {
  // const [article, setArticle] = useState({});
  // useEffect(() => {
  //   getArticles().then((articlesFromApi) => {
  //     setArticle(articlesFromApi[0]);
  //   });
  // }, []);

  return (
    <section>
      <Header title="Welcome to Article City!" />
      <h2>
        You've come to the right place for all your article commenting needs!
      </h2>
      
    </section>
  );
};

export default Homepage;
