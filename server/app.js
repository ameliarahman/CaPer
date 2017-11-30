const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const svgCaptcha = require('svg-captcha');

app.use(cors())
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// ROUTES
const captcha = require('./routes/captcha')
const user = require('./routers/user')

app.use('/captcha', captcha)
app.use('/user', user)

app.listen(process.env.PORT_DEF, () => {
  console.log(`AYO JALAN!`)
})

module.exports = app
