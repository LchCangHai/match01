<template>
  <div id="study">
    <div id="threeNav">
      <div class="three1icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuoyexiawu"></use>
        </svg>
      </div>
      <div class="three1title">作业与考试</div>
    </div>
    <div id="threeHandle">
      <div>
        <v-button class="typeBtn" type="ghost"
                  :class="{ activeBtn: type === 1 ? true : false}"
                  @click="typeAll()">全部</v-button>
        <v-button  class="typeBtn" type="ghost"
                   :class="{ activeBtn: type === 2 ? true : false}"
                   @click="typeTasks()">作业</v-button>
        <v-button  class="typeBtn" type="ghost"
                   :class="{ activeBtn: type === 3 ? true : false}"
                   @click="typeExam()">考试</v-button>
      </div>
    </div>
    <div id="threeContent">
      <div class="three3Item">
        <div class="three3Nav">
          <div class="three3header">
            <div class="three3type"
                 v-show="'作业' === '作业' ? true : false"
                 :class="{ taskType : '作业' === '作业' ? true : false}"
            ><div>作业</div></div>
            <div class="three3type"
                 v-show="'作业' === '考试' ? true : false"
                 :class="{ examType : '作业' === '考试' ? true : false}"
            ><div>考试</div></div>
            <div class="three3Title1">第一节的作业</div>
          </div>
          <div class="three3Status"
               v-show="'finished' === 'finished' ? true : false"
               :class="{ finished : 'finished' === 'finished' ? true : false}"
          ><div>已完成</div></div>
          <div class="three3Status"
               v-show="'unfinished' === 'finished' ? true : false"
               :class="{ unFinished : 'unfinished' === 'finished' ? true : false}"
          ><div>未完成</div></div>
        </div>
        <div class="three3Info">
          <div>秃头的直接原因是什么？</div>
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
      <div class="three3Item">
        <div class="three3Nav">
          <div class="three3header">
            <div class="three3type"
                 v-show="'作业' === '作业' ? true : false"
                 :class="{ taskType : '作业' === '作业' ? true : false}"
            ><div>作业</div></div>
            <div class="three3type"
                 v-show="'作业' === '考试' ? true : false"
                 :class="{ examType : '作业' === '考试' ? true : false}"
            ><div>考试</div></div>
            <div class="three3Title1">第一节的作业</div>
          </div>
          <div class="three3Status"
               v-show="'finished' === 'finished' ? true : false"
               :class="{ finished : 'finished' === 'finished' ? true : false}"
          ><div>已完成</div></div>
          <div class="three3Status"
               v-show="'unfinished' === 'finished' ? true : false"
               :class="{ unFinished : 'unfinished' === 'finished' ? true : false}"
          ><div>未完成</div></div>
        </div>
        <div class="three3Info">
          <div>秃头的直接原因是什么？</div>
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
      <div class="three3Item">
        <div class="three3Nav">
          <div class="three3header">
            <div class="three3type"
                 v-show="'作业' === '作业' ? true : false"
                 :class="{ taskType : '作业' === '作业' ? true : false}"
            ><div>作业</div></div>
            <div class="three3type"
                 v-show="'作业' === '考试' ? true : false"
                 :class="{ examType : '作业' === '考试' ? true : false}"
            ><div>考试</div></div>
            <div class="three3Title1">第一节的作业</div>
          </div>
          <div class="three3Status"
               v-show="'finished' === 'finished' ? true : false"
               :class="{ finished : 'finished' === 'finished' ? true : false}"
          ><div>已完成</div></div>
          <div class="three3Status"
               v-show="'unfinished' === 'finished' ? true : false"
               :class="{ unFinished : 'unfinished' === 'finished' ? true : false}"
          ><div>未完成</div></div>
        </div>
        <div class="three3Info">
          <div>秃头的直接原因是什么？</div>
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
      <v-pagination v-model="pageVal" @change="loadPage"
                    :total="50">
      </v-pagination>
      <div class="three3Item">
        <div class="three3Nav">
          <div class="three3header">
            <div class="three3type"
                 v-show="'作业' === '作业' ? true : false"
                 :class="{ taskType : '作业' === '作业' ? true : false}"
            ><div>作业</div></div>
            <div class="three3type"
                 v-show="'作业' === '考试' ? true : false"
                 :class="{ examType : '作业' === '考试' ? true : false}"
            ><div>考试</div></div>
            <div class="three3Title1">第一节的作业</div>
          </div>
          <div class="three3Status"
               v-show="'finished' === 'finished' ? true : false"
               :class="{ finished : 'finished' === 'finished' ? true : false}"
          ><div>已完成</div></div>
          <div class="three3Status"
               v-show="'unfinished' === 'finished' ? true : false"
               :class="{ unFinished : 'unfinished' === 'finished' ? true : false}"
          ><div>未完成</div></div>
        </div>
        <div class="three3Info">
          <div>秃头的直接原因是什么？</div>
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
      <div class="three3Item">
        <div class="three3Nav">
          <div class="three3header">
            <div class="three3type"
                 v-show="'作业' === '考试' ? true : false"
                 :class="{ taskType : '作业' === '考试' ? true : false}"
            ><div>作业</div></div>
            <div class="three3type"
                 v-show="'考试' === '考试' ? true : false"
                 :class="{ examType : '考试' === '考试' ? true : false}"
            ><div>考试</div></div>
            <div class="three3Title1">第一节的作业</div>
          </div>
          <div class="three3Status"
               v-show="'finished' === 'unfinished' ? true : false"
               :class="{ finished : 'finished' === 'unfinished' ? true : false}"
          ><div>已完成</div></div>
          <div class="three3Status"
               v-show="'unfinished' === 'unfinished' ? true : false"
               :class="{ unFinished : 'unfinished' === 'unfinished' ? true : false}"
          ><div>未完成</div></div>
        </div>
        <div class="three3Info">
          <div>秃头的直接原因是什么？</div>
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
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'exam.vue',
  data () {
    return {
      type: 1,
      pageVal: 1
    }
  },
  computed: {
    ...mapState([
    ])
  },
  methods: {
    ...mapMutations([
    ]),
    typeAll () {
      this.type = 1
    },
    typeTasks () {
      this.type = 2
    },
    typeExam () {
      this.type = 3
    },
    loadPage () {
      console.log(this.pageVal)
    }
  },
  components: {
  }
}
</script>

