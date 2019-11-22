const path = require('path')

const config = {
  entry: './src/index.js',
  output: {
    filename: 'cn.compose.js',
    path: path.resolve(__dirname, "dist")
  },
  mode: 'production'
};

module.exports = config;