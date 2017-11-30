<template>
  <div>
    <div class="ui header inverted">
      <img src="../assets/img/logo.png" alt="logo" class="ui image logo">
      <h1>Waiting Player . . .</h1>
    </div>
    <div class="row room">
      <h3>Room Name : {{room.roomname}}</h3>
      <h4>Level : {{room.captcha}}</h4>
      <div class="ui grid stackable centered">
        <div class="seven wide column center aligned">
          <i>"We do not stop playing because we grow old, we grow old because we stop playing!"</i>
          <div class="ui divider"></div>
          <div class="ui active centered inline loader"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/firebase'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'Room',
  data () {
    return {
       score : 0,
       username:''
      }
  },
  computed:{
    ...mapState([
        'user',
        'room'
    ])
  },
  methods : {
      ...mapActions([
          'createRoom'
      ]),

      insertIntoFirebase () {
          db.ref(`${this.room.roomname}/${this.user.username}`).set({
            score : this.score,
            level : this.room.captcha,
            isWinner:false
          })
      },
      selectDataFromFirebase(){
        
      }
      
  },

  created(){
    console.log("haloooooooooooooooooooo",this.room)
    this.insertIntoFirebase()
  },
  mounted(){
      let self = this
      if (!localStorage.qwerty){
        this.$router.push('/login')
      }

      let dataPlayer = db.ref(`${this.room.roomname}/`)
          dataPlayer.on('value', function(snapshot) {
               
              self.username = snapshot.val()
    })

    console.log("halooooooooooo", this.username)
  }

}
</script>



