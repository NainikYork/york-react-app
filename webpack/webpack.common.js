/**
 * This file is part of [York.IE React Base Starter Template]
 *
 * (c) 2023 [York.IE] <[support@york.ie]>
 *
 * --------------------------------------------------
 *
 * @module app.v1.WebpackConfiguration
 * @description This is a configuration file for Webpack, a module bundler for JavaScript applications. It specifies
 *              the entry point of the application, the output directory and file name for the bundled code, the
 *              rules for loading different file types (such as JavaScript, CSS, and images), and the plugins to use
 *              (such as HtmlWebpackPlugin for generating an HTML file with the bundled code injected, and
 *              MiniCssExtractPlugin for extracting CSS into separate files). It also includes configuration for the
 *              development server, such as the port to use and the directory to serve files from.
 * @author [Nainik Mehta] <[nainik@york.ie]>
 * @version 1.0.0
 *
 * --------------------------------------------------
 */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, '..', './src/'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(s[ac]ss|css)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { modules: true } },
        ],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      //   {
      //     test: /\.s[ac]ss$/,
      //     use: [
      //       { loader: MiniCssExtractPlugin.loader },
      //       { loader: "css-loader", options: { modules: true } },
      //       { loader: "sass-loader" },
      //     ],
      //   },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: '[name].bundle.js',
    clean: true,
    asyncChunks: true,
    chunkFilename: '[name].[id].js',
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.html'),
      filename: 'anotherFileName.html',
      favicon: path.resolve(__dirname, '..', './public/favicon.ico'),
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'public', to: 'public' }],
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
