import { useEffect, useState } from "react";
import Header from "../Header";
import { getArticles } from "../../../Utils/api";
import ArticleCard from "../ArticleCard";

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
    return <p>Loading...</p>;
  }

  return (
    <section className="articles">
      <Header title="Articles" />
      <ol>
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
              <ArticleCard
                key={article_id}
                title={title}
                article_img_url={article_img_url}
                author={author}
                topic={topic}
                body={body}
                votes={votes}
                created_at={created_at}
              />
            );
          }
        )}
      </ol>
    </section>
  );
};

export default Articles;
