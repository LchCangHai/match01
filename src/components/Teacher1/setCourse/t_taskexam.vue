<template>
  <div id="courseWare">
    <div id="Content01">
      <my-task></my-task>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import TaskExam from './taskexam/task.vue'

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
    'my-task': TaskExam
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

  #Content01 {
    width: 100%;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  my-task {
    z-index: 2020;
  }

  img {
    object-fit: cover;
  }
</style>
