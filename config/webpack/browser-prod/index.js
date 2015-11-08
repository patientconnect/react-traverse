import path from 'path';
import webpack from 'webpack';

export default {
  context: path.join(__dirname, '..', '..', '..'),
  target: 'web',
  debug: false,
  devtool: 'inline-source-map',
  output: {
    filename: 'index.min.js',
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          ignore: ['node_modules', 'dist'],
          presets: ['./config/babel/browser-prod'],
          sourceMaps: 'inline',
        },
      },
    ],
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: { except: ['GeneratorFunction'] },
    }),
  ],
  node: {
    console: true,
    global: true,
    process: 'mock',
    Buffer: true,
    __filename: 'mock',
    __dirname: 'mock',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};