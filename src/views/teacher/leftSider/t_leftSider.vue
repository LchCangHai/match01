<template>
  <div id="leftSider">
    <div class="siderItem itemTitle">
      <div class="icon">
        <div class="titlee">课程名字课程名字课程名字</div>
      </div>
      <div></div>
    </div>
    <div class="siderItem"
         :class=" { siderActive : leftSiderActive === 0 ? true : false} ">
      <div class="icon">
        <div>
          <v-icon type="book"></v-icon>
        </div>
        <div @click="totcourseManage()">课程管理</div>
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
        <!--        <div class="item"-->
        <!--             :class=" { siderActive1 : leftSiderActive === 7 ? true : false} "-->
        <!--             @click="totcourseSignIn()">-->
        <!--          <div>课件签到</div>-->
        <!--        </div>-->
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
         :class=" { siderActive : leftSiderActive === 6 ? true : false} "
         @click="tostarttask()">
      <div class="icon">
        <div>
          <v-icon type="edit"></v-icon>
        </div>
        <div>布置作业考试</div>
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
    <!--    <div class="siderItem"-->
    <!--         :class=" { siderActive : leftSiderActive === 6 ? true : false} "-->
    <!--    @click="totdataManage()"-->
    <!--    v-show="leftSiderActive === 6 ? true : false">-->
    <!--      <div class="icon">-->
    <!--        <div>-->
    <!--          <v-icon type="line-chart"></v-icon>-->
    <!--        </div>-->
    <!--        <div>数据中心</div>-->
    <!--      </div>-->
    <!--      <div></div>-->
    <!--    </div>-->
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

let vm
function getHash () {
  let hash = 'none'
  hash = window.location.hash
  // console.log(hash)
  return hash
}
export default {
  name: 'leftSider.vue',
  data () {
    return {
      leftSiderActive: 0
    }
  },
  computed: {
    ...mapState([
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
    totcourseManage () {
      this.$router.push('/setCourse/courseManage')
    },
    totcourseWare () {
      this.$router.push('/setCourse/courseWare')
    },
    totcourseVideo () {
      this.$router.push('/setCourse/courseVideo')
    },
    totcourseDiscuss () {
      this.$router.push('/setCourse/courseDiscuss')
    },
    totcourseSignIn () {
      this.$router.push('/setCourse/courseExam')
    },
    tostarttask () {
      this.$router.push('/setCourse/startExam')
    },
    tottaskExam () {
      this.$router.push('/setCourse/courseExam')
    },
    totstudentManage () {
      this.$router.push('/setCourse/courseStudent')
    }
  },
  components: {
  },
  watch: {
    $route: {
      handler: (val, oldVal) => {
        const that = vm
        const hash = getHash()
        if (hash === '#/setCourse/courseWare') {
          that.leftSiderActive = 1
        } else if (hash === '#/setCourse/courseManage') {
          that.leftSiderActive = 0
        } else if (hash === '#/setCourse/courseVideo') {
          that.leftSiderActive = 2
        } else if (hash === '#/setCourse/courseDiscuss') {
          that.leftSiderActive = 3
        } else if (hash === '#/setCourse/courseExam') {
          that.leftSiderActive = 4
        } else if (hash === '#/setCourse/courseStudent') {
          that.leftSiderActive = 5
        } else if (hash === '#/setCourse/startExam') {
          that.leftSiderActive = 6
        }
      }
    }
  },
  mounted: function () {
    const that = this
    const hash = getHash()
    console.log('sb  ' + hash)
    if (hash === '#/setCourse/courseWare') {
      that.leftSiderActive = 1
    } else if (hash === '#/setCourse/courseManage') {
      that.leftSiderActive = 0
    } else if (hash === '#/setCourse/courseVideo') {
      that.leftSiderActive = 2
    } else if (hash === '#/setCourse/courseDiscuss') {
      that.leftSiderActive = 3
    } else if (hash === '#/setCourse/courseExam') {
      that.leftSiderActive = 4
    } else if (hash === '#/setCourse/courseStudent') {
      that.leftSiderActive = 5
    } else if (hash === '#/setCourse/startExam') {
      that.leftSiderActive = 6
    }
    vm = this
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
  .itemTitle {
    border-bottom: 1px solid #595959;
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
      /*justify-content: center;*/
      align-items: center;
      position: relative;
      left: 5px;
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
        /*justify-content: center;*/
        align-items: center;
        position: relative;
        left: 30px;
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
  .titlee {
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
    -o-text-overflow: ellipsis;
    font-size: 16px  !important;
    font-weight: 700;
    font-family: 'longmenshibei';
  }
</style>
