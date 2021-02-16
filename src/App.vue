<template>
  <div id="app">
    <div class="top">
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
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
#app {
  width: 700px;
  padding: 0 20px 20px;
  margin: 0 auto;
}

.top {
  box-sizing: border-box;
  height: 60px;
  background-color: #e7e6e1;
  collapse: #f2a154;
  margin-bottom: 15px;
  padding: 10px 20px;
}
a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
