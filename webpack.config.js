const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {
  entry: "./app/index.js",
  output: {
    filename: "static/js/app.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    alias: {
      "@root": ".",
      "@app": "app",
      "@components": "app/components",
      "@actions": "app/actions",
      "@reducers": "app/reducers",
      "@utils": "app/utils",
      "@consts": "app/consts",
      "@styles": "app/styles"
    },
    modules: [__dirname, "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-react", "@babel/preset-env"]
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }

    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "static/css/globals.css",
    }),
    new CopyWebpackPlugin([
      { from: "app/index.html" },
      // { from: "app/static/icons" , to: "static/icons"},
    ])
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    stats: "minimal",
    open: true
  },

  devtool: "eval-source-map"
};