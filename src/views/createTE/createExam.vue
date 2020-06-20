<template>
  <div id="addExam">
    <div class="none">
      <input
        type="file"
        ref="upload_file"
        @change="handleFileChange">
    </div>
    <div id="title1">
      <v-button type="primary" @click="publish()" v-show="currentEditTaskExam.problems.length !== 0">发布</v-button>
    </div>
    <div id="title">
      <div>添加题目</div>
    </div>
    <div id="form">
      <v-form direction="vertical" :model="ruleForm">
        <v-form-item label="提型选择" :label-col="labelCol" :wrapper-col="wrapperCol">
          <v-radio-group vlaue="select" v-model="ruleForm.type" :data="[{value: 'select', text: '单选'},{value: 'mselect', text: '多选选'},
          {value: 'judge', text: '判断'},{value: 'blank', text: '填空'},{value: 'subjective', text: '问答'}]"
          @change="typeChange()"></v-radio-group>
        </v-form-item>
        <v-form-item label="题号" :label-col="labelCol" :wrapper-col="wrapperCol">
          <v-input size="large" v-model="ruleForm.order"></v-input>
        </v-form-item>
        <v-form-item label="分值" :label-col="labelCol" :wrapper-col="wrapperCol">
          <v-input size="large" v-model="ruleForm.score"></v-input>
        </v-form-item>
        <v-form-item label="题目内容" :label-col="labelCol" :wrapper-col="wrapperCol">
          <v-input v-show="ruleForm.hasFile" v-model="ruleForm.text" type="textarea" class="contentArea"></v-input>
          <div>
            <div class="Img" v-show="!ruleForm.hasFile">
              <img :src="ruleForm.imgUrl">
            </div>
            <div class="uploadIcon" @click="clickUpLoad()">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fujian"></use>
              </svg>
            </div>
            <div class="fileName">{{ruleForm.fileTitle}}</div>
          </div>
        </v-form-item>
        <v-form-item label="选项设置" :label-col="labelCol" :wrapper-col="wrapperCol"
                     v-show="(ruleForm.type === 'select' || ruleForm.type === 'mselect' || ruleForm.type === 'judge') ? true : false">
          <v-input size="large"
                   class="optionItem"
                   v-model="ruleForm.option[index]"
                   v-for="(item, index) in ruleForm.option"
                   :key="index"
                   :disabled="ruleForm.type === 'judge'"></v-input>
          <v-button type="primary"
                    ghost style="margin-right:10px"
                    @click.prevent="addoption()"
                    :disabled="ruleForm.type === 'judge'">添加选项</v-button>
        </v-form-item>
        <v-form-item label="正确答案" :label-col="labelCol" :wrapper-col="wrapperCol"
                     v-show="( ruleForm.type === 'mselect') ? true : false">
          <v-input size="large"
                   class="optionItem"
                   v-model="ruleForm.answers01[index]"
                   v-for="(item, index) in ruleForm.answers01"
                   :key="index"></v-input>
          <v-button type="primary" ghost style="margin-right:10px" @click.prevent="addanswer()">添加选项</v-button>
        </v-form-item>
        <v-form-item label="正确答案" :label-col="labelCol" :wrapper-col="wrapperCol"
                     v-show="(ruleForm.type === 'mselect') ? false : true">
          <v-input v-model="ruleForm.answer02" type="textarea" class="contentArea"></v-input>
        </v-form-item>
        <v-form-item label="答案解析" :label-col="labelCol" :wrapper-col="wrapperCol">
          <v-input v-model="ruleForm.answer_detail" type="textarea" class="contentArea"></v-input>
        </v-form-item>
        <v-form-item :wrapper-col="{offset:10, span: 14 }">
          <v-button type="primary" style="margin-right:10px" @click.prevent="addQuestion()">添加此题</v-button>
        </v-form-item>
      </v-form>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
