const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ip = require("ip");

const host = 'localhost';
const port = 8085;
const distDir = path.resolve(__dirname, "./dist");

module.exports = () => {
  return {
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: distDir,
      publicPath: "",
    },

    devServer: {
      contentBase: distDir,
      index: "index.html",
      port: port,
      host: host
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
              plugins: [
                ["@babel/transform-runtime"]
            ]
            },
          },
        },
        {
          test: /\.(png|jpg|jpeg|gif|bmp|svg)$/,
          exclude: /node_modules/,
          loader: 'file-loader',
          options: {
            outputPath: 'images',
          }
        },
        {
          test: /\.(scss|css)$/,
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
    devtool: '#inline-source-map'
  }
};
