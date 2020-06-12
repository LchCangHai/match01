<template>
<div id="setInfo">
  <div id="setInfoMain">
    <div class="Ticon">
<!--      <div id="backIcon" class="iconBtn" @click="loginPop()"><v-icon class="my-icon1" type="left"></v-icon></div>-->
      <div id="closeIcon" class="iconBtn" @click="closePop01()"><v-icon class="my-icon1" type="close"></v-icon></div>
    </div>
    <div id="title">资料设置</div>
    <div id="info">
      <div class="tips">绝不会以任何形式向他人透露你的信息</div>
      <v-form direction="horizontal" :model="ruleForm" :rules="rules" ref="ruleForm">
        <v-form-item label="头像" :label-col="labelCol" :wrapper-col="wrapperCol">
          <div class="avatar1">
            <div class="imgBox">
              <img :src="imgUrl">
            </div>
            <div class="modifyAvatar">
              <a class="btn" @click="toggleShow">编辑头像</a>
            </div>
          </div>
        </v-form-item>
        <v-form-item label="昵称" :label-col="labelCol" :wrapper-col="wrapperCol" prop="name">
          <v-input placeholder="请输入昵称" size="large"  v-model="ruleForm.name"></v-input>
        </v-form-item>
        <v-form-item label="在校信息" :label-col="labelCol" :wrapper-col="wrapperCol" prop="studentID">
<!--          <v-input size="large"  v-model="ruleForm.studentID"></v-input>-->
          <div class="disabledInfo">{{ruleForm.studentID}}</div>
        </v-form-item>
        <v-form-item label="学校" :label-col="labelCol" :wrapper-col="wrapperCol" prop="school">
<!--          <v-input size="large" v-model="ruleForm.school"></v-input>-->
          <div class="disabledInfo">{{ruleForm.school}}</div>
        </v-form-item>
        <v-form-item label="真实姓名" :label-col="labelCol" :wrapper-col="wrapperCol" prop="realName">
          <v-input placeholder="请输入真实姓名" size="large" v-model="ruleForm.realName"></v-input>
        </v-form-item>
        <v-form-item label="您的性别" :label-col="labelCol" :wrapper-col="wrapperCol" prop="sex">
          <v-radio-group v-model="ruleForm.sex" :data="[{value: 'male', text: '男'},{value: 'female', text: '女'},{value: 'other', text: '保密'}]"></v-radio-group>
        </v-form-item>
        <v-form-item label="年级" :label-col="labelCol" :wrapper-col="wrapperCol" prop="grade">
          <v-input placeholder="请输入年级" size="large" v-model="ruleForm.grade"></v-input>
        </v-form-item>
        <v-form-item label="班级" :label-col="labelCol" :wrapper-col="wrapperCol" prop="class">
          <v-input placeholder="请输入班级" size="large" v-model="ruleForm.class"></v-input>
        </v-form-item>
        <v-form-item label="简介" :label-col="labelCol" :wrapper-col="wrapperCol" prop="briefInfo">
          <v-input type="textarea" class="briefInfoArea" v-model="ruleForm.briefInfo" placeholder="让更多人认识自己"></v-input>
        </v-form-item>
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
    :width="300"
    :height="300"
    url=""
    :params="params"
    :headers="headers"
    v-model="show"
    img-format="png"></my-upload>
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
        studentID: '学生信息221801227',
        school: '福州大学',
        realName: '',
        sex: '',
        grade: '',
        class: '',
        briefInfo: ''
      },
      rules: {
        name: [{
          required: true,
          message: '请输入昵称'
        }],
        studentID: [{
          disabled: true
        }],
        school: [{
          disabled: true
        }],
        realName: [{
          required: true,
          message: '请输入真实姓名'
        }],
        sex: [{
          required: true,
          message: '请选择性别'
        }],
        grade: [{
          // required: true,
          message: '请输入年级'
        }],
        class: [{
          // required: true,
          message: '请输入班级'
        }]
      },
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 18
      },
      imgUrl: require('../../../assets/avatar02.png'),
      show: false,
      params: {
        token: '123456798',
        name: 'avatar'
      },
      headers: {
        smail: '*_~'
      },
      imgDataUrl: '' // the datebase64 url of created image
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
      'closePop01',
      'openPop01'
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
      this.imgUrl = imgDataUrl
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
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
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
    z-index: 2001;
    position: absolute;
    /*top: 50%;*/
    left: 50%;
    transform: translate(-50%, -10%);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 600px;
    height: 800px;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0px 2px 10px 1px rgba(150,150,150,0.51);
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
  img {
    object-fit: cover;
  }
</style>
