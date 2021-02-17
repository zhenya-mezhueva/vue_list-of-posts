<template>
  <div id="app">
    <div class="top">
      <div class="container">
        <router-link class="posts-nav" :to="{ name: 'posts-list' }">
          Posts
        </router-link>
      </div>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
p {
  margin: 0;
}
body {
  margin: 0;
  padding-top: $base*10;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  line-height: 1.5rem;
  background-color: $colorLightGrey;
}

.container {
  max-width: 45rem;
  margin: 0 auto;
  padding: 0 0.5rem;
}

.top {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
  height: 4rem;
  background-color: $colorMain;
}
.posts-nav {
  font-weight: bold;
  color: $colorWhite;
  font-size: 1.5rem;
  line-height: 4rem;
  text-decoration: none;
  padding: 0 1rem;
  text-shadow: 1px 1px 3px rgba(150, 150, 150, 1);
}
</style>
