const path = require('path');

module.exports = (filename) => ({
  filename: `${filename('js')}`,
  path: path.resolve(__dirname, '../../dist'),
  assetModuleFilename: 'assets/[path][name][ext]',
});
