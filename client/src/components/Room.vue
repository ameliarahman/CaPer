<template>
    <div>
        <h1>Ini Percobaan</h1>
        {{username}}
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



