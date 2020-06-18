<template>
  <div id="addTask">
    <div id="closeC" @click="closeAddTEPop"><v-icon class="my-icon-close" type="close"></v-icon></div>
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
        <v-form-item label="截止日期" :label-col="labelCol" :wrapper-col="wrapperCol" prop="deadDate">
          <v-date-picker v-model="ruleForm.deadDate"></v-date-picker>
        </v-form-item>
        <v-form-item label="截止时间" :label-col="labelCol" :wrapper-col="wrapperCol" prop="deadTime">
          <v-time-picker v-model="ruleForm.deadTime"></v-time-picker>
        </v-form-item>
        <v-form-item :wrapper-col="{offset:10, span: 14 }">
          <v-button type="primary" style="margin-right:10px" @click.prevent="submitForm('ruleForm')">开始创建</v-button>
        </v-form-item>
      </v-form>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'addTask.vue',
  data () {
    return {
      ruleForm: {
        name: '',
        content: '',
        deadDate: '',
        deadTime: '',
        deadline: ''
      },
      rules: {
        name: [{
          required: true,
          message: '请输入作业名称'
        }],
        content: [{
          required: true,
          message: '请输入作业内容'
        }],
        deadDate: [{
          required: true,
          message: '请选择截止日期'
        }],
        deadTime: [{
          required: true,
          message: '请选择截止时间'
        }]
      },
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 18
      }
    }
  },
  computed: {
    ...mapState([
    ])
  },
  methods: {
    ...mapMutations([
      'closeAddTEPop'
    ])
  },
  components: {
  },
  mounted () {
    this.setLeftSider(4)
  }
}
</script>

<style scoped lang="less">
#addTask {
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

#form {
  width: 90%;
  margin: 10px 0;
}

</style>
