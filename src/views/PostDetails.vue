<template>
  <router-link class="post-link" :to="{ name: 'post', params: { id: '1' } }">
    <div class="post-card">
      <h4 class="post-card__title">Post: {{ post.title }}</h4>
      <p class="post-card__text">
        <span>User #{{ post.userId }}:</span>
        {{ post.body }}
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "PostDetails",
  data() {
    return {
      post: {
        id: 1,
        userId: 5,
        title: "sunt aut facere",
        body: "quia et nsuscipit recusandae consequuntur exp architect"
      }
    };
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

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
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
