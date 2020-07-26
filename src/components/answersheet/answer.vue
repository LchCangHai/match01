<template>
  <div id="answer">
    <div class="none">
      <input
        type="file"
        ref="upload_file"
        @change="handleFileChange">
    </div>
    <div id="Nav">
      <my-nav :type="1"></my-nav>
    </div>
    <div id="answer01">
      <div id="topNav">
        <div class="three3Nav">
          <div class="three3header">
            <div class="three3type taskType" v-show="taskDATA.type === 'test'"
            ><div>作业</div></div>
            <div class="three3type examType" v-show="taskDATA.type === 'exam'"
            ><div>考试</div></div>
            <div class="three3Title1">{{taskDATA.task_name}}</div>
          </div>
          <div class="time" v-show="taskDATA.type === 'exam'">
            <div><span>{{timeCnt.h}}</span>:<span>{{timeCnt.m}}</span>:<span>{{timeCnt.s}}</span></div>
          </div>
        </div>
      </div>
      <div id="Content">
        <div class="Item"
             v-for="(item, index) in taskDATA.problems"
             :key="item.order">
          <div class="select item" v-if=" item.type === 'select' ? true : false">
            <div class="qText">
              <div class="type">
                <span>{{index + 1}}. </span>[<span>单选题</span>](<span>{{item.max_score}}分</span>)
              </div>
              <div class="text" v-show="item.medias.length === 0">{{item.content.text}}</div>
              <img :src="item.medias[0].url" @error="imgerror(item)" v-if="item.medias.length !== 0">
            </div>
            <div class="answerSheet">
              <el-radio-group v-model="content[index]" class="input1">
                <el-radio v-for="(option, index) in item.content.options"
                          class="radio"
                          :label="option"
                          :key="index">
                  <span></span>{{option}}
                </el-radio>
              </el-radio-group>

            </div>
          </div>
          <div class="mselect item" v-if=" item.type === 'mselect' ? true : false">
            <div class="qText">
              <div class="type">
                <span>{{index + 1}}. </span>[<span>多选题</span>](<span>{{item.max_score}}分</span>)
              </div>
              <div class="text" v-show="item.medias.length === 0">{{item.content.text}}</div>
              <img :src="item.medias[0].url" @error="imgerror(item)" v-if="item.medias.length !== 0">
            </div>
            <div class="answerSheet">
              <el-checkbox-group v-model="checkList" class="input1">
                <el-checkbox class="checkbox"
                             v-for="(option, index) in item.content.options"
                             :label="option"
                             :key="index">
                  <span></span>{{option}}
                </el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
          <div class="judge item" v-if=" item.type === 'judge' ? true : false">
            <div class="qText">
              <div class="type">
                <span>{{index + 1}}. </span>[<span>判断题</span>](<span>{{item.max_score}}分</span>)
              </div>
              <div class="text" v-show="item.medias.length === 0">{{item.content.text}}</div>
              <img :src="item.medias[0].url" @error="imgerror(item)" v-if="item.medias.length !== 0">
            </div>
            <div class="answerSheet">
              <el-radio-group v-model="content[index]" class="input1">
                <el-radio class="radio"
                          v-for="(option, index) in item.content.options"
                          :label="option"
                          :key="index">
                  <span></span>{{option}}
                </el-radio>
              </el-radio-group>

            </div>
          </div>
          <div class="blank item" v-if=" item.type === 'blank' ? true : false">
            <div class="qText">
              <div class="type">
                <span>{{index + 1}}. </span>[<span>填空题</span>](<span>{{item.max_score}}分</span>)
              </div>
              <div class="text" v-show="item.medias.length === 0">{{item.content.text}}</div>
              <img :src="item.medias[0].url" @error="imgerror(item)" v-if="item.medias.length !== 0">
            </div>
            <div class="answerSheet">
