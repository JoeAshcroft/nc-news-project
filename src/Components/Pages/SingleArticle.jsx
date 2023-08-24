import { getArticleById } from "../../../Utils/api";
import Header from "../Header";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { patchArticleVote } from "../../../Utils/api";

const SingleArticle = () => {
  const [article, setArticle] = useState([]);
  const [userVotes, setUserVotes] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { articleId } = useParams();

  const handleClick = () => {
    setUserVotes((currentUserVotes) => {
      return currentUserVotes + 1;
    });
    patchArticleVote(articleId).catch((err) => {
      setUserVotes((currentUserVotes) => {
        return currentUserVotes - 1;
      });
      setIsError(true);
    });
  };

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
      <div>{article.votes + userVotes} upvotes</div>
      <button onClick={handleClick} disabled={userVotes > 0}>
        Upvote this article!
      </button>
      {isError ? <p>Something went wrong!</p> : null}
    </article>
  );
};

export default SingleArticle;

