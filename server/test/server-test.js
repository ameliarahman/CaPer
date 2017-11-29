const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../app')
const should = chai.should()

chai.use(chaiHttp)

function getUser(){
  describe('/GET || get all user', () => {
    it('it should GET all user', (done) => {
      chai.request(server)
      .get('/user')
      .end((err, res) => {
        if(err) done(err)
        res.should.have.status(200)
        done()
      })
    })
  })
}

function signUp(){
  describe('/POST || signup user', () => {
    it('it should POST signup user', (done) => {
      chai.request(server)
      .post('/user/signup')
      .send({
        'username': 'username',
        'score': 10,
        'fbID': 'fbID'
      })
      .end((err, res) => {
        if(err) done(err)
        res.should.have.status(200)
        done()
      })
    })
  })
}

function signIn(){
  describe('/POST || signin user', () => {
    it('it should POST signin user', (done) => {
      chai.request(server)
      .post('/user/signin')
      .send({
        'fbID': '1619729858073369'
      })
      .end((err, res) => {
        if(err) done(err)
        res.should.have.status(200)
      })
      done()
    })
  })
}

getUser()
signUp()
signIn()