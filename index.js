if (process.env.NODE_ENV === 'production') {
    module.exports = require('./lib/vdom.min.js')
} else {
    module.exports = require('./lib/vdom')
}