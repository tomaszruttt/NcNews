import axios from "axios";

const request = axios.create({
  baseURL: "https://api-tomasz-back-end.herokuapp.com/api",
});

export const getTopics = () => {
  return request.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = (topic, sortBy, order) => {
  console.log("from api", topic, sortBy, order);
  return request
    .get("/articles", { params: { topic, sort_by: sortBy, order } })
    .then(({ data }) => {
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

export const updateVotes = (id, voteChange, identifier) => {
  console.log(id, voteChange, identifier);
  return request.patch(`${identifier}/${id}`, { inc_votes: voteChange });
};

export const postComment = (article_id, username, comment) => {
  console.log(article_id, username, comment);
  return request
    .post(`articles/${article_id}/comments`, {
      body: comment,
      username,
    })
    .then(({ data }) => {
      console.log(data.comment);
      return data.comment;
    });
};
export const removeComment = (id) => {
  console.log(id);
  return axios
    .delete(`https://api-tomasz-back-end.herokuapp.com/api/comments/${id}`)
    .then((res) => {
      console.log(res.status);
      return res.status;
    });
};

// export const updateVotes = (id, voteChange, identifier) => {
//   console.log(id, voteChange, identifier);
//   if (identifier === "article") {
//     return request.patch(`articles/${id}`, { inc_votes: voteChange });
//   } else {
//     return request.patch(`comments/${id}`, { inc_votes: voteChange });
//   }
// };
