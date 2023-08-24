import Comments from "../Comments";
import Header from "../Header";
import SingleArticle from "../SingleArticle";

const ArticleAndComments = () => {
  return (
    <section>
      <Header title="Article Comments" />
      <SingleArticle />
      <Comments />
    </section>
  );
};

export default ArticleAndComments;
