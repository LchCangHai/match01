<template>
  <div id="inform">
    <div id="closeC" @click="closeCoursePop()"><v-icon class="my-icon-close" type="close"></v-icon></div>
    <div id="cP01Title">
      <div class="cPNavLeft">
        <div class="cPAvatarBox">
          <img src="../../assets/avatar02.png">
        </div>
        <div class="cPTitle">
          <div class="cPname">小芃</div>
          <div class="cPtitle">关于熬夜秃头实验的通知</div>
        </div>
      </div>
      <div class="cPNavRight">
        <div>发布时间：<span>2020.6.6 20:56</span></div>
      </div>
    </div>
    <div id="cP01hr"></div>
    <div id="cP01Content">
      <vue-scroll>
        <div id="cP01Content01">
          <div class="contentText">
            本周为实践课\n程，学生应该多多观察林炜同学每天熬夜过程中黑眼圈\n与头皮的变化，
            设置单一变量重复实验，排除偶然\t\r情况XXXXXXXXXXXXXXXXXXXXXXXX\nXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            XXXXXXXXXXXXXXXXXXXXX\nXXXXXX\t\rXXXXXXXXXXXXXXXXXXXXXXXXXX\nXXXXXXXXXXXXXXXXx
            XXXXXXXXXXXXXXXXXXXXXXXXXX\t\rXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          </div>
        </div>
      </vue-scroll>
    </div>
    <div id="cP01Btn">
      <v-button class="Btn03" type="primary" size="large">确认</v-button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'inform.vue',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'coursePop',
      'coursePopType'
    ])
  },
  methods: {
    ...mapMutations([
      'openCoursePop',
      'closeCoursePop'
    ])
  },
  mounted () {
  }
}
</script>

<style scoped lang="less">
#inform {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: black;
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

#cP01Title {
  width: 90%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
  .cPNavLeft {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .cPAvatarBox {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
      }
    }
    .cPTitle {
      .cPname {
        position: absolute;
        top: 28px;
        left: 95px;
      }
      .cPtitle {
        margin-left: 10px;
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
  .cPNavRight {
    margin-top: 30px;
    margin-right: 30px;
    color: #3e3e3e;
  }

#cP01hr {
  width: 90%;
  height: 0px;
  border-bottom: #e2e2e2 solid 1px;
  margin: 10px 0;
}

#cP01Content {
  width: 90%;
  height: 180px;
  margin-bottom: 10px;
  .cP01Content01 {
    width: 600px;
    /*display: flex;*/
    /*flex-direction: column;*/
    /*justify-content: flex-start;*/
    /*align-items: center;*/
  }
}
  .contentText {
    width: 600px;
    word-break: break-all;
    /*white-space: pre;*/
    text-indent: 2em;
    font-size: 14px;
    word-spacing: 2px;
  }

#cP01Btn {
  width: 90%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
  .Btn03 {
    width: 200px;
    height: 50px;
    border-radius: 50px;
    font-size: 16px;
  }

  img {
    object-fit: cover;
  }
</style>
