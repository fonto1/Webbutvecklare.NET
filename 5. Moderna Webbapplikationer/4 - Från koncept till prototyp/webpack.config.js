const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: __dirname + "/source",
  },
  output: {
    path: __dirname + "/public",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./source/app.html",
      filename: "./app.html",
    }),
  ],
};
