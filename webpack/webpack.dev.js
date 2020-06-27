const common = require('./webpack.base.js');
const merge = require('webpack-merge');

module.exports = merge(common, {
    mode: "development",
  devtool: 'inline-source-map',

  devServer: {
    contentBase: false,
    host: '0.0.0.0',
    port: '3000',
    watchOptions: {
        ignored: /node_modules/,
    },
},
});