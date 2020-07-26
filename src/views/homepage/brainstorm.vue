<template>
  <div id="brainstorm">
    <div id="brainShow">
      <div class="thleft">
        <div class="thLeftText">
          <span>Let's</span>
          <span>brainstorm together</span>
        </div>
        <div class="thLeftImg">
          <img class="thImg1" src="../../assets/brain.png">
        </div>
      </div>
      <div class="thImgBox">
        <img class="thImg2" src="../../assets/brain1.png">
      </div>
    </div>
    <div id="goodDiscuss">
      <div class="discussBack"
           @mouseenter="fbshow()"
           @mouseleave="fbhide()"
           @click="bsback()">
        <v-icon type="left-circle-o" v-show="isShowfb"></v-icon>
      </div>
      <div class="discussMain">
        <vue-scroll ref="vs">
          <div class="discussMain1">
            <div class="thItem" v-for="(item, index) in alldiscuss" :key="index">
              <div class="nav1">
                <div class="thfont">
                  <div class="avatarBox">
                    <img class="avatarImg1" :src="item.user.avatar">
                  </div>
                  <div class="thName">{{item.user.nickname}}</div>
                  <div class="thIden">学生</div>
                </div>
                <div class="thback">
<!--                  <span>来自</span>-->
                  <span class="fromCourse">{{item.user.school}}</span>
                </div>
              </div>
              <div class="thdcontext">
                <div>
                  {{item.content}}
                </div>
              </div>
<!--              <div class="thfooter">-->
<!--                <span>9999+</span>-->
<!--                <span>人参与讨论</span>-->
<!--              </div>-->
            </div>
            <div class="thItem">
              <div class="nav1">
                <div class="thfont">
                  <div class="avatarBox">
                    <img class="avatarImg1" src="../../assets/avatar01.jpg">
                  </div>
                  <div class="thName">林炜</div>
                  <div class="thIden">学生</div>
                </div>
                <div class="thback">
                  <span>来自</span>
                  <span class="fromCourse">熬夜秃头学</span>
                </div>
              </div>
              <div class="thdcontext">
                <div>
                  我是怎样秃头的？我又是怎样变强的？我，又是如何让996如呼吸一般自然的？
                </div>
              </div>
              <div class="thfooter">
                <span>9999+</span>
                <span>人参与讨论</span>
              </div>
            </div>
            <div class="thItem">
              <div class="nav1">
                <div class="thfont">
                  <div class="avatarBox">
                    <img class="avatarImg1" src="../../assets/avatar01.jpg">
                  </div>
                  <div class="thName">林炜</div>
                  <div class="thIden">学生</div>
                </div>
                <div class="thback">
                  <span>来自</span>
                  <span class="fromCourse">熬夜秃头学</span>
                </div>
              </div>
              <div class="thdcontext">
                <div>
                  我是怎样秃头的？我又是怎样变强的？我，又是如何让996如呼吸一般自然的？
                </div>
              </div>
              <div class="thfooter">
                <span>9999+</span>
                <span>人参与讨论</span>
              </div>
            </div>
            <div class="thItem">
              <div class="nav1">
                <div class="thfont">
                  <div class="avatarBox">
                    <img class="avatarImg1" src="../../assets/avatar01.jpg">
                  </div>
                  <div class="thName">林炜</div>
                  <div class="thIden">学生</div>
                </div>
                <div class="thback">
                  <span>来自</span>
                  <span class="fromCourse">熬夜秃头学</span>
                </div>
              </div>
              <div class="thdcontext">
                <div>
                  我是怎样秃头的？我又是怎样变强的？我，又是如何让996如呼吸一般自然的？
                </div>
              </div>
              <div class="thfooter">
                <span>9999+</span>
                <span>人参与讨论</span>
              </div>
            </div>
          </div>
        </vue-scroll>
      </div>
      <div class="discussFont"
           @mouseenter="fbshow()"
           @mouseleave="fbhide()"
           @click="bsfont()">
        <v-icon type="right-circle-o" v-show="isShowfb"></v-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'brainstorm.vue',
  data () {
    return {
      isShowfb: false,
      alldiscuss: ''
    }
  },
  computed: {
    ...mapState([
    ])
  },
  methods: {
    ...mapMutations([
    ]),
    fbshow () {
      this.isShowfb = true
      // console.log(this.isShowfb)
    },
    fbhide () {
      this.isShowfb = false
      // console.log(this.isShowfb)
    },
    bsfont () {
      // console.log('font')
      this.$refs.vs.scrollBy(
        {
          dx: 470
        },
        200
      )
    },
    bsback () {
      // console.log('back')
      this.$refs.vs.scrollBy(
        {
          dx: -470
        },
        200
      )
    },
    getAllDiscuss () {
      this.$axios.get('/api/course/discussions/recommend', {
        params: {
          count_items: 6
        }
      })
        .then(res => {
          console.log('获取讨论推荐信息成功')
          this.alldiscuss = res.data.data.discussions
        }).catch(error => {
          console.log('获取讨论推荐信息出错')
          console.log(error)
        })
    }
  },
  mounted () {
    this.getAllDiscuss()
  },
  components: {
  }
}
</script>

<style scoped lang="less">
#brainstorm {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

#brainShow {
  width: 70%;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .thleft {
    position: relative;
    width: 50%;
    height: 100%;
    .thLeftText {
      color: black;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      font-size: 35px;
      font-family: "Sitka Small";
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      >span:first-child {
        position: relative;
        left: -15%;
      }
    }
    .thLeftImg {
      width: 80px;
      height: 80px;
      position: absolute;
      left: 50%;
      top: 25%;
      .thImg1 {
        height: 100%;
        width: 100%;
      }
    }
  }
  .thImgBox {
    width: 50%;
    height: 95%;
    .thImg2 {
      width: 100%;
      height: 100%;
    }
  }
}

#goodDiscuss {
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .discussFont,
    .discussBack {
      width: 10%;
      height: 100%;
      >i {
        font-size: 30px;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      >i:hover {
        color: #6bbbe5;
      }
    }
  .discussFont:hover,
  .discussBack:hover {
    cursor: pointer;
  }
    .discussMain {
      width: 80%;
      height: 90%;
    }
    .discussMain1 {
      height: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: center;
      /*background-color: #83bafc;*/
    }
  }

.thItem {
  width: 450px;
  height: 250px;
  background-color: white;
  margin: 0 20px;
  border-radius: 20px;
  color: black;
  .nav1 {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .thfont {
      width: 30%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      >div{
        margin: 3px;
      }
      .avatarBox {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        .avatarImg1 {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .thName {
        font-size: 13px;
      }
      .thIden {
        background-color: #ffd740;
        color:white;
        font-size: 5px;
        padding: 0 2px;
      }
    }
    .thback {
      width: 50%;
      position: relative;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      >span {
        font-size: 10px;
      }
      >span.fromCourse {
        font-size: 12px;
        position: relative;
        left: 8px;
        font-weight: 600;
      }
    }
  }

  .thdcontext {
    width: 100%;
    height: 140px;
    >div {
      width: 80%;
      word-break: break-all;
      position: relative;
      left: 50%;
      top: 50%; transform: translate(-50%, -50%);
      font-size: 14px;
      font-weight: 600;
      text-indent: 2em;
      overflow: hidden;
    }
  }

  .thfooter {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    >span:first-child {
      color: #60c1ff;
    }
  }
}

img {
    object-fit: cover;
}
</style>
