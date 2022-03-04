module.exports = function () {
  const isDev = process.env.NODE_ENV === 'development';
  const isProd = !isDev;

  let mode = 'development';
  if (isProd) {
    mode = 'production';
  }

  const filename = (ext) => (isDev ? `[name].[hash].${ext}` : `[name].${ext}`);

  const config = {
    mode,
    devtool: isDev ? 'source-map' : 'eval',
    entry: require('./entries'),
    output: require('./output')(filename),
    resolve: require('./resolve'),
    plugins: require('./plugins')(filename),
    module: require('./module')(isDev, isProd),
    optimization: require('./optimization')(isProd),
    devServer: require('./devServer'),
  };

  return config;
};
