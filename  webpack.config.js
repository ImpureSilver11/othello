const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = [
  {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: './dist/bundle.js',
      path: path.join(__dirname, './dist/'),
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
    ],
  },
];