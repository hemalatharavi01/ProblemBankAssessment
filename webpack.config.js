const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');
const glob = require('glob');

const parts = require('./webpack.parts');
const webpack = require('webpack');

const outputDirectory = 'dist';

const PATHS = {
  app: path.join(__dirname, 'src'),
};

const commonConfig = merge([
  {
    entry: './src/client/index.js',
    output: {
      path: path.join(__dirname, outputDirectory),
      filename: 'bundle.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development') }),
      new CleanWebpackPlugin([outputDirectory]),
      new HtmlWebpackPlugin({
        title: 'Problem Bank Assessment',
        template: './public/index.html',
        favicon: './public/favicon.ico',
      }),
    ],
  },
]);

const developmentConfig = merge([
  parts.loadEnv('http://localhost:8080'),
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT,
  }),
  parts.loadCSS(),
  parts.loadImages(),
  parts.loadFonts(),
]);

module.exports = (env) => {
  console.log(`env:`)
  console.log(env)
  if (env.production === true) {
    console.log("production")
    return merge(commonConfig, productionConfig );
  }

  console.log("development")
  const dev = merge(commonConfig, developmentConfig);
  console.log(dev);
  return dev;
  
};

