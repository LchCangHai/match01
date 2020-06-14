<template>
    <div id="personalCenter">
      <div id="header">
        <img id="bc01" src="../assets/headImg.png">
        <nav>
          <div class="navlogo">
            <img id="logo" src="../assets/logotem.jpg"/>
            <div>
              <span>这里是名字</span>
              <span>English Name</span>
            </div>
          </div>
          <div class="navbtn">
            <div class="btn01" @click="courseBtn()">课程</div>
            <div class="btn01 tabActive">个人中心</div>
            <v-dropdown class="avatarC1" :data="data" @item-click="itemClick">
              <a href="javascript:void(0)" class="avatarA ant-dropdown-link ant-dropdown-trigger">
                <img class="avatarI" src="../assets/avatar01.jpg">
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
        <div id="personInfo">
          <div class="avatarC">
            <img class="avatarI" src="../assets/avatar01.jpg">
          </div>
          <div class="info">
            <span class="college">数学与计算机科学学院</span>
            <span class="iden">学生</span>
            <div class="editBtn">
              <div class="Btn01" @click="openPop01()">
                <div>编辑资料</div>
              </div>
              <div class="Btn01"
                v-show="!isComfirmed"
                   @click="openPop02()">
                <div>学校认证</div>
              </div>
              <div class="Btn02"
                v-show="isComfirmed">
                <div>
                  <span class="iconfont icon-zhengshu"></span>
                </div>
                <div>已认证</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="body02">
        <div class="course">
          <my-course></my-course>
        </div>
        <div class="task">
          <my-task></my-task>
        </div>
      </div>
      <div class="footer">
<!--        <my-chart1 v-bind="tem"></my-chart1>-->
      </div>
      <div id="cover" v-show="showPopUp01 || showPopUp02"></div>
      <div class="modify" v-show="showPopUp01">
        <my-setinfo></my-setinfo>
<!--        <my-login v-show="popUpType === 1 ? true : false"></my-login>-->
<!--        <my-signup v-show="popUpType === 2 ? true : false"></my-signup>-->
<!--        <my-retrieve v-show="popUpType === 3 ? true : false"></my-retrieve>-->
<!--        <my-otherway v-show="popUpType === 4 ? true : false"></my-otherway>-->
      </div>
      <div class="confirm" v-show="showPopUp02">
        <my-confirm></my-confirm>
      </div>
      <div class="confirmResult" v-show="confirmResult.show">
        <div class="resultItem" v-show="confirmResult.type === 1 ? true :false">
          <div class="resultIcon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-zhengshu"></use>
            </svg>
          </div>
          <div>认证成功</div>
        </div>
        <div class="resultItem" v-show="confirmResult.type === 2 ? true :false">
          <div class="resultIcon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-zhengshu"></use>
            </svg>
          </div>
          <div>认证失败</div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Course from '../views/personalcenter/courses.vue'
import Task from '../views/personalcenter/tasks.vue'
import SetInfo from '../views/personalcenter/PopOfPensonCenter/setInfo.vue'
import Confirm from '../views/personalcenter/PopOfPensonCenter/confirm.vue'

// import Chart from '../views/charts/try01.vue'
export default {
  name: 'personalCenter.vue',
  data () {
    return {
      tem: {
        width: '500px',
        height: '300px'
      },
      isComfirmed: false,
      data: [
        { content: '1st item' },
        { content: '2nd item' },
        { content: '3rd item' }
      ],
      confirmResult: {
        show: false,
        type: 1
      },
      counter: 5
    }
  },
  computed: {
    ...mapState([
      'showPopUp01',
      'showPopUp02'
    ])
  },
  methods: {
    ...mapMutations([
      'closePop01',
      'openPop01',
      'closePop02',
      'openPop02'
    ]),
    courseBtn () {
      this.$router.push('/courses')
    },
    itemClick (data) {
      console.log(data)
    },
    openResult (type) {
      this.confirmResult.type = type
      this.confirmResult.show = true
      this.closeResult()
    },
    closeResult () {
      const that = this
      setTimeout(() => {
        that.confirmResult.show = false
      }, 2000)
    }
  },
  components: {
    'my-course': Course,
    'my-task': Task,
    'my-setinfo': SetInfo,
    'my-confirm': Confirm
  }
}
</script>

<style scoped lang="less">
  #personalCenter {
    width: 100%;
    height: 100%;
    min-width: 860px;
    min-height: 400px;
    /*background: url("../assets/headImg.png");*/
    /*background-repeat: repeat-x;*/
  }
  #bc01 {
    position: absolute;
    z-index: -2000;
    width: 100%;
    height: 200px;
  }
  #header{
    width: 100%;
    height: 200px;
  }
  #personInfo {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;
    bottom: -40px;
    left: 200px;
    height: 100px;
    width: 250px;
    /*background-color: #108ee9;*/
    .avatarC{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 80px;
      border: white 2px solid;
      border-radius: 50%;
      .avatarI {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      >span {
        color: white;
        margin: 1px 0;
      }
      >span.college {
        font-size: 14px;
        font-weight: 600;
      }
      >span.iden {
        font-size: 12px;
      }
    }
  }
  .editBtn {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .Btn01 {
      cursor: pointer;
      width: 60px;
      height: 20px;
      border: solid white 1px;
      border-radius: 60px;
      color: white;
      margin: 0 5px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .Btn02 {
      cursor: pointer;
      width: 60px;
      height: 20px;
      /*border: solid white 1px;*/
      border-radius: 60px;
      color: white;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 0 5px;
      .iconfont {
        font-size: 15px;
      }
    }
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    /*position: fixed;*/
    top: 0;
    width:100%;
    height: 60px;
    margin: 0;
    padding: 0;
    color: white;
    .navlogo {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 200px;
      height:100%;
      color: white;
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
      width: 250px;
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
          color: whitesmoke;
        }
        >span.messageIcon:hover {
          color: white;
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
        text-decoration: underline;
      }
      .avatarC1{
        width: 50px;
        height: 50px;
        border: white 2px solid;
        border-radius: 50%;
        .avatarA {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
        }
        .avatarI {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
      }
    }
    .tabActive {
      font-weight: 600;
      border-bottom: 2px solid white;
    }
  }

  .course {
    width: 100%;
    height: 320px;
  }
  .task {
    width: 100%;
    height: 300px;
    background-color: #f6f6f6;
  }
  .footer {
    width: 100%;
    height: 50px;
    background-color: white;
  }
  #cover{
    /*display: none;*/
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(240,240,240,0.35);
    z-index: 2000;
  }
  .modify {
    position: absolute;
    top: 0;
    left: 0;
    /*transform: translate(-50%, -35%);*/
    /*display: flex;*/
    /*flex-direction: row;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    /*width: 600px;*/
    /*height: 700px;*/
    /*background-color: white;*/
    /*border-radius: 4px;*/
    /*box-shadow: 0px 2px 10px 1px rgba(150,150,150,0.51);*/
    width: 100%;
    height: 1000px;
  }
  .confirm {
    z-index: 2001;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 280px;
    background-color: white;
    box-shadow: 2px 2px 10px 5px rgba(0,0,0,0.1);
    border-radius: 4px;
  }
  .confirmResult {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 80px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 2px 10px 1px rgba(150,150,150,0.51);
    .resultItem {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      >div:last-child {
        color:black;
        font-size: 20px;
        margin-left: 5px;
      }
    }
    .resultIcon {
      width: 50px;
      height: 50px;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
  img {
    object-fit: cover;
  }
</style>
