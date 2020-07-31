<template>
  <div id="coursePage">
    <div id="header">
      <div id="Nav">
        <my-nav :type="1"></my-nav>
      </div>
    </div>
    <div id="body01">
      <div class="menu01">
        <div class="title01">
          <div>{{courseInfo1.name}}</div>
        </div>
        <div class="menu02">
          <div class="item01" @click="BtnHome()">
            <div :class="{ itemActive: item === 1 ? true : false}"> 首页 </div>
          </div>
          <div class="item01" @click="BtnStudy()">
            <div :class="{ itemActive: item === 2 ? true : false}">课程学习</div>
          </div>
          <div class="item01" @click="BtnExam()">
            <div :class="{ itemActive: item === 3 ? true : false}">作业考试</div>
          </div>
          <div class="item01" @click="BtnDiscuss()">
            <div :class="{ itemActive: item === 4 ? true : false}">问答讨论</div>
          </div>
          <div class="item01" @click="BtnSourse()">
            <div :class="{ itemActive: item === 5 ? true : false}">课程资源</div>
          </div>
        </div>
      </div>
    </div>
    <div id="footer">
      <transition name="coursePage">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
    <div id="cover" v-show="coursePop"></div>
    <div id="popBox" v-show="coursePop">
      <my-inform v-show="coursePopType === 1 ? true : false"></my-inform>
      <my-taskDetail v-show="coursePopType === 2 ? true : false"></my-taskDetail>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Inform from '../views/coursePop/inform.vue'
import TaskDetail from '../views/coursePop/taskDetail.vue'
import myNav from '../views/navs/s_nav1.vue'
/* eslint-disable */
let vm
function getHash () {
  let hash = 'none'
  hash = window.location.hash
  // console.log(hash)
  return hash
}

