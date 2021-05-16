import axios from "./axios";

const FileService = {
  getFileList: async (id) => {
    try {
      const response = await axios.get(`/files`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  postFile: async (data) => {
    try {
      const response = await axios.post("/upload", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default FileService;
