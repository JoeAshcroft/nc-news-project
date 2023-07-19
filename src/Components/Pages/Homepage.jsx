import Header from "../Header";
import { useState, useEffect } from "react";
import { getArticleById } from "../../../Utils/api";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleById(Math.ceil(Math.random() * 36)).then((articleFromApi) => {
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
          <h2>Written by {article.author}</h2>
          <img
            src={article.article_img_url}
            alt={`cover image for article titled ${article.title}`}
          />
          <p>{article.body}</p>
          <div>{article.votes} upvotes</div>
        </article>
      </Link>
    </section>
  );
};

export default Homepage;
