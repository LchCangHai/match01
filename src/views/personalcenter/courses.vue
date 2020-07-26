<template>
  <div id="courses">
    <div id="courseTitle">
      <v-icon type="appstore"></v-icon>
      <span>在线课程</span>
    </div>
    <div id="panel">
      <div
        :class="{ beactive1: courseType === 2 ? true : false}"
        @click="inCourse()"
      >公开课</div>
      <div
        :class="{ beactive1: courseType === 1 ? true : false}"
        @click="publicCourse()"
      >导入课</div>
    </div>
    <div class="content1 publicCourse" v-show="courseType == 1 ? true : false">
      <vue-scroll>
        <div class="content2">
          <div class="courseItem"
               v-for="item in allcourse"
               :key="item.id">
            <div class="course02">
              <div class="info02">
                <div class="courseImg02">
                  <img class="img02" :src="item.avatar" @error="imgerror(item)">
                </div>
                <div class="courseinfo02"  @click="toCourse(item.id)">
                  <div class="courseTitle02">{{item.name}}</div>
                  <div class="courseCollege02">{{item.teacher_name}}</div>
                  <div class="courseRate02">{{item.stat_at}} 开始</div>
                  <div class="courseEnd02">{{item.end_at}} 截止</div>
                </div>
              </div>
              <div class="handle02">
                <div class="handleitem">
                  <div class="icon02">
                    <v-icon class="infoicon" type="caret-right"></v-icon>
                  </div>
                  <div @click="cinfo(item.name, item.introduce)">课程介绍</div>
                </div>
                <div class="handleitem">
                  <div class="icon02">
                    <v-icon class="exiticon" type="caret-right"></v-icon>
                  </div>
                  <div>
                    <v-popconfirm  title="确定删除吗?" placement="left" @confirm="deleteCourse(item.id, item.name)">
                      删除课程
                    </v-popconfirm>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </vue-scroll>
    </div>
    <div class="content1 importCourse" v-show="courseType == 2 ? true : false">
      <vue-scroll>
        <div class="content2">
          <div class="courseItem"
               v-for="item in currentUser.courses"
               :key="item.id" v-show="item.create_status === 0"
               >
            <div class="course02">
              <div class="info02">
                <div class="courseImg02">
                  <img class="img02" :src="item.avatar">
                </div>
                <div class="courseinfo02" @click="toCourse(item.id)">
                  <div class="courseTitle02">{{item.name}}</div>
                  <div class="courseCollege02">{{item.teacher_name}}</div>
                  <div class="courseRate02">{{item.stat_at}} 开始</div>
                  <div class="courseEnd02">{{item.end_at}} 截止</div>
                </div>
              </div>
              <div class="handle02">
                <div class="handleitem">
                  <div class="icon02">
                    <v-icon class="infoicon" type="caret-right"></v-icon>
                  </div>
                  <div @click="cinfo(item.name, item.introduce)">课程介绍</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </vue-scroll>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'courses',
  data () {
    return {
      courseType: 2,
      allcourse: [],
      errorImg: require('../../assets/imgError01.jpg')
    }
  },
  computed: {
    ...mapState([
      'showPopUp',
      'popUpType',
      'currentUser',
      'currentCourse'
    ])
  },
  methods: {
    ...mapMutations([
      'closeLogin',
      'loginPop',
      'signUpPop',
      'retrievePop',
      'otherWayPop',
      'setCurrentUser',
      'setcurrentCourse'
    ]),
    publicCourse () {
      this.courseType = 1
    },
    inCourse () {
      this.courseType = 2
    },
    cinfo (name, introduce) {
      this.$notification.open({
        message: '《' + name + '》的介绍',
        description: introduce,
        duration: 4.8
      })
    },
    deleteCourse (id, name) {
      console.log('deleteCourse')
      this.$axios.delete('/api/course/' + id)
        .then(res => {
          this.$notification.success({
            message: '成功',
            description: '成功删除课程' + '《' + name + '》',
            duration: 1
          })
          this.getAllCourse()
        }).catch(error => {
          console.log(error)
          this.$notification.error({
            message: '出错',
            description: '删除课程' + '《' + name + '》' + '出错，检查网络或通知管理员',
            duration: 2
          })
        })
    },
    binfo (name, id) {},
    getAllCourse () {
      this.$axios.get('/api/user/teacher/current/courses')
        .then(res => {
          console.log('获取导入课程信息成功')
          this.allcourse = res.data.data.courses
        }).catch(error => {
          this.$message.warning('获取导入课程信息出错')
          console.log(error)
        })
    },
    toCourse (id) {
      const routeUrl = this.$router.resolve({
        path: '/courses',
        query: {
          id: id
        }
      })
      this.setcurrentCourse(id)
      window.open(routeUrl.href, '_blank')
    },
    imgerror (item) {
      item.avatar = this.errorImg
    }
  },
  mounted () {
    this.getAllCourse()
  },
  components: {
  }
}
</script>

