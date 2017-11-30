import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import router from '@/router/index'

Vue.use(Vuex)

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

const store = new Vuex.Store({
  state: {
    user: [],
    room :[]
  },
  mutations: {
    setUser: function (state, payload) {
      let decode = jwt.decode(payload)
      state.user = decode
      
    },
    setRoom: function(state, payload){
      state.room = payload
      // console.log('payload')
    }
  },
  actions: {
    loginFB: function (context, payload) {
      http.post('/user/signup', {
        username: payload.name,
        score: null,
        fbID: payload.id
      })
        .then(({ data }) => {
         
          localStorage.setItem('qwerty', payload.id)
          if (data === `Facebook ${payload.name} already used!`) {
            http.post('/user/signin', {
              fbID: localStorage.qwerty
            })
              .then(({ data }) => {
                localStorage.setItem('zxcvb', data)
                context.commit('setUser', data)
                router.push('/')
            
              })
          } else {
            http.post('/user/signin', {
              fbID: localStorage.qwerty
            })
              .then(({ data }) => {
                localStorage.setItem('zxcvb', data)
                context.commit('setUser', data)
                router.push('/')
               
              })
          }
        })
    },
    createRoom: function(context, payload){
      context.commit('setRoom', payload)
      router.push('/room')
    }
  }
})

export default store
