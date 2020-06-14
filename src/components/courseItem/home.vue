<template>
  <div id="onehome">
    <v-row>
      <v-col span="7">
        <div id="oneTeacher">
          <vue-scroll>
            <div id="oneTeacher1">
              <div class="nav1">
                <div>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-laoshi2"></use>
                  </svg>
                </div>
                <div>
                  授课老师
                </div>
              </div>
              <div class="oneavatarBox">
                <img class="onavatarImg" src="../../assets/avatar02.png">
              </div>
              <div class="oneName">
                <div>林炜</div>
              </div>
              <div class="oneCollege">
                <div>所属院系：秃顶研究院</div>
              </div>
              <div class="oneIntro">
                <div>个人简介</div>
                <div>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
              </div>
            </div>
          </vue-scroll>
        </div>
      </v-col>
      <v-col span="17">
        <div id="oneIntro">
          <vue-scroll>
            <div id="oneIntro1">
              <div class="nav1">
                <div>
                  <v-icon type="tag"></v-icon>
                </div>
                <div>
                  课程介绍
                </div>
              </div>
              <div class="one2Term">
                <div class="one2infolab">所属学期：</div>
                <div class="one2infolab">2019-2020 第二学期</div>
              </div>
              <div class="one2Info">
                <div class="one2infolab">总学时：</div>
                <div class="one2infoVal">48</div>
                <div class="one2infolab">课程学分：</div>
                <div class="one2infoVal">2.0</div>
              </div>
              <div class="one2Time">
                <div class="one2infolab">开课时间：</div>
                <div class="one2infoVal">12周-16周</div>
              </div>
              <div class="one2Breif">
                <div class="one2infolab">简介：</div>
                <div>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
              </div>
            </div>
          </vue-scroll>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col span="7">
        <div id="oneInform">
          <vue-scroll>
            <div id="oneInform1">
              <div class="nav1">
                <div>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xiaoxi"></use>
                  </svg>
                </div>
                <div>
                  课程通知
                </div>
              </div>
              <div class="one3item" @click="openPop()">
                <div class="one3">
                  <div class="one3icon" v-show="false"></div>
                  <div class="one3iconed" v-show="true"></div>
                  <div class="one3info">关于熬夜秃头实验的通知</div>
                </div>
                <div class="one3time">2020.6.1</div>
              </div>
              <div class="one3item" @click="openPop()">
                <div class="one3">
                  <div class="one3icon"></div>
                  <div class="one3info">关于熬夜秃头实验的通知</div>
                </div>
                <div class="one3time">2020.6.1</div>
              </div>
              <div class="one3item" @click="openPop()">
                <div class="one3">
                  <div class="one3icon"></div>
                  <div class="one3info">关于熬夜秃头实验的通知</div>
                </div>
                <div class="one3time">2020.6.1</div>
              </div>
              <div class="one3item" @click="openCoursePop()">
                <div class="one3">
                  <div class="one3icon"></div>
                  <div class="one3info">关于熬夜秃头实验的通知</div>
                </div>
                <div class="one3time">2020.6.1</div>
              </div>
              <div class="one3item" @click="openCoursePop()">
                <div class="one3">
                  <div class="one3icon"></div>
                  <div class="one3info">关于熬夜秃头实验的通知</div>
                </div>
                <div class="one3time">2020.6.1</div>
              </div>
              <div class="one3item" @click="openCoursePop()">
                <div class="one3">
                  <div class="one3icon"></div>
                  <div class="one3info">关于熬夜秃头实验的通知</div>
                </div>
                <div class="one3time">2020.6.1</div>
              </div>
              <div class="one3item" @click="openCoursePop()">
                <div class="one3">
                  <div class="one3icon"></div>
                  <div class="one3info">关于熬夜秃头实验的通知</div>
                </div>
                <div class="one3time">2020.6.1</div>
              </div>
              <div class="one3item" @click="openCoursePop()">
                <div class="one3">
                  <div class="one3icon"></div>
                  <div class="one3info">关于熬夜秃头实验的通知</div>
                </div>
                <div class="one3time">2020.6.1</div>
              </div>
              <div class="one3item" @click="openCoursePop()">
                <div class="one3">
                  <div class="one3icon"></div>
                  <div class="one3info">关于熬夜秃头实验的通知</div>
                </div>
                <div class="one3time">2020.6.1</div>
              </div>
              <div class="one3item" @click="openCoursePop()">
                <div class="one3">
                  <div class="one3icon"></div>
                  <div class="one3info">关于熬夜秃头实验的通知</div>
                </div>
                <div class="one3time">2020.6.1</div>
              </div>
            </div>
          </vue-scroll>
        </div>
      </v-col>
      <v-col span="17">
        <div id="oneArrange">
          <vue-scroll>
            <div id="oneArrange1">
              <div class="nav1">
                <div>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-kechenganpaiweiwancheng"></use>
                  </svg>
                </div>
                <div>
                  课程安排
                </div>
              </div>
              <div class="one4item">
              <div>
                第一周 秃头学的前世今生
              </div>
            </div>
              <div class="one4item">
                <div>
                  第一周 秃头学的前世今生
                </div>
              </div>
              <div class="one4item">
                <div>
                  第一周 秃头学的前世今生
                </div>
              </div>
              <div class="one4item">
                <div>
                  第一周 秃头学的前世今生
                </div>
              </div>
              <div class="one4item">
                <div>
                  第一周 秃头学的前世今生
                </div>
              </div>
              <div class="one4item">
                <div>
                  第一周 秃头学的前世今生
                </div>
              </div>
              <div class="one4item">
                <div>
                  第一周 秃头学的前世今生
                </div>
              </div>
              <div class="one4item">
                <div>
                  第一周 秃头学的前世今生
                </div>
              </div>
            </div>
          </vue-scroll>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'home.vue',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'coursePop',
      'coursePopType'
    ])
  },
  methods: {
    ...mapMutations([
      'openCoursePop',
      'closeCoursePop',
      'chooseCourseType'
    ]),
    openPop () {
      this.chooseCourseType(1)
      this.openCoursePop()
    }
  },
  components: {
  }
}
</script>