<style scoped lang="less">
  #courses {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  #courseTitle {
    width: 60%;
    min-width: 600px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    top: 20px;
    .licon01 {
      font-size: 16px;
    }
    >span {
      color: black;
      font-size: 14px;
      font-weight: 500;
      position: relative;
      left: 10px;
    }
  }

  #panel {
    width: 60%;
    min-width: 600px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    top: 18px;
    margin: 10px 0;
    background-color: #f8f8f8;
    color: black;
    font-size: 16px;
    >div {
      margin: 0 30px;
      cursor: pointer;
    }
    >div:hover {
      text-decoration: underline;
    }
    >div:active {
      color: #108ee9;
    }
    >div.beactive1 {
      font-weight: 600;
      text-decoration: none;
    }
  }

  .content1 {
    width: 60%;
    min-width: 600px;
    height: 200px;
    background-color: #f8f8f8;
    position: relative;
    top:20px;
    /*margin-top: 10px;*/
  }

  .content2 {
    width: 100%;
    height: 100%;
    position: relative;
    /*background-color: #f8f8f8;*/
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;

  }

  .courseItem {
    /*background-color: #108ee9;*/
    width: 95%;
    height: 85px;
    position: relative;
    top: 0;
    margin:6px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .course02 {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .info02 {
      height: 100%;
      width: 300px;
      display: flex;
      flex-direction: row;
      align-items: center;
      .courseImg02 {
        width: 150px;
        height: 100%;
        position: relative;
        left: 0px;
        background: url("../../assets/noImgBc.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        .img02 {
          width: 100%;
          height: 100%;
        }
      }
      .courseinfo02 {
        /*height: 100%;*/
        position: relative;
        left: 15px;
        cursor: pointer;
        >div {
          margin: 5px 0;
        }
        .courseTitle02 {
          color: black;
          font-size: 16px;
          font-weight: 600;
        }
        .courseCollege02 {
          font-size: 12px;
          color: black;
        }
        .courseRate02 {
          font-size: 10px;
          color: black;
        }
        .courseEnd02 {
          font-size: 10px;
          color: black;
        }
      }
    }

    .handle02 {
      height: 100px;
      width: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .handleitem {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: relative;
        left: 10px;
        margin: 5px 0;
        color:black;
        >div:last-child {
          cursor: pointer;
          left:2px;
        }
        >div:last-child:hover{
          text-decoration: underline;
        }
        >div:last-child:active{
          font-weight: 600;
        }
      }
      .icon02 {
        width: 15px;
        height: 15px;
        i.infoicon {
          color: #83bafb;
        }
        i.exiticon {
          color: #fccc83;
        }
      }
    }
  }

  .courseItem:hover {
    border: solid 1px rgba(213,213,213,0.1);
    border-radius: 5px;
    background-color: rgba(248,248,248,0.4);
    box-shadow: 1px -1px 10px 1px rgba(213,213,213,0.6);
  }

  img {
    object-fit: cover;
  }

</style>
