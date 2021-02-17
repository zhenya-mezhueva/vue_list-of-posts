<template>
  <router-link
    class="post-link"
    :to="{ name: 'post', params: { id: post.id } }"
  >
    <div class="post-card post-list__item">
      <h4 class="post-card__title">{{ post.title }}</h4>
      <p class="post-card__text">
        {{ post.body }}
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    post: Object
  }
};
</script>

<style lang="scss">
.post-card {
  padding: 1.25rem 1.875rem;
  margin-bottom: 1.5rem;
  transition: all 0.2s linear;
  cursor: pointer;
  background-color: $colorWhite;
  border-radius: 4px;
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;

  &__title {
    max-height: 4.375rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0 0 8px;
  }

  &__text {
    font-size: 0.875rem;
    font-weight: 100;
    opacity: 0.75;
    max-height: 6.625rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.post-list__item {
  max-height: 11rem;
}
.post-list__item:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2),
  0 1px 15px 0 rgba(0, 0, 0, 0.19);
}

.post-link {
  color: black;
  text-decoration: none;
}
</style>
