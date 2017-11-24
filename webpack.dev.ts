import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import * as path from 'path';
import {Configuration, DefinePlugin} from 'webpack';

const config: Configuration = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },

    devtool: 'source-map',
    devServer: {
        historyApiFallback: true
    },

    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: '/node_modules/',
                use: [{
                    loader: 'awesome-typescript-loader',
                    options: {
                        configFileName: 'tsconfig.dev.json'
                    }
                }]
            }, {
                test: /\.scss$/,
                exclude: '/node_modules/',
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'sass-loader',
                    query: {
                        sourceMap: true
                    }
                }]
            }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([{
            from: 'src/index.html'
        }]),
        new DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            }
        })
    ]
};

export = config;