<style scoped lang="less">
#onehome {
  position: relative;
  height: 700px;
  width: 70%;
  min-width: 800px;
  max-width: 900px;
  left: 50%;
  transform: translate(-50%);
  /*background-color: #83bafc;*/
}

  #oneTeacher {
    width: 100%;
    height: 300px;
    background-color: #f5f5f5;
    margin: 20px 0;
    border-radius: 20px;
    #oneTeacher1 {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      .oneavatarBox {
        width: 65px;
        height: 65px;
        border-radius: 50%;
        margin: 5px 0;
        .onavatarImg {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .oneName {
        margin: 5px 0;
        font-size: 14px;
        font-weight: 600;
      }
      .oneCollege {
        width: 90%;
        margin: 5px 0;
        >div {
          width: 100%;
          word-break: break-all;
        }
      }
      .oneIntro {
        width: 90%;
        word-break: break-all;
      }
    }
  }

  #oneIntro {
    width: 95%;
    height: 300px;
    background-color: #f5f5f5;
    margin: 20px 5%;
    border-radius: 20px;
    #oneIntro1 {
      width: 90%;
      height: 100%;
      margin: 0 5%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      color: black;
      >div {
        margin: 5px 0;
        display: flex;
        flex-direction: row;
        justify-self: flex-start;
        align-items: center;
      }
      .one2Term {
        width: 100%;
      }
      .one2Info {
        >div:nth-child(2),
        div:nth-child(4) {
          margin: 0 5px;
        }
        >div:nth-child(3) {
          margin-left: 40px;
        }
      }
      .one2Breif {
        flex-direction: column;
        align-items: flex-start;
        >div {
          margin: 3px 0;
        }
      }
      .one2infolab {
        font-size: 14px;
      }
      .one2infoVal {
        font-size: 15px;
        font-weight: 600;
      }
    }
  }

  #oneInform {
    width: 100%;
    height: 300px;
    background-color: #f5f5f5;
    margin: 20px 0;
    border-radius: 20px;
    #oneInform1 {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      .one3item {
        cursor: pointer;
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .one3 {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          .one3icon {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: red;
          }
          .one3iconed {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: transparent;
          }
          .one3info {
            margin: 2px 0;
            margin-left: 5px;
            font-weight: 600;
            font-size: 13px;
          }
        }
        .one3time {
          margin: 2px 0;
          width: 100%;
          text-align: right;
        }
      }
      .one3item:hover {
        font-size: 13px;
      }
    }
  }

  #oneArrange {
    width: 95%;
    height: 300px;
    background-color: #f5f5f5;
    margin: 20px 5%;
    border-radius: 20px;
    #oneArrange1 {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      .one4item {
        /*cursor: pointer;*/
        width: 90%;
        height: 35px;
        margin: 5px 0;
        border-radius: 50px;
        background-color: #e5e5e5;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        >div {
          font-size: 13px;
          position: relative;
          left: 20px;
        }
      }
      .one4item:hover {
        background-color: #d1d1d1;
      }
    }
  }

  .nav1 {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 0;
    >div:first-child {
      width: 25px;
      height: 25px;
      margin-left: 5%;
      >svg {
        height: 100%;
        width: 100%;
      }
      >i {
        font-size: 25px;
        color: #368afd;
      }
    }
    >div:last-child {
      font-size: 14px;
      font-weight: 600;
      margin-left: 10px;
    }
  }

  img {
    object-fit: cover;
  }
</style>
