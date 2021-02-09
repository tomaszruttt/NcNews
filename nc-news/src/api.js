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
