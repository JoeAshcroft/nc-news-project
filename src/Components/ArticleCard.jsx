const ArticleCard = ({
  title,
  article_img_url,
  author,
  topic,
  votes,
  created_at,
}) => {
  const dateFormatter = (created_at) => {
    return new Date(created_at).toLocaleDateString();
  };

  return (
    <article className="articleCard">
      <h2>{title}</h2>
      <p>
        Written by {author} <br /> {dateFormatter(created_at)}
        <br />
        Topic: {topic}
      </p>
      <img
        className="articleImg"
        src={article_img_url}
        alt="cover image for article"
      />
      <div>{votes} upvotes</div>
    </article>
  );
};

export default ArticleCard;
