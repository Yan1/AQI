var path = require('path'),
    webpack = require('webpack');

var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env) {
    return {
        entry: path.resolve(__dirname, './src/main.js'),
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[name].js'
        },
        devtool: 'cheap-eval-source-map',
        module: {
            rules: [
                {
                    test: /\.js[x]?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: ExtractTextWebpackPlugin.extract({
                        fallback: 'style-loader',
                        use: 'css-loader',
                        publicPath: '/dist'
                    })
                },
                {
                  test: /\.(woff|svg|eot|ttf)(\?.*)?$/,
                  loader: 'url-loader?limit=5000',
                  // TODO
                  query: {
                    useRelativePath: true
                  }
                },
                {
                  test: /\.(png|jpg|gif)$/,
                  loader: 'ul-loader?limit=819200'  // 819200字节
                }
            ]
        },
        plugins: [
            new ExtractTextWebpackPlugin({
                filename: 'bundle.css'
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.resolve(__dirname, './src/index.html')
            })
        ]
    }
}
