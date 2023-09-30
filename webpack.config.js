const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'), 
    filename: 'bundle.js'
  }, 
  module: {
    rules: [
      {
        test: /\.(?:js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }], ['@babel/preset-react', {targets: "defaults"}]
            ]
          }
        }
      }, 
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/, 
        use: ['style-loader', 'css-loader', 'sass-loader']
    }, 
      // {
      //   test: /\.json$/,
      //   loader: 'json-loader'
      // }
    ]
  }, 
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development', 
      template: 'index.html'
    })
  ], 
  devtool: 'source-map',
  devServer: {
    static: {
      publicPath: '/build', 
      directory: path.resolve(__dirname, 'build')
    },
    proxy: {
      '/': 'http://localhost:3000'
    }
  }
}