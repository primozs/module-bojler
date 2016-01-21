var path = require('path');
var fileName = 'index';
var libName = 'ModuleBoiler';

function createConfig(target) {
  return {
    entry: './src/index.js',
    output: {
      path: './dist',
      //filename: fileName + '.' + target + '.js',
      filename: 'index.js',
      library: libName,
      libraryTarget: target
    },
    externals: {
      react: {
        root: 'React',
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react'
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
        }
      ]
    }
  };
}

//module.exports = [
//  createConfig('umd'),
//  createConfig('var'),
//  createConfig('amd'),
//  createConfig('umd')
//];

module.exports = createConfig('commonjs2');
