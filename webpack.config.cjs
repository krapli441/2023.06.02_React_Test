const path = require("path");

module.exports = {
  entry: {
    index: "./build/src/index.ts",
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
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: 8085,
    hot: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
  },
};
