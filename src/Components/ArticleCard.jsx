const ArticleCard = ({
  title,
  article_img_url,
  author,
  topic,
  votes,
  created_at,
}) => {

  return (
    <article className="articleCard">
      <h2>{title}</h2>
      <p>
        Written by {author} <br /> {Date(created_at)} <br />
        Topic: {topic}
      </p>
      <img src={article_img_url} alt="cover image for article" />
      <div>{votes} upvotes</div>
    </article>
  );
};

export default ArticleCard;
