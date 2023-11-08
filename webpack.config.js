const path = require('path')
const webpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    name: 'react-project',
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        app: ['./src/index.js']
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: [
                                'last 2 chrome versions',
                                '> 5% in KR'
                            ]
                        },
                        debug: true
                    }],
                    '@babel/preset-react'
                ],
                plugins: [
                    'react-refresh/babel'
                ]
            }
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader", "postcss-loader"],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [{ loader: "file-loader" }],
          },]
    },

    plugins: [
        new webpackPlugin()
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        },
        compress: true,
        port: 3000,
        hot: true,
        historyApiFallback: true
    },
}