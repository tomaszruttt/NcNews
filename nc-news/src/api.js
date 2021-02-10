import axios from "axios";

const request = axios.create({
  baseURL: "https://api-tomasz-back-end.herokuapp.com/api",
});

export const getTopics = () => {
  return request.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = (topic) => {
  console.log(topic);
  return request.get("/articles", { params: { topic } }).then(({ data }) => {
    return data.articles;
  });
};

export const getIndividualArticle = (article_id) => {
  return request.get(`/articles/${article_id}`).then(({ data }) => {
    // console.log(data.article);
    return data.article;
  });
};

export const getComments = (article_id) => {
  //   console.log(article_id);
  return request.get(`articles/${article_id}/comments`).then(({ data }) => {
    console.log(data.comments);
    return data.comments;
  });
};
