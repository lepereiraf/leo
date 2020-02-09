import axios from "axios";

const baseURL = "https://randomuser.me/api/"; //"http://localhost:3310/app";

export const apiCall = (url, data, headers, method) =>
  axios({
    url: baseURL + url,
    data,
    headers
  });
