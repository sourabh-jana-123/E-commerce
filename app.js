const express = require('express')
const cookieParser = require("cookie-parser")
const swaggerUI = require("swagger-ui-express");
const docs = require('./docs/index');
const errorHandler = require('./middleware/error')

const app = express()
app.use(express.json())
app.use(cookieParser())

const product = require('./routes/product.route')
const user = require('./routes/user.route')
const order = require('./routes/order.route')


app.use('/api/v1', product)
app.use('/api/v1', user)
app.use('/api/v1', order)
app.use('/',swaggerUI.serve,swaggerUI.setup(docs));
app.get('/', (req, res) => {
    res.send('<h1>Done</h1>')
})

// Middleware
app.use(errorHandler)

module.exports = app