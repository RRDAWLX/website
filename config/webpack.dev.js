const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {

  entry: [
    'react-hot-loader/patch',
    './src/index.jsx',
  ],

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'  // 可通过 __webpack_public_path__ 设置，如要使用 React 的 HMR，此处的值应设为 '/'。
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      {
        test: /\.(css|less)$/,
        // exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              // modules: true,  // 开启 css module
              minimize: false   // 不压缩
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')()]
            }
          },
          {
            loader: 'less-loader'
          },
        ]
      },

      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:6].[ext]'
            }
          },
        ]
      },
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['../dist'], {allowExternal: true}),   // 每次构建前清理 dist 文件夹

    new webpack.DefinePlugin({
      'process.env': {    // 配置系统环境变量
        'NODE_ENV': JSON.stringify('development')
      }
    }),

    // 生成一个HTML文件
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    // 作用：1、用路径标识模块，而不是用数字标识符，避免 vendor 的chunkhash 发生变化。
    // 2、用于开启模块热替换建。议在production模式中使用此插件。
    new webpack.NamedModulesPlugin(),
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
  ],

  resolve: {
      modules: [
        './src',    // 从项目根目录下的 src 文件夹里搜索自定义模块
        'node_modules',
      ],
      extensions: ['.js', '.jsx', '.json']
  },

  devServer: {
    contentBase: '../dist',
    // https: true,
    port: 8081,
    compress: true, // 开启 gzip 压缩
    historyApiFallback: true,   // 支持单页应用，用 index.html 响应 404 请求，不会响应被代理的请求。
    open: false,   // 是否自动在浏览器中打开页面,
    overlay: {    // 在网页中显示编译警告与错误
      warnings: true,
      errors: true
    },
    proxy: {
      /*'/pages/': {
        target: 'http:\/\/localhost:8081',
        pathRewrite: {
          '^/pages/': '/'
        }
      },*/
      '/api/': 'http:\/\/localhost:3001'  // 代理所有的异步请求
    },
    hot: true   // 开启模块热替换
  }

};

module.exports = config;