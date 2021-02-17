<template>
  <div class="post-card post">
    <div class="post__top">
      <img src="../assets/images/user.png" alt="user-logo" class="post__logo" />
      <span>user #{{ post.userId }} </span>
    </div>
    <h4 class="post-card__title">{{ post.title }}</h4>
    <p class="post-card__text">
      {{ post.body }}
    </p>
  </div>
</template>

<script>
import PostService from "@/services/PostService";
export default {
  name: "PostDetails",
  props: ["id"],
  data() {
    return {
      post: {}
    };
  },
  created() {
    PostService.getPost(this.id)
      .then(response => {
        this.post = response.data;
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  }
};
</script>

<style scoped lang="scss">
.post {
  &__top {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &__logo {
    width: 1.5rem;
    height: 1.5rem;
  }
}
.post-link {
  cursor: default;
}
</style>
