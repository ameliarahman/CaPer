const svgCaptcha = require('svg-captcha');

generateCaptcha = (req, res) => {
  // let abj = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890'
  // let randomCar = ''
  // for (let index = 0; index < 5; index++) {
  //   randomCar += abj[index]
  // }

  var captcha = svgCaptcha(req.body.random, {
    size: 5,
    color: true
  });

  res.type('svg');
	res.status(200).send(captcha);
}

module.exports = {
  generateCaptcha
}