export default {
  name: 'coursesPage.vue',
  data () {
    return {
      tem: {
        width: '500px',
        height: '300px'
      },
      counter: 5,
      isCnt99: false,
      item: 1,
      courseInfo1: {},
      courseInfo2: {},
      currentc: this.$route.query.id
    }
  },
  computed: {
    ...mapState([
      'showPopUp',
      'popUpType',
      'coursePop',
      'coursePopType',
      'currentCourse',
      'currentUser',
      'courseInform',
      'courseFile',
      'courseVideo'
    ])
  },
  methods: {
    ...mapMutations([
      'closeLogin',
      'loginPop',
      'signUpPop',
      'retrievePop',
      'otherWayPop',
      'openCoursePop',
      'closeCoursePop',
      'setcurrentCourse',
      'setCurrentUser',
      'setcourseInfo',
      'setcourseInform',
      'setcourseFile',
      'setcourseVideo'
    ]),
    toPCBtn () {
      this.$router.push('/pCenter')
    },
    tostudent () {
      this.$router.push('/tindex')
    },
    exit () {
      window.localStorage.setItem('access_token', null)
      this.$router.push('/unindex')
    },
    BtnHome () {
      this.item = 1
      this.$router.push(
      {
        path: '/courses/home',
          query: {
        id: this.currentc
      }
      })
    },
    BtnStudy () {
      this.item = 2
      this.$router.push(
      {
        path: '/courses/study',
          query: {
        id: this.currentc
      }
      })
    },
    BtnExam () {
      this.item = 3
      this.$router.push(
      {
        path: '/courses/exam',
          query: {
        id: this.currentc
      }
      })
    },
    BtnDiscuss () {
      this.item = 4
      this.$router.push(
      {
        path: '/courses/discuss',
          query: {
        id: this.currentc
      }
      })
    },
    BtnSourse () {
      this.item = 5
      this.$router.push(
      {
        path: '/courses/sourse',
          query: {
        id: this.currentc
      }
      })
    },
    getCourse () {
      this.$axios.get('/api/course/' + this.currentc)
      .then(res => {
        this.courseInfo1 = res.data.data
        this.setcourseInfo(res.data.data)
      }).catch(error => {
        console.log(error)
        this.$message.error('获取课程信息失败')
      })
    },
    getCourseInform () {
      this.$axios.get('/api/course/' + this.currentc + '/notices')
        .then(res => {
          this.setcourseInform(res.data.data.notices)
        }).catch(error => {
          console.log(error)
          this.$message.error('获取课程公告失败')
        })
    },
    getCourseFile () {
      this.$axios.get('/api/course/' + this.currentc + '/documents')
        .then(res => {
          this.setcourseFile(res.data.data.chapters)
        }).catch(error => {
        console.log(error)
        this.$message.error('获取课程章节课件失败')
      })
    },
    getCourseVideo () {
      this.$axios.get('/api/course/' + this.currentc + '/movies')
        .then(res => {
          this.setcourseVideo(res.data.data.chapters)
        }).catch(error => {
        console.log(error)
        this.$message.error('获取课程章节视频失败')
      })
    }
  },
  components: {
    'my-inform': Inform,
    'my-taskDetail': TaskDetail,
    'my-nav': myNav
  },
  watch: {
    $route: {
      handler: (val, oldVal) => {
        const that = vm
        const hash = getHash()
        console.log(hash)
        if (hash === '#/courses/home?id=' + that.currentc) {
          that.item = 1
        } else if (hash === '#/courses/study?id=' + that.currentc) {
          that.item = 2
        } else if (hash === '#/courses/exam?id=' + that.currentc) {
          that.item = 3
        } else if (hash === '#/courses/discuss?id=' + that.currentc) {
          that.item = 4
        } else if (hash === '#/courses/sourse?id=' + that.currentc) {
          that.item = 5
        } else if (hash === '#/courses/oneDiscuss?id=' + that.currentc) {
          that.item = 4
        }
      },
      deep: true,
      immediate: true
    }
  },
  mounted: function () {
    this.setcurrentCourse(this.$route.query.id)
    this.getCourse()
    const that = this
    const hash = getHash()
    if (hash === '#/courses/home') {
      that.item = 1
    } else if (hash === '#/courses/study?id=' + that.currentc) {
      that.item = 2
    } else if (hash === '#/courses/exam?id=' + that.currentc) {
      that.item = 3
    } else if (hash === '#/courses/discuss?id=' + that.currentc) {
      that.item = 4
    } else if (hash === '#/courses/sourse?id=' + that.currentc) {
      that.item = 5
    } else if (hash === '#/courses/oneDiscuss?id=' + that.currentc) {
      that.item = 4
    }
    vm = this
    this.getCourseInform()
    this.getCourseFile()
    this.getCourseVideo()
  }
}
</script>

<style scoped lang="less">
#coursePage {
  width: 100%;
  height: 100%;
  min-width: 1060px;
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

#body01 {
  width: 100%;
  .menu01 {
    width: 100%;
    height: 180px;
    background: url("../assets/headImg2.png");
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .title01 {
      color: white;
      font-size: 30px;
      letter-spacing:2px;
      /*font-weight: 600;*/
      position: relative;
      left: 15%;
      margin: 10px 5px;
      max-width: 560px;
    }

    .menu02 {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      background-color: rgba(0,48,213,0.3);
      height: 50px;
      width: 100%;
      .item01 {
        width: 80px;
        height: 40px;
        margin: 0 20px;
        font-size: 16px;
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      .item01:hover {
        font-size: 17px;
      }
      .itemActive {
        border-bottom: 2px solid white;
      }
    }
  }
}

#footer {
  width: 100%;
}

.coursePage-enter-active,
.coursePage-leave-active {
  transition: all .3s;
}
.coursePage-enter {
  transform: translateX(100%);
}
#cover{
  /*display: none;*/
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(240,240,240,0.35);
  z-index: 2000;
}
#popBox {
  position: fixed;
  width: 700px;
  height: 400px;
  border-radius: 4px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: white;
  z-index: 2001;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}
  img {
    object-fit: cover;
  }

</style>
