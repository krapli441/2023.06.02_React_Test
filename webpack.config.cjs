const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { default: CopyPlugin } = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: "./build/index.tsx",
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        use: ["babel-loader"],
      },
      {
        test: [/\.ts$/, /\.tsx$/],
        use: ["ts-loader"],
      },
      {
        test: [/\.css$/],
        use: ["style-loader", "css-loader"],
      },
      { test: [/\.(png|jpe?g|gif)$/i], use: ["file-loader"] },
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: 8085,
    hot: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".png"],
  },
  // plugins: [
  //   new CopyWebpackPlugin([
  //     {
  //       from: "./public/img/image",
  //       to: "./public/img/image",
  //     },
  //   ]),
  // ],
};
