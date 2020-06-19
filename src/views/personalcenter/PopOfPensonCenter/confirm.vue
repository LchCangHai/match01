<template>
  <div id="confirm">
    <div class="Ticon">
      <!--      <div id="backIcon" class="iconBtn" @click="loginPop()"><v-icon class="my-icon1" type="left"></v-icon></div>-->
      <div id="closeIcon" class="iconBtn" @click="closePop02()"><v-icon class="my-icon1" type="close"></v-icon></div>
    </div>
    <div id="title">学校认证</div>
    <div class="hrr"></div>
    <div id="content">
      <v-input class="loginIn" placeholder="学校" v-model="school"></v-input>
      <v-input class="loginIn" placeholder="学号" v-model="student_id"></v-input>
      <v-input class="loginIn" placeholder="认证码" v-model="certificate_code"></v-input>
      <v-button class="loginBtn" type="primary" @click="certificate()">认证</v-button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'confirm.vue',
  data () {
    return {
      school: '',
      student_id: '',
      certificate_code: ''
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
    certificate () {
      if (this.school === '' && this.student_id === '' && this.certificate_code === '') {
        this.$notification.warning({
          message: '警告',
          description: '请输入内容',
          duration: 1
        })
      } else if (this.school === '') {
        this.$notification.warning({
          message: '警告',
          description: '请输入学校全名',
          duration: 1
        })
      } else if (this.student_id === '') {
        this.$notification.warning({
          message: '警告',
          description: '请输入学号',
          duration: 1
        })
      } else if (this.certificate_code === '') {
        this.$notification.warning({
          message: '警告',
          description: '请输入验证码',
          duration: 1
        })
      } else {
        this.$axios.post('/api/user/current/certificate', {
          school: this.school,
          student_id: this.student_id,
          certificate_code: this.certificate_code
        }, {
          header: {
            'Content-Type': 'application/json' // 如果写成contentType会报错
          }
        }).then(res => {
          console.log(res)
          this.$notification.success({
            message: '成功',
            description: '认证成功',
            duration: 2
          })
          this.setCurrentUser(res.data.data)
        }).catch(error => {
          console.log(error)
          this.$notification.warning({
            message: '警告',
            description: '验证失败',
            duration: 2
          })
        })
      }
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
