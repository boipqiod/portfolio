const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'development',
    stats: {
        children: true
    },
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inlineSource: '.(js|css)$',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new HtmlInlineScriptPlugin()
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            terserOptions: {
                compress: {
                    drop_console: true,
                    drop_debugger: true,
                },
                mangle: true,
            },
        })],
    },

};
