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
            <div class="avatarC1">
              <img class="avatarI" src="../assets/avatar01.jpg">
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
            <span class="editBtn">
              <v-button class="myBtn" type="ghost" size="small">编辑资料</v-button>
            </span>
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
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Course from '../views/personalcenter/courses.vue'
import Task from '../views/personalcenter/tasks.vue'
// import Chart from '../views/charts/try01.vue'
export default {
  name: 'personalCenter.vue',
  data () {
    return {
      tem: {
        width: '500px',
        height: '300px'
      }
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
    centerBtn () {
      this.$router.push('/courses')
    }
  },
  components: {
    'my-course': Course,
    'my-task': Task
    // 'my-chart1': Chart
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
      >span.editBtn {
        font-size: 9px;
        color: white;
        /*border: solid white 1px;*/
        /*border-radius: 100px;*/
        .myBtn {
          color: white;
          font-size: 5px;
          font-weight: 500;
          border: solid white 1px;
          border-radius: 60px;
        }
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
  img {
    object-fit: cover;
  }
</style>
