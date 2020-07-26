<template>
  <div id="sourse">
    <div id="old" v-show="type === 2">
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
    <div id="new" v-show="type === 1">
      <div id="mune01">
        <div class="studyItem01" v-for="(item, index) in courseFile" :key="index">
          <div class="item01Main" @click="chooseChater(item.name)">
            <div class="chapter01">
              <div>
                <v-icon type="folder"></v-icon>
              </div>
              <div>{{item.name}}</div>
            </div>
            <div class="floderIcon">
              <v-icon type="right" v-show="chapter === item.name ? false : true"></v-icon>
              <v-icon type="down" v-show="chapter === item.name ? true : false"></v-icon>
            </div>
          </div>
          <div class="item01Child" v-show="chapter === item.name ? true : false">
            <div class="studyItem02"
                 @click="openDocument(item1)"
                 v-for="(item1, index1) in item.documents" :key="index1">
              <div class="item02Main">
                <div class="videoIcon">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-wenjianguanli"></use>
                  </svg>
                </div>
                <div class="videoTitle">{{item1.name}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <v-button @click="changetype(1)">现用版</v-button>
      <v-button @click="changetype(2)">待开发版</v-button>
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
      chapterId: '',
      type: 1,
      chapter: ''
    }
  },
  computed: {
    ...mapState([
      'courseFile',
      'currentCourse'
    ])
  },
  methods: {
    ...mapMutations([
      'setcurrentCourse'
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
    },
    changetype (id) {
      this.type = id
    },
    chooseChater (id) {
      if (this.chapter === id) {
        this.chapter = ''
      } else {
        this.chapter = id
      }
    },
    openVideo (id) {
      const routeUrl = this.$router.resolve({
        path: '/video'
      })
      window.open(routeUrl.href, '_blank')
    },
    openDocument (item1) {
      let base1 = 'http://view.officeapps.live.com/op/view.aspx'
      base1 = base1 + '?src=' + item1.url
      window.open(base1)
    },
    getCourseFile () {
      this.$axios.get('/api/course/' + this.currentCourse + '/documents')
        .then(res => {
          this.setcourseFile(res.data.data.chapters)
        }).catch(error => {
          console.log(error)
          this.$message.error('获取课程章节课件失败')
        })
    }
  },
  components: {
  }
}
</script>

<style scoped lang="less">
#sourse {
  width: 100%;
}
#old {
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
}

#new {
  margin-top: 20px;
  position: relative;
  /*height: 700px;*/
  width: 70%;
  min-width: 800px;
  max-width: 900px;
  left: 50%;
  transform: translate(-50%);
  margin-bottom: 50px;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  #preStudy {
    width: 100%;
    height: 60px;
    background-color: #f5f5f5;
    box-shadow: 3px 3px 5px 0px rgba(213,213,213,0.5);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 20px 0;
    border-radius: 20px;
    font-size: 14px;
    .pre02 {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .pre02Icon {
        i {
          font-size: 22px;
          color: #38afff;
        }
      }
      >div {
        margin: 0 10px;
      }
    }
    .pre03 {
      width: 100px;
      height: 35px;
      color: white;
      border-radius: 50px;
      box-shadow: 3px 3px 5px 0px rgba(213,213,213,0.9);
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: #61c7fc;
      cursor: pointer;
      font-size: 13px;
    }
    .pre03:hover {
      font-size: 14px;
    }
    .pre03:active {
      box-shadow: -3px -3px 5px 0px rgba(213,213,213,0.9);
    }
  }

  #mune01 {
    width: 100%;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    .studyItem01 {
      width: 100%;
      min-height: 60px;
      margin: 10px 0;
    }
  }
  .item01Main {
    cursor: pointer;
    width: 100%;
    min-height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #f5f5f5;
    box-shadow: 3px 3px 5px 0px rgba(213,213,213,0.5);
    .chapter01 {
      margin-left: 20px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      >div:first-child {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        i {
          font-size: 24px;
          color: #ffb41b;
          font-weight: 600;
        }
      }
      >div:last-child {
        margin: 0 20px;
        font-size: 13px;
      }
    }
    .floderIcon {
      margin-right: 20px;
      i {
        font-size: 16px;
      }
    }
  }
  .item01Child {
    width: 100%;
    min-height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .studyItem02 {
      cursor: pointer;
      background-color: #fbfbfb;
      margin: 3px 0;
      width: 99%;
      height: 60px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
    .studyItem02:hover {
      color: #3d84ff;
    }
  }
  .item02Main {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .videoIcon {
      width: 25px;
      height: 25px;
      margin-left: 20px;
      svg {
        height: 100%;
        width: 100%;
      }
    }
    .videoTitle {
      margin-left: 20px;
      font-size: 13px;
    }
  }

}

</style>
