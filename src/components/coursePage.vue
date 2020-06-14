<template>
  <div id="coursePage">
    <div id="header">
      <nav>
        <div class="navlogo">
          <img id="logo" src="../assets/logotem.jpg"/>
          <div>
            <span>这里是名字</span>
            <span>English Name</span>
          </div>
        </div>
        <div class="navbtn">
          <div class="btn01 tabActive">课程</div>
          <div class="btn01" @click="toPCBtn()">个人中心</div>
          <div class="avatarC1">
            <img class="avatarI" src="../assets/avatar01.jpg">
          </div>
          <div class="messageShow">
            <div class="headerNum" v-show="!isCnt99">{{counter}}</div>
            <div class="headerNum" v-show="isCnt99">99+</div>
            <span class="iconfont messageIcon">&#xe606;</span>
<!--            <v-icon class="messageIcon" type="message"></v-icon>-->
          </div>
        </div>
      </nav>
    </div>
    <div id="body01">
      <div style="  width:100%; height: 60px"></div>
      <div class="menu01">
        <div class="title01">熬夜秃头学（下）</div>
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
      <div></div>
      <div></div>
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
      item: 1
    }
  },
  computed: {
    ...mapState([
      'showPopUp',
      'popUpType',
      'coursePop',
      'coursePopType'
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
      'closeCoursePop'
    ]),
    toPCBtn () {
      this.$router.push('/pCenter')
    },
    BtnHome () {
      this.item = 1
      this.$router.push('/courses/home')
    },
    BtnStudy () {
      this.item = 2
      this.$router.push('/courses/study')
    },
    BtnExam () {
      this.item = 3
      this.$router.push('/courses/exam')
    },
    BtnDiscuss () {
      this.item = 4
      this.$router.push('/courses/discuss')
    },
    BtnSourse () {
      this.item = 5
      this.$router.push('/courses/sourse')
    }
  },
  components: {
    'my-inform': Inform,
    'my-taskDetail': TaskDetail
  },
  watch: {
    $route: {
      handler: (val, oldVal) => {
        const that = vm
        const hash = getHash()
        if (hash === '#/courses/home') {
          that.item = 1
        } else if (hash === '#/courses/study') {
          that.item = 2
        } else if (hash === '#/courses/exam') {
          that.item = 3
        } else if (hash === '#/courses/discuss') {
          that.item = 4
        } else if (hash === '#/courses/sourse') {
          that.item = 5
        } else if (hash === '#/courses/oneDiscuss') {
          that.item = 4
        }
      },
      deep: true,
      immediate: true
    }
  },
  mounted: function () {
    const that = this
    const hash = getHash()
    if (hash === '#/courses/home') {
      that.item = 1
    } else if (hash === '#/courses/study') {
      that.item = 2
    } else if (hash === '#/courses/exam') {
      that.item = 3
    } else if (hash === '#/courses/discuss') {
      that.item = 4
    } else if (hash === '#/courses/sourse') {
      that.item = 5
    } else if (hash === '#/courses/oneDiscuss') {
      that.item = 4
    }
    vm = this
  }
}
</script>

<style scoped lang="less">
#coursePage {
  width: 100%;
  height: 100%;
  min-width: 1060px;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  width:100%;
  height: 60px;
  margin: 0;
  padding: 0;
  color: black;
  border-bottom: 1px solid lightgrey;
  background-color: white;
  z-index: 2020;
  .navlogo {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 200px;
    height:100%;
    color: black;
    #logo{
      width:100px;
      height:50px;
    }
    > div{
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      span {
        font-size: 14px;
      }
      span:last-child {
        font-size: 10px;
      }
    }
  }
  .navbtn {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 300px;
    font-size: 16px;
    .messageShow {
      width: 30px;
      height: 30px;
      cursor: pointer;
      .headerNum{
        width: 23px;
        height: 15px;
        position: absolute;
        background-color: #f04134;
        color: white;
        font-size: 12px;
        border-radius: 50px;
        position: relative;
        left: 100%;
        top: 0;
        transform: translate(-50%, -20%);
        text-align: center;
      }
      >span.messageIcon {
        position: relative;
        left: 0;
        top: -15px;
        /*transform: translate(-50%, -50%);*/
        font-size: 25px;
        color: #61c7fc;
      }
      >span.messageIcon:hover {
        color: #2492eb;
      }
    }
    .btn01{
      cursor: pointer;
    }
    .btn01:hover {
      font-weight: 600;
      /*color:*/
    }
    .btn01:active{
      color: #83bafc;
    }
    .btn01.tabActive {
      text-decoration: none;
      color:black;
      cursor: default;
    }
    .avatarC1{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border: white 2px solid;
      border-radius: 50%;
      .avatarI {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
  }
  .tabActive {
    font-weight: 600;
    border-bottom: 3px solid #83bafc;
  }
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
