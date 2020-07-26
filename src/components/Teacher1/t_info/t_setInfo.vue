<template>
<div id="setInfo">
  <div id="setInfoMain">
    <div id="title">资料设置</div>
    <div id="info">
      <div class="tips">绝不会以任何形式向他人透露你的信息</div>
      <v-form direction="horizontal" :model="ruleForm" :rules="rules" ref="ruleForm">
        <v-form-item label="头像" :label-col="labelCol" :wrapper-col="wrapperCol">
          <div class="avatar1">
            <div class="imgBox">
              <img :src="currentUser.avatar">
            </div>
            <div class="modifyAvatar">
              <a class="btn" @click="toggleShow">编辑头像</a>
            </div>
          </div>
        </v-form-item>
        <v-form-item label="昵称" :label-col="labelCol" :wrapper-col="wrapperCol" prop="name">
          <v-input placeholder="请输入昵称" size="large"  v-model="ruleForm.name" @blur="valiName()"></v-input>
          <div class="tip1">{{tip1}}</div>
        </v-form-item>
        <v-form-item label="学校" :label-col="labelCol" :wrapper-col="wrapperCol" prop="school">
          <!--          <v-input size="large" v-model="ruleForm.school"></v-input>-->
          <div class="disabledInfo">{{ruleForm.school}}</div>
        </v-form-item>
        <v-form-item label="在校信息" :label-col="labelCol" :wrapper-col="wrapperCol" prop="studentID">
<!--          <v-input size="large"  v-model="ruleForm.studentID"></v-input>-->
          <div class="disabledInfo">{{ruleForm.studentID}}</div>
        </v-form-item>
        <v-form-item label="真实姓名" :label-col="labelCol" :wrapper-col="wrapperCol" prop="school">
          <!--          <v-input size="large" v-model="ruleForm.school"></v-input>-->
          <div class="disabledInfo">{{ruleForm.realName}}</div>
        </v-form-item>
<!--        <v-form-item label="真实姓名" :label-col="labelCol" :wrapper-col="wrapperCol" prop="realName">-->
<!--          <v-input placeholder="请输入真实姓名" size="large" v-model="ruleForm.realName"></v-input>-->
<!--        </v-form-item>-->
        <v-form-item label="您的性别" :label-col="labelCol" :wrapper-col="wrapperCol" prop="sex">
          <v-radio-group v-model="ruleForm.sex" :data="[{value: 'male', text: '男'},{value: 'female', text: '女'},{value: 'secret', text: '保密'}]"></v-radio-group>
        </v-form-item>
        <v-form-item label="年级" :label-col="labelCol" :wrapper-col="wrapperCol" prop="grade">
          <div class="disabledInfo">{{ruleForm.grade}}</div>
<!--          <v-input placeholder="请输入年级" size="large" v-model="ruleForm.grade"></v-input>-->
        </v-form-item>
        <v-form-item label="班级" :label-col="labelCol" :wrapper-col="wrapperCol" prop="class">
          <div class="disabledInfo">{{ruleForm.class}}</div>
<!--          <v-input placeholder="请输入班级" size="large" v-model="ruleForm.class"></v-input>-->
        </v-form-item>
<!--        <v-form-item label="简介" :label-col="labelCol" :wrapper-col="wrapperCol" prop="briefInfo">-->
<!--          <v-input type="textarea" class="briefInfoArea" v-model="ruleForm.briefInfo" placeholder="让更多人认识自己"></v-input>-->
<!--        </v-form-item>-->
        <v-form-item :wrapper-col="{span:8,offset:10}" style="margin-top:24px">
          <v-button class="submitBtn" type="primary" size="large" html-type="button" @click="submitForm('ruleForm')">确认修改</v-button>
        </v-form-item>
      </v-form>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  <div>
<!--    <button class="btn" @click="toggleShow">设置头像</button>-->
    <my-upload
      @crop-success="cropSuccess"
      @crop-upload-success="cropUploadSuccess"
      @crop-upload-fail="cropUploadFail"
      field="img"
      method="POST"
    :width="300"
    :height="300"
    :headers="headers"
    v-model="show"
    withCre
    langType="zh"
    :withCredentials="true"></my-upload>
  </div>

</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import 'babel-polyfill'
import myUpload from 'vue-image-crop-upload'

