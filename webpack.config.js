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
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|svg)$/, // 이미지 파일 확장자
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: Infinity, // 파일 크기 제한 없이 모든 파일을 인라인으로 추가
                        }
                    }
                ]
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
    // optimization: {
    //     minimize: true,
    //     minimizer: [new TerserPlugin({
    //         terserOptions: {
    //             compress: {
    //                 // drop_console: true,
    //                 // drop_debugger: true,
    //             },
    //             mangle: true,
    //         },
    //     })],
    // },

};
