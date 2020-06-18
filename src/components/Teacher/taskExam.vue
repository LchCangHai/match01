<template>
  <div id="courseWare">
    <nav>
      <div class="navlogo">
        <img id="logo" src="../../assets/logotem.jpg"/>
        <div>
          <span>教务管理中心</span>
        </div>
      </div>
      <div class="navbtn">
        <div class="btn01 tabActive">课程</div>
        <div class="btn01" @click="pcBtn()">个人中心</div>
        <v-dropdown class="avatarC1" :data="data" @item-click="itemClick">
          <a href="javascript:void(0)" class="avatarA ant-dropdown-link ant-dropdown-trigger">
            <img class="avatarI" src="../../assets/avatar02.png">
          </a>
        </v-dropdown>
        <div class="messageShow">
          <div class="headerNum" v-show="!isCnt99">{{counter}}</div>
          <div class="headerNum" v-show="isCnt99">99+</div>
          <span class="iconfont messageIcon">&#xe606;</span>
        </div>
      </div>
    </nav>
    <div id="rightSider" @click="tostudent()">
      <div>学生主页</div>
    </div>
    <div id="leftSider">
      <my-left></my-left>
    </div>
    <div id="Content01">
      <div id="checkcourse">
        <my-choose-course></my-choose-course>
      </div>
      <div class="publish">
        <div>
          <div class="addTask Btn02" @click="openPop(1)">
            <div>布置作业</div>
          </div>
          <div class="addExam Btn02" @click="openPop(2)">
            <div>布置考试</div>
          </div>
        </div>
        <div class="addTaskPop" v-show="addTEPop">
          <my-addtask v-show="TEPopType === 1 ? true :false"></my-addtask>
          <my-addexam v-show="TEPopType === 2 ? true :false"></my-addexam>
        </div>
      </div>
      <my-task></my-task>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import LeftSider from './leftSider/leftSider.vue'
import TaskExam from './task/task.vue'
import addTask from './task/addTask.vue'
import addExam from './task/addExam.vue'
import chooseCourse from './chooseCourse/chooseCourse.vue'

export default {
  name: 'courseWare.vue',
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
      'leftSiderActive',
      'addTEPop',
      'TEPopType',
      'addTEPop'
    ])
  },
  methods: {
    ...mapMutations([
      'setLeftSider',
      'chooseTEPop',
      'openAddTEPop',
      'closeAddTEPop'
    ]),
    openPop (type) {
      if (this.addTEPop === false || this.TEPopType !== type) {
        this.chooseTEPop(type)
        this.openAddTEPop()
      } else {
        this.closeAddTEPop()
      }
    },
    pcBtn () {
      this.$router.push('/pCenter')
    },
    tostudent () {
      this.$router.push('/index')
    }
  },
  components: {
    'my-left': LeftSider,
    'my-task': TaskExam,
    'my-addtask': addTask,
    'my-addexam': addExam,
    'my-choose-course': chooseCourse
  },
  mounted () {
    this.setLeftSider(4)
  }
}
</script>

<style scoped lang="less">
  #courseWare {
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
    /*background-color: #f6f6f6;*/
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;
    top: 0;
    left:0;
    width:100%;
    min-width: 1000px;
    height: 60px;
    margin: 0;
    padding: 0;
    color: black;
    border-bottom: 1px solid lightgrey;
    box-shadow: 1px 0px 10px 1px rgba(213,213,213,0.6);
    background-color: white;
    z-index: 2020;
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
          font-size: 16px;
          color: #61c7fc;
          font-weight: 600;
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

  #rightSider {
    z-index: 2030;
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
    z-index: 2030;
    width: 150px;
    height: 450px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: white;
    position: fixed;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    box-shadow: 1px 1px 5px 1px rgba(213,213,213,0.1),
      -1px -1px 5px 1px rgba(213,213,213,0.1);
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
  }
    .publish {
      margin-top: 10px;
      width: 100%;
      /*min-height: 50px;*/
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      >div {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
      }
      .Btn02 {
        cursor: pointer;
        width: 120px;
        height: 40px;
        border-radius: 10px;
        background-color: #108ee9;
        margin: 15px 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 1px 1px 3px 1px rgba(150,150,150,0.3);
        >div {
          color: white;
          font-size: 13px;
        }
      }
      .Btn02:hover {
        font-size: 14px;
      }
      .Btn02:active {
        font-size: 13px;
        box-shadow: -1px -1px 3px 1px rgba(150,150,150,0.3);
      }

      .addTaskPop {
        width: 80%;
        /*height:*/
        border-top-right-radius: 4px;
        box-shadow: 1px 1px 5px 1px rgba(150,150,150,0.3);
      }
    }
    /*.addTaskPop {*/
    /*  width: 450px;*/
    /*  height: 400px;*/
    /*  background-color: white;*/
    /*  position: fixed;*/
    /*  left: 50%;*/
    /*  top: 50%;*/
    /*  transform: translate(-50%, -50%);*/
    /*  border-radius: 15px;*/
    /*  border-top-right-radius: 4px;*/
    /*  box-shadow: 1px 1px 5px 1px rgba(150,150,150,0.3);*/
    /*}*/
    my-task {
      z-index: 2020;
    }

  img {
    object-fit: cover;
  }
</style>
