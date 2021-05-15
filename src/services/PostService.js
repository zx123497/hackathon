import axios from "./axios";

const PostService = {
  getPostList: async (id) => {
    try {
      const response = await axios.get(`/notes/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  postPost: async (data) => {
    try {
      const response = await axios.post("/note", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default PostService;
