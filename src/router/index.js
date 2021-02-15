import Vue from "vue";
import VueRouter from "vue-router";
import PostList from "@/views/PostsList";
import PostDetails from "@/views/PostDetails";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "posts-list",
      component: PostList
    },
    {
      path: "/post/:id",
      name: "post",
      component: PostDetails,
      props: true
    }
  ]
});
