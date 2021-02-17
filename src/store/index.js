import Vue from "vue";
import Vuex from "vuex";
import PostService from "@/services/PostService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    fetchPosts({ commit }) {
      PostService.getPosts()
        .then(response => {
          commit("SET_POSTS", response.data);
        })
        .catch(error => {
          console.log("There was an error:", error.response);
        });
    }
  }
});
