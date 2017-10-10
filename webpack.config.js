
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: path.join(__dirname, 'lib', 'index.ts'),
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'index.js',
    sourceMapFilename: 'index.map',
    libraryTarget: 'umd',
    library: 'node-shipping-dhl'
  },
  resolve: {
    extensions: [
      '.ts', '.js'
    ]
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: {
        loader: 'awesome-typescript-loader',
        options: {
          include: [
            'lib/**/*.ts'
          ],
          exclude: [
            /node_modules/
          ]
        }
      }
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: true,
      include: /\.min\.js$/
    })
  ]
};