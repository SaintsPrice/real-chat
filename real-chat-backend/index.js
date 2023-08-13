require('dotenv').config()
const express = require('express')
const cors = require('cors')
const moongose = require('mongoose')

const errorHandler = require('../middlewares/ErrorHandlingMiddleware')

const {PORT = 5005, MONGO_URI} = process.env

const app = express()

app.use(cors())

app.use(express.json())

app.use(errorHandler)

app.get('/', (req, res) => res.status(200).json({message: 'Сервер запущен'}))


start = async() => {
    try {
        await moongose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порту`))
    }
    catch(e) {
        console.log(e)
        return res.status(500).json(e)
    }
}

start()