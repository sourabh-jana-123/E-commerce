const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect(`${process.env.DB_URI}`).then((data) => {
        console.log(`Mongodb is connected with server: ${data.connection.host}`)
    }).catch((error) => {
        console.log(error)
    })
}

module.exports = connectDB