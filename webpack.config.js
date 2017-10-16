var rucksack = require('rucksack-css')
var webpack = require('webpack')
var path = require('path')
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.join(__dirname, './client'),
    performance: {
        hints: false
    },
    entry: './index.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {

        rules: {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {}
                }
            ]
        },
        loaders: [
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            }, {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            }, {
                test: /\.css$/,
                include: /client/,
                loaders: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]', 'postcss-loader']
            }, {
                test: /\.css$/,
                exclude: /client/,
                loader: 'style!css'
            }, {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader']
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "class-to-classname"
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    postcss: [rucksack({autoprefixer: true})],
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new CopyWebpackPlugin([
            {
                from: 'assets/**/*',
                to: 'assets'
            }, {
                from: 'index.html',
                to: 'index.html'
            }
        ])
    ],
    devServer: {
        contentBase: '/client',
        hot: true
    }
}
