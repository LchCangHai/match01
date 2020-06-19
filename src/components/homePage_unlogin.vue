<template>
  <div id="home">
    <div id="container">
      <nav>
        <div class="navlogo">
          <img id="logo" src="../assets/logotem.jpg"/>
          <div>
            <span>这里是名字</span>
            <span>English Name</span>
          </div>
        </div>
        <div class="navbtn">
<!--          <div class="btn01" @click="courseBtn()">课程</div>-->
<!--          <div class="btn01" @click="centerBtn()">个人中心</div>-->
        </div>
      </nav>
      <div class="body01">
        <div class="text01">
          <span>Fire in the heart</span>
          <br>
          <span>light in the eyes</span>
        </div>
        <div class="bodtBtn">
          <v-button type="ghost" class="loginBtn" @click="openLogin()">登录</v-button>
        </div>
      </div>
      <!--      <footer>-->
      <!--      </footer>-->
    </div>
    <div id="cover" v-show="showPopUp"></div>
    <div class="login" v-show="showPopUp">
      <my-login v-show="popUpType === 1 ? true : false"></my-login>
      <my-signup v-show="popUpType === 2 ? true : false"></my-signup>
      <my-retrieve v-show="popUpType === 3 ? true : false"></my-retrieve>
      <my-otherway v-show="popUpType === 4 ? true : false"></my-otherway>
    </div>
<!--    <router-view/>-->
  </div>
</template>

<script>
import Login from '../views/homepage_unlogin/login.vue'
import SignUp from '../views/homepage_unlogin/signUp.vue'
import Retrieve from '../views/homepage_unlogin/retrieve.vue'
import OtherWay from '../views/homepage_unlogin/otherWay'

import { mapMutations, mapState } from 'vuex'

export default {
  name: 'homePage.vue',
  components: {
    'my-login': Login,
    'my-signup': SignUp,
    'my-retrieve': Retrieve,
    'my-otherway': OtherWay
  },
  data () {
    return {
      // popUpType: 1
    }
  },
  computed: {
    ...mapState([
      'showPopUp',
      'popUpType'
    ])
  },
  methods: {
    ...mapMutations([
      'closeLogin',
      'openLogin'
    ]),
    courseBtn () {
      this.$message.warning('您还未登录')
    },
    centerBtn () {
      this.$message.warning('您还未登录')
    }
  }
}
</script>

<style lang="less" scoped>
  #home {
    height: 100%;
    width: 100%;
  }
  #cover{
    /*display: none;*/
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(240,240,240,0.35);
    z-index: 2000;
  }
  #container {
    height: 100%;
    width: 100%;
    min-width: 800px;
    min-height: 400px;
    background: url("../assets/bc01.jpg") fixed;
  }
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    /*position: fixed;*/
    top: 0;
    width:100%;
    height: 60px;
    margin: 0;
    padding: 0;
    color: white;
    .navlogo {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 200px;
      height:100%;
      color: white;
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
      width: 150px;
      font-size: 16px;
      .btn01{
        cursor: pointer;
      }
      .btn01:hover {
        font-weight: 600;
        /*color:*/
      }
      .btn01:active{
        text-decoration: underline;
      }
    }
  }

  .body01 {
    height: calc(100% - 70px);
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    .text01 {
      font-size: 40px;
      font-family: "Sitka Small";
      width: 500px;
      span:last-child {
        position: relative;
        left: 50px;
      }
    }
    .loginBtn {
      border: 1.5px solid white;
      border-radius: 50px;
      width: 110px;
      height: 35px;
      font-size: 16px;
      color: white;
    }
  }

  .login{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 300px;
    /*height: 320px;*/
    z-index: 2001;
    box-shadow: 2px 2px 10px 5px rgba(0,0,0,0.1);
    border-radius: 4px;
  }

  img {
    object-fit: cover;
  }
</style>
