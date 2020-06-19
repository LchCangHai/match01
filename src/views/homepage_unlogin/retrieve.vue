<template>
  <div id="retrieve">
    <div class="Ticon">
      <div id="backIcon" class="iconBtn" @click="toBack()"><v-icon class="my-icon1" type="left"></v-icon></div>
      <div id="closeIcon" class="iconBtn" @click="closeLogin()"><v-icon class="my-icon1" type="close"></v-icon></div>
    </div>
    <div id="title">找回密码</div>
    <div class="hrr"></div>
    <div id="content">
      <v-input class="loginIn"
               placeholder="手机号"
               v-show="!stepThree"
               v-model="telphone"
               @blur="valitele()"></v-input>
      <div class="tip2">{{tip2}}</div>
      <v-input class="loginIn"
               type="password"
               placeholder="密码"
               v-show="!stepThree"
               v-model="password"></v-input>
      <v-input class="loginIn"
               type="password"
               placeholder="确认密码"
               v-show="!stepThree" v-model="password1"></v-input>
      <v-button class="loginBtn"
                type="primary"
                v-show="!stepThree"
                @click="sendCode()">发送验证码</v-button>
      <v-input class="loginIn"
               placeholder="验证码"
               v-show="stepThree"
               v-model="code"></v-input>
      <div class="tip1">{{tip1}}</div>
      <v-button class="loginBtn"
                type="primary"
                v-show="stepThree"
                @click="modify()">立即登录</v-button>
    </div>

  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
const reg = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/

export default {
  name: 'retrieve.vue',
  data () {
    return {
      telphone: '',
      code: '',
      password: '',
      password1: '',
      stepThree: false,
      tip1: '',
      tip2: ''
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
      if (this.stepThree === false) {
        this.loginPop()
      } else {
        this.stepThree = false
      }
    },
    sendCode () {
      if (this.telphone === '' && this.password === '' && this.password1 === '') {
        this.$notification.warning({
          message: '警告',
          description: '请输入内容',
          duration: 1
        })
      } else if (this.telphone === '') {
        this.$notification.warning({
          message: '警告',
          description: '请输入手机号',
          duration: 1
        })
        this.tip2 = '请输入手机号'
      } else if (this.password === '') {
        this.$notification.warning({
          message: '警告',
          description: '请输入密码',
          duration: 1
        })
      } else if (this.password1 === '') {
        this.$notification.warning({
          message: '警告',
          description: '请确认密码',
          duration: 1
        })
      } else if (this.password !== this.password1) {
        this.$notification.warning({
          message: '警告',
          description: '两次输入的密码不同！',
          duration: 1
        })
      } else if (this.tip2 !== '') {
        this.$notification.warning({
          message: '警告',
          description: this.tip2,
          duration: 1
        })
      } else {
        this.$axios.post('/thunderclass', null, {
          params: {
            type: 3,
            tel: this.telephone
          },
          baseURL: '/too'
        }).then(res => {
          console.log(res)
          this.stepThree = true
          this.$notification.success({
            message: '成功',
            description: '发送短信中。。5分钟内有效',
            duration: 3
          })
        }).catch(error => {
          console.log(error)
          this.$notification.warning({
            message: '警告',
            description: '发送短信失败',
            duration: 1
          })
        })
      }
    },
    modify () {
      if (this.code === '') {
        this.$notification.warning({
          message: '警告',
          description: '请输入验证码',
          duration: 2
        })
        this.tip1 = '请输入验证码'
      } else {
        this.tip1 = ''
        this.$axios.put('/api/user/current', {
          password: this.password,
          code_changePassword: this.code
        }, {
          header: {
            'Content-Type': 'application/json' // 如果写成contentType会报错
          }
        }).then(res => {
          this.$notification.success({
            message: '成功',
            description: '修改密码成功！',
            duration: 2,
            stepThree: false
          })
          window.localStorage.setItem('access_token', null)
        }).catch(error => {
          console.log(error)
        }).finally(() => {
          this.telphone = ''
          this.password = ''
          this.password1 = ''
          this.code = ''
        })
      }
    },
    valitele () {
      if (this.telephone === '') {
        this.$message.warning('手机号不可为空')
        this.tip2 = '手机号不可为空'
      } else if (!reg.test(this.telephone)) {
        this.$message.warning('手机号错误')
        this.tip2 = '手机号错误'
      } else {
        this.tip2 = ''
        this.$axios('/api/auth/check/telephone', {
          params: {
            tel: this.telephone
          }
        }).then(res => {
          if (res.data.status === 0) {
            this.$message.success('手机号可用')
            this.tip2 = ''
          } else if (res.data.status === 1) {
            this.tip2 = '该手机号已注册'
          }
        }).catch(error => {
          this.$message.error('验证手机号出错')
          console.log(error)
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
  #retrieve {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 310px;
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
      margin-top: 20px;
      width: 75%;
      height: 30px;
    }
    .loginBtn {
      margin-top: 20px;
      border-radius: 50px;
      width: 75%;
    }
  }
  .tip1, .tip2 {
    width: 75%;
    margin: 3px 0;
    color: red;
  }
</style>
