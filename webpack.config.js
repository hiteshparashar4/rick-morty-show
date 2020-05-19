const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
  },

  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    index: "index.html",
    port: 8085,
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"],
          },
        },
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        use: ["file-loader?name=[name].[ext]"],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.xml$/i,
        use: "raw-loader",
      },
      {
        test: /\.hbs$/i,
        use: ["handlebars-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      favicon: "./assets/favicon.png",
      title: "RickMortyShow",
      description: "RickMortyShow",
      template: "page-template.hbs",
      filename: "index.html",
    }),
  ],

  devtool: '#inline-source-map',
};
