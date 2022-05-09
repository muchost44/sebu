import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listNews: [],
    info: "",
  },
  getters: {},
  mutations: {
    setNews(state, param) {
      state.listNews = param;
    },
    setError(state, param) {
      state.info = param;
    },
  },
  actions: {
    fetchNews(store, { query, category }) {
      const url = `https://newsapi.org/v2/top-headlines?country=id&category=${category}&q=${query}&apiKey=62a06b53e1d94ff5afab70e1543b297f`;
      axios
        .get(url)
        .then((response) => {
          store.commit("setNews", response.data.articles);
          console.log(response);
        })
        .catch((error) => {
          store.commit("setError", error);
        });
    },
  },
  modules: {},
});
