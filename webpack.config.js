const webpack = require('webpack');
const path = require('path');
const outputPath = path.resolve(__dirname);
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  mode: 'development',
  entry: {
    app: [
      path.resolve(__dirname, './src/index.js')
    ]
  },
  output: {
    path: outputPath,
    filename: '[name].js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, './src/assets/'),
        use: 'url-loader?limit=10000=assets/[name]-[hash].[ext]'
      }
    ]
  },
  resolve: {
    alias: {
      containers: path.resolve(__dirname, './src/containers'),
      components: path.resolve(__dirname, './src/components'),
      actions: path.resolve(__dirname, './src/actions'),
      reducers: path.resolve(__dirname, './src/reducers'),
      store: path.resolve(__dirname, './src/store'),
      assets: path.resolve(__dirname, './src/assets')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/assets/index.html'),
      filename: 'index.html',
      path: outputPath
    }),
    new webpack.NamedModulesPlugin(), // outputs to the console changed components/modules 
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 8080,
    historyApiFallback: true,
    inline: true,
    hot: true,
    host: '0.0.0.0'
  }
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    webpackConfig.devtool = 'source-map'
  }

  if (argv.mode === 'production') {
    // ...
  }

  return webpackConfig;
};