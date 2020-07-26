<template>
  <div id="Tindex">
    <div class="none">
      <input
        type="file"
        ref="upload_file"
        @change="handleFileChange">
    </div>
    <div id="Nav">
      <my-nav :type="2"></my-nav>
    </div>
    <div id="myCourse">
      <div class="form">
        <v-form direction="horizontal" :model="ruleForm" :rules="rules" ref="ruleForm">
          <v-form-item label="课程名称" :label-col="labelCol" :wrapper-col="wrapperCol" prop="name">
            <v-input size="large" v-model="ruleForm.name"></v-input>
          </v-form-item>
          <v-form-item label="开课时间" :label-col="labelCol" :wrapper-col="wrapperCol" prop="startDate">
            <v-input type="text" id="start" v-model="ruleForm.startDate" class="ipt"></v-input>
<!--            <v-date-picker v-model="ruleForm.startDate"></v-date-picker>-->
<!--            <v-time-picker v-model="ruleForm.startTime"></v-time-picker>-->
          </v-form-item>
          <v-form-item label="结课时间" :label-col="labelCol" :wrapper-col="wrapperCol" prop="deadDate">
            <v-input type="text" id="end" v-model="ruleForm.deadDate" class="ipt"></v-input>
<!--            <v-date-picker v-model="ruleForm.deadDate"></v-date-picker>-->
<!--            <v-time-picker v-model="ruleForm.deadTime"></v-time-picker>-->
          </v-form-item>
          <v-form-item label="课程封面" :label-col="labelCol" :wrapper-col="wrapperCol">
            <div>
              <div class="uploadIcon" @click="clickUpLoad()">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-fujian"></use>
                </svg>
              </div>
              <div class="Img" v-show="ruleForm.isAvatar">
                <img :src="imgUrl" class="coursePage">
              </div>
<!--              <div class="fileName">{{fileTitle}}</div>-->
            </div>
          </v-form-item>
          <v-form-item label="课程类型" :label-col="labelCol" :wrapper-col="wrapperCol" prop="public">
            <v-radio-group v-model="ruleForm.public" :data="[{value: '1', text: '公开课'},{value: '0', text: '非公开课'}]"></v-radio-group>
          </v-form-item>
          <v-form-item label="课程类别" :label-col="labelCol" :wrapper-col="wrapperCol" prop="type">
            <v-select v-model="ruleForm.type" placeholder="请选择课程类别" notfound="无法找到"
                      :data="[{value: '1', label: '工学'}, {value: '2', label: '理学'}, {value: '3', label: '文学'},
                      {value: '4', label: '医学'}, {value: '5', label: '艺术'}]"></v-select>
          </v-form-item>
          <v-form-item label="课程简介" :label-col="labelCol" :wrapper-col="wrapperCol" prop="introduce">
            <v-input v-model="ruleForm.introduce" type="textarea" class="textarea1"></v-input>
          </v-form-item>
          <v-form-item :wrapper-col="{offset:8, span: 14 }">
            <div class="title01"
                 @click.prevent="submitForm('ruleForm')"><div>创建课程</div></div>
<!--            <v-button type="primary" style="margin-right:10px" @click.prevent="submitForm('ruleForm')">立即创建</v-button>-->
          </v-form-item>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import myNav from '../../views/navs/t_nav2.vue'

