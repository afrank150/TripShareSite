var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './app/index.jsx',
  resolve : {
   modulesDirectories : [ 'node_modules', './app' ],
   extensions         : [ '', '.js', '.jsx' ],
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2|png|gif|jpg)$/,
        loader: 'url-loader?limit=1024'
      },
    ]
  },
  postcss: function () {
    return [ require('postcss-cssnext'), require('postcss-reporter') ];
  },
  plugins: [HTMLWebpackPluginConfig],
};
