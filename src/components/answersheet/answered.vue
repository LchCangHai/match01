<template>
  <div id="answered">
    <nav>
      <div class="navlogo">
        <img id="logo" src="../../assets/logotem.jpg"/>
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
            <img class="avatarI" src="../../assets/avatar01.jpg">
          </a>
        </v-dropdown>
        <div class="messageShow">
          <div class="headerNum" v-show="!isCnt99">{{counter}}</div>
          <div class="headerNum" v-show="isCnt99">99+</div>
          <span class="iconfont messageIcon">&#xe606;</span>
          <!--            <v-icon class="messageIcon" type="message"></v-icon>-->
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
        </div>
        <div class="three3Nav" v-show="false">
          <div class="three3header">
            <div class="three3type examType"
            ><div>考试</div></div>
            <div class="three3Title1">第一节的作业</div>
          </div>
        </div>
      </div>
      <div id="Content">
        <div class="Item">
          <div class="select item" v-show=" 'select' === 'select' ? true : false">
            <div class="qText">
              <div class="type"><span>1. </span>[<span>单选题</span>]</div>
              <div class="text">这里是题目题目这里是题目题目这里是题目题目这里是题目题目这里是题目题目</div>
            </div>
            <div class="answerSheet">
              <el-radio-group v-model="radio" disabled>
                <el-radio class="radio" label="1"><span></span>
                  备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项
                  备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项
                  备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项
                  备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项备选项
                </el-radio>
                <el-radio class="radio" label="2"><span></span>备选项</el-radio>
                <el-radio class="radio" label="3"><span></span>备选项</el-radio>
                <el-radio class="radio" label="4"><span></span>备选项</el-radio>
                <el-radio class="radio" label="5"><span></span>备选项</el-radio>
                <el-radio class="radio" label="6"><span></span>备选项</el-radio>
              </el-radio-group>

            </div>
          </div>
          <div class="mselect item" v-show=" 'mselect' === 'mselect' ? true : false">
            <div class="qText">
              <div class="type"><span>2. </span>[<span>多选题</span>]</div>
              <div class="text">这里是题目题目这里是题目题目这里是题目题目这里是题目题目这里是题目题目</div>
            </div>
            <div class="answerSheet">
              <el-checkbox-group v-model="checkList" disabled>
                <el-checkbox class="checkbox"><span></span>复选框 A</el-checkbox>
                <el-checkbox class="checkbox" label="复选框 B"><span></span>复选框 B</el-checkbox>
                <el-checkbox class="checkbox" label="复选框 C"><span></span>复选框 C</el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
          <div class="blank item" v-show=" 'blank' === 'blank' ? true : false">
            <div class="qText">
              <div class="type"><span>3. </span>[<span>填空题</span>]</div>
              <div class="text">这里是题目题目这里是题目题目这里是题目题目这里是题目题目这里是题目题目</div>
            </div>
            <div class="answerSheet">
              <div class="replyArea">
                <v-input class="blankArea Area" type="textarea"></v-input>
              </div>
            </div>
          </div>
          <div class="question item" v-show=" 'question' === 'question' ? true : false">
            <div class="qText">
              <div class="type"><span>4. </span>[<span>论述题</span>]</div>
              <div class="text">这里是题目题目这里是题目题目这里是题目题目这里是题目题目这里是题目题目</div>
            </div>
            <div class="answerSheet">
              <div class="replyArea Area">
                <v-input class="questionArea Area" type="textarea"></v-input>
              </div>
            </div>
          </div>
          <div class="Img item" v-show=" 'Img' === 'Img' ? true : false">
            <div class="qText">
              <div class="type"><span>5. </span>[<span>论述题</span>]</div>
              <img src="../../assets/headImg2.png">
            </div>
            <div class="answerSheet">
              <div class="replyArea">
                <v-input class="imgArea Area" type="textarea"></v-input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'answered.vue',
  components: {
  },
  data () {
    return {
      counter: 5,
      isCnt99: false,
      data: [
        { content: '1st item' },
        { content: '2nd item' },
        { content: '3rd item' }
      ]
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
    itemClick (data) {
      console.log(data)
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="less">
  #answered {
    color: black;
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
        width: 30px;
        height: 30px;
        cursor: pointer;
        .headerNum{
          width: 23px;
          height: 15px;
          position: absolute;
          background-color: #f04134;
          color: white;
          font-size: 12px;
          border-radius: 50px;
          position: relative;
          left: 100%;
          top: 0;
          transform: translate(-50%, -20%);
          text-align: center;
        }
        >span.messageIcon {
          position: relative;
          left: 0;
          top: -15px;
          /*transform: translate(-50%, -50%);*/
          font-size: 25px;
          color: #61c7fc;
        }
        >span.messageIcon:hover {
          color: #2492eb;
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
