<template>
  <div id="studentManage">
    <div id="Content01">
      <div class="none">
        <input type="file"
               ref="upload_btn"
               @change="handleFileChange">
      </div>
      <div class="topBox">
        <div class="tips">
          <div>上传至分组：</div>
          <div>{{courseInfo.name}}</div>
        </div>
        <div class="upLoadBox" id="drag_box" ref="dopbox" :class=" { borderhover: borderhover } ">
          <div class="uploadIcon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-renzhengxinxishangchuan"></use>
            </svg>
            <!--            <v-icon type="cloud-upload-o"></v-icon>-->
          </div>
          <div class="Btn01"
               @click="clickUpload">
            <div>信息上传</div>
          </div>
        </div>
      </div>
      <div id="handle">
        <div>
          <v-button
            :type="type === 1 ? 'primary' : ''"
            @click="toggleType(1)">学生列表</v-button>
        </div>
        <div>
          <v-button
            :type="type === 2 ? 'primary' : ''"
            @click="toggleType(2)">学生学习情况</v-button>
        </div>
      </div>
      <div class="student" v-show="type === 1">
        <div class="studentTitle">
          <div class="item01">
            <div>姓名</div>
          </div>
          <div class="item01">
            <div>性别</div>
          </div>
          <div class="item01">
            <div>学号</div>
          </div>
          <div class="item01">
            <div>学院</div>
          </div>
        </div>
        <div class="studentItem"
             v-for="(item, index) in students"
             :key="index">
          <div class="item01">
            <div>{{item.nickname}}</div>
          </div>
          <div class="item01">
            <div>{{item.gender}}</div>
          </div>
          <div class="item01">
            <div>{{item.uid}}</div>
          </div>
          <div class="item01">
            <div>{{item.school}}</div>
          </div>
        </div>
        <div class="studentItem">
          <div class="item01">
            <div>林炜</div>
          </div>
          <div class="item01">
            <div>女</div>
          </div>
          <div class="item01">
            <div>031902321</div>
          </div>
          <div class="item01">
            <div>数学与计算机科学学院搞长点搞长点搞长点搞长点搞长点搞长点搞长点搞长点搞长点</div>
          </div>
        </div>
        <div class="studentItem">
          <div class="item01">
            <div>林炜</div>
          </div>
          <div class="item01">
            <div>男</div>
          </div>
          <div class="item01">
            <div>031902321</div>
          </div>
          <div class="item01">
            <div>数学与计算机科学学院</div>
          </div>
        </div>
        <div class="studentItem">
          <div class="item01">
            <div>林炜</div>
          </div>
          <div class="item01">
            <div>男</div>
          </div>
          <div class="item01">
            <div>031902321</div>
          </div>
          <div class="item01">
            <div>数学与计算机科学学院</div>
          </div>
        </div>
      </div>
      <div id="detailTable" v-show="type === 2">
        <div class="item title">
          <div><div>姓名</div></div>
          <div><div>学号</div></div>
          <div><div>通知确认次数</div></div>
          <div><div>课程讨论次数</div></div>
          <div><div>分数</div></div>
        </div>
        <div class="item">
          <div><div>林炜</div></div>
          <div><div>00013589</div></div>
          <div><div>15</div></div>
          <div><div>5</div></div>
          <div><div>3</div></div>
        </div>
        <div class="item">
          <div><div>炜炜</div></div>
          <div><div>00013589</div></div>
          <div><div>12</div></div>
          <div><div>8</div></div>
          <div><div>0</div></div>
        </div>
        <div class="item">
          <div><div>芃芃</div></div>
          <div><div>158765230</div></div>
          <div><div>16</div></div>
          <div><div>50</div></div>
          <div><div>12</div></div>
        </div>
        <div class="item">
          <div><div>林炜</div></div>
          <div><div>00013589</div></div>
          <div><div>15</div></div>
          <div><div>5</div></div>
          <div><div>3</div></div>
        </div>
        <div class="item">
          <div><div>炜炜</div></div>
          <div><div>00013589</div></div>
          <div><div>12</div></div>
          <div><div>8</div></div>
          <div><div>0</div></div>
        </div>
        <div class="item">
          <div><div>芃芃</div></div>
          <div><div>158765230</div></div>
          <div><div>16</div></div>
          <div><div>50</div></div>
          <div><div>12</div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'studentManage.vue',
  data () {
    return {
      counter: 5,
      isCnt99: false,
      open: false,
      borderhover: false,
      formdata: '',
      students: '',
      type: 1
    }
  },
  computed: {
    ...mapState([
      'leftSiderActive',
      'currentCourse',
      'courseInfo',
      'currentUser'
    ])
  },
  methods: {
    ...mapMutations([
      'setLeftSider',
      'setcourseInfo'
    ]),
    toggle () {
      this.open = !this.open
    },
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
    toggleType (type) {
      this.type = type
    },
    clickUpload () {
      this.$refs.upload_btn.click()
    },
    uploadFile: function (files) {
      if (files.length !== 1) {
        this.$message.warning('数量错误')
      } else {
        const file = files[0]
        this.file = file
        this.formdata = new FormData()
        this.formdata.set('excel_file', file)
        this.$axios.post('/api/course/' + this.currentCourse + '/students/import', this.formdata, {
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(res => {
          this.$message.success('上传文件成功')
          this.getStudent()
        }).catch(error => {
          console.log(error)
          this.$message.warning('上传文件失败')
        })
      }
    },
    handleFileChange () {
      const inputDOM = this.$refs.upload_btn
      const files = inputDOM.files
      this.uploadFile(files)
    },
    enentDrop: function (e) {
      this.borderhover = false
      e.stopPropagation()
      e.preventDefault()
      const fileData = e.dataTransfer.files
      // console.log(fileData)
      this.uploadFile(fileData)
    },
    getStudent () {
      this.$axios.get('/api/course/' + this.currentCourse + '/students')
        .then(res => {
          this.$message.success('获取学生信息成功')
          this.students = res.data.data.students
        }).catch(error => {
          console.log(error)
          this.$message.warning('获取学生信息失败')
        })
    },
    getCourse () {
      this.$axios.get('/api/course/' + this.currentCourse)
        .then(res => {
          this.setcourseInfo(res.data.data)
        }).catch(error => {
          console.log(error)
          this.$message.error('获取课程信息失败')
        })
    },
    chooseChater (id) {
      if (this.chapter === id) {
        this.chapter = ''
      } else {
        this.chapter = id
      }
    },
    deleteVideo (id) {
      const routeUrl = this.$router.resolve({
        path: '/video'
      })
      window.open(routeUrl.href, '_blank')
    },
    scrollToDown () {
      this.$refs.vscroll.scrollTo(
        {
          x: '100%'
        },
        500
      )
    },
    getUserInfo () {
      this.$axios.get('/api/user/current')
        .then(res => {
          console.log('已登录')
          this.setCurrentUser(res.data.data)
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
          this.$message.warning('未登录或登录过期')
          this.$router.push('/unindex')
        }).finally(() => {
        })
    }
  },
  watch: {
    currentCourse (val) {
      this.getCourse()
      this.getStudent()
    }
  },
  components: {
  },
  mounted () {
    setTimeout(() => {
      this.setLeftSider(5)
      this.getCourse()
      this.getStudent()
    }, 1000)
    const that = this
    const dropbox = document.getElementById('drag_box')
    dropbox.addEventListener('drop', this.enentDrop, false)
    dropbox.addEventListener('dragleave', function (e) {
      e.stopPropagation()
      e.preventDefault()
      that.borderhover = false
    })
    dropbox.addEventListener('dragenter', function (e) {
      e.stopPropagation()
      e.preventDefault()
      that.borderhover = true
    })
    dropbox.addEventListener('dragover', function (e) {
      e.stopPropagation()
      e.preventDefault()
      that.borderhover = true
    })
  }
}
</script>

<style scoped lang="less">
  #studentManage {
    width: 100%;
    min-height: 400px;
    min-height: 600px;
    /*background: url("../assets/headImg.png");*/
    /*background-repeat: repeat-x;*/
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #f6f6f6;
    color: black;
  }

  #Content01 {
    width: 100%;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 5px 0;
    margin-bottom: 50px;
  }
  .none {
    display: none;
  }
  .topBox {
    width: 100%;
    height: 250px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0;
    margin-bottom: 20px;
    box-shadow: 1px 1px 5px 1px rgba(150,150,150,0.3),
      -1px -1px 5px 1px rgba(150,150,150,0.3);
    .tips {
      width: 100%;
      height: 35px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      border-bottom: 1px solid #e4e4e4;
      >div {
        margin: 5px;
        margin-left: 15px;
      }
    }
    .upLoadBox {
      width: 100%;
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .uploadIcon {
        width: 50px;
        height: 50px;
        i {
          font-size: 40px;
          font-weight: 500;
          color: #34c5f2;
        }
        svg {
          width: 30px;
          height: 30px;
        }
      }
      .Btn01 {
        cursor: pointer;
        width: 200px;
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 40px;
        background-color: #83bafc;
        color:white;
        font-size: 15px;
        box-shadow: 1px 1px 3px 1px rgba(150,150,150,0.3);
      }
      .Btn01:hover {
        font-size: 16px;
      }
      .Btn01:active {
        font-size: 15px;
        box-shadow: -1px -1px 3px 1px rgba(150,150,150,0.3);
      }
    }
  }
  .borderhover {
    box-shadow: inset 1px 1px 5px 1px rgba(150,150,150,0.3),
      inset -1px -1px 5px 1px rgba(150,150,150,0.3);
  }

  .courseCheck {
    width: 100%;
    min-height: 50px;
    border-radius: 4px;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 30px;
    .zhankai {
      cursor: pointer;
      height: 50px;
      width: 50px;
      margin: 0 5px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      >div {
        i {
          font-size: 25px;
          font-weight: 500;
        }
      }
    }
    .courseItem {
      height: 50px;
      min-width: 100px;
      margin: 0 15px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      >div {
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 35px;
        padding: 0 20px;
        border-radius: 40px;
        border: 1px solid gray;
        box-shadow: 1px 1px 5px 1px rgba(150,150,150,0.3);
        >div {
          font-size: 13px;
        }
      }
      >div:hover {
        font-size: 14px;
      }
      >div:active {
        box-shadow: -1px -1px 5px 1px rgba(150,150,150,0.3);

      }
    }
    .choosed {
      >div {
        border: 1.5px solid #7bd0fc;
      }
    }
  }
  .toggled {
    height: 50px;
    overflow: hidden;
  }

  .student {
    width: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    /*margin: 30px 0;*/
    margin-bottom: 50px;
    .studentTitle {
      width: 100%;
      height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      font-weight: 600;
      font-size: 14px;
    }
    .studentItem {
      background-color: white;
      margin: 5px 0;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      font-weight: 500;
      font-size: 14px;
      border-radius: 4px;
    }
    .studentItem .item01 {
      cursor: pointer;
    }
    .studentItem:hover {
      box-shadow: 1px 1px 5px 1px rgba(150,150,150,0.1);
      font-size: 15px;
    }
    .studentItem:active {
      box-shadow: -1px -1px 5px 1px rgba(150,150,150,0.1);
      font-size: 14px;
    }
    .item01 {
      width: 25%;
      min-height: 50px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }

  #handle {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    >div {
      margin: 0 10px;
    }
  }

  #detailTable {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .item {
    width: 100%;
    min-height: 40px;
    margin: 3px 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    >div {
      width: 20%;
      margin: 2px 0;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      >div {
        font-size: 15px;
      }
    }
  }
  .title {
    cursor: default;
    margin: 5px 0;
    background-color: transparent;
    >div{
      >div{
        font-size: 14px;
        font-weight: 600;
      }
    }
  }
  .item:hover {
    box-shadow: 1px 1px 5px 1px rgba(213,213,213,0.6);
    font-size: 15px;
  }
  .item:active {
    font-size: 14px;
  }
  .title:hover {
    box-shadow: none;
  }
  .title:active {
    box-shadow: none;
  }

  img {
    object-fit: cover;
  }
</style>
