import Header from "../Header";
import { useState, useEffect } from "react";
import { getArticleById } from "../../../Utils/api";
import { Link } from "react-router-dom";
import SingleArticle from "./SingleArticle";
import ArticleCard from "../ArticleCard";

const Homepage = () => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleById(Math.ceil(Math.random() * 37)).then((articleFromApi) => {
      setArticle(articleFromApi);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <section>
      <Header title="Welcome to Article City!" />
      <h2>
        You've come to the right place for all your article commenting needs!
      </h2>
      <p>We're packed with great articles like this:</p>
      <Link to={`/articles/${article.article_id}`}>
        <article>
          <ArticleCard
            title={article.title}
            article_img_url={article.article_img_url}
            author={article.author}
            topic={article.topic}
            votes={article.votes}
            created_at={article.created_at}
          />
        </article>
      </Link>
    </section>
  );
};

export default Homepage;
