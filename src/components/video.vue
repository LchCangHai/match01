<template>
  <div id="video">
    <div id="Nav">
      <my-nav :type="1"></my-nav>
    </div>
    <div id="video01">
      <div id="oneVideo">
        <div class="oneInfo">
          <div class="infoTilte01">
            <div class="title01Icon">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shipin"></use>
              </svg>
            </div>
            <div class="title01">第一讲 秃头学的前世今生</div>
          </div>
          <div class="infoCourse01">
            <div>来自课程： <span>熬夜秃头学</span></div>
          </div>
        </div>
        <div class="playBox">
<!--          <div id="vs"></div>-->
          <video-player  class="video-player vjs-custom-skin vs-player"
                         ref="videoPlayer"
                         :playsinline="true"
                         :options="playerOptions"
          ></video-player>
        </div>
      </div>
      <div id="twoVideo">
        <div class="twoHandle">
          <v-row class="demo-row">
            <v-col class="handleItem01" span="12" >
              <div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-zuoyexiawu"></use>
                </svg>
              </div>
              <div @click="openExam('1')">
                <div>作业考试</div>
              </div>
            </v-col>
            <v-col class="handleItem01" span="12">
              <div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-qunliao"></use>
                </svg>
              </div>
              <div @click="changSiderBarType(1)">
                <div>课程群聊</div>
              </div>
            </v-col>
          </v-row>
          <v-row class="demo-row">
            <v-col class="handleItem01" span="12">
              <div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-taolun"></use>
                </svg>
              </div>
              <div @click="openDiscuss('1')">
                <div>讨论问答</div>
              </div>
            </v-col>
            <v-col class="handleItem01" span="12">
              <div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-wancheng"></use>
                </svg>
              </div>
              <div @click="changSiderBarType(2)">
                <div>课程签到</div>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="handleBox chat" v-show="sideBarType === 1 ? true : false">
          <div class="handleTop">
            <div class="topIcon" v-show="false">
              <v-icon type="left"></v-icon>
            </div>
            <div>课程群聊</div>
          </div>
          <div class="handleContent">
            <my-chat></my-chat>
          </div>
        </div>
        <div class="handleBox sign-in" v-show="sideBarType === 2 ? true : false">
          <div class="handleTop">
            <div class="topIcon" @click="toChat()">
              <v-icon type="left"></v-icon>
            </div>
            <div>课程签到</div>
          </div>
          <div class="handleContent">
            <div class="circleIcon unStart"
                 v-show="signInInfo.exist === 0"
            @click="signInone()">
              <div>
                <div>非签到时间</div>
              </div>
            </div>
            <div class="circleIcon yet"
                 v-show="signInInfo.finish === 1 && signInInfo.exist !== 0"
            @click="signIntwo()">
              <div>
                <div>已签到</div>
              </div>
            </div>
            <div class="circleIcon notYet"
                 v-show="signInInfo.finish === 0 && signInInfo.exist !== 0"
                 @click="signInthree()">
              <div>
                <div>未签到</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Player from 'xgplayer'
import Chat from '../views/videoChat/chat.vue'
import myNav from '../views/navs/s_nav1.vue'
// import './.xgplayer/skin/index.js'
// import 'xgplayer-mp4'
// eslint-disable-next-line no-unused-vars

window.addEventListener('resize', function () { document.getElementById('vs').style.height = window.innerHeight + 'px' })
export default {
  name: 'video.vue',
  components: {
    'my-chat': Chat,
    'my-nav': myNav
  },
  data () {
    return {
      counter: 5,
      isCnt99: false,
      // data: [
      //   { content: '1st item' },
      //   { content: '2nd item' },
      //   { content: '3rd item' }
      // ],
      url: '',
      sideBarType: 1,
      signInStatus: 2,
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: 'video/mp4', // 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
          src: this.$route.query.url // url地址
        }],
        poster: '../../static/images/test.jpg', // 你的封面地址
        // width: document.documentElement.clientWidth, //播放器宽度
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      },
      signInInfo: ''
    }
  },
  computed: {
    ...mapState([
      'currentVideo',
      'currentCourse'
    ])
  },
  methods: {
    ...mapMutations([
      'setcurrentCourse'
    ]),
    toPCBtn () {
      this.$router.push('/pCenter')
    },
    exit () {
      window.localStorage.setItem('access_token', null)
      this.$router.push('/unindex')
    },
    itemClick (data) {
      console.log(data)
    },
    _playVideo (url) {
      const player = new Player({
        id: 'vs',
        autoplay: false,
        volume: 0.3,
        url: url,
        poster: '//s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg',
        playsinline: true
        // height: 700px
        // width: window.innerWidth
      })
      // player.start('http://cdn.mr-lin.site/1%E7%A1%AE%E5%AE%9A%E6%89%BF%E5%8A%9E.mp4')
      player.play()
    },
    openExam (id) {
      console.log(123456789)
      const routeUrl = this.$router.resolve({
        path: '/courses/exam'
      })
      window.open(routeUrl.href, '_blank')
    },
    openDiscuss (id) {
      console.log(123456789)
      const routeUrl = this.$router.resolve({
        path: '/courses/discuss'
      })
      window.open(routeUrl.href, '_blank')
    },
    changSiderBarType (id) {
      console.log(123456789)
      this.sideBarType = id
    },
    toChat () {
      this.sideBarType = 1
    },
    signInone () {
      this.$message.warning('现在不在签到时间内哦')
    },
    signIntwo () {
      this.$message.warning('您已签到成功')
    },
    signInthree () {
      this.$axios.put('/api/course/' + this.$route.params.id + '/commit')
        .then(res => {
          console.log('签到成功')
          this.checkSignIn()
        }).catch(error => {
          console.log(error)
          console.log('签到失败')
        })
    },
    checkSignIn () {
      this.$axios.get('/api/course/' + this.$route.params.id + '/commit')
        .then(res => {
          console.log('查看签到信息成功')
          this.signInInfo = res.data.data
          console.log(this.signInInfo)
        }).catch(error => {
          console.log(error)
          console.log('查看签到信息失败')
        })
    }
  },
  mounted () {
    this._playVideo()
    this.checkSignIn()
    this.setcurrentCourse(this.$route.params.id)
    this.url = this.$route.query.url
    console.log(this.$route.query.url)
  }
}
</script>

