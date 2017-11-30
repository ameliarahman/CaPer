<template>
   <div>
    <div class="ui header inverted">
      <img src="../assets/img/logo.png" alt="logo" class="ui image logo">
      <h1>Point</h1>
      <h1 style="font-size:50px; font-family">0</h1>
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
import axios from 'axios'

export default {
  data () {
    return {
      answer: '',
      captcha: '',
      random: ''
    }
  },
  methods: {
    submit () {
      if (this.answer === this.random) {
        console.log('sama')
        this.answer = ''
        this.getCaptcha()
      } else {
        window.alert('Salah Broo!!')
        this.answer = ''
      }
    },
    getCaptcha () {
      let abj = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890'
      let randomCar = ''
      for (let index = 0; index < 5; index++) {
        let r = Math.floor(Math.random()*abj.length)
        console.log(r)
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
  }
}
</script>

<style>

</style>
