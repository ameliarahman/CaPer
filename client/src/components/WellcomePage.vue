<template>
  <div>
    <div class="ui header inverted">
      <img src="../assets/img/logo.png" alt="logo" class="ui image logo">
      <h1>Wellcome, {{ user.username }}</h1>
    </div>

    <div class="row room">
      <div class="ui grid stackable centered">
        <div class="seven wide column center aligned">
          <p>Would you like to do..?</p>

          <div class="ui teal button fluid" id="create-room">
            Create Room
            <div class="ui modal create">
              <i class="close icon"></i>
                <div class="header">
                  Room
                </div>

                <div class="content">
                  <div class="ui form">
                    <div class="field">
                      <label>Room's Name</label>
                      <input type="text" name="room-name" v-model="game.roomname"  placeholder="Room's Name">
                    </div>
                    <div class="field">
                      <label>Level Captcha</label>
                      <input type="number" name="captcha"  v-model="game.captcha" placeholder="Captcha">
                    </div>
                  </div>
                </div>
                  
                <div class="actions">
                  <div class="ui positive right labeled icon button" @click="createRoom">
                    Create
                    <i class="checkmark icon"></i>
                  </div>
                </div>
            </div>
          </div>

          <div class="ui divider"></div>

          <div class="ui teal button fluid" id="data-room">
            Join Room
            <div class="ui modal room">
              <i class="close icon"></i>
              <div class="header">
                Room
              </div>
              <div class="content">
                <div class="ui segment" v-for="room in datarooms">
                  <p>{{room}}</p>
                </div>
                <div v-for="room in datarooms">
                    <button @click="selectRoom(room)">{{room}}</button>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/firebase'
import {mapState} from 'vuex'
export default {
  name: 'WelcomePage',
  data () {
    return {
        username : '',
        game:{
           roomname :'',
           captcha:0
        },
        datarooms:[],
        score:0
      }
  },
  computed: {
    ...mapState([
        'user'
    ])
  },
  methods :{
    createRoom(){
      
      console.log(this.game.roomname)
      db.ref(`${this.game.roomname}/`).set({
            level : this.game.captcha
          })
      db.ref(`${this.game.roomname}/${this.user.username}`).set({
            score : this.score,
            level : this.game.captcha
          })
      this.$store.dispatch('createRoom', this.game)
      
    },
    selectRoom(room){
      // let self = this
      var rootRef = db.ref();
      var urlRef = rootRef.child(`${room}`);
      urlRef.once("value", function(snapshot) {
        console.log(snapshot.val())
      })
      console.log(room)
      db.ref(`${room}/${this.user.username}`).set({
        score : this.score
      })
      this.$router.push('/game/play')
    },

    joinRoom(){
     this.datarooms = []
      let self = this
      var rootRef = db.ref();
      var urlRef = rootRef.child("/");
      urlRef.once("value", function(snapshot) {
        snapshot.forEach(function(child) {
         self.datarooms.push(child.key)
        
        })
      })
      
    }
  },
 
  mounted () {
    $('#create-room').on('click',()=>{
      $('.ui.modal.create')
      .modal('show')
    })

    $('#data-room').on('click',()=>{
      $('.ui.modal.room')
      .modal('show')
    })

    if (!localStorage.qwerty){
        this.$router.push('/login')
      }
    // }
      this.joinRoom()
      {/* console.log("yoooooo", this.user) */}
    }
    

  }

</script>

<style>

</style>
