<template>
  <div id="homePage">
    <div id="Nav">
      <my-nav :type="1"></my-nav>
    </div>
    <div id="rightSider" @click="tostudent()">
      <div>教师主页</div>
    </div>
    <div id="hcenter">
      <my-course-center></my-course-center>
    </div>
    <div id="hbrain">
      <my-all-course></my-all-course>
    </div>
    <div id="hcourse">
      <my-brainstorm></my-brainstorm>
    </div>
<!--    <div id="hfile">-->
<!--      <my-file-manager></my-file-manager>-->
<!--    </div>-->
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

import allCourse from '../views/homepage/allCourse.vue'
import brainstorm from '../views/homepage/brainstorm.vue'
import courseCenter from '../views/homepage/courseCenter.vue'
import myNav from '../views/navs/s_nav1.vue'
// import fileManager from '../views/homepage/fileManager.vue'

export default {
  name: 'homePage.vue',
  data () {
    return {
      // data: [
      //   { content: this.currentUser.nickname },
      //   { content: this.currentUser.telephone }
      // ]
    }
  },
  computed: {
    ...mapState([
      'currentUser'
    ])
  },
  methods: {
    ...mapMutations([
      'setCurrentUser'
    ]),
    pcBtn () {
      this.$router.push('/pCenter')
    },
    tostudent () {
      this.$router.push('/tindex')
    },
    exit () {
      window.localStorage.setItem('access_token', null)
      this.$router.push('/unindex')
    }
    // getUserInfo () {
    //   this.$axios.get('/api/user/current')
    //     .then(res => {
    //       console.log('已登录')
    //       this.setCurrentUser(res.data.data)
    //       // this.$notification.info({
    //       //   message: '消息',
    //       //   description: '已登录账号： ' + res.data.data.nickname,
    //       //   duration: 2
    //       // })
    //     }).catch(() => {
    //       this.$notification.warning({
    //         message: '警告',
    //         description: '未登录或登录过期',
    //         duration: 2
    //       })
    //       this.$message.warning('未登录或登录过期')
    //       this.$router.push('/unindex')
    //     }).finally(() => {
    //     })
    // }
  },
  mounted () {
    // this.getUserInfo()
  },
  components: {
    'my-all-course': allCourse,
    'my-brainstorm': brainstorm,
    'my-course-center': courseCenter,
    // 'my-file-manager': fileManager
    'my-nav': myNav
  }
}
</script>

<style scoped lang="less">
  #homePage {
    width: 100%;
    min-width: 1050px;
    min-height: 400px;
    /*background: url("../assets/headImg.png");*/
    /*background-repeat: repeat-x;*/
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  #Nav {
    position: relative;
    top: 0;
    left:0;
    width:100%;
    min-width: 1000px;
    height: 60px;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid lightgrey;
    box-shadow: 1px 0px 10px 1px rgba(213,213,213,0.6);
    background-color: white;
    z-index: 20;
  }

  #rightSider {
    z-index: 2030;
    cursor: pointer;
    width: 60px;
    height: 100px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: #ebf9ff;
    position: fixed;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    >div {
      color: #61c7fc;
      font-weight: 600;
      font-size: 13px;
      max-width: 90%;
    }
  }
  #rightSider:hover {
    background-color: #61c7fc;
    >div {
      color: #ebf9ff;
    }
  }
  #rightSider:active {
    background-color: #2492eb;
  }

  #hcenter {
    width: 100%;
    height: 420px;
    background-color: white;
    /*color: #1d78f4;*/
  }

  #hbrain {
    width: 100%;
    height: 500px;
    background-color: white;
  }

  #hcourse {
    width: 100%;
    height: 700px;
    background-color: #f5f5f5;
  }

  #hfile {
    width: 100%;
    height: 500px;
    background-color: white;
  }

  img {
    object-fit: cover;
  }
</style>
