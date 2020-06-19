<template>
    <div id="otherWay">
      <div class="Ticon">
        <div id="backIcon" class="iconBtn" @click="toBack()"><v-icon class="my-icon1" type="left"></v-icon></div>
        <div id="closeIcon" class="iconBtn" @click="closeLogin()"><v-icon class="my-icon1" type="close"></v-icon></div>
      </div>
      <div id="title">短信验证登录</div>
      <div class="hrr"></div>
      <div id="content">
        <v-input class="loginIn"
                 placeholder="手机号"
                 v-model="tel"
                 v-show="!steptwo"></v-input>
        <div class="tip2">{{tip2}}</div>
        <v-button class="loginBtn"
                  type="primary"
                  v-show="!steptwo"
                  @click="snedCode()">发送验证码</v-button>
        <v-input class="loginIn"
                 placeholder="验证码"
                 v-model="code"
                 v-show="steptwo"></v-input>
        <v-button class="loginBtn"
                  type="primary"
                  v-show="steptwo" @click="login()">立即登录</v-button>
      </div>

    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
const reg = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/

export default {
  name: 'otherWay.vue',
  data () {
    return {
      tel: '',
      code: '',
      steptwo: false,
      tip2: ''
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
    toBack () {
      if (this.steptwo === false) {
        this.loginPop()
      } else {
        this.steptwo = false
      }
    },
    login () {
      if (this.code === '') {
        this.$notification.warning({
          message: '警告',
          description: '请输入验证码',
          duration: 1
        })
        return
      }
      this.$axios.post('/api/auth/login', {
        method: 1,
        tel: this.tel,
        code: this.code
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
        this.tel = ''
        this.code = ''
      })
    },
    valitele () {
      if (this.tel === '') {
        this.$message.warning('手机号不可为空')
        this.tip2 = '手机号不可为空'
      } else if (!reg.test(this.tel)) {
        this.$message.warning('手机号错误')
        this.tip2 = '手机号错误'
      } else {
        this.tip2 = ''
        this.$axios('/api/auth/check/telephone', {
          params: {
            tel: this.tel
          }
        }).then(res => {
          if (res.data.status === 0) {
            this.$message.warning('手机号未注册')
            this.tip2 = '该手机号未注册'
          } else if (res.data.status === 1) {
            this.$message.success('手机号验证通过')
          }
        }).catch(error => {
          this.$message.error('验证手机号出错')
          console.log(error)
        })
      }
    },
    snedCode () {
      this.valitele()
      this.$axios.post('/thunderclass', null, {
        params: {
          type: 1,
          tel: this.tel
        },
        baseURL: '/too'
      }).then(res => {
        console.log(res)
        this.$notification.success({
          message: '成功',
          description: '发送短信中。。5分钟内有效',
          duration: 3
        })
        this.steptwo = true
      }).catch(error => {
        console.log(error)
        this.$notification.warning({
          message: '警告',
          description: '发送短信失败',
          duration: 1
        })
      })
    }
  }
}
</script>

<style scoped lang="less">
#otherWay {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 280px;
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
    margin-top: 10px;
    border-radius: 50px;
    width: 75%;
  }
  .tip1, .tip2 {
    width: 75%;
    margin: 3px 0;
    color: red;
  }
}
</style>
