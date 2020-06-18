<template>
  <div id="taskDetail">
    <div id="closeC" @click="closeCoursePop()"><v-icon class="my-icon-close" type="close"></v-icon></div>
    <div id="cP02Title">
      <div class="three3Nav">
        <div class="three3header">
          <div class="three3type taskType"
          ><div>作业</div></div>
          <div class="three3Title1">第一节的作业</div>
        </div>
      </div>
      <div class="three3Time">
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiezhishijian-"></use>
          </svg>
        </div>
        <div>截止时间：2020-6-1 23：50</div>
      </div>
    </div>
    <div id="cP02hr"></div>
    <div id="cP02Content">
      <div class="choice">
        <div class="title03">选择题： </div>
        <div>共<span>8</span>题--合计<span>40</span>分</div>
        <div>合计<span>60</span>分</div>
      </div>
      <div class="completion">
        <div class="title03">填空题： </div>
        <div>共<span>8</span>题--合计<span>40</span>分</div>
      </div>
      <div class="completion">
        <div class="title03">判断题： </div>
        <div>共<span>8</span>题--合计<span>40</span>分</div>
      </div>
      <div class="question">
        <div class="title03">问答题： </div>
        <div>共<span>8</span>题--合计<span>40</span>分</div>
      </div>
      <div class="score">
        <div class="title03">总计<span>150</span>分</div>
      </div>
      <div class="time">
        <div class="title03">测试时间： </div>
        <div><span>2020.6.7 13:21</span>-<span>2020.6.7 19:30</span></div>
      </div>
    </div>
    <div id="cP02Btn">
      <v-button class="Btn03" type="success" size="large" v-show="true">开始作答</v-button>
      <v-button class="Btn03" type="success" size="large" v-show="false">查看情况</v-button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'taskDetail.vue',
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
#taskDetail {
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

#cP02Title {
  width: 90%;
  height: 60px;
  /*background-color: #83bafc;*/
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
 .three3Nav {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .three3header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .three3type {
      /*margin-left: 40px;*/
      font-size: 10px;
      width: 25px;
      height: 25px;
      color: white;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .taskType {
      background-color: #ffd500;
    }
    .examType {
      background-color: #ff4e4e;
    }
    .three3Title1 {
      margin-left: 20px;
      font-size: 14px;
      font-weight: 600;
    }
  }
}
.three3Time {
  width: 80%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  /*left: 50%;*/
  /*transform: translate(-50%);*/
  >div:first-child {
    width: 20px;
    height: 20px;
    >svg {
      height: 100%;
      width: 100%;
    }
  }
  >div:last-child {
    margin-left: 10px;
    font-size: 12px;
  }
}

#cP02hr {
  width: 90%;
  height: 0px;
  border-bottom: #e2e2e2 solid 1px;
  margin: 10px 0;
}

#cP02Content {
  width: 90%;
  height: 180px;
  /*background-color: #3d84ff;*/
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  >div {
    margin: 8px 0;
  }
}
  .title03 {
    font-weight: 600;
  }
  .choice {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    >div {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin: 0 5px;
    }
  }
  .completion {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    >div {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin: 0 5px;
    }
  }
  .question {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    >div {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin: 0 5px;
    }
  }
  .score {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    >div {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin: 0 5px;
    }
  }
  .time {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    >div {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin: 0 5px;
    }
  }

#cP02Btn {
  width: 90%;
  height: 60px;
  /*background-color: #9a6e3a;*/
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

</style>
