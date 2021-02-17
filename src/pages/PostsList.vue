<template>
  <router-link class="posts-list__link" :to="{ name: 'posts-list' }">
    <div class="posts-list">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </router-link>
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

<style scoped lang="scss">
.posts-list__link {
  text-decoration: none;
}
</style>
