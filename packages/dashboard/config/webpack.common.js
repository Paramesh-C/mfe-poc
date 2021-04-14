const { resolve, join } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webcomponentsjs = './node_modules/@webcomponents/webcomponentsjs';

const polyfills = [
  {
    from: resolve(`${webcomponentsjs}/webcomponents-*.{js,map}`),
    to: join('dist', 'vendor'),
    flatten: true
  },
  {
    from: resolve(`${webcomponentsjs}/bundles/*.{js,map}`),
    to: join('dist', 'vendor', 'bundles'),
    flatten: true
  }
];


module.exports = {
  entry: './src/my-app.js',
  output: {
    filename: 'dist/[name].[contenthash].js',
    chunkFilename: 'dist/[name].[contenthash].[id].js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
     rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      }, 
    ],
  },
  plugins: [
    new CopyWebpackPlugin(polyfills),
  ],
};
