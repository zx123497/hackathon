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
  getAnnouncement: async (id) => {
    try {
      const response = await axios.get(`/announcement/${id}`);
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
  putAdminAnnouncement: async (id, data) => {
    try {
      const response = await axios.put(`/admin/announcement/${id}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  postScholarApply: async (data) => {
    try {
      const response = await axios.post("/student/scholarship", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  deleteAnnouncement: async (id) => {
    try {
      const response = await axios.delete(`/admin/announcement/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getStuScholar: async (id) => {
    try {
      const response = await axios.get(`/student/scholarship/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getAdminScholar: async (id) => {
    try {
      const response = await axios.get(`/admin/scholarship/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default PostService;
