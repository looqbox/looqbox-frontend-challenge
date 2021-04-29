const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: 'eval-source-map',
  entry:path.resolve(__dirname,'src','index.tsx'),
  output:{
    path: path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },
  resolve:{
    extensions: ['.ts','.tsx','.js','jsx'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public', 'index.html'),
    hot:true,
  },  
  plugins : [
    isDevelopment && new ReactRefreshWebpackPlugin(), 
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'public', 'index.html')
    })
  ].filter(Boolean),
  module: {
    rules: [
      {
        test:/\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins:[
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
        },
      }
    ],
  }
};