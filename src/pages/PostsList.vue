<template>
  <div class="posts-list">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
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
    this.$store.dispatch("fetchPosts");
  },
  computed: mapState(["posts"])
};
</script>

<style lang="scss">
.posts-list {
  max-width: 700px;
  list-style: none;
}
</style>
