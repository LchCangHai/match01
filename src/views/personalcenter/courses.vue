<template>
  <div id="courses">
    <div id="courseTitle">
      <v-icon  class="licon01" type="question-circle"></v-icon>
      <span>在线课程</span>
    </div>
    <div id="panel">
      <div
        :class="{ beactive1: courseType === 1 ? true : false}"
        @click="publicCourse()"
      >公开课</div>
      <div
        :class="{ beactive1: courseType === 2 ? true : false}"
        @click="inCourse()"
      >导入课</div>
    </div>
    <div class="content1 publicCourse" v-show="courseType == 1 ? true : false">
      <vue-scroll>
        <div class="content2">
          <div class="courseItem">
            <div class="course02">
              <div class="info02">
                <div class="courseImg02">
                  <img class="img02" src="../../assets/course01.jpg">
                </div>
                <div class="courseinfo02">
                  <div class="courseTitle02">国防教育-军事理论</div>
                  <div class="courseCollege02">福州大学</div>
                  <div class="courseRate02">已完成100%</div>
                  <div class="courseEnd02">2020年6月20日 截止</div>
                </div>
              </div>
              <div class="handle02">
                <div class="handleitem">
                  <div class="icon02">
                    <v-icon class="infoicon" type="caret-right"></v-icon>
                  </div>
                  <div>课程介绍</div>
                </div>
                <div class="handleitem">
                  <div class="icon02">
                    <v-icon class="exiticon" type="caret-right"></v-icon>
                  </div>
                  <div>退出课程</div>
                </div>

              </div>
            </div>
          </div>
          <div class="courseItem">
            <div class="info02">
              <div class="courseImg02">
                <img class="img02" src="../../assets/course01.jpg">
              </div>
              <div class="courseinfo02">
                <div class="courseTitle02">国防教育-军事理论</div>
                <div class="courseCollege02">福州大学</div>
                <div class="courseRate02">已完成100%</div>
                <div class="courseEnd02">2020年6月20日 截止</div>
              </div>
            </div>
            <div class="handle02">
              <div class="handleitem">
                <div class="icon02">
                  <v-icon class="infoicon" type="caret-right"></v-icon>
                </div>
                <div>课程介绍</div>
              </div>
              <div class="handleitem">
                <div class="icon02">
                  <v-icon class="exiticon" type="caret-right"></v-icon>
                </div>
                <div>退出课程</div>
              </div>

            </div>
          </div>
          <div class="courseItem">
            <my-course></my-course>
          </div>
        </div>
      </vue-scroll>
    </div>
    <div class="content1 importCourse" v-show="courseType == 2 ? true : false">
      <vue-scroll>
        <div class="content2">
          <div class="courseItem">
            <div class="course02">
              <div class="info02">
                <div class="courseImg02">
                  <img class="img02" src="../../assets/course01.jpg">
                </div>
                <div class="courseinfo02">
                  <div class="courseTitle02">国防教育-军事理论</div>
                  <div class="courseCollege02">福州大学</div>
                  <div class="courseRate02">已完成100%</div>
                  <div class="courseEnd02">2020年6月20日 截止</div>
                </div>
              </div>
              <div class="handle02">
                <div class="handleitem">
                  <div class="icon02">
                    <v-icon class="infoicon" type="caret-right"></v-icon>
                  </div>
                  <div>课程介绍</div>
                </div>
                <div class="handleitem">
                  <div class="icon02">
                    <v-icon class="exiticon" type="caret-right"></v-icon>
                  </div>
                  <div>退出课程</div>
                </div>

              </div>
            </div>
          </div>
          <div class="courseItem">
            <div class="info02">
              <div class="courseImg02">
                <img class="img02" src="../../assets/headImg.png">
              </div>
              <div class="courseinfo02">
                <div class="courseTitle02">国防教育-军事理论</div>
                <div class="courseCollege02">福州大学</div>
                <div class="courseRate02">已完成100%</div>
                <div class="courseEnd02">2020年6月20日 截止</div>
              </div>
            </div>
            <div class="handle02">
              <div class="handleitem">
                <div class="icon02">
                  <v-icon class="infoicon" type="caret-right"></v-icon>
                </div>
                <div>课程介绍</div>
              </div>
              <div class="handleitem">
                <div class="icon02">
                  <v-icon class="exiticon" type="caret-right"></v-icon>
                </div>
                <div>退出课程</div>
              </div>

            </div>
          </div>
          <div class="courseItem">
            <my-course></my-course>
          </div>
        </div>
      </vue-scroll>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Course from './courses/course'

export default {
  name: 'courses',
  data () {
    return {
      courseType: 1
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
      'closeLogin',
      'loginPop',
      'signUpPop',
      'retrievePop',
      'otherWayPop'
    ]),
    publicCourse () {
      this.courseType = 1
    },
    inCourse () {
      this.courseType = 2
    }
  },
  components: {
    'my-course': Course
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
        .img02 {
          width: 100%;
          height: 100%;
        }
      }
      .courseinfo02 {
        /*height: 100%;*/
        position: relative;
        left: 15px;
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

</style>
