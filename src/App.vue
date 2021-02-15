<template>
  <div id="app">
    <div class="nav">
      <router-link :to="{ name: 'posts-list' }">Posts</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  padding: 20px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
#app {
  box-sizing: border-box;
  width: 500px;
  padding: 0 20px 20px;
  margin: 0 auto;
}

.nav {
  margin-bottom: 15px;
  text-align: center;
}
a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
