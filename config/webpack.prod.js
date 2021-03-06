const path = require('path');
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
    filename: '[name].[chunkhash:8].js',
    path: path.resolve(__dirname, '../docs'),  // 必须为绝对路径
    publicPath: '/website/'  // 可通过 __webpack_public_path__ 设置
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // exclude: /node_modules/,
        use: ['babel-loader']
      },

      {
        test: /\.(css|less)$/,
        // exclude: /node_modules/,
        use: ExtractTextPlugin.extract({  // 提取 css 到单独的样式文件
          // publicPath: 'https://mjrhd.vipstatic.com/',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true  // 压缩
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
        })
      },

      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:6].[ext]'
              // outputPath: 'images/'  // 用于将图片打包至指定目录，已被发布到单独的图片域
              // publicPath: 'https://mjrhd.vipstatic.com/'   // 用于指定图片资源发布路径
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              }
            }
          },
        ]
      },
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['../docs'], {allowExternal: true}),   // 每次构建前清理 docs 文件夹

    new webpack.DefinePlugin({
      'process.env': {    // 配置系统环境变量
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // 生成一个HTML文件
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.HashedModuleIdsPlugin(),   // 作用：用给予模块相对路径生成的hash作为模块标识符。建议在production模式中使用此插件。

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
    // 经过之前的处理，会产生 main.js、vendor.js 、manifest.js 3 个 js 文件。
    // 其中 main.js 和 vendor.js 中有样式信息，此插件中从中提取样式信息并生成 2 个 css 文件。
    // 所以一下配置中的 filename 字段不能指定成一个固定的名称。
    // 例如，如果指定成 style.css，则会先后生成 2 个 style.css 文件，后一个文件会覆盖前一个，最终只有 1 个 style.css，那么部分样式信息就丢失了。
    new ExtractTextPlugin({
      filename: '[name].[contenthash:8].css',
      allChunks: true
    }),

    // 压缩 js
    new UglifyJsPlugin({
      uglifyOptions: {
        ecma: 8
      }
    }),
  ],

  resolve: {
    modules: [
      './src',    // 从项目根目录下的 src 文件夹里搜索自定义模块
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.json']
  }

};

module.exports = config;