<template>
    <div>
        <h1>Ini Percobaan</h1>

        {{players}}
    </div>
</template>

<script>
import db from '@/firebase/firebase'
import {mapState} from 'vuex'
export default {
  name: 'Room',
  data () {
    return {
        rooms : 'hahah',
        score : 0,
        players:''
      }
  },
  computed:{
    ...mapState([
        'user'
    ])
  },
  methods : {
      insertIntoFirebase () {
          db.ref(`${this.rooms}/${this.user.username}`).set({
            score : this.score,
            isWinner:false
          })
      },
      selectDataFromFirebase(){
          let dataPlayer = db.ref(`${this.rooms}/`)
          dataPlayer.on('value', function(snapshot) {
               
              console.log(snapshot.val())
          })
      }
      
  },

  created(){
    this.selectDataFromFirebase()
    this.insertIntoFirebase()
  },
  mounted(){
      if (!localStorage.qwerty){
        this.$router.push('/login')
      }
      console.log(this.user)
  }

}
</script>