const formdata = new FormData()
export default {
  name: 'addExam.vue',
  data () {
    return {
      ruleForm: {
        type: 'select',
        order: '',
        score: '5',
        text: '',
        option: [''],
        answers01: [''],
        answer02: '',
        answer_detail: '',
        fileTitle: '',
        hasFile: true,
        imgUrl: ''
      },
      problem: {
        type: '',
        content: {
          text: '',
          options: ''
        },
        answer: '',
        answer_detail: '',
        max_score: '',
        order: ''
      },
      labelCol: {
        span: 3
      },
      wrapperCol: {
        span: 15
      },
      problems: {}
    }
  },
  computed: {
    ...mapState([
      'currentEditTaskExam',
      'courseInfo',
      'currentCourse'
    ])
  },
  methods: {
    ...mapMutations([
      'closeAddTEPop',
      'addTasks',
      'setcourseInfo'
    ]),
    changeOption () {
      // this.ruleForm.option.push
    },
    clickUpLoad () {
      if (this.ruleForm.order === '') {
        this.$notification.warning({
          message: '警告',
          description: '请先输入题号',
          duration: 1
        })
        return false
      }
      this.$refs.upload_file.click()
    },
    handleFileChange () {
      const inputDOM = this.$refs.upload_file
      const files = inputDOM.files
      this.uploadFile(files)
    },
    uploadFile: function (files) {
      if (files.length !== 1) {
        this.$notification.warning({
          message: '警告',
          description: '上传文件数量错误',
          duration: 1
        })
      } else {
        const file = files[0]
        formdata.set('problem' + this.ruleForm.order, file)
        this.ruleForm.fileTitle = file.name
        this.ruleForm.imgUrl = window.URL.createObjectURL(file)
        this.ruleForm.hasFile = false
      }
    },
    addanswer () {
      this.ruleForm.answers01.push('')
    },
    addoption () {
      this.ruleForm.option.push('')
    },
    typeChange () {
      console.log('judge')
      if (this.ruleForm.type === 'judge') {
        this.ruleForm.option = ['对', '错']
        console.log('judge123')
      }
    },
    judgeorder () {
      if (this.ruleForm.order === '') {
        this.$notification.warning({
          message: '警告',
          description: '请输入题号',
          duration: 1
        })
        return false
      }
      return true
    },
    judgetext () {
      if (this.ruleForm.text === '') {
        if (this.problem['problem' + this.ruleForm.order] === undefined) {
          this.$notification.warning({
            message: '警告',
            description: '请输入题目或上传题目图片',
            duration: 1
          })
          return false
        }
        return true
      }
      return true
    },
    judgeoption () {
      for (let i = 0; i < this.ruleForm.option.length; i++) {
        if (this.ruleForm.option[i] === '') {
          this.$notification.warning({
            message: '警告',
            description: '请输入选项内容',
            duration: 1
          })
          return false
        }
      }
      return true
    },
    judgeanswers01 () {
      for (let i = 0; i < this.ruleForm.answers01.length; i++) {
        if (this.ruleForm.answers01[i] === '') {
          this.$notification.warning({
            message: '警告',
            description: '请输入答案内容',
            duration: 1
          })
          return false
        }
      }
      return true
    },
    judgeanswer02 () {
      if (this.ruleForm.answer02 === '') {
        this.$notification.warning({
          message: '警告',
          description: '请输入答案',
          duration: 1
        })
        return false
      }
      return true
    },
    addQuestion () {
      if (!this.judgeorder()) return false
      // if (!this.judgetext()) return false
      this.problem.content.text = this.ruleForm.text
      this.problem.type = this.ruleForm.type
      this.problem.order = this.ruleForm.order
      this.problem.max_score = this.ruleForm.score
      this.problem.answer_detail = this.ruleForm.answer_detail
      if (this.ruleForm.type === 'select') {
        if (!this.judgeoption()) return false
        if (!this.judgeanswer02()) return false
        this.problem.content.options = this.ruleForm.option
        this.problem.answer = this.ruleForm.answer02
      } else if (this.ruleForm.type === 'mselect') {
        if (!this.judgeoption()) return false
        if (!this.judgeanswers01()) return false
        this.problem.content.options = this.ruleForm.option
        this.problem.answer = this.ruleForm.answers01
      } else if (this.ruleForm.type === 'judge') {
        if (!this.judgeoption()) return false
        if (!this.judgeanswer02()) return false
        this.problem.content.options = this.ruleForm.option
        this.problem.answer = this.ruleForm.answer02
      } else if (this.ruleForm.type === 'blank') {
        if (!this.judgeanswer02()) return false
        this.problem.answer = this.ruleForm.answer02
      } else if (this.ruleForm.type === 'subjective') {
        if (!this.judgeanswer02()) return false
        this.problem.answer = this.ruleForm.answer02
      }
      console.log(this.problem)
      this.currentEditTaskExam.problems.push(this.problem)
      const str = JSON.stringify(this.problem)
      this.problems[this.problem.order] = str
      let tem1 = {
        type: '',
        content: {
          text: '',
          options: ''
        },
        answer: '',
        answer_detail: '',
        max_score: '',
        order: ''
      }
      this.problem = tem1
      tem1 = {
        type: 'select',
        order: '',
        score: '5',
        text: '',
        option: [''],
        answers01: [''],
        answer02: '',
        answer_detail: '',
        fileTitle: '',
        hasFile: true,
        imgUrl: ''
      }
      this.ruleForm = tem1
    },
    publish () {
      formdata.set('problems', JSON.stringify(this.problems))
      this.$axios.post('/api/course/' + this.currentCourse + '/tasks', formdata, {
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res => {
        this.$message.success('发布成功')
      }).catch(error => {
        console.log(error)
        this.$message.error('发布失败')
      })
    },
    getCourse () {
      this.$axios.get('/api/course/' + this.currentCourse)
        .then(res => {
          this.setcourseInfo(res.data.data)
        }).catch(error => {
          console.log(error)
          this.$message.error('获取课程信息失败')
        })
    }
  },
  components: {
  },
  watch: {
  },
  mounted () {
    this.currentEditTaskExam.problems = []
    this.getCourse()
    formdata.set('type', this.currentEditTaskExam.type)
    formdata.set('t_begin', this.currentEditTaskExam.t_begin)
    formdata.set('t_end', this.currentEditTaskExam.t_end)
    formdata.set('name', this.currentEditTaskExam.name)
    formdata.set('ans_visible', 1)
    if (this.currentEditTaskExam.type === 'exam') {
      formdata.set('expires', this.currentEditTaskExam.expires)
    }
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

  #title, #title1 {
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

  .optionItem {
    margin: 5px 0;
  }

  #form {
    width: 90%;
    margin: 10px 0;
  }
  .none {
    display: none;
  }
  .Img {
    width: 100%;
    img {
      max-height: 200px;
      max-width: 90%;
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

</style>
