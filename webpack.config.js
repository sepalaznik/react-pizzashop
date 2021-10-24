const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: '/dist',
        filename: "main.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                type: 'asset/resourse',
                use: ['file-loader', 'url-loader']
            }
        ]
    },
    devServer: {
        port: 3000,
        watchContentBase: true,
        historyApiFallback: true
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
}
