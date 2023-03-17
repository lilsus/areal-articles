import Axios from "axios";

export default {
  state: () => ( {
    articles: [],
  }),
  mutations: {
    SET_ARTICLES: (state, payload) => {
      state.articles = payload;
    },
    ADD_ARTICLE: (state, payload) => {
      state.articles.push(payload);
    },
    DELETE_ARTICLE: (state, id) => {
      const index = state.articles.findIndex(article => article.id === id);
      state.articles.splice(index, 1);
    }
  },
  actions: {
    GET_ARTICLES: async (context) => {
      let { data } = await Axios.get('http://127.0.0.1:3001/article');
      context.commit('SET_ARTICLES', data);
    },
    ADD_ARTICLE: async (context, payload) => {
      let { data } = await Axios.post('http://127.0.0.1:3001/article', payload);
      context.commit('ADD_ARTICLE', data);
    },
    DELETE_ARTICLE: async (context, id) => {
      await Axios.delete(`http://127.0.0.1:3001/article/${id}`);
      context.commit('DELETE_ARTICLE', id);
    }
  },
  getters: {
    articles: state => state.articles,
  }
}