const CommentCard = ({ author, body, created_at, votes }) => {
  const dateFormatter = (created_at) => {
    return new Date(created_at).toLocaleDateString();
  };

  return (
    <section className="commentCard">
      <p>{body}</p>
      <p>
        By {author} on {dateFormatter(created_at)}
      </p>
      <div>{votes} comment upvotes</div>
    </section>
  );
};

export default CommentCard;
