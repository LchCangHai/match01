<template>
  <div id="courseVideo">
    <div id="Nav">
      <my-nav :type="1"></my-nav>
    </div>
    <div id="rightSider" @click="tostudent()">
      <div>学生主页</div>
    </div>
    <div id="leftSider">
      <my-left></my-left>
    </div>
    <div id="Content01">
      <div class="none">
        <input type="file"
              ref="upload_btn"
              @change="handleFileChange">
      </div>
      <div class="topBox">
        <div class="tips">
          <div>上传至分组：</div>
          <div>{{chapter}}</div>
        </div>
        <div class="upLoadBox" id="drag_box" ref="dopbox" :class=" { borderhover: borderhover } ">
          <div class="uploadIcon">
            <v-icon type="cloud-upload-o" v-show="!loading"></v-icon>
            <v-icon type="loading" v-show="loading"></v-icon>
          </div>
          <div class="Btn01" v-show="!loading"
               @click="clickUpload">
            <div>上传视频</div>
          </div>
        </div>
      </div>
      <div id="checkcourse">
        <my-choose-course></my-choose-course>
      </div>
      <div class="mune">
        <div class="mune02">
          <div class="tips">
            <div>上传至分组：</div>
            <div>{{chapter}}</div>
          </div>
        </div>
        <div class="mune03">
          <div class="addBtn" @click="addChapter()">
            <div>添加分组</div>
          </div>
          <div class="addInput">
            <v-input v-model="chapter1"></v-input>
          </div>
        </div>
        <vue-scroll ref="vscroll">
          <div id="mune01">
            <div class="studyItem01" v-for="(item, index) in courseVideo" :key="index">
              <div class="item01Main" @click="chooseChater(item.name)">
                <div class="chapter01">
                  <div>
                    <v-icon type="folder"></v-icon>
                  </div>
                  <div>{{item.name}}</div>
                </div>
                <div class="floderIcon">
                  <v-icon type="right" v-show="chapter === item.name ? false : true"></v-icon>
                  <v-icon type="down" v-show="chapter === item.name ? true : false"></v-icon>
                </div>
              </div>
              <div class="item01Child" v-show="chapter === item.name ? true : false">
                <div class="studyItem02" v-for="(item1, index1) in item.movies" :key="index1">
                  <div class="item02Main">
                    <div class="item02left" @click="showVideo(item1)">
                      <div class="videoIcon">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-meiti"></use>
                        </svg>
                      </div>
                      <div class="videoTitle">{{item1.name}}</div>
                    </div>
                    <div class="item02right" @click="deleteVideo(item1.uuid)">
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-shanchu"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </vue-scroll>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import LeftSider from './leftSider/leftSider.vue'
import chooseCourse from './chooseCourse/chooseCourse'
import myNav from '../../views/navs/s_nav1.vue'
const formdata = new FormData()

