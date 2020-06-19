import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/global.css'
import axios from 'axios'
import 'vue-beauty/package/style/vue-beauty.min.css'
import vuescroll from 'vuescroll'
import vueBeauty from 'vue-beauty'
import './assets/icon/font/iconfont.css'
import './assets/icon/font/iconfont.js'
import './assets/icon/font2/iconfont.css'
import './assets/icon/font2/iconfont.js'
import './assets/icon/font3/iconfont.css'
import './assets/icon/font3/iconfont.js'
// import VueSocketIO from 'vue-socket.io'
// import SocketIO from 'socket.io-client'
import VideoPlayer from 'vue-video-player'
import { Radio, RadioGroup, RadioButton, Checkbox, CheckboxButton, CheckboxGroup } from 'element-ui'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

Vue.prototype.$axios = axios
axios.defaults.baseURL = '/foo'
// axios.defaults.withCredentials = true
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.localStorage.getItem('access_token')
  // config.headers.refresh_token = window.localStorage.getItem('refresh_token')
  return config
})

// // const options = { path: '/my-app/' } // Options object to pass into SocketIO
// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: SocketIO('http://chatroom.mr-lin.site'), // options object is Optional
//   vuex: {
//     store,
//     actionPrefix: 'SOCKET_',
//     mutationPrefix: 'SOCKET_'
//   }
// })
// )

Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)

Vue.use(vueBeauty)
Vue.use(vuescroll)
Vue.use(VideoPlayer)
Vue.prototype.$vuescrollConfig = {
  bar: {
    background: '#cecece',
    minSize: 0.2,
    opacity: 0.8,
    specifyBorderRadius: '5px',
    onlyShowBarOnScroll: false
  }
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
