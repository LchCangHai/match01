<template>
  <div id="Tindex">
    <div class="none">
      <input
        type="file"
        ref="upload_file"
        @change="handleFileChange">
    </div>
    <nav>
      <div class="navlogo">
        <img id="logo" src="../../assets/logotem.jpg"/>
        <div>
          <span>教务管理中心</span>
        </div>
      </div>
      <div class="navbtn">
        <div class="btn01 tabActive">课程</div>
        <div class="btn01" @click="pcBtn()">个人中心</div>
        <v-dropdown class="avatarC1" :data="data" @item-click="itemClick">
          <a href="javascript:void(0)" class="avatarA ant-dropdown-link ant-dropdown-trigger">
            <img class="avatarI" :src="currentUser.avatar">
          </a>
        </v-dropdown>
        <div class="messageShow">
          <div @click="exit()">退出</div>
        </div>
      </div>
    </nav>
    <div id="rightSider" @click="tostudent()">
      <div>学生主页</div>
    </div>
    <div id="hcenter">
      <my-course-center></my-course-center>
    </div>
    <div id="handleBox">
      <div>
        <v-icon type="tags-o"></v-icon>
      </div>
      <div class="handle">
        <div class="hpindex">
          <div class="icon">
            <div>
              <v-icon type="home"></v-icon>
            </div>
            <div>首页</div>
          </div>
          <div class="BtnBox">
            <div class="item itemActive" @click="totindex()">首页</div>
          </div>
        </div>
        <div class="courseManage">
          <div class="icon">
            <div>
              <v-icon type="book"></v-icon>
            </div>
            <div>课程管理</div>
          </div>
          <div class="BtnBox">
            <div class="item" @click="totcourseManage()">课程管理</div>
            <div class="item" @click="totcourseWare()">课件管理</div>
            <div class="item" @click="totcourseVideo()">视频管理</div>
            <div class="item" @click="totcourseDiscuss()">讨论管理</div>
<!--            <div class="item" @click="totcourseSignIn()">课程签到</div>-->
          </div>
        </div>
        <div class="Exam">
          <div class="icon">
            <div>
              <v-icon type="file-text"></v-icon>
            </div>
            <div>作业与考试</div>
          </div>
          <div class="BtnBox">
            <div class="item" @click="tottaskExam()">作业考试</div>
          </div>
        </div>
        <div class="studentManage">
          <div class="icon">
            <div>
              <v-icon type="solution"></v-icon>
            </div>
            <div>学生管理</div>
          </div>
          <div class="BtnBox">
            <div class="item" @click="totstudentManage()">学生管理</div>
          </div>
        </div>
        <div class="dataCenter">
          <div class="icon">
            <div>
              <v-icon type="line-chart"></v-icon>
            </div>
            <div>数据中心</div>
          </div>
          <div class="BtnBox">
            <div class="item" @click="totdataManage()">数据中心</div>
          </div>
        </div>
      </div>
    </div>
    <div id="myCourse">
      <div class="title01" @click="toggleCreate()"><div>创建课程</div></div>
      <div class="form" v-show="createCourse">
        <v-form direction="horizontal" :model="ruleForm" :rules="rules" ref="ruleForm">
          <v-form-item label="课程名称" :label-col="labelCol" :wrapper-col="wrapperCol" prop="name">
            <v-input size="large" v-model="ruleForm.name"></v-input>
          </v-form-item>
          <v-form-item label="开课时间" :label-col="labelCol" :wrapper-col="wrapperCol">
            <v-date-picker v-model="ruleForm.startDate"></v-date-picker>
            <v-time-picker v-model="ruleForm.startTime"></v-time-picker>
          </v-form-item>
          <v-form-item label="结课时间" :label-col="labelCol" :wrapper-col="wrapperCol">
            <v-date-picker v-model="ruleForm.deadDate"></v-date-picker>
            <v-time-picker v-model="ruleForm.deadTime"></v-time-picker>
          </v-form-item>
          <v-form-item label="课程封面" :label-col="labelCol" :wrapper-col="wrapperCol">
            <div>
              <div class="Img" v-show="ruleForm.isAvatar">
                <img :src="imgUrl">
              </div>
              <div class="uploadIcon" @click="clickUpLoad()">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-fujian"></use>
                </svg>
              </div>
              <div class="fileName">{{fileTitle}}</div>
            </div>
          </v-form-item>
          <v-form-item label="课程类型" :label-col="labelCol" :wrapper-col="wrapperCol" prop="public">
            <v-radio-group v-model="ruleForm.public" :data="[{value: '1', text: '公开课'},{value: '0', text: '非公开课'}]"></v-radio-group>
          </v-form-item>
          <v-form-item label="课程简介" :label-col="labelCol" :wrapper-col="wrapperCol" prop="introduce">
            <v-input v-model="ruleForm.introduce" type="textarea"></v-input>
          </v-form-item>
          <v-form-item :wrapper-col="{offset:6, span: 14 }">
            <v-button type="primary" style="margin-right:10px" @click.prevent="submitForm('ruleForm')">立即创建</v-button>
          </v-form-item>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import courseCenter from '../../views/homepage/courseCenter.vue'
