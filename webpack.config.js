var libName = 'module-bojler';

var webpack = require('webpack');
var path = require('path');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;
var plugins = [];

var outputFileName = libName + '.js';

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFileName = libName + '.min.js';
}

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: './lib',
    filename: outputFileName,
    library: libName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      umd: 'react'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  plugins: plugins
};
