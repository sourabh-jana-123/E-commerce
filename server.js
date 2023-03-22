const app = require('./app');
const dotenv = require('dotenv');
const connectDB = require('./config/database')

// Handling uncaugth exeption
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`)
    console.log('Sutting down the server due to uncaugth exeption.')
    process.exit(1)
})

dotenv.config({ path: 'config/config.env' })

// connect database
connectDB()

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running @ http://localhost:${process.env.PORT}`)
})

// Unhandled promise rejection
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`)
    console.log('Sutting down the server due to unhandle promise rejection.')

    server.close(() => {
        process.exit(1);
    })
})