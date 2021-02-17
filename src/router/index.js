import Vue from "vue";
import VueRouter from "vue-router";
import PostList from "@/pages/PostsList";
import PostShow from "@/pages/PostShow";

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
      path: "/vue_list-of-posts/",
      redirect: { name: "posts-list" }
    },
    {
      path: "/post/:id",
      name: "post",
      component: PostShow,
      props: true
    }
  ]
});
