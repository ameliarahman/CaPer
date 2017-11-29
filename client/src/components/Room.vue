<template>
    <div>
        <h1>Ini Percobaan</h1>
    </div>
</template>

<script>
import db from '@/firebase/firebase'
export default {
  name: 'Room',
  data () {
    return {
        username : "AmeliaRahman",
        rooms : 'abc'
      }
  },
  methods : {
      insertIntoFirebase () {
          db.ref(`${this.rooms}/${this.username}`).set({
            score : 10,
            isWinner:false
          })
      },
      selectDataFromFirebase(){
          
      }
      
  },
  created(){
    /* this.insertIntoFirebase() */
  }
}
</script>



