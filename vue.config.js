module.exports = {
  publicPath: "/vue-posts-app/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/variables.scss";`
      }
    }
  }
};
