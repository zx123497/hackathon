import axios from "./axios";

const CoffeeService = {
  getCoffeeRankList: async (id) => {
    try {
      const response = await axios.get(`/user/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  postAddPrize: async (id, data) => {
    try {
      const response = await axios.post(`/user/${id}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default CoffeeService;