<!--              <div class="uploadIcon" @click="clickUpLoad(item.order)">-->
<!--                <svg class="icon" aria-hidden="true">-->
<!--                  <use xlink:href="#icon-fujian"></use>-->
<!--                </svg>-->
<!--              </div>-->
              <div class="replyArea">
                <v-input class="blankArea Area input1"
                         type="textarea"
                         v-show="item.medias.length === 0"
                         v-model="content[index]"></v-input>
                <img :src="item.medias[0].url" @error="imgerror(item)" v-if="item.medias.length !== 0">
              </div>
              <div class="fileName">文件名</div>
            </div>
          </div>
          <div class="question item" v-if=" item.type === 'subjective' ? true : false">
            <div class="qText">
              <div class="type">
                <span>{{index + 1}}. </span>[<span>论述题</span>](<span>{{item.max_score}}分</span>)
              </div>
              <div class="text" v-show="item.medias.length === 0">{{item.content.text}}</div>
              <img :src="item.medias[0].url" @error="imgerror(item)" v-if="item.medias.length !== 0">
            </div>
            <div class="answerSheet">
<!--              <div class="uploadIcon" @click="clickUpLoad(item.order)">-->
<!--                <svg class="icon" aria-hidden="true">-->
<!--                  <use xlink:href="#icon-fujian"></use>-->
<!--                </svg>-->
<!--              </div>-->
              <div class="replyArea Area">
                <v-input class="questionArea Area input1"
                         type="textarea"  v-show="item.medias.length === 0"
                         v-model="content[index]"></v-input>
                <img :src="item.medias[0].url" @error="imgerror(item)" v-if="item.medias.length !== 0">
              </div>
              <div class="fileName">文件名</div>
            </div>
          </div>
        </div>
      </div>
      <v-button class="Btn01" type="info" @click="submit01()">提交作业</v-button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

import myNav from '../../views/navs/s_nav1.vue'

// eslint-disable-next-line
let formdata1 = new FormData()
export default {
  name: 'answer.vue',
  components: {
    'my-nav': myNav
  },
  data () {
    return {
      taskID: this.$route.params.id,
      taskDATA: {},
      radio: '',
      radio01: '',
      checkList: [],
      answers: [],
      content: [],
      timeCnt: {
        d: '',
        h: '',
        m: '',
        s: ''
      },
      errorImg: require('../../assets/imgError03.jpg')
    }
  },
  computed: {
    ...mapState([
    ])
  },
  methods: {
    ...mapMutations([
    ]),
    toPCBtn () {
      this.$router.push('/pCenter')
    },
    exit () {
      window.localStorage.setItem('access_token', null)
      this.$router.push('/unindex')
    },
    itemClick (data) {
      console.log(data)
    },
    clickUpLoad (id) {
      this.$refs.upload_file.click()
      this.currentID = id
      console.log(this.currentID)
    },
    handleFileChange () {
      const inputDOM = this.$refs.upload_file
      const files = inputDOM.files
      this.uploadFile(files)
    },
    uploadFile: function (files) {
      if (files.length !== 1) {
        this.message.warning('数量错误')
      } else {
        const file = files[0]
        this.answers.answerFile.set('answer' + this.currentID, file)
        this.answers[this.currentID].fileName = file.name
      }
    },
    addZero (i) {
      return i < 10 ? '0' + i : i + ''
    },
    imgerror (item) {
      // item.medias[0].url = this.errorImg
    },
    countTime (time) {
      const nowtime = new Date()
      const endtime = new Date(time)
      const lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000)
      this.timeCnt.d = parseInt(lefttime / (24 * 60 * 60))
      this.timeCnt.h = parseInt(lefttime / (60 * 60) % 24)
      this.timeCnt.m = parseInt(lefttime / 60 % 60)
      this.timeCnt.s = parseInt(lefttime % 60)
      this.timeCnt.d = this.addZero(this.timeCnt.d)
      this.timeCnt.h = this.addZero(this.timeCnt.h)
      this.timeCnt.m = this.addZero(this.timeCnt.m)
      this.timeCnt.s = this.addZero(this.timeCnt.s)
      setTimeout(() => {
        this.countTime(time)
      }, 1000)
    },
    getTaskData () {
      this.$axios.get('/api/task/' + this.taskID)
        .then(res => {
          this.taskDATA = res.data.data
          console.log('获取考试数据成功')
          this.content = new Array(res.data.data.problems.length)
          if (res.data.data.type === 'exam') {
            this.countTime(res.data.data.exam_end)
          }
        }).catch(error => {
          console.log(error)
          this.$message.error('获取考试数据失败')
        })
    },
    submit01 () {
      this.answers = []
      for (let i = 0; i < this.taskDATA.problems.length; i++) {
        let temp = {
          content: '',
          order: ''
        }
        if (this.taskDATA.problems[i].type === 'mselect') {
          temp.content = this.checkList
        } else {
          temp.content = this.content[i]
        }
        temp.order = this.taskDATA.problems[i].order
        this.answers.push(temp)
      }
      console.log(this.answers)
      // console.log(this.checkList)
      this.$axios.post('/api/task/' + this.$route.params.id + '/submit', {
        answers: this.answers
      }, {
        header: {
          'Content-Type': 'application/json' // 如果写成contentType会报错
        }
      }).then(res => {
        console.log(res.data)
      })
    }
  },
  watch: {
    // checkList (val) {
    //   console.log('checkList')
    //   console.log(val)
    // }
  },
  mounted () {
    this.getTaskData()
  }
}
</script>

