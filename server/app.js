const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// ROUTES

const user = require('./routers/user')

app.use('/user', user)

app.listen(process.env.PORT_DEF, () => {
  console.log(`AYO JALAN!`)
})

module.exports = app