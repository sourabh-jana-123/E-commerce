const auth = require('./auth');
const user = require('./users');
const product = require('./products');
const order = require('./orders')

module.exports = {
    paths: {
        ...auth,
        ...user,
        ...product,
        ...order
    }
}