<style scoped lang="less">
#study {
  margin: 20px 0;
  position: relative;
  /*height: 700px;*/
  width: 70%;
  min-width: 800px;
  max-width: 900px;
  left: 50%;
  transform: translate(-50%);
  margin-bottom: 50px;
  color: black;
}

  #threeNav {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .three1icon {
      width: 30px;
      height: 30px;
      svg {
        height: 100%;
        width: 100%;
      }
    }
    .three1title {
      margin-left: 10px;
      font-size: 14px;
      font-weight: 600;
    }
  }

  #threeHandle {
    width: 70%;
    height: 40px;
    background-color: #f5f5f5;
    border-radius: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 20px;
    box-shadow: 1px 1px 5px 0px rgba(213,213,213,0.6);
    .typeBtn {
      margin: 0 20px;
      width: 80px;
      border: none;
      color: black;
    }
    .activeBtn {
      border: 2px solid white;
      border-radius: 50px;
      font-weight: 600;
    }
  }

  #threeContent {
    width: 100%;
  }

  .three3Item {
    width: 100%;
    height: 150px;
    background-color: #f9f9f9;
    border-radius: 20px;
    margin: 10px 0;
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
      margin-left: 40px;
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
  .three3Status {
    width: 70px;
    height: 25px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
    margin-right: 5px;
  }
  .finished {
    background-color: #a2ffac;
  }
  .unFinished {
    background-color: #ff4e4e;
  }
}
  .three3Info {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    >div {
      width: 80%;
      font-size: 14px;
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
    left: 50%;
    transform: translate(-50%);
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
</style>