/* Eslit disabled */
const formdata = new FormData()
export default {
  name: 'Tindex.vue',
  data () {
    return {
      counter: 5,
      isCnt99: false,
      // data: [
      //   { content: this.currentUser.nickname },
      //   { content: this.currentUser.telephone }
      // ],
      createCourse: false,
      formdata,
      ruleForm: {
        name: '',
        public: '',
        type: '',
        introduce: '',
        deadDate: '',
        startDate: '',
        start: '',
        end: '',
        isAvatar: false
      },
      rules: {
        name: [{
          required: true,
          message: '请输入课程名称'
        }],
        introduce: [{
          required: true,
          message: '请输入课程简介'
        }],
        public: [{
          required: true,
          message: '请选择课程类型'
        }],
        type: [{
          required: true,
          message: '请选择课程类别'
        }],
        startDate: [{
          required: true,
          message: '请选择课程开始时间'
        }],
        deadDate: [{
          required: true,
          message: '请选择课程结束时间'
        }]
      },
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 14
      },
      imgUrl: '',
      fileTitle: '',
      hasFile: false,
      laydate: window.laydate
    }
  },
  computed: {
    ...mapState([
      'currentUser'
    ])
  },
  methods: {
    ...mapMutations([
    ]),
    pcBtn () {
      this.$router.push('/pCenter')
    },
    tostudent () {
      this.$router.push('/index')
    },
    exit () {
      window.localStorage.setItem('access_token', null)
      this.$router.push('/unindex')
    },
    clickUpLoad () {
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
        console.log(file)
        this.fileTitle = file.name
        formdata.set('avatar', file)
        this.ruleForm.isAvatar = true
        this.imgUrl = window.URL.createObjectURL(file)
      }
    },
    getTime () {
      // console.log(new Date(this.ruleForm.startDate))
      this.ruleForm.start = (new Date(this.ruleForm.startDate).getTime()) / 1000
      this.ruleForm.end = (new Date(this.ruleForm.deadDate).getTime()) / 1000
      console.log(this.ruleForm.start)
      console.log(this.ruleForm.end)
      if (this.ruleForm.end - this.ruleForm.start <= 0) {
        this.$message.error('结束时间应该在开始时间之后')
        return false
      }
      return true
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const time = this.getTime()
          if (time === false) return false
          if (this.ruleForm.isAvatar === false) {
            this.$message.warning('请上传课程封面后提交')
            return false
          }
          // this.tocreate()
        } else {
          this.$message.error('请正确填写后提交！')
          return false
        }
      })
    },
    tocreate () {
      formdata.set('name', this.ruleForm.name)
      formdata.set('public', this.ruleForm.public)
      formdata.set('introduce', this.ruleForm.introduce)
      formdata.set('start_at', this.ruleForm.start)
      formdata.set('end_at', this.ruleForm.end)
      this.$axios.post('/api/course/course_list', formdata, {
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res => {
        this.$message.success('创建成功')
        this.createCourse = false
      }).catch(error => {
        this.$message.error('创建失败')
        console.log(error)
      }).finally(() => {
        const temp = {
          name: ' ',
          public: ' ',
          introduce: ' ',
          type: '',
          deadDate: '',
          startDate: '',
          start: '',
          end: '',
          isAvatar: false
        }
        this.ruleForm = temp
      })
    },
    getUserInfo () {
      this.$axios.get('/api/user/current')
        .then(res => {
          console.log('已登录!!!!!11')
          // this.$notification.info({
          //   message: '消息',
          //   description: '已登录账号： ' + res.data.data.nickname,
          //   duration: 2
          // })
        }).catch(() => {
          this.$notification.warning({
            message: '警告',
            description: '未登录或登录过期',
            duration: 2
          })
        }).finally(() => {
        })
    }
  },
  mounted () {
    this.getUserInfo()
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
  },
  components: {
    'my-nav': myNav
  }
}
</script>

<style scoped lang="less">
  #Tindex {
    width: 100%;
    min-width: 1050px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
  .coursePage {
    width: 350px;
    height: 180px;
    object-fit: cover;
    border: #5e615e solid 1px;
    border-radius: 4px;
  }

  .create01 {
    width: 100%;
    position: absolute;
    .title02 {
      width: 80px;
      height: 40px;
      font-size: 14px;
    }
  }
  #myCourse {
    width: 70%;
    min-width: 700px;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 20px 0 50px 0;
    box-shadow: 1px 1px 5px 1px #e5e5e5;
    padding: 20px 0 0 0 ;
    .title01:hover {
      font-size: 16px;
    }
    .title01:active {
      box-shadow: -1px -1px 3px 1px rgba(180,180,180,0.56);
    }
  }
  .textarea1 {
    resize: none;
    min-height: 80px;
  }
  .title01 {
    width: 150px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    background-color: #108ee9;
    box-shadow: 1px 1px 3px 1px rgba(180,180,180,0.56);
    margin: 15px;
    cursor: pointer;
    >div {
      font-size: 15px;
      font-weight: 600;
      color: white;
    }
  }
  .form{
    width: 100%;
  }

  .imgBox {
    max-width: 100%;
    max-height: 200px;
    border-radius: 50%;

    > img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
    }
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
  img {
    object-fit: cover;
  }
</style>
