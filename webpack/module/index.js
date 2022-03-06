const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
  const cssLoaders = (extra) => {
    const loaders = [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {},
      },
      'css-loader',
    ];

    if (extra) {
      loaders.push(extra);
    }

    return loaders;
  };

  const jsLoaders = () => {
    const loaders = [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    ];

    return loaders;
  };

  const config = {
    rules: [
      {
        test: /\.(html)$/,
        use: ['html-loader'],
      },
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader'),
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/inline',
        // type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
    ],
  };

  return config;
};
