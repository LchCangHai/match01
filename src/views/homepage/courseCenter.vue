<template>
  <div id="hcourse1">
    <div class="oneTitle">
      <span class="iconfont">&#xe61f;</span>
      <span>课程中心</span>
    </div>
    <div>
      <v-carousel vertical
      autoplay
      dots="outside">
        <v-carousel-item>
          <div class="demo-carousel oneItem">
            <div class="oneContent">
              <div class="onepanel1">
                <div class="oneImg">
                  <img class="Img1" width="100%" src="../../assets/coursecenter1.png">
                </div>
                <div class="oneContext">
                  <div class="context1">今天你代码打完了吗？？</div>
                  <div class="context2">Are we done with the code</div>
                </div>
              </div>
              <div class="coverpanel1"></div>
              <div class="onepanel2">
                <div class="ttag1">
                  <span class="iconfont">&#xe708;</span>
                  <span>编辑推荐</span>
                </div>
                <div class="ttitle">
                  <div class="shuxian"></div>
                  <div>林炜同学呕心沥血谋来的福利</div>
                </div>
                <div class="tcontext">
                  让熬夜成为现实。秃头成为奢
                  侈，想像林炜同学一样996似
                  呼吸一般轻松吗，开来看看吧
                  哦吼吼吼吼
                </div>
                <div class="ttime">
                  <div>开课时间</div>
                  <div>2020.6.1-2020.6.20</div>
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <div class="demo-carousel oneItem">
            <div class="oneContent">
              <div class="onepanel1">
                <div class="oneImg">
                  <img class="Img1" width="100%" src="../../assets/headImg.png">
                </div>
                <div class="oneContext">
                  <div class="context1">今天你代码打完了吗？？</div>
                  <div class="context2">Are we done with the code</div>
                </div>
              </div>
              <div class="coverpanel1"></div>
              <div class="onepanel2">
                <div class="ttag1">
                  <span class="iconfont">&#xe708;</span>
                  <span>编辑推荐</span>
                </div>
                <div class="ttitle">
                  <div class="shuxian"></div>
                  <div>林炜同学呕心沥血谋来的福利</div>
                </div>
                <div class="tcontext">
                  让熬夜成为现实。秃头成为奢
                  侈，想像林炜同学一样996似
                  呼吸一般轻松吗，开来看看吧
                  哦吼吼吼吼
                </div>
                <div class="ttime">
                  <div>开课时间</div>
                  <div>2020.6.1-2020.6.20</div>
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <div class="demo-carousel oneItem">
            <div class="oneContent">
              <div class="onepanel1">
                <div class="oneImg">
                  <img class="Img1" width="100%" src="../../assets/headImg2.png">
                </div>
                <div class="oneContext">
                  <div class="context1">今天你代码打完了吗？？</div>
                  <div class="context2">Are we done with the code</div>
                </div>
              </div>
              <div class="coverpanel1"></div>
              <div class="onepanel2">
                <div class="ttag1">
                  <span class="iconfont">&#xe708;</span>
                  <span>编辑推荐</span>
                </div>
                <div class="ttitle">
                  <div class="shuxian"></div>
                  <div>林炜同学呕心沥血谋来的福利</div>
                </div>
                <div class="tcontext">
                  让熬夜成为现实。秃头成为奢
                  侈，想像林炜同学一样996似
                  呼吸一般轻松吗，开来看看吧
                  哦吼吼吼吼
                </div>
                <div class="ttime">
                  <div>开课时间</div>
                  <div>2020.6.1-2020.6.20</div>
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <div class="demo-carousel oneItem">
            <div class="oneContent">
              <div class="onepanel1">
                <div class="oneImg">
                  <img class="Img1" width="100%" src="../../assets/bc01.jpg">
                </div>
                <div class="oneContext">
                  <div class="context1">今天你代码打完了吗？？</div>
                  <div class="context2">Are we done with the code</div>
                </div>
              </div>
              <div class="coverpanel1"></div>
              <div class="onepanel2">
                <div class="ttag1">
                  <span class="iconfont">&#xe708;</span>
                  <span>编辑推荐</span>
                </div>
                <div class="ttitle">
                  <div class="shuxian"></div>
                  <div>林炜同学呕心沥血谋来的福利</div>
                </div>
                <div class="tcontext">
                  让熬夜成为现实。秃头成为奢
                  侈，想像林炜同学一样996似
                  呼吸一般轻松吗，开来看看吧
                  哦吼吼吼吼
                </div>
                <div class="ttime">
                  <div>开课时间</div>
                  <div>2020.6.1-2020.6.20</div>
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'courseCenter.vue',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
    ])
  },
  methods: {
    ...mapMutations([
    ])
  },
  components: {
  }
}
</script>

<style scoped lang="less">
  #hcourse1 {
    position: relative;
    height: 100%;
    width: 70%;
    min-width: 700px;
    max-width: 800px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .oneTitle {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 5px;
    >span{
      font-size: 20px;
      margin: 0 3px;
    }
    >span:first-child {
      color: #3575ca;
      font-size: 30px;
    }
    >span:last-child {
      font-size: 16px;
      font-weight: 600;
    }
  }

  .oneItem {
    width: 100%;
    height: 335px;
    /*background-color: skyblue;*/
    border-radius: 10px;
  }

  .oneContent {
    position: relative;
    height: 95%;
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fbfbfb;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    .onepanel1 {
      position: absolute;
      width: 55%;
      min-width: 300px;
      max-width: 400px;
      height: 330px;
      top: -10px;
      left: 0;
      border-radius: 4px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      background-color: white;
      border: 1px solid #fbfbfb;
      margin-left: 5px;
      box-shadow: 1px 0px 10px 1px rgba(213,213,213,0.6), 0px 1px 10px 1px rgba(213,213,213,0.7);
      padding: 0;
      .oneImg {
        width: 100%;
        height: 70%;
        /*background-color: #fbfbfb;*/
        border-radius: 20px;
        .Img1 {
          width: 100%;
          height: 100%;
          border-radius: 20px;
        }
      }
      .oneContext {
        width: 100%;
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        >div {
          color: black;
          font-size: 19px;
          font-weight: 600;
          position: relative;
          left: 10px;
        }
      }
    }
    .coverpanel1 {
      position: relative;
      left: 10px;
      width: 55%;
      min-width: 300px;
      max-width: 400px;
      height: 100%;
      margin: 0;
    }
    .onepanel2 {
      position: relative;
      right: 0;
      width: 45%;
      max-width: 350px;
      min-width: 290px;
      height: 100%;
      left: 20px;
      margin: 0;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      margin-left:10px;
      color:black;
      .ttag1{
        width: 250px;
        height: 60px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        .iconfont{
          color: #fec21a;
          font-size: 35px;
        }
        >span:last-child {
          position: relative;
          left: 10px;
          font-size: 15px;
          font-weight: 600;
        }
      }
      .ttitle {
        width: 250px;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        .shuxian {
          background-color: #ff0000;
          width: 4px;
          height: 30px;
          border-radius: 50px;
        }
        >div:last-child {
          position: relative;
          font-size: 15px;
          font-weight: 600;
          left: 10px;
        }
      }
      .tcontext {
        width: 250px;
        height: 130px;
        padding: 10px 15px;
        word-break: break-all;
        text-indent: 2em;
        word-spacing: 2px;
        font-size: 14px;
        color: #a29f9f;
      }
      .ttime {
        width: 250px;
        height: 50px;
        padding: 0px 15px;
        color: #a29f9f;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        >div {
          font-size: 15px;
        }
      }
    }
  }

  img {
    object-fit: cover;
  }
</style>
