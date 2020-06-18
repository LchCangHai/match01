<template>
  <div id="signUp">
    <div class="Ticon">
      <div id="backIcon" class="iconBtn" @click="toBack()"><v-icon class="my-icon1" type="left"></v-icon></div>
      <div id="closeIcon" class="iconBtn" @click="closeLogin()"><v-icon class="my-icon1" type="close"></v-icon></div>
    </div>
    <div id="title">注册</div>
    <div class="hrr"></div>
    <div id="content">
      <v-input class="loginIn"
               placeholder="昵称"
               v-show="!stepOned"
               v-model="nickname"></v-input>
      <div class="tips" v-show="!stepOned">{{tips}}</div>
      <v-input class="loginIn"
               type="password"
               placeholder="密码"
               v-show="!stepOned"
               v-model="password"></v-input>
      <v-input class="loginIn"
               type="password"
               placeholder="确认密码"
               v-show="!stepOned"
               v-model="password1"></v-input>
      <v-input class="loginIn"
               placeholder="手机号"
               v-show="stepOned"
               v-model="telephone"></v-input>
      <div class="tips" v-show="stepOned">{{tips}}</div>
      <v-input class="loginIn"
               placeholder="验证码"
               v-show="stepOned"
               v-model="code"></v-input>
      <v-button class="loginBtn" type="primary" @click="signUp01()" v-show="!stepOned">立即注册</v-button>
      <v-button class="loginBtn" type="primary" @click="signUp02()" v-show="stepOned">确认</v-button>
    </div>

  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'signUp.vue',
  data () {
    return {
      stepOned: false,
      password1: '',
      tips: '',
      nickname: '',
      telephone: '',
      password: '',
      code: ''
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
    toBack () {
      if (this.stepOned === false) {
        this.loginPop()
      } else {
        this.stepOned = false
      }
    },
    signUp01 () {
      if (this.nickname === '' && this.password === '') {
        this.$notification.warning({
          message: '警告',
          description: '请输入内容',
          duration: 1
        })
        return
      } else if (this.nickname === '') {
        this.$notification.warning({
          message: '警告',
          description: '请输入昵称',
          duration: 1
        })
        return
      } else if (this.password === '') {
        this.$notification.warning({
          message: '警告',
          description: '请输入密码',
          duration: 1
        })
        return
      } else if (this.password1 === '') {
        this.$notification.warning({
          message: '警告',
          description: '请确认密码',
          duration: 1
        })
        return
      } else if (this.password !== this.password1) {
        this.$notification.warning({
          message: '警告',
          description: '两次输入的密码不同！',
          duration: 1
        })
        return
      }
      this.valiname()
      this.stepOned = true
    },
    valiname () {
      console.log('valid')
      this.$axios({
        method: 'get',
        url: '/auth/check/nickname',
        data: {
          nickname: this.nickname
        }
      }).then(res => {
        if (res.data.status === 0) {
          this.$message.success('昵称可用')
          this.tips = ''
        } else if (res.data.status === 1) {
          this.tips = '该昵称已被占用'
        }
      }).catch(error => {
        this.$message.error('验证昵称出错')
        console.log(error)
      })
    }
  }
}
</script>

<style scoped lang="less">
  #signUp {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  .Ticon {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 30px;
    margin: 0;
    padding: 0;
  }
  .iconBtn {
    position: relative;
    cursor: pointer;
    width: 30px;
    height: 30px;
    .my-icon1 {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 20px;
    }
  }
  .iconBtn:hover {
    background-color: #108ee9;
    color: white;
  }

  .iconBtn:active {
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
      margin-top: 8px;
      width: 75%;
      height: 30px;
    }
    .loginBtn {
      margin-top: 12px;
      border-radius: 50px;
      width: 75%;
    }
  }
  .tips {
    width: 75%;
    margin: 3px 0;
    color: red;
  }
</style>
