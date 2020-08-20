const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = (env = {}) => ({
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: path.resolve(__dirname, './src/main/index.ts'),
  output: {
    path: path.resolve(__dirname, './public/js'),
    publicPath: '/public/js/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      vue: '@vue/runtime-dom'
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  devServer: {
    inline: true,
    hot: true,
    stats: 'minimal',
    contentBase: path.resolve(__dirname, './public'),
    overlay: true,
    writeToDisk: true,
    historyApiFallback: true
  }
})
