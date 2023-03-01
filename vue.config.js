const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  devServer: {
    proxy: 'http://localhost/'
  },
  outputDir: 'dist',
  productionSourceMap: false,
}
