const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (isProd) => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };

  if (isProd) {
    config.minimizer = [
      new CssMinimizerPlugin(),
    ];
  }

  return config;
};
