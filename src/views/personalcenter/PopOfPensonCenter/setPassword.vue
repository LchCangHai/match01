<template>
  <div id="confirm">
    <div class="title">密码修改</div>
    <div class="hrr"></div>
    <div id="content">
      <v-button class="loginIn2" @click="sendCode">发送验证码</v-button>
      <v-input class="loginIn" placeholder="输入验证码" v-model="code"></v-input>
      <div class="tip3">{{tip1}}</div>
      <v-input class="loginIn" type="password" placeholder="新密码" v-model="nps"></v-input>
      <div class="tip3">{{tip2}}</div>
      <v-input class="loginIn" type="password" placeholder="确认密码" v-model="cnps" @blur="cpsTip3()"></v-input>
      <div class="tip3">{{tip3}}</div>
      <v-button class="loginBtn" type="primary" @click="csetps()">确认修改</v-button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'setPassword.vue',
  data () {
    return {
      code: '',
      nps: '',
      cnps: '',
      tip3: '',
      tip2: '',
      tip1: ''
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
      'closePop02',
      'setCurrentUser'
    ]),
    sendCode () {
      this.$axios.post('/thunderclass', null, {
        params: {
          type: 3,
          tel: this.currentUser.telephone
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
          message: '短信发送失败',
          description: error.response.message,
          duration: 1
        })
      })
    },
    csetps () {
      if (this.code === '' && this.nps === '' && this.cnps === '') {
        this.tip1 = this.tip2 = this.tip3 = '请输入'
      } else if (this.code === '') {
        this.tip1 = '请输入验证码'
      } else if (this.nps === '') {
        this.tip1 = ''
        this.tip2 = '请输入新密码'
      } else if (this.nps === '') {
        this.tip1 = ''
        this.tip2 = ''
        this.tip2 = '请确认输入新密码'
      } else if (this.nps !== this.cnps) {
        this.tip1 = ''
        this.tip2 = ''
        this.tip3 = '两次输入密码不一致'
      } else {
        this.tip1 = ''
        this.tip2 = ''
        this.tip3 = ''
        this.$axios.put('/api/user/current', {
          password: this.nps,
          code_changePassword: this.code
        }, {
          header: {
            'Content-Type': 'application/json' // 如果写成contentType会报错
          }
        }).then(res => {
          this.$message.success('修改成功,请重新登录')
          window.localStorage.setItem('access_token', null)
          this.$router.push('/unindex')
          this.code = ''
          this.cnps = ''
          this.nps = ''
        }).catch(error => {
          this.$notification.warning({
            message: '修改失败',
            description: error.response.message,
            duration: 1
          })
          this.getUserInfo()
          console.log(error)
        }).finally(() => {
        })
      }
    },
    cpsTip3 () {
      if (this.cnps !== this.nps) {
        this.tip3 = '两次输入密码不一致'
        return
      }
      this.tip3 = ''
    }
  },
  components: {
  }
}
</script>

<style scoped lang="less">
  #confirm {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .Ticon {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
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
  .title{
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
    width: 70%;
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
  .loginIn2 {
    margin-top: 20px;
    position: relative;
    align-self: flex-end;
    right: 12.5%;
  }

  .tip3 {
    color: red;
    font-size: 12px;
    width: 70%;
  }

</style>
