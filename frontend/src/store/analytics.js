import Axios from "axios";

export default {
  state: () => ({
    analytics: []
  }),
  mutations: {
    SET_ANALYTICS: (state, payload) => {
      state.analytics = payload;
    }
  },
  actions: {
    GET_ANALYTICS: async (context, payload) => {
      let { data } = await Axios.get(`http://127.0.0.1:3001/analytic/comments`, { params: payload });
      context.commit('SET_ANALYTICS', data);
    }
  },
  getters: {
    analytics: state => state.analytics
  }
}