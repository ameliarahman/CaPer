<template>
   <div>
    <div class="ui header inverted">
      <img src="../assets/img/logo.png" alt="logo" class="ui image logo">
      <h3>{{user.username}}</h3>
      <h1>Point</h1>
     
      <h1 style="font-size:50px;">
        {{score}}

      </h1>
    </div>
    <div class="row room">
      <div class="ui grid stackable centered">
        <div class="seven wide column center aligned">
          <span v-html="captcha"></span>
          <div class="ui divider"></div>
          <div class="ui big icon input stackable">
            <input placeholder="Input Captcha.." type="text" v-on:keyup.enter="submit" v-model="answer">
            <i class="send icon"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import db from '@/firebase/firebase'
import axios from 'axios'
import {mapState, mapActions} from 'vuex'

export default {
  data () {
    return {
      answer: '',
      captcha: '',
      random: '',
      score:0,
      username:'',
      level: '',
      isWinner:''
    }
  },
  computed:{
    ...mapState([
        'user',
        'room'
    ])
  },
  methods: {
    submit () {
      
      if (this.answer === this.random) {

        this.score++
        db.ref(`${this.room.roomname}/${this.user.username}`).set({
            score : this.score,
            level : this.room.captcha,
            isWinner:false
          })
        // console.log('sama')
        this.answer = ''
        this.getCaptcha()
      } else {
        window.alert('Salah Broo!!')
        this.answer = ''
      }
      console.log(this.score)
      console.log(this.level)
      if(this.score == this.level) {
        console.log('menang')
        db.ref(`${this.room.roomname}/${this.user.username}`).set({
            score : this.score,
            level : this.room.captcha,
            isWinner:true
          })
          db.ref(`${this.room.roomname}/isWinner`).set({
            name : this.user.username
          })
          // this.isWinner = this.username.isWinner
        
        let dataPlayer = db.ref(`${this.room.roomname}/`)
        dataPlayer.on('value', function(snapshot) {
        self.username = snapshot.val()

        })
        // let dataUser = this.user.username
      
        if(this.username.isWinner){
          alert(this.username.isWinner.name + " Menanggggg!!!")
        }
      }
    },
    getCaptcha () {
      let abj = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890'
      let randomCar = ''
      for (let index = 0; index < 5; index++) {
        let r = Math.floor(Math.random()*abj.length)
        // console.log(r)
        randomCar += abj[r]
      }
      this.random = randomCar

      axios.post('http://localhost:3000/captcha',{
        random: randomCar
      })
      .then(({data}) => {
        this.captcha = data
      })
    }
  },
  created () {
    this.getCaptcha()
  },
  mounted(){
    
    let self = this
    let dataPlayer = db.ref(`${this.room.roomname}/`)
          dataPlayer.on('value', function(snapshot) {
          self.username = snapshot.val()

    })


    this.level = this.room.captcha
  }
  // watch:{
  //   isWinner: function(winner){
  //     // console.log('ini bukanS',winner)
      
  //   }
  // }
}
</script>

<style>

</style>
