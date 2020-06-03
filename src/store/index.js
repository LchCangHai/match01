import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showPopUp: false,
    popUpType: 1,
    courseInfo: {}
  },
  mutations: {
    openLogin (state) {
      state.showPopUp = true
    },
    closeLogin (state) {
      state.showPopUp = false
    },
    loginPop (state) {
      state.popUpType = 1
    },
    signUpPop (state) {
      state.popUpType = 2
    },
    retrievePop (state) {
      state.popUpType = 3
    },
    otherWayPop (state) {
      state.popUpType = 4
    },
    setCourseInfo (state, val) {
      state.courseInfo = val
    }
  },
  actions: {
  },
  modules: {
  }
})
