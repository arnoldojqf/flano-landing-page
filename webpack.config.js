const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const isProduction = argv.mode === "production";
const isProduction = true;
const isDevelopment = !isProduction;

module.exports = {  
  devtool: isDevelopment && "cheap-module-source-map",
  entry: {
    index: './src/index.js',
    scroll: './src/scroll-reveal.js',
    app: './src/app.js',
    menu: './src/menu.jsx',
    example: './src/example.less'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            envName: isProduction ? "production" : "development"
          }
        }
      },
      { 
        test: /\.less$/, // .less and .css
        use: [ 
            'style-loader', 
            'css-loader', 
            'less-loader'
        ],
      },
    ]
  },
  plugins: isProduction ? [new MiniCssExtractPlugin()] : [],
  resolve: {
    extensions: [".js", ".jsx"]
    },
};