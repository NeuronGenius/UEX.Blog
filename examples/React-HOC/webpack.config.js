/*
 * @Author: liyang 
 * @Date: 2018-10-20 00:06:47 
 * @Last Modified by: liyang
 * @Last Modified time: 2018-10-21 12:09:34
 */
const path = require('path')
const PORT = 3000
const HOST = 'localhost'
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => {
  const options = {
    mode: 'development',
    devServer: {
      contentBase: [path.resolve(__dirname, 'dist')],
      port: PORT,
      host: HOST,
      open: true,
      historyApiFallback: true
    },
    entry: [
      `webpack-dev-server/client?http://${HOST}:${PORT}`,
      path.resolve(__dirname, 'src/index.js')
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'build.js',
      publicPath: `http://${HOST}:${PORT}/`
    },
    module: {
      rules: [
        {
          test: /\.js[x]?$/,
          use: [
            {
              loader: 'babel-loader'
            }
          ],
          exclude: '/node_modules/',
          include: [path.resolve('src')]
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                javascriptEnabled: true,
                minimize: false,
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.html')
      })
    ]
  }

  return options
}
