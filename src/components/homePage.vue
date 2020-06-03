<template>
  <div id="homePage">
    <nav>
      <div class="navlogo">
        <img id="logo" src="../assets/logotem.jpg"/>
        <div>
          <span>这里是名字</span>
          <span>English Name</span>
        </div>
      </div>
      <div class="navbtn">
        <div class="btn01 tabActive" @click="courseBtn()">课程</div>
        <div class="btn01">个人中心</div>
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
    <div style="width:100%; height: 60px"></div>
    <div id="hcenter">
      <my-course-center></my-course-center>
    </div>
    <div id="hbrain">
      <my-all-course></my-all-course>
    </div>
    <div id="hcourse">
      <my-brainstorm></my-brainstorm>
    </div>
    <div id="hfile">
      <my-file-manager></my-file-manager>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

import allCourse from '../views/homepage/allCourse.vue'
import brainstorm from '../views/homepage/brainstorm.vue'
import courseCenter from '../views/homepage/courseCenter.vue'
import fileManager from '../views/homepage/fileManager.vue'

export default {
  name: 'homePage.vue',
  data () {
    return {
      counter: 5,
      isCnt99: false
    }
  },
  computed: {
    ...mapState([
    ])
  },
  methods: {
    ...mapMutations([
    ])
  },
  components: {
    'my-all-course': allCourse,
    'my-brainstorm': brainstorm,
    'my-course-center': courseCenter,
    'my-file-manager': fileManager
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

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    left:0;
    width:100%;
    min-width: 1000px;
    height: 60px;
    margin: 0;
    padding: 0;
    color: black;
    border-bottom: 1px solid lightgrey;
    box-shadow: 1px 0px 10px 1px rgba(213,213,213,0.6);
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

  #hcenter {
    width: 100%;
    height: 420px;
    background-color: white;
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
