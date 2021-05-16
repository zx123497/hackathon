import axios from "axios";
import Noty from "noty";

const instance = axios.create({
  baseURL: "http://connect.hackthonbackend.com/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

//You can also use interceptors in an instance
instance.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
  },
  (error) => {
    console.log(error);
    new Noty({
      type: "error",
      layout: "topRight",
      theme: "nest",
      text: `發生錯誤: ${error}`,
      timeout: "4000",
      progressBar: true,
      closeWith: ["click"],
    }).show();
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    new Noty({
      type: "error",
      layout: "topRight",
      theme: "nest",
      text: `發生錯誤: ${error}`,
      timeout: "4000",
      progressBar: true,
      closeWith: ["click"],
    }).show();
    return Promise.reject(error);
  }
);

export default instance;
