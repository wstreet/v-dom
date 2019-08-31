if (process.env.NODE_ENV === 'production') {
    module.exports = require('./dist/vdom.min.js')
} else {
    module.exports = require('./dist/vdom')
}