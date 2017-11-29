'use strict'

var firebase = require("firebase");
var config = {
    apiKey: "AIzaSyA5Eb95TBp3CAejQ6r0MLRr92Yj4wqXiVI",
    authDomain: "caper-c5657.firebaseapp.com",
    databaseURL: "https://caper-c5657.firebaseio.com",
    projectId: "caper-c5657",
    storageBucket: "caper-c5657.appspot.com",
    messagingSenderId: "624746014154"
};
firebase.initializeApp(config);

var db = firebase.database()

module.exports = db