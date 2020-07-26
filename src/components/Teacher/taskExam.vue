<template>
  <div id="courseWare">
    <div id="Nav">
      <my-nav :type="1"></my-nav>
    </div>
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
import myNav from '../../views/navs/s_nav1.vue'

export default {
  name: 'courseWare.vue',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'leftSiderActive',
      'addTEPop',
      'TEPopType',
      'addTEPop',
      'currentCourse'
    ])
  },
  methods: {
    ...mapMutations([
      'setLeftSider',
      'chooseTEPop',
      'openAddTEPop',
      'closeAddTEPop',
      'setcourseInfo'
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
    },
    getCourse () {
      this.$axios.get('/api/course/' + this.currentCourse)
        .then(res => {
          this.setcourseInfo(res.data.data)
          console.log('获取课程信息成功')
        }).catch(error => {
          console.log(error)
          console.log('获取课程信息失败')
        })
    }
  },
  components: {
    'my-left': LeftSider,
    'my-task': TaskExam,
    'my-addtask': addTask,
    'my-addexam': addExam,
    'my-choose-course': chooseCourse,
    'my-nav': myNav
  },
  mounted () {
    this.setLeftSider(4)
    this.getCourse()
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
