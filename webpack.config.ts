import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const paths = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist')
};

const webpackConfig = () => {
    return {
        context: paths.src,
        entry: './index.tsx',
        mode: 'development',
        output: {
            path: paths.dist,
            filename: '[name].bundle.js'
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        },
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html'
            })
        ]
    }
};

export default webpackConfig();