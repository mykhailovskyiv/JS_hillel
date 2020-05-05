const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({
    mode: 'development',
    entry: './src/script.ts',
    resolve: {
        extensions: ['.js', '.ts'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
});
