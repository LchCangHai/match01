<template>
  <div id="study">
<!--    <div id="preStudy">-->
<!--      <div class="pre01">-->
<!--        <div>上次学习到</div>-->
<!--      </div>-->
<!--      <div class="pre02">-->
<!--        <div class="pre02Icon">-->
<!--          <v-icon type="play-circle"></v-icon>-->
<!--        </div>-->
<!--        <div class="pre02Title">-->
<!--          <div>第一章 秃头学的前世今生</div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="pre03" @click="openVideo('1')">-->
<!--        <div>继续学习</div>-->
<!--      </div>-->
<!--    </div>-->
    <div id="mune01">
      <div class="studyItem01" v-for="(item, index) in courseVideo" :key="index">
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
               v-for="(item1, index1) in item.movies"
               :key="index1"
               @click="openVideo(item1)">
            <div class="item02Main">
              <div class="videoIcon">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-meiti"></use>
                </svg>
              </div>
              <div class="videoTitle">{{item1.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'study.vue',
  data () {
    return {
      chapter: ''
    }
  },
  computed: {
    ...mapState([
      'courseVideo',
      'currentVideo',
      'currentCourse'
    ])
  },
  methods: {
    ...mapMutations([
      'setcurrentVideo'
    ]),
    chooseChater (id) {
      if (this.chapter === id) {
        this.chapter = ''
      } else {
        this.chapter = id
      }
    },
    openVideo (item) {
      this.setcurrentVideo(item)
      const routeUrl = this.$router.resolve({
        path: `/video/${this.currentCourse}`,
        query: {
          url: item.url
        }
      })
      window.open(routeUrl.href, '_blank')
    }
  },
  components: {
  }
}
</script>

<style scoped lang="less">
#study {
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
}

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

</style>
