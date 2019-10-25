/*eslint no-undef: "off"*/
const path = require('path');

module.exports = {
  entry: {
    index: 'src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    ffilename: '[name].js',
    libraryTarget: 'umd',
    library: 'MyLib',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: { minimizer: [] },
};
