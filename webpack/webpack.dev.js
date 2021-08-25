const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map", // rcmd by react to create sourcemap
  plugins: [
    new webpack.DefinePlugin({
      "process.env.API_END_POINT": JSON.stringify("have-dev"),
    }),
  ],
};
