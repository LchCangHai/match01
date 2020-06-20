<template>
  <div id="answer">
    <div class="none">
      <input
        type="file"
        ref="upload_file"
        @change="handleFileChange">
    </div>
    <nav>
      <div class="navlogo">
        <img id="logo" src="../assets/logotem.jpg"/>
        <div>
          <span>这里是名字</span>
          <span>English Name</span>
        </div>
      </div>
      <div class="navbtn">
        <div class="btn01 tabActive">课程</div>
        <div class="btn01" @click="toPCBtn()">个人中心</div>
        <v-dropdown class="avatarC1" :data="data" @item-click="itemClick">
          <a href="javascript:void(0)" class="avatarA ant-dropdown-link ant-dropdown-trigger">
            <img class="avatarI" src="../assets/avatar01.jpg">
          </a>
        </v-dropdown>
        <div class="messageShow">
          <div @click="exit">退出</div>
        </div>
      </div>
    </nav>
    <div id="answer01">
      <div id="topNav">
        <div class="three3Nav" v-show="true">
          <div class="three3header">
            <div class="three3type taskType"
            ><div>作业</div></div>
            <div class="three3Title1">第一节的作业</div>
          </div>
          <div class="time">
            <div><span>{{timeCnt.h}}</span>:<span>{{timeCnt.m}}</span>:<span>{{timeCnt.s}}</span></div>
          </div>
        </div>
        <div class="three3Nav" v-show="false">
          <div class="three3header">
            <div class="three3type examType"
            ><div>考试</div></div>
            <div class="three3Title1">第一节的作业</div>
          </div>
          <div class="time">
            <div><span>{{timeCnt.h}}</span>:<span>{{timeCnt.m}}</span>:<span>{{timeCnt.s}}</span></div>
          </div>
        </div>
      </div>
      <div id="Content">
        <div class="Item"
             v-for="(item, index) in taskDATA.problems"
             :key="item.order">
          <div class="select item" v-show=" item.type === 'select' ? true : false">
            <div class="qText">
              <div class="type">
                <span>{{index + 1}}. </span>[<span>单选题</span>](<span>{{item.max_score}}分</span>)
              </div>
              <div class="text">{{item.content.text}}</div>
              <img src="../assets/headImg2.png">
            </div>
            <div class="answerSheet">
              <el-radio-group v-model="radio">
                <el-radio v-for="(option, index) in item.content.options"
                          class="radio"
                          :label="option"
                          :key="index">
                  <span></span>{{option}}
                </el-radio>
              </el-radio-group>

            </div>
          </div>
          <div class="mselect item" v-show=" item.type === 'mselect' ? true : false">
            <div class="qText">
              <div class="type">
                <span>{{index + 1}}. </span>[<span>多选题</span>](<span>{{item.max_score}}分</span>)
              </div>
              <div class="text">{{item.content.text}}</div>
            </div>
            <div class="answerSheet">
              <el-checkbox-group v-model="checkList">
                <el-checkbox class="checkbox"
                             v-for="(option, index) in item.content.options"
                             :label="option"
                             :key="index">
                  <span></span>{{option}}
                </el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
          <div class="judge item" v-show=" item.type === 'judge' ? true : false">
            <div class="qText">
              <div class="type">
                <span>{{index + 1}}. </span>[<span>判断题</span>](<span>{{item.max_score}}分</span>)
              </div>
              <div class="text">{{item.content.text}}</div>
            </div>
            <div class="answerSheet">
              <el-radio-group v-model="radio">
                <el-radio class="radio"
                          v-for="(option, index) in item.content.options"
                          :label="option"
                          :key="index">
                  <span></span>{{option}}
                </el-radio>
              </el-radio-group>

            </div>
          </div>
          <div class="blank item" v-show=" item.type === 'blank' ? true : false">
            <div class="qText">
              <div class="type">
                <span>{{index + 1}}. </span>[<span>填空题</span>](<span>{{item.max_score}}分</span>)
              </div>
              <div class="text">{{item.content.text}}</div>
            </div>
            <div class="answerSheet">
              <div class="uploadIcon" @click="clickUpLoad(item.order)">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-fujian"></use>
                </svg>
              </div>
              <div class="replyArea">
                <v-input class="blankArea Area" type="textarea"></v-input>
              </div>
              <div class="fileName">文件名</div>
            </div>
          </div>
          <div class="question item" v-show=" item.type === 'subjective' ? true : false">
            <div class="qText">
              <div class="type">
                <span>{{index + 1}}. </span>[<span>论述题</span>](<span>{{item.max_score}}分</span>)
              </div>
              <div class="text">{{item.content.text}}</div>
            </div>
            <div class="answerSheet">
              <div class="uploadIcon" @click="clickUpLoad(item.order)">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-fujian"></use>
                </svg>
              </div>
              <div class="replyArea Area">
                <v-input class="questionArea Area" type="textarea"></v-input>
              </div>
              <div class="fileName">文件名</div>
            </div>
          </div>
          <div class="Img item" v-show=" item.type === 'Img' ? true : false">
            <div class="qText">
              <div class="type">
                <span>{{index + 1}}. </span>[<span>论述题</span>](<span>{{item.max_score}}分</span>)
              </div>
              <img src="../assets/headImg2.png">
            </div>
            <div class="answerSheet">
              <div class="uploadIcon" @click="clickUpLoad(item.order)">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-fujian"></use>
                </svg>
              </div>
              <div class="replyArea">
                <v-input class="imgArea Area" type="textarea"></v-input>
              </div>
              <div class="fileName">文件名</div>
            </div>
          </div>
        </div>
      </div>
      <v-button class="Btn01" type="info">提交作业</v-button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
