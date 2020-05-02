const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', //    3. inject stye into dom
          'css-loader', //  2. turns css into commonjs
          // 'sass-loader'//    1. turns sass into css
        ],
      },
    ],
  },
});
