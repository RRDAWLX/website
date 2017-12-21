const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: [
    'react-hot-loader/patch',
    './src/index.jsx',
  ],

  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
    publicPath: '/'  // 可通过 __webpack_public_path__ 设置
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      {
        test: /\.css$/,
        // exclude: /node_modules/,
        use: ExtractTextPlugin.extract({  // 提取 css 到单独的样式文件
          // publicPath: 'https://mjrhd.vipstatic.com/',
          use: ['css-loader']
        })
      },

      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
        ]
      },
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),   // 每次构建前清理 dist 文件夹
    // 压缩 js
    /*new UglifyJsPlugin({
      uglifyOptions: {
        ecma: 8
      }
    }),*/
    new HtmlWebpackPlugin(),  // 生成一个HTML文件
    new webpack.NamedModulesPlugin(),   // 作用：1、用路径标识模块，而不是用数字标识符，避免 vendor 的chunkhash 发生变化；2、用于开启模块热替换
    new webpack.HotModuleReplacementPlugin(),   // 用于开启模块热替换

    // 提取第三方库，此实例必须在 manifest 实例前面。
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    // 提取 manifest 文件
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),

    // 提取 css 到单独的样式文件
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
  ],

  devServer: {
    contentBase: './dist',
    hot: true   // 开启模块热替换
  }
};

module.exports = config;