/* Eslit disabled */
const formdata = new FormData()
export default {
  name: 'Tindex.vue',
  data () {
    return {
      counter: 5,
      isCnt99: false,
      // data: [
      //   { content: this.currentUser.nickname },
      //   { content: this.currentUser.telephone }
      // ],
      createCourse: false,
      formdata,
      ruleForm: {
        name: '',
        public: '',
        introduce: '',
        deadDate: '',
        deadTime: '',
        startDate: '',
        startTime: '',
        start: '',
        end: '',
        isAvatar: false
      },
      rules: {
        name: [{
          required: true,
          message: '请输入课程名称'
        }],
        introduce: [{
          required: true,
          message: '请输入课程简介'
        }],
        public: [{
          required: true,
          message: '请选择课程类型'
        }]
      },
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 14
      },
      imgUrl: '',
      fileTitle: '',
      hasFile: false
    }
  },
  computed: {
    ...mapState([
      'currentUser'
    ])
  },
  methods: {
    ...mapMutations([
    ]),
    pcBtn () {
      this.$router.push('/pCenter')
    },
    tostudent () {
      this.$router.push('/index')
    },
    exit () {
      window.localStorage.setItem('access_token', null)
      this.$router.push('/unindex')
    },
    totindex () {
      this.$router.push('/tindex')
    },
    totcourseManage () {
      this.$router.push('/courseManage')
    },
    totcourseWare () {
      this.$router.push('/courseWare')
    },
    totcourseVideo () {
      this.$router.push('/courseVideo')
    },
    totcourseDiscuss () {
      this.$router.push('/courseDiscuss')
    },
    totcourseSignIn () {
      this.$router.push('/courseSignIn')
    },
    totstudentManage () {
      this.$router.push('/studentManage')
    },
    tottaskExam () {
      this.$router.push('/taskExam')
    },
    totdataManage () {
      this.$router.push('/dataManage')
    },
    toggleCreate () {
      this.createCourse = !this.createCourse
    },
    clickUpLoad () {
      this.$refs.upload_file.click()
    },
    handleFileChange () {
      const inputDOM = this.$refs.upload_file
      const files = inputDOM.files
      this.uploadFile(files)
    },
    uploadFile: function (files) {
      if (files.length !== 1) {
        this.$notification.warning({
          message: '警告',
          description: '上传文件数量错误',
          duration: 1
        })
      } else {
        const file = files[0]
        console.log(file)
        this.fileTitle = file.name
        formdata.set('avatar', file)
        this.ruleForm.isAvatar = true
        this.imgUrl = window.URL.createObjectURL(file)
      }
    },
    getTime () {
      if (this.ruleForm.deadDate === '') {
        this.$message.error('请选择结束日期')
        return false
      } else if (this.ruleForm.deadTime === '') {
        this.$message.error('请选择结束时间')
        return false
      } else if (this.ruleForm.startTime === '') {
        this.$message.error('请选择开始时间')
        return false
      } else if (this.ruleForm.deadDate === '') {
        this.$message.error('请选择开始日期')
        return false
      }
      this.ruleForm.start = this.ruleForm.startDate.replace(/-/g, '/') + ' ' + this.ruleForm.startTime
      this.ruleForm.end = this.ruleForm.deadDate.replace(/-/g, '/') + ' ' + this.ruleForm.deadTime
      this.ruleForm.start = (new Date(this.ruleForm.start).getTime()) / 1000
      this.ruleForm.end = (new Date(this.ruleForm.end).getTime()) / 1000
      if (this.ruleForm.end - this.ruleForm.start <= 0) {
        this.$message.error('结束时间应该在开始时间之后')
        return false
      }
      return true
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const time = this.getTime()
          if (time === false) return false
          if (this.ruleForm.isAvatar === false) {
            this.$message.warning('请上传课程封面后提交')
            return false
          }
          formdata.set('name', this.ruleForm.name)
          formdata.set('public', this.ruleForm.public)
          formdata.set('introduce', this.ruleForm.introduce)
          formdata.set('start_at', this.ruleForm.start)
          formdata.set('end_at', this.ruleForm.end)
          this.$axios.post('/api/course/course_list', formdata, {
            header: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }).then(res => {
            this.$message.success('创建成功')
            this.createCourse = false
          }).catch(error => {
            this.$message.error('创建失败')
            console.log(error)
          }).finally(() => {
            const temp = {
              name: ' ',
              public: ' ',
              introduce: ' ',
              deadDate: '',
              deadTime: '',
              startDate: '',
              startTime: '',
              start: '',
              end: '',
              isAvatar: false
            }
            this.ruleForm = temp
          })
        } else {
          this.$message.error('请正确填写后提交！')
          console.log('error submit!!')
          return false
        }
      })
    },
    getUserInfo () {
      this.$axios.get('/api/user/current')
        .then(res => {
          console.log('已登录!!!!!11')
          // this.$notification.info({
          //   message: '消息',
          //   description: '已登录账号： ' + res.data.data.nickname,
          //   duration: 2
          // })
        }).catch(() => {
          this.$notification.warning({
            message: '警告',
            description: '未登录或登录过期',
            duration: 2
          })
        }).finally(() => {
        })
    }
  },
  mounted () {
    this.getUserInfo()
  },
  components: {
    'my-course-center': courseCenter
  }
}
</script>

