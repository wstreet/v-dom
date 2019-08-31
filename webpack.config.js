const TerserPlugin = require('terser-webpack-plugin')


module.exports = {
    mode: 'none',
    entry: {
        'vdom': './src/index.js',
        'vdom.min': './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
        library: "vdom",
        libraryExport: 'default',
        libraryTarget: 'umd'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/
            })
        ]
    }
}