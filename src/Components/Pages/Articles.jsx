import { useEffect, useState } from "react";
import Header from "../Header";
import { getArticles } from "../../../Utils/api";
import ArticleCard from "../ArticleCard";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading Articles...</p>;
  }

  return (
    <section className="articles">
      <Header title="Articles" />
      <ul className="article-ul">
        {articles.map(
          ({
            article_id,
            title,
            article_img_url,
            author,
            topic,
            body,
            votes,
            created_at,
          }) => {
            return (
              <li key={article_id}>
                <Link to={`/articles/${article_id}`}>
                  <ArticleCard
                    title={title}
                    article_img_url={article_img_url}
                    author={author}
                    topic={topic}
                    body={body}
                    votes={votes}
                    created_at={created_at}
                  />
                </Link>
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
};

export default Articles;
