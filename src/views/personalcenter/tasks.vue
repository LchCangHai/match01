<template>
  <div id="tasks">
    <div id="tasksTitle">
      <v-icon  class="licon01" type="question-circle"></v-icon>
      <span>作业情况</span>
    </div>
    <div class="handles">
      <div class="taskstype">
        <v-button class="typeBtn" type="ghost"
        :class="{ activeBtn: type === 1 ? true : false}"
        @click="typeAll()">全部</v-button>
        <v-button  class="typeBtn" type="ghost"
        :class="{ activeBtn: type === 2 ? true : false}"
        @click="typeUnfinish()">未完成</v-button>
        <v-button  class="typeBtn" type="ghost"
        :class="{ activeBtn: type === 3 ? true : false}"
        @click="typeFinish()">已完成</v-button>
      </div>
      <div class="search">
        <input placeholder="搜索" class="searchIn" v-model="searchTask">
        <v-icon  class="licon01" type="question-circle"></v-icon>
      </div>
    </div>
    <div class="tasksContent">
      <div id="tasksback" class="fb"
           @mouseenter="fbshow()"
           @mouseleave="fbhide()"
            @click="fbback()">
        <v-icon type="left" class="fbIcon" v-show="showFB"></v-icon>
      </div>
      <div id="maintasks">
        <vue-scroll ref="vs">
          <div id="tasksContent01">
            <div class="tasksItem">
              <vue-scroll>
                <div class="tasksItem01"></div>
              </vue-scroll>
            </div>
            <div class="tasksItem">
              <vue-scroll>
                <div class="tasksItem01" @click="showTask()">
                  <div class="taskTitle">9.6 傅里叶级数</div>
                  <div class="taskMajor">高等数学</div>
                  <div class="taskInfo">作业要求:XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
                  <div class="taskEnd">
                    <v-icon type="question-circle"></v-icon>
                    <div>截止时间： 2020.05.20</div>
                  </div>
                </div>
              </vue-scroll>
            </div>
            <div class="tasksItem">
              <vue-scroll>
                <div class="tasksItem01">
                  <div class="taskTitle">9.6 傅里叶级数</div>
                  <div class="taskMajor">高等数学</div>
                  <div class="taskInfo">作业要求:XXXXXXXXXXXXXXXXXXXXXX</div>
                  <div class="taskEnd">
                    <v-icon type="question-circle"></v-icon>
                    <div>截止时间： 2020.05.20</div>
                  </div>
                </div>
              </vue-scroll>
            </div>
            <div class="tasksItem">
              <vue-scroll>
                <div class="tasksItem01">
                  <div class="taskTitle">9.6 傅里叶级数</div>
                  <div class="taskMajor">高等数学</div>
                  <div class="taskInfo">作业要求:XXXXXXXXXXXXXXXXXXXXXX</div>
                  <div class="taskEnd">
                    <v-icon type="question-circle"></v-icon>
                    <div>截止时间： 2020.05.20</div>
                  </div>
                </div>
              </vue-scroll>
            </div>
            <div class="tasksItem">
              <vue-scroll>
                <div class="tasksItem01">
                  <div class="taskTitle">9.6 傅里叶级数</div>
                  <div class="taskMajor">高等数学</div>
                  <div class="taskInfo">作业要求:XXXXXXXXXXXXXXXXXXXXXX</div>
                  <div class="taskEnd">
                    <v-icon type="question-circle"></v-icon>
                    <div>截止时间： 2020.05.20</div>
                  </div>
                </div>
              </vue-scroll>
            </div>
            <div class="tasksItem">
              <vue-scroll>
                <div class="tasksItem01">
                  <div class="taskTitle">9.6 傅里叶级数</div>
                  <div class="taskMajor">高等数学</div>
                  <div class="taskInfo">作业要求:XXXXXXXXXXXXXXXXXXXXXX</div>
                  <div class="taskEnd">
                    <v-icon type="question-circle"></v-icon>
                    <div>截止时间： 2020.05.20</div>
                  </div>
                </div>
              </vue-scroll>
            </div>
            <div class="tasksItem">
              <vue-scroll>
                <div class="tasksItem01">
                  <div class="taskTitle">9.6 傅里叶级数</div>
                  <div class="taskMajor">高等数学</div>
                  <div class="taskInfo">作业要求:XXXXXXXXXXXXXXXXXXXXXX</div>
                  <div class="taskEnd">
                    <v-icon type="question-circle"></v-icon>
                    <div>截止时间： 2020.05.20</div>
                  </div>
                </div>
              </vue-scroll>
            </div>
          </div>
        </vue-scroll>
      </div>
      <div id="tasksfont" class="fb"
           @mouseenter="fbshow()"
           @mouseleave="fbhide()"
           @click="fbfont()">
        <v-icon type="right" class="fbIcon" v-show="showFB"></v-icon>
      </div>
    </div>

  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Vue from 'vue'
