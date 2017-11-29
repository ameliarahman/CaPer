const mongoose = require('mongoose')
const URI = process.env.DB_NAME
const jwt = require('jsonwebtoken')
const Schema = mongoose.Schema

mongoose.connect(URI, { useMongoClient: true })

let user = new Schema({
  username: String,
  score: Number,
  fbID: {
    type: String,
    index: true,
    unique: true
  }
})

let User = mongoose.model('User', user)

function getUser(cb){
  User.find({}, (err, user) => {
    if(err) res.status(500).send(err)
    cb(user)
  })
}

function signUp(body, cb){
  let userSchema = new User({
    username: body.username,
    score: body.score,
    fbID: body.fbID
  })
  userSchema.save((err, user) => {
    if(err){
      if(err.message.indexOf('fbID_1') !== -1){
        let errorUser = `Facebook ${body.username} already used!`
        cb(null, errorUser)
      }
    }else{
      cb(user, null)
    }
  })
}

function signIn(body, cb){
  User.find({
    fbID: body.fbID
  }, (err, user) => {
    if(user.length > 0){
      let obj = {
        id: user[0]._id,
        username: user[0].username
      }
      let token = jwt.sign(obj, process.env.SECRET_KEY)
      cb(token)
    }
  })
}

module.exports = {
  getUser,
  signUp,
  signIn
}