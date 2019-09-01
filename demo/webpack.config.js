
module.exports = {
    entry: __dirname + '/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
    },
    // devServer: {
    //     contentBase: __dirname + 'dist',
    //     compress: true,
    //     port: 9000,
    //     host: 'localhost'
    // }
}