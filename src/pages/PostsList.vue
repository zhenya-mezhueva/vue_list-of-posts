<template>
  <div class="posts-list">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
    <template v-if="page !== 1">
      <router-link
        :to="{ name: 'post-list', query: { page: page - 1 } }"
        rel="prev"
      >
        Previous Page |
      </router-link>
    </template>
    <router-link
      :to="{ name: 'post-list', query: { page: page + 1 } }"
      rel="next"
    >
      Next Page
    </router-link>
  </div>
</template>

<script>
import PostCard from "@/components/PostCard";
import { mapState } from "vuex";

export default {
  name: "PostList",
  components: {
    PostCard
  },
  created() {
    this.$store.dispatch("fetchPosts", {
      perPage: 5,
      page: this.page
    });
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || "1";
    },
    ...mapState(["posts"])
  },
};
</script>

<style lang="scss">
.posts-list {
  max-width: 700px;
  list-style: none;
}
</style>
