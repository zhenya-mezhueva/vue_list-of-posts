<template>
  <div class="post-card">
    <div class="post-card__top">
      <span>Post #{{post.id}}</span>
      <span>Author: user #{{post.userId}} </span>
    </div>
    <h4 class="post-card__title">Title: {{ post.title }}</h4>
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

<style lang="scss">
.post-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
  background-color: whitesmoke;

  &__top {
    display: flex;
    justify-content: space-between;
  }

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2),
      0 1px 15px 0 rgba(0, 0, 0, 0.19);
  }

  &__title {
    margin: 0;
  }

  &__text {
    font-size: 14px;
  }
}

.post-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
