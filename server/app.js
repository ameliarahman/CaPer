const express = require('express')
const app = express()
const svgCaptcha = require('svg-captcha');

const captcha = require('./routes/captcha')

app.use('/captcha', captcha)

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000...')
})