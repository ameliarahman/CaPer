var svgCaptcha = require('svg-captcha')
 module.exports = function() {
  var captcha = svgCaptcha.create();

  return captcha
 }