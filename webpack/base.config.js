const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve("./dist")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [
      new TsconfigPathsPlugin() // { configFile: "./tsconfig.json" }
    ]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  node: {},
  plugins: [
    new HTMLWebpackPlugin({ title: "React TS", template: "./src/index.html" })
  ]
};
