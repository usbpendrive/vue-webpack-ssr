const VueLoaderPlugin = require('vue-loader/lib/plugin');
const merge = require("webpack-merge");
const serverConfig = require('./config/server');
const clientConfig = require('./config/client');

const commonConfig = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
};

module.exports = mode => {
    if (mode === "development") {
        return merge(commonConfig, clientConfig, {mode})
    }

    if (mode === "production") {
        return merge(commonConfig, serverConfig, {mode})
    }
};