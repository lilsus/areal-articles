import Axios from "axios";

export default {
  state: () => ({
    article: Object
  }),
  mutations: {
    SET_ARTICLE: (state, payload) => {
      state.article = payload;
    },
    UPDATE_ARTICLE: (state, payload) => {
      state.article.title = payload.title;
      state.article.text = payload.text;
    }
  },
  actions: {
    GET_ARTICLE: async (context, id) => {
      let { data } = await Axios.get(`http://127.0.0.1:3001/article/${id}`);
      context.commit('SET_ARTICLE', data);
    },
    UPDATE_ARTICLE: async (context, payload) => {
      await Axios.patch(`http://127.0.0.1:3001/article/${payload.id}`, {
        title: payload.title,
        text: payload.text
      });
      context.commit('UPDATE_ARTICLE', payload);
    }
  },
  getters: {
    article: state => state.article
  }
}