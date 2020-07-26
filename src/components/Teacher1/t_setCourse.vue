<template>
  <div id="courseManage">
    <div id="Nav">
      <my-nav :type="1"></my-nav>
    </div>
    <div style="height: 60px"></div>
    <div id="leftSider">
      <my-left></my-left>
    </div>
    <div id="Content01">
      <router-view></router-view>
<!--      <my-course-manage></my-course-manage>-->
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import LeftSider from '../../views/teacher/leftSider/t_leftSider.vue'
import myNav from '../../views/navs/t_nav1.vue'
// import courseManage from '../../views/teacher/t_coursemanage.vue'
const formdata = new FormData()

export default {
  name: 'courseManage.vue',
  data () {
    return {
      expires: '',
      signInInfo: {},
      title: '',
      content: '',
      courseInfo: {},
      createCourse: false,
      formdata,
      ruleForm: {
        introduce: ''
      },
      rules: {
        introduce: [{
          // required: true,
          message: '请输入课程简介'
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
      'leftSiderActive',
      'currentCourse'
    ])
  },
  methods: {
    ...mapMutations([
      'setLeftSider'
    ]),
    pcBtn () {
      this.$router.push('/pCenter')
    },
    tostudent () {
      this.$router.push('/index')
    },
    pubSignIn () {
      if (this.expires === '') {
        this.$notification.warning({
          message: '警告',
          description: '请先输入签到时长！',
          duration: 2
        })
      } else {
        this.$axios.post('/api/course/' + this.currentCourse + '/commit', {
          expires: this.expires
        }, {
          header: {
            'Content-Type': 'application/json' // 如果写成contentType会报错
          }
        }).then(res => {
          this.$notification.success({
            message: '成功',
            description: '发布签到成功',
            duration: 2
          })
        }).catch(error => {
          console.log(error)
          this.$message.error('签到发布失败')
        })
      }
    },
    checkSignIn () {
      this.$axios.get('/api/course/' + this.currentCourse + '/commit')
        .then(res => {
          console.log('查看签到信息成功')
          this.signInInfo = res.data.data
        }).catch(error => {
          console.log(error)
          console.log('查看签到信息失败')
        })
    },
    pubInform () {
      if (this.title === '' && this.content === '') {
        this.$notification.warning({
          message: '警告',
          description: '请输入公告',
          duration: 2
        })
      } else if (this.title === '') {
        this.$notification.warning({
          message: '警告',
          description: '请输入公告标题',
          duration: 2
        })
      } else if (this.content === '') {
        this.$notification.warning({
          message: '警告',
          description: '请输入公告内容',
          duration: 2
        })
      } else {
        this.$axios.post('/api/course/' + this.currentCourse + '/notices', {
          title: this.title,
          content: this.content
        }, {
          header: {
            'Content-Type': 'application/json' // 如果写成contentType会报错
          }
        }).then(res => {
          this.$notification.success({
            message: '成功',
            description: '发布公告成功',
            duration: 2
          })
        }).catch(error => {
          console.log(error)
          this.$message.error('公告发布失败')
        }).finally(() => {
          this.title = ''
          this.content = ''
        })
      }
    },
    getCourse () {
      this.$axios.get('/api/course/' + this.currentCourse)
        .then(res => {
          this.courseInfo = res.data.data
        }).catch(error => {
          console.log(error)
          this.$message.error('获取课程信息错误')
        })
    },
    toggleCreate () {
      this.createCourse = !this.createCourse
    },
    submitForm (formName) {
      this.$axios.put('/api/course/' + this.currentCourse, {
        introduce: this.ruleForm.introduce
      }, {
        header: {
          'Content-Type': 'application/json' // 如果写成contentType会报错
        }
      }).then(res => {
        this.$message.success('修改成功')
        this.createCourse = false
      }).catch(error => {
        this.$message.error('修改失败')
        console.log(error)
      }).finally(() => {
        this.ruleForm.introduce = ''
      })
    }
  },
  watch: {
    currentCourse (val) {
      this.checkSignIn()
    }
  },
  components: {
    'my-left': LeftSider,
    'my-nav': myNav
    // 'my-course-manage': courseManage
  },
  mounted () {
    this.setLeftSider(0)
    setTimeout(() => {
      this.checkSignIn()
      this.getCourse()
    }, 1500)
  }
}
</script>

<style scoped lang="less">
  #courseManage {
    width: 100%;
    min-width: 1050px;
    min-height: 400px;
    min-height: 600px;
    /*background: url("../assets/headImg.png");*/
    /*background-repeat: repeat-x;*/
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #f6f6f6;
  }

  #Nav {
    position: fixed;
    top: 0;
    left:0;
    width:100%;
    min-width: 1000px;
    height: 60px;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid lightgrey;
    box-shadow: 1px 0px 10px 1px rgba(213,213,213,0.6);
    background-color: white;
    z-index: 20;
  }

  #leftSider {
    z-index: 2030;
    width: 150px;
    height: 450px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: white;
    position: fixed;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  #Content01 {
    width: 70%;
    min-width: 700px;
    max-width: 800px;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .pubSignIn {
    font-size: 14px;
    width: 100%;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    margin: 20px 0;
    >div {
      margin: 5px 0;
    }
  }
  .title03 {
    font-size: 15px;
    font-weight: 600;
  }
  .in1 {
    margin: 10px 0;
  }
  .title04 {
    font-size: 15px;
    font-weight: 600;
  }
  .pubInform {
    width: 100%;
    min-height: 120px;
    margin: 20px 0;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 30px;
    .in2 {
      margin: 10px 0;
    }
    .in3 {
      margin: 10px 0;
      height: 60px;
      resize: none;
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
  .none {
    display: none;
  }

  img {
    object-fit: cover;
  }
</style>
