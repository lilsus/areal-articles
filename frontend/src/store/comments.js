import Axios from "axios";

export default {
  state: () => ({
    comments: []
  }),
  mutations: {
    SET_COMMENTS: (state, payload) => {
      state.comments = payload;
    },
    ADD_COMMENT: (state, payload) => {
      state.comments.push(payload)
    },
    UPDATE_COMMENT: (state, payload) => {
      const comment = state.comments.find(comment => comment.id === payload.id);
      comment.text = payload.text;
    },
    DELETE_COMMENT: (state, payload) => {
      const index = state.comments.findIndex(comment => comment.id === payload.id);
      state.comments.splice(index, 1);
    }
  },
  actions: {
    GET_COMMENTS: async (context, id) => {
      let { data } = await Axios.get(`http://127.0.0.1:3001/article/${id}/comment`);
      context.commit('SET_COMMENTS', data);
    },
    ADD_COMMENT: async (context, payload) => {
      let { data } = await Axios.post(`http://127.0.0.1:3001/article/${payload.articleId}/comment`, payload);
      context.commit('ADD_COMMENT', data);
    },
    UPDATE_COMMENT: async (context, payload) => {
      await Axios.patch(`http://127.0.0.1:3001/article/${payload.articleId}/comment/${payload.id}`, {
        text: payload.text
      });
      context.commit('UPDATE_COMMENT', payload);
    },
    DELETE_COMMENT: async (context, payload) => {
      await Axios.delete(`http://127.0.0.1:3001/article/${payload.articleId}/comment/${payload.id}`);
      context.commit('DELETE_COMMENT', payload)
    }
  },
  getters: {
    comments: state => state.comments
  }
}