<style scoped lang="less">
  #answer {
    color: black;
    min-width: 1000px;
  }

  .none {
    display: none;
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

  #answer01 {
    position: relative;
    width: 75%;
    min-width: 800px;
    /*max-width: 950px;*/
    left: 50%;
    transform: translate(-50%);
    /*background-color: #3d84ff;*/
    margin-bottom: 50px;
  }

  .time {
    position: relative;
    top: 60px;
    box-shadow: 1px 3px 5px 1px rgba(213,213,213,0.6);
    width: 80px;
    height: 30px;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    >div {
      font-size: 14px;
      font-weight: 600;
    }
  }

  #topNav {
    width: 100%;
  }
  .three3Nav {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #d4d4d4;
    .three3header {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      .three3type {
        margin-left: 40px;
        font-size: 10px;
        width: 25px;
        height: 25px;
        color: white;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .taskType {
        background-color: #ffd500;
      }
      .examType {
        background-color: #ff4e4e;
      }
      .three3Title1 {
        margin-left: 20px;
        font-size: 14px;
        font-weight: 600;
      }
    }
    .three3Status {
      width: 70px;
      height: 25px;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      color:white;
      margin-right: 5px;
    }
    .finished {
      background-color: #a2ffac;
    }
    .unFinished {
      background-color: #ff4e4e;
    }
  }

  #Content {
    width: 100%;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    .Item {
      margin: 10px 0;
      width: 100%;
    }
  }
  .item {
    width: 100%;
    .qText {
      width: 100%;
      min-height: 30px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 5px 0;
      .type {
        font-size: 12px;
        span:first-child {
          font-size: 14px;
          margin-right: 5px;
          font-weight: 600;
        }
      }
      .text {
        font-size: 14px;
        text-indent: 1em;
        margin-top: 5px;
      }
      img {
        max-width: 90%;
        max-height: 100px;
      }
    }
  }
  .answerSheet {
    font-family: kaiti;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .select .radio {
    display: block;
    margin: 5px 0 0 30px;
    font-size: 14px;
    span {
      margin: 0 5px;
    }
  }
  .judge .radio {
    display: block;
    margin: 5px 0 0 30px;
    font-size: 14px;
    span {
      margin: 0 5px;
    }
  }
  .mselect .checkbox {
    display: block;
    margin: 5px 0 0 30px;
    font-size: 14px;
    span {
      margin: 0 5px;
    }
  }
  .replyArea {
    width: 80%;
    height: 100px;
    .Area {
      width: 100%;
      height: 100%;
      resize: none;
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
  .Btn01 {
    width: 130px;
    height: 40px;
    border-radius: 50px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin: 20px 0;
  }
  img {
    object-fit: cover;
  }
</style>
