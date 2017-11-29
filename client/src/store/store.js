import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

const store = new Vuex.Store({
  state: {
    user: []
  },
  mutations: {
    setUser: function (state, payload) {
      state.user = payload
      console.log(state.user)
    }
  },
  actions: {
    loginFB: function (context, payload) {
      http.post('/user/signup', {
        username: payload.name,
        score: null,
        fbID: payload.id
      })
      .then(({data}) => {
        localStorage.setItem('qwerty', payload.id)
        if (data === `Facebook ${payload.name} already used!`) {
          http.post('/user/signin', {
            fbID: localStorage.qwerty
          })
          .then(({data}) => {
            localStorage.setItem('zxcvb', data)
            context.commit('setUser', data)
          })
        } else {
          http.post('/user/signin', {
            fbID: localStorage.qwerty
          })
          .then(({data}) => {
            localStorage.setItem('zxcvb', data)
            context.commit('setUser', data)
          })
        }
      })
    }
  }
})

export default store
