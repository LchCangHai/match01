<template>
  <div id="confirm">
    <div class="title" v-show="currentUser.school === null">学校认证</div>
    <div class="title" v-show="currentUser.school !== null">已认证</div>
    <div class="hrr"></div>
    <div id="content" v-show="currentUser.school === null">
      <v-input class="loginIn" placeholder="学校" v-model="school"></v-input>
      <v-input class="loginIn" placeholder="学号" v-model="student_id"></v-input>
      <v-input class="loginIn" placeholder="认证码" v-model="certificate_code"></v-input>
      <v-button class="loginBtn" type="primary" @click="certificate()">认证</v-button>
    </div>
    <div id="contented" v-show="currentUser.school !== null">
      <div><span>学校：</span><div>{{this.currentUser.school}}</div></div>
      <div><span>在校信息：</span><div>{{this.currentUser.school_id}}</div></div>
      <div><span>昵称：</span><div>{{this.currentUser.nickname}}</div></div>
      <div><span>真实姓名：</span><div>{{this.currentUser.name}}</div></div>
      <div><span>年级：</span><div>{{this.currentUser.grade}}</div></div>
      <div><span>班级：</span><div>{{this.currentUser.class}}</div></div>
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
        this.$axios.post('/api/user/certificate', {
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
            description: error.response.message,
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

#contented {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  >div{
    height: 50px;
    width: 100%;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #f8f8f8;
    >span {
      font-size: 15px;
      font-weight: 600;
      width: 100px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-right: 10px;
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
