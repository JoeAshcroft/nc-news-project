import { getCommentsByArticleId } from "../../Utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "../Components/CommentCard";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { articleId } = useParams();

  useEffect(() => {
    getCommentsByArticleId(articleId).then((commentsFromApi) => {
      setComments(commentsFromApi);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading Comments...</p>;
  }

  if (comments.length === 0) {
    return <p>It looks like nobody has commented on this article yet!</p>;
  }

  return (
    <section>
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