export default {
  name: 'courseVideo.vue',
  data () {
    return {
      open: false,
      chapter: '',
      chapter1: '',
      formdata,
      loading: false
    }
  },
  computed: {
    ...mapState([
      'leftSiderActive',
      'courseVideo',
      'currentCourse'
    ])
  },
  methods: {
    ...mapMutations([
      'setLeftSider',
      'setcourseVideo'
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
    clickUpload () {
      this.$refs.upload_btn.click()
    },
    uploadFile: function (files) {
      if (files.length !== 1) {
        this.$message.warning('数量错误')
      } else {
        const file = files[0]
        this.file = file
        this.formdata.set('movie', file)
        this.formdata.set('name', file.name)
        if (this.chapter === '') {
          console.log(2)
          this.$notification.warning({
            message: '警告',
            description: '请选择或新建分组后上传视频！',
            duration: 2
          })
        } else {
          console.log(3)
          this.formdata.set('chapter', this.chapter)
          this.loading = true
          this.$axios.post('/api/course/' + this.currentCourse + '/movies/upload', formdata, {
            header: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }).then(res => {
            this.$notification.success({
              message: '成功',
              description: '上传视频成功',
              duration: 1
            })
            this.$message.success('上传文成功')
            this.getCourseVideo()
          }).catch(error => {
            console.log(error)
            this.$notification.warning({
              message: '警告',
              description: '上传文件失败',
              duration: 2
            })
          }).finally(() => {
            this.loading = false
          })
        }
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
    chooseChater (id) {
      if (this.chapter === id) {
        this.chapter = ''
      } else {
        this.chapter = id
      }
    },
    addChapter () {
      this.chapter = this.chapter1
    },
    showVideo (item1) {
      let base1 = 'http://view.officeapps.live.com/op/view.aspx'
      base1 = base1 + '?src=' + item1.url
      window.open(base1)
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
    getCourseVideo () {
      this.$axios.get('/api/course/' + this.currentCourse + '/movies')
        .then(res => {
          this.setcourseVideo(res.data.data.chapters)
        }).catch(error => {
          console.log(error)
          this.$message.error('获取课程章节视频失败')
        })
    }
  },
  components: {
    'my-left': LeftSider,
    'my-choose-course': chooseCourse,
    'my-nav': myNav
  },
  mounted () {
    this.setLeftSider(2)
    setTimeout(() => {
      this.getCourseVideo()
    }, 1500)
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
  #courseVideo {
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
    background-color: #fafafa;
    color: black;
  }

  #Nav {
    position: relative;
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

  #rightSider {
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

  #leftSider {
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

    .mune {
      width: 100%;
      height: 480px;
      background-color: white;
      margin-top: 40px;
      box-shadow: 1px 1px 5px 1px rgba(150,150,150,0.2),
        -1px 0px 5px 1px rgba(150,150,150,0.2);
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
    .mune02 {
      width: 100%;
      height: 40px;
      border-bottom: 1px solid #e4e4e4;
      box-shadow: 0px 1px 3px 1px rgba(150,150,150,0.2);
      .tips {
        width: 100%;
        height: 35px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        >div {
          margin: 5px;
          margin-left: 15px;
        }
      }
    }
    .mune03 {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #e4e4e4;
      box-shadow: 0px 1px 3px 1px rgba(150,150,150,0.2);
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      .addBtn {
        cursor: pointer;
        width: 100px;
        height: 30px;
        /*border: 1px solid #108ee9;*/
        background-color: #7bd0fc;
        color: white;
        box-shadow: 1px 1px 3px 1px rgba(150,150,150,0.2);
        border-radius: 50px;
        margin-left: 15px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        >div {
          font-size: 14px;
        }
      }
      .addBtn:hover {
        >div {
          font-size: 15px;
        }
      }
      .addBtn:active {
        >div {
          font-size: 14px;
        }
        box-shadow: -1px -1px 3px 1px rgba(150,150,150,0.2);
      }
      .addInput {
        width: 500px;
        margin-left: 20px;
      }
    }
  #mune01 {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    .studyItem01 {
      width: 100%;
      min-height: 60px;
      margin: 5px 0;
    }
  }
  .item01Main {
    cursor: pointer;
    width: 100%;
    min-height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #f5f5f5;
    box-shadow: 3px 3px 5px 0px rgba(213,213,213,0.5);
    .chapter01 {
      margin-left: 20px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      >div:first-child {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        i {
          font-size: 24px;
          color: #ffb41b;
          font-weight: 600;
        }
      }
      >div:last-child {
        margin: 0 20px;
        font-size: 13px;
      }
    }
    .floderIcon {
      margin-right: 20px;
      i {
        font-size: 16px;
      }
    }
  }
  .item01Child {
    width: 100%;
    min-height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .studyItem02 {
      cursor: pointer;
      background-color: #fbfbfb;
      margin: 3px 0;
      width: 99%;
      height: 60px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
    .studyItem02:hover {
      color: #3d84ff;
    }
  }
  .item02Main {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .item02left {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-left: 20px;
      .videoIcon {
        width: 25px;
        height: 25px;
        margin-right: 10px;
        svg {
          height: 100%;
          width: 100%;
        }
      }
      .videoTitle {
        font-size: 13px;
      }
    }
    .item02right {
        width: 20px;
        height: 20px;
        margin-right: 20px;
        svg {
          height: 100%;
          width: 100%;
        }
    }
  }

  img {
    object-fit: cover;
  }
</style>
