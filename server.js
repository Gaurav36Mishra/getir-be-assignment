const app = require('./app')
const { connectDB } = require('./database/connection')

const PORT = process.env.PORT

connectDB().then(() => {
    console.log('DB connection successful')
    app.listen(PORT, () => {
        console.log(`Server started and listening to ${PORT}`)
    })
}).catch((error) => {
    console.log('Error in connection: ', error)
})

