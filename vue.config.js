const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  devServer: {
    proxy: "http://localhost:8000",
  },
  outputDir: "build",
  lintOnSave: true,
  css: {
    loaderOptions: {
      postcss: {
        // options here will be passed to postcss-loader
      },
      // sass: {
      //   data: `
      //     @import "@/assets/css/sass/main.scss";
      //   `,
      // },
    },
  },
});
