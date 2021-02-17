module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/vue_list-of-posts/" : "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/variables.scss";`
      }
    }
  }
};
