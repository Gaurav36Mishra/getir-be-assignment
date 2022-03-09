const dotenv = require('dotenv')
const app = require('./app')

dotenv.config()

const { connectDB } = require('./database/connection')

const PORT = process.env.PORT || 8080

connectDB().then(() => {
    console.log('DB connection successful')
    app.listen(PORT, () => {
        console.log(`Server started and listening to ${PORT}`)
    })
}).catch((error) => {
    console.log('Error in connection: ', error)
})

