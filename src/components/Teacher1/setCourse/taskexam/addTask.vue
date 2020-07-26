<template>
  <div id="addExam">
    <div id="closeC" @click="closeAddTEPop"><v-icon class="my-icon-close" type="close"></v-icon></div>
    <div id="title">
      <div>布置作业</div>
    </div>
    <div id="form">
      <v-form direction="vertical" :model="ruleForm" :rules="rules" ref="ruleForm1">
        <v-form-item label="作业名称" :label-col="labelCol" :wrapper-col="wrapperCol" prop="name">
          <v-input size="large" v-model="ruleForm.name"></v-input>
        </v-form-item>
        <v-form-item label="作业内容" :label-col="labelCol" :wrapper-col="wrapperCol" prop="content">
          <v-input v-model="ruleForm.content" type="textarea" class="contentArea"></v-input>
        </v-form-item>
      </v-form>
      <v-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <v-form-item label="开始日期" prop="startDate">
          <v-date-picker v-model="ruleForm.startDate"></v-date-picker>
        </v-form-item>
        <v-form-item label="开始时间" prop="startTime">
          <v-time-picker v-model="ruleForm.startTime"></v-time-picker>
        </v-form-item>
      </v-form>
      <v-form :model="ruleForm" :rules="rules" ref="ruleForm2">
        <v-form-item label="截止日期" prop="deadDate">
          <v-date-picker v-model="ruleForm.deadDate"></v-date-picker>
        </v-form-item>
        <v-form-item label="截止时间" prop="deadTime">
          <v-time-picker v-model="ruleForm.deadTime"></v-time-picker>
        </v-form-item>
      </v-form>
      <v-form class="lastItem" direction="vertical" :model="ruleForm" :rules="rules" ref="ruleForm3">
<!--        <v-form-item label="作业时长" :label-col="labelCol" :wrapper-col="wrapperCol" prop="duration">-->
<!--          <v-input size="large" v-model="ruleForm.duration"></v-input>-->
<!--        </v-form-item>-->
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
        deadTime: '',
        startDate: '',
        startTime: '',
        duration: '',
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
        deadTime: [{
          required: true,
          message: '请选择截止时间'
        }],
        startDate: [{
          required: true,
          message: '请选择开始日期'
        }],
        startTime: [{
          required: true,
          message: '请选择开始时间'
        }]
      },
      labelCol: {
        span: 3
      },
      wrapperCol: {
        span: 18
      }
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
      'addTasks'
    ]),
    tryuse () {
      this.getTime()
    },
    getTime () {
      if (this.ruleForm.deadDate === '') {
        this.$message.error('请选择结束日期')
        return false
      } else if (this.ruleForm.deadTime === '') {
        this.$message.error('请选择结束时间')
        return false
      } else if (this.ruleForm.startTime === '') {
        this.$message.error('请选择开始时间')
        return false
      } else if (this.ruleForm.deadDate === '') {
        this.$message.error('请选择开始日期')
        return false
      }
      this.ruleForm.start = this.ruleForm.startDate.replace(/-/g, '/') + ' ' + this.ruleForm.startTime
      this.ruleForm.end = this.ruleForm.deadDate.replace(/-/g, '/') + ' ' + this.ruleForm.deadTime
      this.ruleForm.start = (new Date(this.ruleForm.start).getTime()) / 1000
      this.ruleForm.end = (new Date(this.ruleForm.end).getTime()) / 1000
      if (this.ruleForm.end - this.ruleForm.start <= 0) {
        this.$message.error('结束时间应该在开始时间之后')
        return false
      }
    },
    startExam () {
      console.log('123456789000000000000')
      this.$refs.ruleForm1.validate((valid) => {
        if (valid) {
          this.$refs.ruleForm2.validate((valid) => {
            if (valid) {
              const st = this.ruleForm.startDate + ' ' + this.ruleForm.startTime
              const et = this.ruleForm.deadDate + ' ' + this.ruleForm.deadTime
              this.getTime()
              const info = {
                type: 'test',
                name: this.ruleForm.name,
                start: this.ruleForm.start,
                end: this.ruleForm.end,
                duration: this.ruleForm.duration,
                startS: st,
                endS: et
              }
              this.addTasks(info)
              this.$router.push('/addtask')
            } else {
              this.$message.warning('请正确输入内容后开始创建')
              return false
            }
          })
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
    this.setLeftSider(4)
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
