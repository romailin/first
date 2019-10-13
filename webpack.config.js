const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config =
module.exports = {

        context: path.resolve(__dirname, 'src'),
        entry: './index.jsx',

        output: {
                path: path.resolve(__dirname, 'public'),
                publicPath: '/',
                filename: 'bundle.js',
        },

        resolve: {
                extensions: ['.js', '.styl'],
                modules: [
                        path.resolve(__dirname, 'src'),
                        path.resolve(__dirname, 'node_modules'),
                        'node_modules'
                ]
        },

        module: {
                rules: [
                        {
                                test: /\.jsx?$/,
                                exclude: /node_modules/,
                                loader: 'babel-loader',
                                options: {
                                        presets: ["@babel/preset-env"],
                                        plugins: [
                                                ["@babel/plugin-transform-react-jsx"],
                                                ["@babel/plugin-proposal-decorators", {legacy: true}],
                                                ["@babel/plugin-proposal-class-properties", {loose: true}]
                                        ]
                                }
                        },
                        {
                                test: /\.styl$/,
                                use: ['style-loader', 'css-loader', 'stylus-loader']
                        }
                ]
        },

        plugins: [
                new HtmlWebpackPlugin()
        ]
}

config.devServer = {
        contentBase: config.output.path,
        host: '127.0.0.1',
        port: 8081,
        disableHostCheck: true,
        historyApiFallback: true
}