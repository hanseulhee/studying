const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "./",
  configureWebpack: { devtool: "source-map" },
  transpileDependencies: true,
});
