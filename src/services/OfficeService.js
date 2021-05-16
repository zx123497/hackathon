import axios from "./axios";

const OfficeService = {
  getOfficeList: async () => {
    try {
      const response = await axios.get(`/offices`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default OfficeService;
