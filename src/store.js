import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {
    
  },
  actions: {
    signUp({commit}, authData) {
      axios.post('/signupNewUser?key=AIzaSyBTPbyptcY8LRq0vZQ88nfqhQP7tsQgQ7E', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    },
    login({commit}, authData) {
      axios.post('/verifyPassword?key=AIzaSyBTPbyptcY8LRq0vZQ88nfqhQP7tsQgQ7E', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  },
  getters: {

  }
})