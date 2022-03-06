const path = require('path');

module.exports = (filename) => ({
  filename: `${filename('js')}`,
  path: path.resolve(__dirname, '../../dist'),
  assetModuleFilename: 'assets/[name][hash][ext]',
});
