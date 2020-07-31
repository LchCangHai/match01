<template>
  <div id="addExam">
<!--    <div id="closeC" @click="closeAddTEPop"><v-icon class="my-icon-close" type="close"></v-icon></div>-->
    <div id="title">
      <div>布置作业</div>
    </div>
    <div id="form">
      <v-form direction="vertical" :model="ruleForm" :rules="rules" ref="ruleForm">
        <v-form-item label="作业名称" :label-col="labelCol" :wrapper-col="wrapperCol" prop="name">
          <v-input size="large" v-model="ruleForm.name"></v-input>
        </v-form-item>
        <v-form-item label="作业内容" :label-col="labelCol" :wrapper-col="wrapperCol" prop="content">
          <v-input v-model="ruleForm.content" type="textarea" class="contentArea"></v-input>
        </v-form-item>
        <v-form-item label="开始日期" :label-col="labelCol" :wrapper-col="wrapperCol" prop="startDate">
          <v-input id="start" size="large" v-model="ruleForm.startDate"  class="ipt"></v-input>
        </v-form-item>
        <v-form-item label="截止日期" :label-col="labelCol" :wrapper-col="wrapperCol" prop="deadDate">
          <v-input id="end" size="large" v-model="ruleForm.deadDate"  class="ipt"></v-input>
        </v-form-item>
        <v-form-item :wrapper-col="{offset:10, span: 14 }">
          <v-button type="primary" style="margin-right:10px" @click.prevent="startExam()">开始创建</v-button>
        </v-form-item>
      </v-form>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'addExam.vue',
  data () {
    return {
      ruleForm: {
        name: '',
        content: '',
        deadDate: '',
        startDate: '',
        start: '',
        end: ''
      },
      rules: {
        name: [{
          required: true,
          message: '请输入考试名称'
        }],
        content: [{
          required: true,
          message: '请输入考试内容'
        }],
        deadDate: [{
          required: true,
          message: '请选择截止日期'
        }],
        startDate: [{
          required: true,
          message: '请选择开始日期'
        }]
      },
      labelCol: {
        span: 3
      },
      wrapperCol: {
        span: 18
      },
      laydate: window.laydate
    }
  },
  computed: {
    ...mapState([
      'currentEditTaskExam'
    ])
  },
  methods: {
    ...mapMutations([
      'closeAddTEPop',
      'addTasks',
      'closePublishTask',
      'openPublishTask'
    ]),
    tryuse () {
      this.getTime()
    },
    getTime () {
      this.ruleForm.start = (new Date(this.ruleForm.startDate).getTime()) / 1000
      this.ruleForm.end = (new Date(this.ruleForm.deadDate).getTime()) / 1000
      if (this.ruleForm.end - this.ruleForm.start <= 0) {
        this.$message.error('结束时间应该在开始时间之后')
        return false
      }
    },
    startExam () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.getTime()
          const info = {
            type: 'test',
            name: this.ruleForm.name,
            start: this.ruleForm.start,
            end: this.ruleForm.end,
            duration: this.ruleForm.duration,
            startS: this.ruleForm.startDate,
            endS: this.ruleForm.deadDate
          }
          this.addTasks(info)
          this.openPublishTask()
          // const routeUrl = this.$router.resolve({
          //   path: '/createCourse'
          // })
          // window.open(routeUrl.href, '_blank')
          // this.$router.push('/addtask')
        } else {
          this.$message.warning('请正确输入内容后开始创建')
          return false
        }
      })
    }
  },
  components: {
  },
  mounted () {
    this.laydate.render({
      elem: '#start', // 指定元素
      type: 'datetime',
      format: 'yyyy/MM/dd HH:mm:ss',
      done: (val) => {
        this.ruleForm.startDate = val
      }
    })
    this.laydate.render({
      elem: '#end', // 指定元素
      type: 'datetime',
      format: 'yyyy/MM/dd HH:mm:ss',
      done: (val) => {
        this.ruleForm.deadDate = val
      }
    })
  }
}
</script>

<style scoped lang="less">
  #addExam {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
  }

  #closeC {
    position: relative;
    cursor: pointer;
    width: 30px;
    height: 30px;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    .my-icon-close {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 20px;
    }
  }
  #closeC:hover {
    background-color: #108ee9;
    color: white;
  }
  #closeC:active {
    background-color: #49a9ee;
  }

  #title {
    width: 90%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    >div {
      font-size: 14px;
      font-weight: 600;
    }
  }

  .contentArea {
    resize: none;
    height: 50px;
  }
  .lastItem {
    margin-top:20px;
  }

  #form {
    width: 90%;
    margin: 10px 0;
  }

</style>
