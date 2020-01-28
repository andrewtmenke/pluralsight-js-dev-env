//import webpack from 'webpack';
import path from 'path';

module.exports = {
   mode: 'development',
   devtool: 'inline-source-map',
   entry: {
      main: path.resolve(__dirname, 'src/index.js')
   },
   target: 'web',
   output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'bundle.js'
   },
   devServer: {
      debug: true,
      noInfo: false
   },
   plugins: [],
   module: {
      rules: [
         { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
         { test: /\.css$/, use: ['style-loader','css-loader'] }
      ]
   }
}

/*
import path from 'path';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index.js')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
*/