<style scoped lang="less">
#video {
  width: 100%;
  min-width: 1000px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
#Nav {
  position: relative;
  top: 0;
  left:0;
  width:100%;
  min-width: 1000px;
  height: 60px;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid lightgrey;
  box-shadow: 1px 0px 10px 1px rgba(213,213,213,0.6);
  background-color: white;
  z-index: 20;
}

#video01 {
  width: 80%;
  height: 700px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-top: 10px;
  /*background-color: #9a6e3a;*/
}

#oneVideo {
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
  .oneInfo {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    .infoTilte01 {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      .title01Icon {
        width: 30px;
        height: 30px;
        svg {
          height: 100%;
          width: 100%;
        }
      }
      .title01 {
        font-size: 15px;
        font-weight: 600;
        margin-left: 15px;
      }
    }
    .infoCourse01 {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      >div {
        >span {
          font-weight: 600;
        }
      }
    }
  }
  .playBox {
    width: 100%;
    height: 560px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #ececec;
    .vs-player {
      width: 100%;
      /*height: 100%;*/
    }
    /*#vs {*/
    /*  width: 560px !important;*/
    /*  height: 320px !important;*/
    /*}*/
  }

#twoVideo {
  width: 29%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 10px;
}
  .twoHandle {
    /*cursor: pointer;*/
    width: 100%;
    height: 70px;
    /*display: flex;*/
    /*flex-direction: row;*/
    /*justify-content: flex-start;*/
    /*align-items: flex-start;*/
    border-bottom: 1px solid #ececec;
    border-left: 2px solid #ececec;
    .handleItem01 {
      width: 50%;
      height: 35px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      >div:first-child {
        width: 25px;
        height: 25px;
        margin-right: 10px;
        svg {
          width: 100%;
          height: 100%;
        }
      }
      >div:last-child {
        cursor: pointer;
        font-size: 13px;
        font-weight: 600;
      }
      >div:last-child:hover {
        font-size: 14px;
        font-weight: 600;
      }
    }
  }
  .twoHandle:hover {
    font-size: 14px;
  }
  .handleBox {
    width: 100%;
    height: 560px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: 1px 1px 5px 1px rgba(213,213,213,0.5),
    -1px 0px 5px 1px rgba(213,213,213,0.5);;
    .handleTop {
      width: 100%;
      height: 40px;
      background-color: #f4f4f4;
      box-shadow: 0px 1px 5px 1px rgba(213,213,213,0.8);
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border:#ececec solid 1px;
      .topIcon {
        cursor: pointer;
        position: relative;
        left: -32%;
        i {
          font-size: 16px;
        }
      }
      >div:last-child {
        font-size: 14px;
        font-weight: 600;
      }
    }
    .handleContent {
      width: 100%;
      height: 520px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
  .circleIcon {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 1px solid #909399;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    >div {
      width: 135px;
      height: 135px;
      border-radius: 50%;
      background-color: #909399;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      >div {
        color: white;
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
  .yet {
    cursor: pointer;
    border: 1px solid #67c23a;
    >div {
      background-color: #67c23a;
    }
  }
  .notYet {
    cursor: pointer;
    border: 1px solid #e6a23c;
    >div {
      background-color: #e6a23c;
    }
  }
img {
  object-fit: cover;
}
</style>