// eslint-disable-next-line
let formdata1 = new FormData()
export default {
  name: 'answer.vue',
  components: {
  },
  data () {
    return {
      taskID: this.$route.params.id,
      taskDATA: {},
      // data: [
      //   { content: '1st item' },
      //   { content: '2nd item' },
      //   { content: '3rd item' }
      // ],
      radio: '',
      radio01: '',
      checkList: [],
      answers: {
        1: {
          content: 'XXXXX',
          fileName: '文件名'
        },
        2: {
          content: 'XXXXX'
        },
        3: {
          content: 'XXXXX'
        },
        answerFile: formdata1
      },
      timeCnt: {
        d: '',
        h: '',
        m: '',
        s: ''
      }
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
    countTime (time) {
      const nowtime = new Date()
      const endtime = parseInt(time)
      const lefttime = parseInt(endtime - (nowtime.getTime()) / 1000)
      this.timeCnt.d = parseInt(lefttime / (24 * 60 * 60))
      this.timeCnt.h = parseInt(lefttime / (60 * 60) % 24)
      this.timeCnt.m = parseInt(lefttime / 60 % 60)
      this.timeCnt.s = parseInt(lefttime % 60)
      this.timeCnt.d = this.addZero(this.timeCnt.d)
      this.timeCnt.h = this.addZero(this.timeCnt.h)
      this.timeCnt.m = this.addZero(this.timeCnt.m)
      this.timeCnt.s = this.addZero(this.timeCnt.s)
      console.log(123)
      setTimeout(() => {
        this.countTime(time)
      }, 1000)
    },
    getTaskData () {
      this.$axios.get('/api/task/' + this.taskID)
        .then(res => {
          this.taskDATA = res.data.data
          console.log('获取考试数据成功')
          this.countTime(res.data.data.time_end)
        }).catch(error => {
          console.log(error)
          this.$message.error('获取考试数据失败')
        })
    }
  },
  mounted () {
    this.getTaskData()
    this.countTime()
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

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;
    top: 0;
    width:100%;
    height: 60px;
    margin: 0;
    padding: 0;
    color: black;
    border-bottom: 1px solid lightgrey;
    background-color: white;
    z-index: 2020;
    box-shadow: 1px 0px 10px 1px rgba(213,213,213,0.6);
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
          font-size: 14px;
        }
        span:last-child {
          font-size: 10px;
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
