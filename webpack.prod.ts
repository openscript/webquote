import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import * as path from 'path';
import {Configuration, DefinePlugin, LoaderOptionsPlugin, optimize} from 'webpack';

const config: Configuration = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
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
                    loader: 'babel-loader',
                    options: {
                        presets: 'env'
                    }
                }, {
                    loader: 'awesome-typescript-loader',
                    options: {
                        configFileName: 'tsconfig.prod.json'
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
                        sourceMap: false
                    }
                }]
            }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([{
            from: 'src/index.html'
        }]),
        new LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                BASE_URL: JSON.stringify('/webquote')
            }
        }),
        new optimize.UglifyJsPlugin(),
        new optimize.ModuleConcatenationPlugin()
    ]
};

export = config;
