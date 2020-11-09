const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './examples/index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [require('react-refresh/babel')],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 9530,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './examples/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
}
