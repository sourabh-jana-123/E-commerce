const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then((data) => {
        console.log(`Mongodb is connected with server: ${data.connection.host}`)
    }).catch((error) => {
        console.log(error)
    })
}
module.exports = connectDB