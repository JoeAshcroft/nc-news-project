import { getArticleById } from "../../../Utils/api";
import Header from "../Header";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const SingleArticle = () => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { articleId } = useParams();

  useEffect(() => {
    getArticleById(articleId).then((articleFromApi) => {
      setArticle(articleFromApi);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const dateFormatter = (created_at) => {
    return new Date(created_at).toLocaleDateString();
  };

  return (
    <article>
      <Header title={article.title} />
      <h2>Written by {article.author}</h2>
      <p>on {dateFormatter(article.created_at)}</p>
      <img
        className="articleImg"
        src={article.article_img_url}
        alt={`cover image for article titled ${article.title}`}
      />
      <h3>{article.body}</h3>
      <Link to={`/articles/${articleId}/comments`}>
        <p>View Comments Here</p>
      </Link>
      <div>{article.votes} upvotes</div>
    </article>
  );
};

export default SingleArticle;
