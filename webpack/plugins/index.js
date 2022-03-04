const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (filename) => {
  const base = [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../src/index.html'),
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../src/contacts.html'),
      filename: 'contacts.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../src/situations.html'),
      filename: 'situations.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../src/situation.html'),
      filename: 'situation.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../src/services.html'),
      filename: 'services.html',
    }),
    new MiniCssExtractPlugin({
      filename: `./styles/${filename('css')}`,
    }),
  ];
  return base;
};
