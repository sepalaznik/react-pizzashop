const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: __dirname+'/dist',
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
            },
            {
                test: /\.(woff(2)|eot|ttf|otf|svg)$/,
                type: 'asset/inline',
                use: ['file-loader', 'url-loader']
            }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: path.resolve(__dirname, './src'),
        watchContentBase: true,
        historyApiFallback: true,
        proxy: {
            "/**": {
                target: 'http://localhost:3001',
                secure: false 
            }
        }
    },
    plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, './src/index.html') })],
}
