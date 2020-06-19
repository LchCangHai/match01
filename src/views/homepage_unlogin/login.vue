<template>
    <div id="container02">
      <div id="closeC" @click="closeLogin()"><v-icon class="my-icon-close" type="close"></v-icon></div>
      <div id="title">登录</div>
      <div class="hrr"></div>
      <div id="content">
        <v-input class="loginIn" placeholder="昵称" v-model="account"></v-input>
        <v-input class="loginIn" type="password" placeholder="密码" v-model="password"></v-input>
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
      account: '',
      password: ''
    }
  },
  computed: {
    ...mapState([
      'showPopUp',
      'popUpType',
      'currentUser'
    ])
  },
  methods: {
    ...mapMutations([
      'closeLogin',
      'loginPop',
      'signUpPop',
      'retrievePop',
      'otherWayPop',
      'setCurrentUser'
    ]),
    login () {
      if (this.account === '' && this.password === '') {
        this.$notification.warning({
          message: '警告',
          description: '请输入内容',
          duration: 1
        })
        return
      } else if (this.account === '') {
        this.$notification.warning({
          message: '警告',
          description: '请输入昵称',
          duration: 1
        })
        // this.tip1 = '请输入昵称'
        return
      } else if (this.password === '') {
        this.$notification.warning({
          message: '警告',
          description: '请输入密码',
          duration: 1
        })
        return
      }
      this.$axios.post('/api/auth/login', {
        method: 0,
        username: this.account,
        password: this.password
      }, {
        header: {
          'Content-Type': 'application/json' // 如果写成contentType会报错
        }
      }).then(res => {
        this.$message.success('登录成功')
        this.setCurrentUser(res.data.data.user_info)
        window.localStorage.setItem('access_token', res.data.data.access_token)
        this.$router.push('/index')
      }).catch(error => {
        this.$message.error('登录失败')
        console.log(error)
      }).finally(() => {
        this.account = ''
        this.password = ''
      })
    }
  }
}
</script>

<style scoped lang="less">
  #container02 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 285px;
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
