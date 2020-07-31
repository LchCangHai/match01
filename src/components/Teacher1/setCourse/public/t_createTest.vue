<template>
  <div id="addExam">
    <div class="none">
      <input
        type="file"
        ref="upload_file"
        @change="handleFileChange">
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
<!--        <v-form-item label="题号" :label-col="labelCol" :wrapper-col="wrapperCol">-->
<!--          <v-input size="large" v-model="ruleForm.order"></v-input>-->
<!--        </v-form-item>-->
        <v-form-item label="分值" :label-col="labelCol" :wrapper-col="wrapperCol">
<!--          <v-input size="large" v-model="ruleForm.score"></v-input>-->
          <v-input-number size="large" :min="1" :max="100" v-model="ruleForm.score"></v-input-number>
        </v-form-item>
        <v-form-item label="题目内容" :label-col="labelCol" :wrapper-col="wrapperCol">
          <v-input v-model="ruleForm.text" type="textarea" class="contentArea"></v-input>
          <div>
            <div class="uploadIcon" @click="clickUpLoad()">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fujian"></use>
              </svg>
            </div>
            <div class="Img" v-show="!ruleForm.hasFile">
              <img :src="ruleForm.imgUrl" class="textImg">
            </div>
<!--            <div class="fileName">{{ruleForm.fileTitle}}</div>-->
          </div>
        </v-form-item>
        <v-form-item label="选项设置" :label-col="labelCol" :wrapper-col="wrapperCol"
                     v-show="(ruleForm.type === 'select' || ruleForm.type === 'mselect') ? true : false">
          <v-input size="large"
                   class="optionItem"
                   v-model="ruleForm.option[index]"
                   v-for="(item, index) in ruleForm.option"
                   :key="index"
                   :disabled="ruleForm.type === 'judge'"></v-input>
          <v-button type="primary"
                    ghost style="margin-right:10px"
                    @click.prevent="addoption()"
                    v-show="ruleForm.type !== 'judge'">添加选项</v-button>
          <v-button type="primary"
                    ghost style="margin-right:10px"
                    @click.prevent="deleteoption()"
                    v-show="ruleForm.type !== 'judge' && ruleForm.option.length > 1">删除选项</v-button>
        </v-form-item>
        <v-form-item label="正确答案" :label-col="labelCol" :wrapper-col="wrapperCol"
                     v-show="( ruleForm.type === 'mselect') ? true : false">
          <el-checkbox-group v-model="ruleForm.answers01">
            <el-checkbox class="checkbox11" v-for="(item, index) in ruleForm.option"
                         :label="result[index]"
                         :key="index"
                         >
              <span class="checkbox22">{{'.' + result[index] + item}}</span></el-checkbox>
          </el-checkbox-group>
        </v-form-item>
        <v-form-item label="正确答案" :label-col="labelCol" :wrapper-col="wrapperCol"
                     v-show="( ruleForm.type === 'judge') ? true : false">
          <v-radio-group vlaue="select" v-model="ruleForm.answer02" :data="[{value: '对', text: '对'},
          {value: '错', text: '错'}]"
                         @change="typeChange()"></v-radio-group>
        </v-form-item>
        <v-form-item label="正确答案" :label-col="labelCol" :wrapper-col="wrapperCol"
                     v-show="( ruleForm.type === 'select') ? true : false">
          <el-radio class="checkbox11" v-for="(item, index) in ruleForm.option" :label="result[index]"
                       :key="index"
                       v-model="ruleForm.answer02">
            <span class="checkbox22">{{'.' + result[index] + ' ' + item}}</span></el-radio>
        </v-form-item>
        <v-form-item label="正确答案" :label-col="labelCol" :wrapper-col="wrapperCol"
                     v-show="(ruleForm.type === 'mselect' || ruleForm.type === 'judge' || ruleForm.type === 'select') ? false : true">
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
    <v-button class="pubBtn" type="primary" @click="publish()" v-show="currentEditTaskExam.problems.length !== 0">发布</v-button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
const formdata = new FormData()
export default {
  name: 'addExam.vue',
  data () {
    return {
      result: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q'],
      ruleForm: {
        type: 'select',
        order: '',
        score: '5',
        text: '',
        option: [],
        answers01: [],
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
        span: 3,
        offset: 3
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
      'currentCourse',
      'taskformdata'
    ]),
    mselectresult: function () {
      let temp
      for (let i; i < this.ruleForm.option.length; i++) {
        let tem
        tem.value = this.ruleForm.option[i]
        tem.text = this.ruleForm.option[i]
        temp[i] = tem
      }
      return temp
    }
  },
  methods: {
    ...mapMutations([
      'closeAddTEPop',
      'addTasks',
      'setcourseInfo',
      'addTask',
      'clsTask',
      'addTaskImg'
    ]),
    checkGroup (values) {
      console.log('checkboxGroup change event!!! ')
      console.log(values)
    },
    changeOption () {
      // this.ruleForm.option.push
    },
    clickUpLoad () {
      // if (this.ruleForm.order === '') {
      //   this.$notification.warning({
      //     message: '警告',
      //     description: '请先输入题号',
      //     duration: 1
      //   })
      //   return false
      // }
      this.ruleForm.order = (this.currentEditTaskExam.problems.length + 1)
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
        const temp = {
          name: 'problem' + this.ruleForm.order,
          file: file
        }
        this.addTaskImg(temp)
        this.ruleForm.fileTitle = file.name
        this.ruleForm.imgUrl = window.URL.createObjectURL(file)
        this.ruleForm.hasFile = false
      }
      // console.log('0001上传文件:')
      // console.log(this.taskformdata)
      // console.log(this.taskformdata.has('problem' + this.ruleForm.order))
      // console.log(this.taskformdata.get('problem' + this.ruleForm.order))
      // console.log(window.URL.createObjectURL(this.taskformdata.get('problem' + this.ruleForm.order)))
    },
    addanswer () {
      this.ruleForm.answers01.push('')
    },
    addoption () {
      this.ruleForm.option.push('')
    },
    deleteoption () {
      this.ruleForm.option.pop()
    },
    typeChange () {
      if (this.ruleForm.type === 'judge') {
        this.ruleForm.option = ['对', '错']
      } else {
        this.ruleForm.option = ['']
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
      console.log(this.ruleForm.answers01)
      for (let i = 0; i < this.ruleForm.answers01.length; i++) {
        console.log(this.ruleForm.answers01[i])
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
      // if (!this.judgetext()) return false
      this.problem.content.text = this.ruleForm.text
      this.problem.type = this.ruleForm.type
      this.problem.order = (this.currentEditTaskExam.problems.length + 1)
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
        // if (!this.judgeanswer02()) return false
        this.problem.answer = this.ruleForm.answer02
      } else if (this.ruleForm.type === 'subjective') {
        // if (!this.judgeanswer02()) return false
        this.problem.answer = this.ruleForm.answer02
      }
      console.log(this.problem)
      // this.currentEditTaskExam.problems.push(this.problem)
      this.addTask(this.problem)
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
        option: [],
        answers01: [],
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
    background-color: white;
    box-shadow: 1px 1px 5px 2px rgba(213,213,213,0.3);
    border-radius: 4px;
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
  .checkbox11 {
    width: 100%;
    margin: 8px 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .checkbox22 {
    width: 100%;
    word-break: break-all;
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
      min-width: 200px;
      border-radius: 4px;
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
  .pubBtn {
    position: relative;
    bottom: -60px;
    /*right: 10px;*/
  }
  .fileName {
    width: 90%;
    font-size: 13px;
    margin: 5px 0;
  }
  img {
    object-fit: cover;
  }

</style>
