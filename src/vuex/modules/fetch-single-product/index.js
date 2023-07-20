import axios from "axios";

const fetchSingleProduct = {
  namespaced: true,
  state: {
    product: null,
    isLoading: false,
    error: null,
  },
  mutations: {
    setProduct(state, payload) {
      state.product = payload;
    },
    setIsLoading(state, payload) {
      state.isLoading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    async fetchSingleProduct({ commit }, productId) {
      commit("setIsLoading", true);
      try {
        const response = await axios.get(`http://localhost:8000/api/products/${productId}`);
        const product = response.data.data.product;
        commit("setProduct", product);
        commit("setIsLoading", false);
      } catch (error) {
        commit("setError", "Failed to fetch data from the API");
      }
    },
  },
  getters: {
    getProduct(state){
      return state.product
    }
  }
};

export default fetchSingleProduct;
