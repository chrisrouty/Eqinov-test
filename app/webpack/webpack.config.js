const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: './src/assets/js/app.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'assets/js/bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        port: 8008,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.twig$/,
                use: {
                    loader: 'twig-loader'
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            autoprefixer: {
                                browser: ["last 2 versions"]
                            },
                            plugins: () => [
                                autoprefixer
                            ]
                        }
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images/',
                            useRelativePath: true
                        }
                    },
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My Cool Website',
            template: './src/index.twig',
            minify: {
                html5: true,
                collapseWhitespace: true,
                caseSensitive: true,
                removeComments: true,
                removeEmptyElements: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: "assets/css/[name]-styles.css",
            chunkFilename: "[id].css"
        })
    ],
    node: {
        fs: "empty"
    }
};