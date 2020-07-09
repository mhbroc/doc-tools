const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/doc-tools/' : '/',
    productionSourceMap: false,
    configureWebpack: {
        plugins: [
            // new BundleAnalyzerPlugin()
        ]
    },
    chainWebpack(config) {
        config.devtool('source-map')
    }
};