const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const postsRouter = require('./routes/posts')

const DB_URI = process.env.MONGOLAB_URI
const APP_PORT = process.env.PORT || 3000

mongoose.connect(DB_URI, { useNewUrlParser: true })

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

postsRouter(app)

app.listen(APP_PORT, () => console.log('Listening on port ' + APP_PORT))
module.exports = app
