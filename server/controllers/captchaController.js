const svgCaptcha = require('svg-captcha');

generateCaptcha = (req, res) => {
  var captcha = svgCaptcha.create({
    size: 5,
    ignoreChars: '0o1i',
    color: true
  });
  res.type('svg');
	res.status(200).send(captcha.data);
}

module.exports = {
  generateCaptcha
}