import path from "path";
import webpack from "webpack";
import {CheckerPlugin} from "awesome-typescript-loader";
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const env = process.env.MIX_ENV === 'prod' ? 'production' : 'development';


export default {
    devtool: 'source-map',
    entry: [
        path.join(__dirname, 'assets/js/app.tsx'),
    ],
    output: {
        path: path.join(__dirname, '/priv/static'),
        filename: 'js/app.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loaders: ['awesome-typescript-loader'],
                include: path.join(__dirname, 'assets/js'),
                exclude: /node_modules/
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([
            path.join(__dirname, 'priv/static')
        ]),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(env)
            }
        }),
        new CheckerPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new CopyWebpackPlugin([
            {from: path.join(__dirname, 'assets', 'static')}
        ])
    ],
    resolve: {
        modules: [
            'node_modules',
            'assets/js'
        ],
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            phoenix: path.join(__dirname, '/deps/phoenix/priv/static/phoenix.js'),
            phoenix_html: path.join(__dirname, '/deps/phoenix_html/priv/static/phoenix_html.js')
        }
    },
    optimization: {
        minimize: false
    }
}