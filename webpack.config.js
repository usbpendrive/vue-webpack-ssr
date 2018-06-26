const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    devServer: {
        overlay: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "template.html")
        }),
        new VueLoaderPlugin()
    ]
};