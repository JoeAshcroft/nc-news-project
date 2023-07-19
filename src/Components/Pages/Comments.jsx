import { getCommentsByArticleId, getArticleById } from "../../../Utils/api";
import Header from "../Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleArticle from "./SingleArticle";
import CommentCard from "../CommentCard";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState([]);

  const { articleId } = useParams();

  useEffect(() => {
    getCommentsByArticleId(articleId).then((commentsFromApi) => {
      setComments(commentsFromApi);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    getArticleById(articleId).then((articleFromApi) => {
      setArticle(articleFromApi);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <Header title={`Comments on ${article.title}`} />
      <SingleArticle />
      <ul className="comment-ul">
        {comments.map(({ author, body, created_at, votes, comment_id }) => {
          return (
            <li key={comment_id}>
              <CommentCard
                body={body}
                author={author}
                created_at={created_at}
                votes={votes}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