Vue.prototype.$vuescrollConfig = {
  bar: {
    background: '#cecece',
    minSize: 0.2,
    opacity: 0.7,
    specifyBorderRadius: '3px',
    onlyShowBarOnScroll: false
  }
}

export default {
  name: 'tasks',
  data () {
    return {
      type: 1,
      showFB: false,
      searchTask: ''
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
    typeAll () {
      this.type = 1
    },
    typeUnfinish () {
      this.type = 2
    },
    typeFinish () {
      this.type = 3
    },
    fbshow () {
      this.showFB = true
    },
    fbhide () {
      this.showFB = false
    },
    fbback () {
      this.$refs.vs.scrollBy(
        {
          dx: -150
        },
        200
      )
    },
    fbfont () {
      this.$refs.vs.scrollBy(
        {
          dx: 150
        },
        200
      )
    },
    showTask () {
      this.$message.info('showtask')
    }
  },
  components: {
  }
}
</script>

<style scoped lang="less">
  #tasks {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  #tasksTitle {
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

  .handles {
    width: 60%;
    min-width: 600px;
    height: 40px;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    top: 40px;
    .taskstype {
      margin: 0 15px;
      .typeBtn {
        margin: 0 10px;
        border: none;
        color: black;
      }
      .activeBtn {
        border: 1px solid deepskyblue;
        border-radius: 50px;
        font-weight: 600;
      }
    }
    .search {
      margin: 15px;
      border-radius: 50px;
      width: 200px;
      height: 30px;
      border: 1px solid #83bafc;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      .searchIn {
        width: 150px;
        outline: none;
        border: none;
      }
      .licon01 {
        font-size: 14px;
        cursor: pointer;
      }
    }
  }

  .tasksContent {
    width: 100%;
    height: 180px;
    position: relative;
    top: 55px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    .fb {
      cursor: pointer;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .fbIcon {
        font-size: 50px;
        color: lightgrey;
      }
    }
    .fb:active {
      .fbIcon {
        color: gray;
      }
    }
    #tasksback {
      height: 100%;
      width:100px;
    }
    #tasksfont {
      height: 100%;
      width:100px;
    }
    #maintasks {
      height: 100%;
      width: 60%;
      min-width: 600px;
    }
  }

  #tasksContent01 {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    .tasksItem {
      width: 150px;
      height: 150px;
      background-color: white;
      border-radius: 15px;
      margin-right: 30px;
      overflow: hidden;
    }
    .tasksItem01 {
      min-height: 100%;
      width: 100%;
      background-color: white;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 0 10px;
      word-break: break-all;
      cursor: pointer;
      >div {
        margin-bottom: 5px;
      }
      .taskTitle {
        position: relative;
        color: black;
        font-size: 16px;
        font-weight: 600;
      }
      .taskMajor {
        color: black;
        font-size: 14px;
      }
      .taskInfo {
        color: black;
        font-size: 10px;
      }
      .taskEnd {
        color: black;
        font-size: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        >div {
          margin-left: 5px;
        }
      }
    }
    .tasksItem:hover {
      box-shadow: 1px 1px 10px 1px rgba(213,213,213,0.6),
        -1px -1px 10px 1px rgba(213,213,213,0.6);
    }
  }
</style>
