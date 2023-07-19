import axios from "axios";

const baseApiUrl = axios.create({
  baseURL: "https://nc-news-project-p4zd.onrender.com/api",
});

export const getArticles = () => {
  return baseApiUrl.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (articleId) => {
  return baseApiUrl.get(`/articles/${articleId}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsByArticleId = (articleId) => {
  return baseApiUrl.get(`/articles/${articleId}/comments`).then(({ data }) => {
    return data.comments;
  });
};
