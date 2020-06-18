<template>
    <div id="container02">
      <div id="closeC" @click="closeLogin()"><v-icon class="my-icon-close" type="close"></v-icon></div>
      <div id="title">登录</div>
      <div class="hrr"></div>
      <div id="content">
        <v-input class="loginIn" placeholder="账号"></v-input>
        <v-input class="loginIn" type="password" placeholder="密码"></v-input>
        <v-button class="loginBtn" type="primary" @click="login()">立即登录</v-button>
        <div id="tips">
          <span @click="retrievePop()">忘记密码</span>
          <span @click="otherWayPop()">短信验证码登录</span>
        </div>
      </div>
      <div id="foot">——————— <span @click="signUpPop()">立即注册</span> ———————</div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'login.vue',
  data () {
    return {
      // account:
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
      'loginPop',
      'signUpPop',
      'retrievePop',
      'otherWayPop'
    ]),
    login () {
    }
  }
}
</script>

<style scoped lang="less">
  #container02 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #closeC {
    position: relative;
    cursor: pointer;
    width: 30px;
    height: 30px;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    .my-icon-close {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 20px;
    }
  }

  #closeC:hover {
    background-color: #108ee9;
    color: white;
  }

  #closeC:active {
    background-color: #49a9ee;
  }

  #title{
    color: black;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
  }

  .hrr {
    height: 0;
    width: 90%;
    border-bottom: 1px solid #d6d6d6;
    margin-top: 10px;
  }

  #content{
    width: 100%;
    margin: 5px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .loginIn{
      margin-top: 20px;
      width: 75%;
      height: 30px;
    }
    .loginBtn {
      margin-top: 20px;
      border-radius: 50px;
      width: 75%;
    }
    #tips{
      font-size: 10px;
      width: 75%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 5px 2px;
      >span {
        cursor: pointer;
      }
      >span:hover {
        color: black;
      }
      >span:active {
        text-decoration: underline;
      }
    }
  }

  #foot {
    font-size: 12px;
    margin-top: 10px;
    >span {
      cursor: pointer;
    }
    >span:hover {
      color:black;
    }
    >span:active {
      text-decoration: underline;
    }
  }

</style>
