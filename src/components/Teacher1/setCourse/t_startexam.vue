<template>
  <div id="courseWare">
    <div class="Content01" v-show="isPublishTask === false">
      <div class="publish">
        <div>
          <div class="addTask Btn02" @click="openPop(1)">
            <div>布置作业</div>
          </div>
          <div class="addExam Btn02" @click="openPop(2)">
            <div>布置考试</div>
          </div>
<!--          <v-radio v-model="type" label="task">布置作业</v-radio>-->
<!--          <v-radio v-model="type" label="exam">布置考试</v-radio>-->
        </div>
        <div class="addTaskPop" v-show="addTEPop">
          <my-addtask v-show="TEPopType === 1 ? true :false"></my-addtask>
          <my-addexam v-show="TEPopType === 2 ? true :false"></my-addexam>
        </div>
      </div>
    </div>
    <div class="Content01" v-show="isPublishTask === true">
      <div class="title00">
        <v-icon type="file-add"></v-icon>
        <div>创建题目</div>
        <v-button type="warning" @click="rePublic" class="reBtn" >重置布置</v-button>
      </div>
      <create-test></create-test>
      <div class="title00">
        <v-icon type="file-text"></v-icon>
        <div>题目预览</div>
      </div>
      <show-test></show-test>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import addTask from './taskexam/addTask.vue'
import addExam from './taskexam/addExam.vue'
import showTest from './public/t_showTest.vue'
import createTest from './public/t_createTest.vue'

export default {
  name: 'courseWare.vue',
  data () {
    return {
      type: ''
    }
  },
  computed: {
    ...mapState([
      'leftSiderActive',
      'addTEPop',
      'TEPopType',
      'addTEPop',
      'currentCourse',
      'isPublishTask'
    ])
  },
  methods: {
    ...mapMutations([
      'setLeftSider',
      'chooseTEPop',
      'openAddTEPop',
      'closeAddTEPop',
      'setcourseInfo',
      'closePublishTask',
      'openPublishTask',
      'clsTask'
    ]),
    openPop (type) {
      if (this.addTEPop === false || this.TEPopType !== type) {
        this.chooseTEPop(type)
      } else {
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
    },
    rePublic () {
      this.clsTask()
      this.closePublishTask()
    }
  },
  components: {
    'my-addtask': addTask,
    'my-addexam': addExam,
    'show-test': showTest,
    'create-test': createTest
  },
  mounted () {
    this.getCourse()
  }
}
</script>

<style scoped lang="less">
  #courseWare {
    width: 100%;
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

  .Content01 {
    width: 100%;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .reBtn {
    margin-left: 20px;
  }
  .title00 {
    height: 50px;
    font-size: 15px;
    margin: 10px 0 5px 0;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    i {
      font-size: 22px;
      margin-left: 10px;
      color: #006bff;
    }
    >div {
      margin-left: 10px;
    }
  }
  .publish {
    margin-top: 10px;
    width: 100%;
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
