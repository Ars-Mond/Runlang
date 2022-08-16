const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: "asset",
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
});