<style scoped lang="less">
  #Tindex {
    width: 100%;
    min-width: 1050px;
    min-height: 400px;
    min-height: 600px;
    /*background: url("../assets/headImg.png");*/
    /*background-repeat: repeat-x;*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /*margin-bottom: 50px;*/
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;
    top: 0;
    left:0;
    width:100%;
    min-width: 1000px;
    height: 60px;
    margin: 0;
    padding: 0;
    color: black;
    border-bottom: 1px solid lightgrey;
    box-shadow: 1px 0px 10px 1px rgba(213,213,213,0.6);
    background-color: white;
    z-index: 2020;
    .navlogo {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 200px;
      height:100%;
      color: black;
      #logo{
        width:100px;
        height:50px;
      }
      > div{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        span {
          font-size: 16px;
          color: #61c7fc;
          font-weight: 600;
        }
      }
    }
    .navbtn {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 300px;
      font-size: 16px;
      .messageShow {
        width:50px;
        height: 35px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;
        >div{
          cursor: pointer;
          font-size: 14px;
        }
        >div:hover {
          font-size: 15px;
        }
        >div:active {
          font-size: 14px;
          text-decoration: underline;
        }
      }
      .btn01{
        cursor: pointer;
      }
      .btn01:hover {
        font-weight: 600;
        /*color:*/
      }
      .btn01:active{
        color: #83bafc;
      }
      .btn01.tabActive {
        text-decoration: none;
        color:black;
        cursor: default;
      }
      .avatarC1{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border: white 2px solid;
        border-radius: 50%;
        .avatarI {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
      }
    }
    .tabActive {
      font-weight: 600;
      border-bottom: 3px solid #83bafc;
    }
  }

  #rightSider {
    z-index: 2030;
    cursor: pointer;
    width: 60px;
    height: 100px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    background-color: #ebf9ff;
    position: fixed;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    >div {
      color: #61c7fc;
      font-weight: 600;
      font-size: 13px;
      max-width: 90%;
    }
  }
  #rightSider:hover {
    background-color: #61c7fc;
    >div {
      color: #ebf9ff;
    }
  }
  #rightSider:active {
    background-color: #2492eb;
  }

  #hcenter {
    width: 100%;
    height: 420px;
    background-color: white;
  }

  #handleBox {
    width: 70%;
    min-width: 700px;
    max-width: 800px;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 20px 0;
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 10px;
    >div:first-child {
      width: 100%;
      height: 30px;
      margin: 10px 0 0 20px;
      i {
        font-weight: 500;
        font-size: 35px;
        color: #1d78f4;
      }
    }
  }
    .handle {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      >div {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 60px;
        background-color: white;
        margin: 5px 0;
      }
      .icon {
        width: 150px;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        font-weight: 600;
        >div:first-child {
          i {
            font-size: 18px;
          }
          margin: 0 10px;
        }
        >div:last-child {
          font-size: 15px;
        }
        .active {
          color: #2c77e5;
        }
      }
      .BtnBox {
        height: 60px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        >div {
          margin: 0 15px;
        }
        .item {
          cursor: pointer;
          width: 110px;
          height: 35px;
          background-color: #ebf9ff;
          color: #3e3e3e;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          box-shadow: 1px 1px 3px 1px #e5e5e5;
          border-radius: 4px;
        }
        .item:active {
          box-shadow: -1px -1px 3px 1px #e5e5e5;
        }
        .itemActive {
          background-color: #6bbbe5;
        }
      }
    }

  #myCourse {
    width: 70%;
    min-width: 700px;
    max-width: 800px;
    min-height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 20px 0 50px 0;
    box-shadow: 1px 1px 5px 1px #e5e5e5;
    .title01:hover {
      font-size: 16px;
    }
    .title01:active {
      box-shadow: -1px -1px 3px 1px rgba(180,180,180,0.56);
    }
  }
  .title01 {
    width: 150px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    background-color: #108ee9;
    box-shadow: 1px 1px 3px 1px rgba(180,180,180,0.56);
    margin: 15px;
    cursor: pointer;
    >div {
      font-size: 15px;
      font-weight: 600;
      color: white;
    }
  }
  .form{
    width: 100%;
  }

  .imgBox {
    max-width: 100%;
    max-height: 200px;
    border-radius: 50%;

    > img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
    }
  }
  .none {
    display: none;
  }
  .Img {
    width: 100%;
    img {
      max-height: 200px;
      max-width: 90%;
    }
  }
  .uploadIcon {
    width: 20px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px 0;
    cursor: pointer;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  .fileName {
    width: 90%;
    font-size: 13px;
    margin: 5px 0;
  }
  img {
    object-fit: cover;
  }
</style>
