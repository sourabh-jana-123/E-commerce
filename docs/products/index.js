const createProduct = require("./createProduct");
const updateProduct = require("./updateProduct");

module.exports = {
    "/admin/product/:id": {
        put: {
            ...updateProduct
        },
        delete: {

        }
    },
    "/admin/product/new": {
        post: {
            ...createProduct
        }
    },
    "/product/:id": {
        get: {

        }
    },
    "/products": {
        get: {

        }
    }
}