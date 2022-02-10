const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    scroll: './src/scroll-reveal.js',
    app: './src/app.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};