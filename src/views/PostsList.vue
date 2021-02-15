<template>
  <div>
    <ul class="posts-list">
      <li>
        <PostDetails></PostDetails>
      </li>
      <li>
        <PostDetails></PostDetails>
      </li>
    </ul>
  </div>
</template>

<script>
import PostDetails from "@/views/PostDetails";

export default {
  name: "PostList",
  components: {
    PostDetails
  }
};
</script>

<style lang="scss">
.posts-list {
  max-width: 700px;
  list-style: none;
}
</style>
