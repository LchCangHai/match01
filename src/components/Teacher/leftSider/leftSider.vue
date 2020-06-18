<template>
  <div id="leftSider">
    <div class="siderItem" @click="totindex()">
      <div class="icon">
        <div>
          <v-icon type="home"></v-icon>
        </div>
        <div>首页</div>
      </div>
      <div></div>
    </div>
    <div class="siderItem"
         :class=" { siderActive : (leftSiderActive === 1 || leftSiderActive === 2 || leftSiderActive === 3) ? true : false} ">
      <div class="icon" @click="totcourseWare()">
        <div>
          <v-icon type="book"></v-icon>
        </div>
        <div>课程管理</div>
      </div>
      <div class="BtnBox">
        <div class="item"
             :class=" { siderActive1 : leftSiderActive === 1 ? true : false} "
        @click="totcourseWare()">
          <div>课件管理</div>
        </div>
        <div class="item"
             :class=" { siderActive1 : leftSiderActive === 2 ? true : false} "
        @click="totcourseVideo()">
          <div>视频管理</div>
        </div>
        <div class="item"
             :class=" { siderActive1 : leftSiderActive === 3 ? true : false} "
        @click="totcourseDiscuss()">
          <div>讨论管理</div>
        </div>
        <div class="item"
             :class=" { siderActive1 : leftSiderActive === 0 ? true : false} "
             @click="totcourseSignIn()">
          <div>课件签到</div>
        </div>
      </div>
    </div>
    <div class="siderItem"
         :class=" { siderActive : leftSiderActive === 4 ? true : false} "
    @click="tottaskExam()">
      <div class="icon">
        <div>
          <v-icon type="file-text"></v-icon>
        </div>
        <div>作业考试</div>
      </div>
      <div></div>
    </div>
    <div class="siderItem"
         :class=" { siderActive : leftSiderActive === 5 ? true : false} "
    @click="totstudentManage()">
      <div class="icon">
        <div>
          <v-icon type="solution"></v-icon>
        </div>
        <div>学生管理</div>
      </div>
      <div></div>
    </div>
    <div class="siderItem"
         :class=" { siderActive : leftSiderActive === 6 ? true : false} "
    @click="totdataManage()">
      <div class="icon">
        <div>
          <v-icon type="line-chart"></v-icon>
        </div>
        <div>数据中心</div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'leftSider.vue',
  computed: {
    ...mapState([
      'leftSiderActive'
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
    totindex () {
      this.$router.push('/tindex')
    },
    totcourseManage () {
      this.$router.push('/courseManage')
    },
    totcourseWare () {
      this.$router.push('/courseWare')
    },
    totcourseVideo () {
      this.$router.push('/courseVideo')
    },
    totcourseDiscuss () {
      this.$router.push('/courseDiscuss')
    },
    totcourseSignIn () {
      this.$router.push('/courseSignIn')
    },
    totstudentManage () {
      this.$router.push('/studentManage')
    },
    tottaskExam () {
      this.$router.push('/taskExam')
    },
    totdataManage () {
      this.$router.push('/dataManage')
    }
  },
  components: {
  }
}
</script>

<style scoped lang="less">
#leftSider {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.siderActive {
  color: #61c7fc;
}
.siderItem {
  width: 100%;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .icon {
    width: 150px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /*font-weight: 600;*/
    >div:first-child {
      i {
        font-size: 18px;
      }
      margin: 0 10px;
    }
    >div:last-child {
      font-size: 15px;
      cursor: pointer;
    }
    >div:last-child:hover {
      font-size: 16px;
    }
    >div:last-child:active {
      font-size: 15px;
    }
  }
  .BtnBox {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .item {
      color: black;
      width: 100%;
      height: 50px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      >div {
        font-size: 14px;
        position: relative;
        left: 20px;
        cursor: pointer;
      }
      >div:hover {
        font-size: 15px;
      }
      >div:active {
        font-size: 14px;
      }
    }
  }
}
.siderActive1 {
  color: #61c7fc;
  >div {
    color: #61c7fc;
  }
}
</style>
