const user = require('../models/user')

class User {

  static getData(req, res){
    user.getUser(result => {
      res.send(result)
    })
  }

  static signUp(req, res){
    user.signUp(req.body, (result, auth) => {
      if(result){
        res.send(result)
      }else{
        res.send(auth)
      }
    })
  }

  static signIn(req, res){
    user.signIn(req.body, (result) => {
      res.send(result)
    })
  }

}

module.exports = User