<template>
  <div id="addTask01">
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
            <div class="three3type taskType"
            ><div>考试</div></div>
            <div class="three3Title1">{{this.currentEditTaskExam.name}}</div>
          </div>
          <div class="three3Info">
            <div class="start">
              <span>开始时间：</span><span>{{this.currentEditTaskExam.start}}</span>
            </div>
            <div class="end">
              <span>结束时间：</span><span>{{this.currentEditTaskExam.end}}</span>
            </div>
          </div>
        </div>
      </div>
      <div id="Content">
        <div class="Item"
             v-for="(item, index) in currentEditTaskExam.problems"
             :key="item.order">
          <div class="select item" v-show=" item.type === 'select' ? true : false">
            <div class="qText">
              <div class="type">
                <span>{{index + 1}}. </span>[<span>单选题</span>](<span>{{item.max_score}}分</span>)
              </div>
              <div class="text">{{item.content.text}}</div>
              <img src="../../../assets/headImg2.png">
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
              <img src="../../../assets/headImg2.png">
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
      <div id="create">
        <my-create></my-create>
        <!--        <v-button type="primary" @click="addItem()">addddddddd</v-button>-->
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Create from '../../../views/createTE/createExam.vue'
import myNav from '../../../views/navs/s_nav1.vue'
export default {
  name: 'addTask01.vue',
  components: {
    'my-create': Create,
    'my-nav': myNav
  },
  data () {
    return {
      radio: '',
      radio01: '',
      checkList: [],
      timeCnt: {
        d: '',
        h: '',
        m: '',
        s: ''
      },
      currentID: ''
    }
  },
  computed: {
    ...mapState([
      'currentEditTaskExam'
    ])
  },
  methods: {
    ...mapMutations([
    ]),
    toPCBtn () {
      this.$router.push('/pCenter')
    },
    itemClick (data) {
      console.log(data)
    },
    clickUpLoad (id) {
      this.$refs.upload_file.click()
      this.currentID = id
    },
    handleFileChange () {
      const inputDOM = this.$refs.upload_file
      const files = inputDOM.files
      this.uploadFile(files)
    },
    uploadFile: function (files) {
      if (files.length !== 1) {
        this.$message.warning('数量错误')
      } else {
        const file = files[0]
        this.currentEditTaskExam['problem' + this.currentID] = file
      }
    },
    addItem () {
      const a = {
        type: 'blank',
        content: {
          text: '题目内容题目内容题目内容题目内容题目内容题目内容题目内容题目内容题目内容题目内容',
          options: ['选项a', '选项b', '选项c']
        },
        order: 6,
        answer: 'a',
        answer_detail: '可为空',
        max_score: 5
      }
      this.currentEditTaskExam.problems.push(a)
    },
    addZero (i) {
      return i < 10 ? '0' + i : i + ''
    },
    countTime (time = '2020/06/16 17:20:00') {
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
      console.log(123)
      setTimeout(() => {
        this.countTime(time = '2020/06/16 17:20:00')
      }, 1000)
    }
  },
  mounted () {
    // this.countTime()
  }
}
</script>

<style scoped lang="less">
  #addTask01 {
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

  #topNav {
    width: 100%;
  }
  .three3Nav {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-bottom: 1px solid #d4d4d4;
    .three3header {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-top: 10px;
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
    .three3Info {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      >div {
        font-size: 12px;
        margin: 5px 0;
        >span:first-child {
          font-weight: 600;
          margin-left: 65px;

        }
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
  }

  #Content {
    width: 100%;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    .Item {
      width: 100%;
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

  #create {
    width: 100%;
    margin-top: 10px;
  }
  img {
    object-fit: cover;
  }
</style>
