<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less" scoped>
#app {
  height: 100%;
  width: 100%;
}
#container {
  height: 100%;
  width: 100%;
  min-width: 800px;
  min-height: 400px;
  background: url("./assets/bc01.jpg") fixed;
}
</style>

<script>
import { mapMutations, mapState } from 'vuex'

// let vm
export default {
  name: 'App.vue',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'currentUser',
      'isSignUp'
    ])
  },
  methods: {
    ...mapMutations([
      'setCurrentUser',
      'setisSignUp'
    ]),
    getUserInfo () {
      this.$axios.get('/api/user/current')
        .then(res => {
          this.setCurrentUser(res.data.data)
          this.setisSignUp(true)
        }).catch(() => {
          this.$router.push('/unindex')
          this.$notification.error({
            message: '验证未通过',
            description: '未登录或登录过期',
            duration: 2
          })
          this.setisSignUp(false)
        }).finally(() => {
        })
    },
    getUserInfot () {
      this.$axios.get('/api/user/current')
        .then(res => {
          this.setCurrentUser(res.data.data)
          this.setisSignUp(true)
        }).catch(() => {
          this.$router.push('/unindex')
          console.log('未登录')
          this.setisSignUp(false)
        }).finally(() => {
        })
    },
    getHash () {
      let hash = 'none'
      hash = window.location.hash
      // console.log(hash)
      return hash
    }
  },
  // watch: {
  //   $route: {
  //     handler: (val, oldVal) => {
  //       console.log('app-route-change')
  //       const that = vm
  //       const hash = that.getHash()
  //       if (hash === '#/unindex') {
  //         that.item = 1
  //       } else {
  //         if (vm.isSignUp === false) {
  //           vm.$router.push('/unindex')
  //         }
  //       }
  //     }
  //   }
  // },
  // beforeMount () {
  //   vm = this
  //   const hash = this.getHash()
  //   if (hash === '#/unindex') {
  //     this.getUserInfot()
  //   } else {
  //     this.getUserInfo()
  //   }
  // },
  components: {
  }
}
</script>
