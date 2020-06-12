<template>
  <div id="sourse">
    <div id="fiveNav">
      <div class="three1icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-ziyuan"></use>
        </svg>
      </div>
      <div class="three1title">资源管理</div>
    </div>
    <div id="fivebody">
      <div id="fivemenu">
        <vue-scroll>
          <div id="fivemenu1">
            <div class="fiveItem1">
              <div class="fiveItem1Main">
                <div class="Main1"
                     :class="{ acitveItem1: courseId === '1' ? true : false }"
                @click="setCourseId('1')">
                  <div>
                    <div>第一节 秃头资源</div>
                  </div>
                  <div>
                    <v-icon class="item2Icon" type="right"
                            :class="{ choosed: courseId === '1' ? true : false}"></v-icon>
                  </div>
                </div>
              </div>
              <div class="fiveItem1Chlid"
              v-show="courseId === '1' ? true : false">
                <div class="fiveItem2">
                  <div class="fiveItem2Main">
                    <div class="Main2"
                         @click="setChapterId('1')">
                      <div>
                        <div>
                          1.1 林炜秃头史
                        </div>
                      </div>
                      <div>
                        <v-icon class="item2Icon" type="right"
                                :class="{ choosed: chapterId === '1' ? true : false}"></v-icon>
                      </div>
                    </div>
                  </div>
                  <div class="fiveItem2Child"
                  v-show="chapterId === '1' ? true : false">
                    <div class="fiveItem3">
                      <div class="Main3">
                        <div>
                          <div>1.林炜秃头史</div>
                        </div>
                      </div>
                    </div>
                    <div class="fiveItem3">
                      <div class="Main3">
                        <div>
                          <div>2.林炜秃头后获取的成就</div>
                        </div>
                      </div>
                    </div>
                    <div class="fiveItem3">
                      <div class="Main3">
                        <div>
                          <div>3.林炜秃头后美照</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="fiveItem2"></div>
              </div>
            </div>
            <div class="fiveItem1">
              <div class="fiveItem1Main">
                <div class="Main1"
                     :class="{ acitveItem1: courseId === '2' ? true : false }"
                     @click="setCourseId('2')">
                  <div>
                    <div>第一节 秃头资源</div>
                  </div>
                  <div>
                    <v-icon class="item2Icon" type="right"
                            :class="{ choosed: courseId === '2' ? true : false}"></v-icon>
                  </div>
                </div>
              </div>
              <div class="fiveItem1Chlid"
                   v-show="courseId === '2' ? true : false">
                <div class="fiveItem2">
                  <div class="fiveItem2Main">
                    <div class="Main2"
                         @click="setChapterId('2')">
                      <div>
                        <div>
                          1.1 林炜秃头史
                        </div>
                      </div>
                      <div>
                        <v-icon class="item2Icon" type="right"
                                :class="{ choosed: chapterId === '2' ? true : false}"></v-icon>
                      </div>
                    </div>
                  </div>
                  <div class="fiveItem2Child"
                       v-show="chapterId === '2' ? true : false">
                    <div class="fiveItem3">
                      <div class="Main3">
                        <div>
                          <div>1.林炜秃头史</div>
                        </div>
                      </div>
                    </div>
                    <div class="fiveItem3">
                      <div class="Main3">
                        <div>
                          <div>2.林炜秃头后获取的成就</div>
                        </div>
                      </div>
                    </div>
                    <div class="fiveItem3">
                      <div class="Main3">
                        <div>
                          <div>3.林炜秃头后美照</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="fiveItem2"></div>
              </div>
            </div>
          </div>
        </vue-scroll>
      </div>
      <div id="fiveSourse">
        <div class="sourseContent"></div>
        <div class="progress">
          <v-progress-line :percent="50" :stroke-width="7" status="active"></v-progress-line>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'sourse.vue',
  data () {
    return {
      courseId: '',
      chapterId: ''
    }
  },
  computed: {
    ...mapState([
    ])
  },
  methods: {
    ...mapMutations([
    ]),
    setCourseId (id) {
      if (this.courseId === id) {
        this.courseId = ''
      } else {
        this.courseId = id
      }
      this.chapterId = ''
    },
    setChapterId (id) {
      if (this.chapterId === id) {
        this.chapterId = ''
      } else {
        this.chapterId = id
      }
    }
  },
  components: {
  }
}
</script>

<style scoped lang="less">
#sourse {
  margin: 20px 0;
  position: relative;
  height: 700px;
  width: 80%;
  min-width: 900px;
  max-width: 1000px;
  left: 50%;
  transform: translate(-50%);
  margin-bottom: 50px;
  color: black;
}

#fiveNav {
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

#fivebody{
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
}

#fivemenu{
  width: 28%;
  height: 500px;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  box-shadow: 1px 1px 5px 0px rgba(213,213,213,0.8);
}

#fivemenu1 {
  width: 98%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
  .acitveItem1 {
    font-weight: 600;
  }
  .choosed {
    transform: rotate(0.25turn);
  }
  .fiveItem1 {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 5px 0;
    .fiveItem1Main {
      width: 100%;
      height: 40px;
      background-color: #f1f1f1;
      border-radius: 3px;
      .Main1 {
        cursor: pointer;
        width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
      }
      .Main1:hover {
        font-size: 15px;
      }
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .fiveItem1Chlid {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
  .fiveItem2 {
    margin: 5px 0;
    width: 95%;
    .fiveItem2Main {
      width: 100%;
      height: 40px;
      background-color: #f9f9f9;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border-radius: 3px;
      .Main2 {
        cursor: pointer;
        width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 13px;
      }
      .Main2:hover {
        font-size: 14px;
      }
    }
    .fiveItem2Child {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
  .fiveItem3 {
    margin: 3px 0;
    width: 95%;
    height: 30px;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    .Main3 {
      cursor: pointer;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      >div{
        width: 90%;
      }
    }
    .Main3:hover {
      font-size: 13px;
    }
  }

#fiveSourse {
  width: 70%;
  height: 550px;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  box-shadow: 5px 5px 10px 0px rgba(213,213,213,1),
    -1px -1px 5px 0px rgba(213,213,213,0.6);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .sourseContent {
    width: 100%;
    height: 500px;
  }
  .progress {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #dfdfdf;
    >div {
      width: 95%;
    }
  }
}
</style>
