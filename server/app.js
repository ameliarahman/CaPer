const express = require('express')
const app = express()
const svgCaptcha = require('svg-captcha');

const bodyParser = require('body-parser')
const captcha = require('./routes/captcha')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/captcha', captcha)

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000...')
})