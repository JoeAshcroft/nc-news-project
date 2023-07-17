import axios from "axios";

const baseApiUrl = axios.create({
  baseURL: "https://nc-news-project-p4zd.onrender.com/api",
});

export const getArticles = () => {
  return baseApiUrl.get("/articles").then(({ data }) => {
    return data.articles;
  });
};