export default {
  name: 'setInfo.vue',
  data () {
    return {
      ruleForm: {
        name: '',
        studentID: '',
        school: '',
        realName: '',
        sex: '',
        grade: '',
        class: '',
        briefInfo: ''
      },
      rules: {
        name: [{
          // required: true,
          message: '请输入昵称'
        }],
        studentID: [{
          disabled: true
        }],
        school: [{
          disabled: true
        }],
        realName: [{
          // required: true,
          message: '请输入真实姓名'
        }],
        sex: [{
          required: true,
          message: '请选择性别'
        }],
        grade: [{
          disabled: true
          // required: true,
          // message: '请输入年级'
        }],
        class: [{
          disabled: true
          // required: true,
          // message: '请输入班级'
        }]
      },
      tip1: '',
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 18
      },
      imgUrl: require('../../../assets/avatar02.png'),
      show: false,
      headers: {
        Authorization: window.localStorage.getItem('access_token')
      },
      imgDataUrl: '', // the datebase64 url of created image
      imgupURL: '',
      imgBlob: ''
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
      'closePop01',
      'openPop01',
      'setCurrentUser'
    ]),
    centerBtn () {
      this.$router.push('/courses')
    },
    itemClick (data) {
      console.log(data)
    },
    toggleShow () {
      this.show = !this.show
    },
    /**
     * crop success
     *
     * [param] imgDataUrl
     * [param] field
     */
    cropSuccess (imgDataUrl, field) {
      console.log('-------- crop success --------')
      const arr = imgDataUrl.split(',')
      const mime = arr[0].match(/:(.*?);/)[1]
      const bstr = atob(arr[1])
      let n = bstr.length
      const u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      this.imgBlob = new Blob([u8arr], { type: mime })
      console.log(this.imgBlob)
      const formdata = new FormData()
      formdata.set('avatar', this.imgBlob)
      this.$axios.post('/api/avatars/user/' + this.currentUser.uid, formdata, {
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res => {
        this.$message.success('用户头像上传成功')
        this.getUserInfo()
        this.imgUrl = imgDataUrl
      }).catch(error => {
        console.log(error)
      })
    },
    /**
     * upload success
     *
     * [param] jsonData  server api return data, already json encode
     * [param] field
     */
    cropUploadSuccess (jsonData, field) {
      console.log('-------- upload success --------')
      console.log(jsonData)
      console.log('field: ' + field)
    },
    /**
     * upload fail
     *
     * [param] status    server api return error status, like 500
     * [param] field
     */
    cropUploadFail (status, field) {
      console.log('-------- upload fail --------')
      console.log(status)
      console.log('field: ' + field)
    },
    submitForm (formName) {
      console.log(this.ruleForm)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.modify()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    modify () {
      if (this.tip1 !== '') return
      const data = {}
      if (this.ruleForm.name !== '' && this.ruleForm.name !== this.currentUser.nickname) {
        data.nickname = this.ruleForm.name
      }
      if (this.ruleForm.sex !== '') {
        data.gender = this.ruleForm.sex
      }
      this.$axios.put('/api/user/current', data, {
        header: {
          'Content-Type': 'application/json' // 如果写成contentType会报错
        }
      }).then(res => {
        this.$message.success('修改成功')
        this.setCurrentUser(res.data.data)
      }).catch(error => {
        this.$message.error('修改失败')
        this.getUserInfo()
        console.log(error)
      }).finally(() => {
      })
    },
    getUserInfo () {
      this.$axios.get('/api/user/current')
        .then(res => {
          this.setCurrentUser(res.data.data)
          // this.$notification.info({
          //   message: '消息',
          //   description: '已登录账号： ' + res.data.data.nickname,
          //   duration: 2
          // })
        }).catch((error) => {
          this.$notification.warning({
            message: '警告',
            description: '获取用户信息失败' + error.response.message,
            duration: 10
          })
        }).finally(() => {
          this.setInfo()
        })
    },
    setInfo () {
      this.ruleForm.name = this.currentUser.nickname
      this.ruleForm.sex = this.currentUser.gender
      if (this.currentUser.name === null) {
        this.ruleForm.realName = '未导入'
      } else {
        this.ruleForm.realName = this.currentUser.name
      }
      if (this.currentUser.school === null) {
        this.ruleForm.school = '未认证'
      } else {
        this.ruleForm.school = this.currentUser.school
      }
      if (this.currentUser.school_id === null) {
        this.ruleForm.studentID = '未认证'
      } else {
        this.ruleForm.studentID = this.currentUser.school_id
      }
      if (this.currentUser.grade === null) {
        this.ruleForm.grade = '未导入'
      } else {
        this.ruleForm.grade = this.currentUser.grade
      }
      if (this.currentUser.class === null) {
        this.ruleForm.class = '未导入'
      } else {
        this.ruleForm.class = this.currentUser.class
      }
    },
    valiName () {
      if (this.ruleForm.name === '') {
        return
      }
      if (this.ruleForm.name === this.currentUser.nickname) {
        return
      }
      if (this.ruleForm.name === '') {
        this.tip1 = ''
      } else {
        this.tip1 = ''
        this.$axios('/api/auth/check/nickname', {
          params: {
            nickname: this.ruleForm.name
          }
        }).then(res => {
          if (res.data.status === 0) {
            this.$message.success('昵称可用')
            this.tip1 = ''
          } else if (res.data.status === 1) {
            this.tip1 = '该昵称已被占用'
          }
        }).catch(error => {
          this.$message.error('验证昵称出错')
          console.log(error)
        })
      }
    }
  },
  mounted () {
    this.getUserInfo()
  },
  components: {
    'my-upload': myUpload
  }
}
</script>

<style scoped lang="less">
  #setInfo {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  #setInfoMain {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 600px;
    background-color: white;
    border-radius: 4px;
    /*box-shadow: 0px 2px 10px 1px rgba(150,150,150,0.51);*/
    color: black;
  }
  .Ticon {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 40px;
    margin: 0;
    padding: 0;
  }
  .iconBtn {
    position: relative;
    cursor: pointer;
    width: 40px;
    height: 40px;
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
  #title {
    font-size: 16px;
    font-weight: 600;
    position: relative;
    top: -15px;
  }
  #info {
    width: 90%;
    border-top: #e7e7e7 solid 1px;
    .tips {
      margin: 5px 0;
      color: #969696;
    }
  }
  .avatar1 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .imgBox {
      width: 65px;
      height: 65px;
      border-radius: 50%;
      >img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
      }
    }
    .modifyAvatar {
      cursor: pointer;
      margin-left: 20px;
      width: 80px;
      height: 25px;
      border-radius: 50px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: black;
      background-color: #f8f8f8;
      box-shadow: 1px 2px 5px 1px #b4b4b4;
    }
    .modifyAvatar:active {
      box-shadow: -1px -1px 5px 1px #b4b4b4;
    }
  }
  .disabledInfo {
    font-size: 14px;
    color: black;
  }
  .briefInfoArea{
    height: 100px;
    resize: none;
  }
  .submitBtn {
    border-radius: 40px;
  }
  .tip1, .tip2 {
    width: 75%;
    margin: 3px 0;
    color: red;
  }
  img {
    object-fit: cover;
  }
</style>
