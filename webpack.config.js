const path = require("path");
const webpack = require("webpack");
var fs = require('fs');

const nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

const config = {
  entry: "./server.js",
  externals: nodeModules, 
  output: {
    path: path.join(__dirname, "build/"),
    filename: "index.js",
    publicPath: "/build/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["loader", "postcss-loader"]
      }
    ]
  }
};

module.exports = config;
