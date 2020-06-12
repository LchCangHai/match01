<template>
  <div id="discuss">
    <div id="fo1nav">
      <div class="fo1Navicon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xingzhuang"></use>
        </svg>
      </div>
      <div class="fo1Navtitle"><div>问答讨论</div></div>
    </div>
    <div id="four2">
      <div class="four2Img">
        <v-carousel arrow="never" autoplay >
          <v-carousel-item>
            <div class="demo-carousel four2ImgItem">
              <img class="tItemImg" src="../../assets/brain1.png">
              <div class="tItemTitle">
                <div>关于林炜的秃头奥秘</div>
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="demo-carousel four2ImgItem">
              <img class="2ItemImg" src="../../assets/avatar02.png">
              <div class="tItemTitle">
                <div>关于林炜的秃头奥秘</div>
              </div></div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="demo-carousel four2ImgItem">
              <img class="2ItemImg" src="../../assets/avatar01.jpg">
              <div class="tItemTitle">
                <div>关于林炜的秃头奥秘</div>
              </div></div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="demo-carousel four2ImgItem">
              <img class="2ItemImg" src="../../assets/bc01.jpg">
              <div class="tItemTitle">
                <div>关于林炜的秃头奥秘</div>
              </div></div>
          </v-carousel-item>
        </v-carousel>
        <div class="four2Cover"></div>
      </div>
      <div class="four2Content">
        <div class="four22Nav">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fire"></use>
            </svg>
          </div>
          <div>hot discussion</div>
        </div>
        <div class="four22Info">
          <vue-scroll>
            <div class="four22Info1">
              <div class="four2Item">
                <div class="ftItemNav">
                  <div class="ftInfo">
                    <div>
                      <img src="../../assets/avatar01.jpg">
                    </div>
                    <div>你芃哥</div>
                  </div>
                  <div class="ftIcon">
                    <div>
                      <v-icon type="question-circle"></v-icon>
                    </div>
                  </div>
                </div>
                <div class="ftItemContent">
                  <div>
                    林炜自十多岁开始秃头，XXXXXXXXXXXXXXXXXXXXXXXXXX
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                  </div>
                </div>
                <div class="ftItemTime">
                  <div>2020.6.0 23:50</div>
                </div>
              </div>
              <div class="four2Item">
                <div class="ftItemNav">
                  <div class="ftInfo">
                    <div>
                      <img src="../../assets/avatar01.jpg">
                    </div>
                    <div>你芃哥</div>
                  </div>
                  <div class="ftIcon">
                    <div>
                      <v-icon type="question-circle"></v-icon>
                    </div>
                  </div>
                </div>
                <div class="ftItemContent">
                  <div>
                    林炜自十多岁开始秃头，XXXXXXXXXXXXXXXXXXXXXXXXXX
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                  </div>
                </div>
                <div class="ftItemTime">
                  <div>2020.6.0 23:50</div>
                </div>
              </div>
              <div class="four2Item">
                <div class="ftItemNav">
                  <div class="ftInfo">
                    <div>
                      <img src="../../assets/avatar01.jpg">
                    </div>
                    <div>你芃哥</div>
                  </div>
                  <div class="ftIcon">
                    <div>
                      <v-icon type="question-circle"></v-icon>
                    </div>
                  </div>
                </div>
                <div class="ftItemContent">
                  <div>
                    林炜自十多岁开始秃头，XXXXXXXXXXXXXXXXXXXXXXXXXX
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                  </div>
                </div>
                <div class="ftItemTime">
                  <div>2020.6.0 23:50</div>
                </div>
              </div>
              <div class="four2Item">
                <div class="ftItemNav">
                  <div class="ftInfo">
                    <div>
                      <img src="../../assets/avatar01.jpg">
                    </div>
                    <div>你芃哥</div>
                  </div>
                  <div class="ftIcon">
                    <div>
                      <v-icon type="question-circle"></v-icon>
                    </div>
                  </div>
                </div>
                <div class="ftItemContent">
                  <div>
                    林炜自十多岁开始秃头，XXXXXXXXXXXXXXXXXXXXXXXXXX
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                  </div>
                </div>
                <div class="ftItemTime">
                  <div>2020.6.0 23:50</div>
                </div>
              </div>
            </div>
          </vue-scroll>
        </div>
      </div>
    </div>
    <div id="four3">
      <div id="fourHandle">
        <div>
          <v-button class="typeBtn" type="ghost"
                    :class="{ activeBtn: type === 1 ? true : false}"
                    @click="typeNew()">最新</v-button>
          <v-button  class="typeBtn" type="ghost"
                     :class="{ activeBtn: type === 2 ? true : false}"
                     @click="typeMypart()">我参与的</v-button>
        </div>
      </div>
      <div id="four3Content">
        <div class="four3Item" @click="toOneDiscuss('12')">
          <div class="ftItemNav">
            <div class="ftInfo">
              <div>
                <img src="../../assets/avatar01.jpg">
              </div>
              <div>你芃哥</div>
            </div>
            <div class="ftIcon">
              <div>
                <v-icon type="question-circle"></v-icon>
              </div>
            </div>
          </div>
          <div class="four3Context">
            <div>为什么我作业还没写完，我都已经秃啦！是因为我还不够秃吗？</div>
            <div>
              <div class="four3ItemBtn"><div>围观</div></div>
            </div>
          </div>
          <div class="four3Time">
            <div>2020-6-1 23:50</div>
          </div>
        </div>
        <div class="four3Item">
          <div class="ftItemNav">
            <div class="ftInfo">
              <div>
                <img src="../../assets/avatar01.jpg">
              </div>
              <div>你芃哥</div>
            </div>
            <div class="ftIcon">
              <div>
                <v-icon type="question-circle"></v-icon>
              </div>
            </div>
          </div>
          <div class="four3Context">
            <div>为什么我作业还没写完，我都已经秃啦！是因为我还不够秃吗？</div>
            <div>
              <div class="four3ItemBtn"><div>围观</div></div>
            </div>
          </div>
          <div class="four3Time">
            <div>2020-6-1 23:50</div>
          </div>
        </div>
        <div class="four3Item">
          <div class="ftItemNav">
            <div class="ftInfo">
              <div>
                <img src="../../assets/avatar01.jpg">
              </div>
              <div>你芃哥</div>
            </div>
            <div class="ftIcon">
              <div>
                <v-icon type="question-circle"></v-icon>
              </div>
            </div>
          </div>
          <div class="four3Context">
            <div>为什么我作业还没写完，我都已经秃啦！是因为我还不够秃吗？</div>
            <div>
              <div class="four3ItemBtn"><div>围观</div></div>
            </div>
          </div>
          <div class="four3Time">
            <div>2020-6-1 23:50</div>
          </div>
        </div>
        <div class="four3Item">
          <div class="ftItemNav">
            <div class="ftInfo">
              <div>
                <img src="../../assets/avatar01.jpg">
              </div>
              <div>你芃哥</div>
            </div>
            <div class="ftIcon">
              <div>
                <v-icon type="question-circle"></v-icon>
              </div>
            </div>
          </div>
          <div class="four3Context">
            <div>为什么我作业还没写完，我都已经秃啦！是因为我还不够秃吗？</div>
            <div>
              <div class="four3ItemBtn"><div>围观</div></div>
            </div>
          </div>
          <div class="four3Time">
            <div>2020-6-1 23:50</div>
          </div>
        </div>
        <div class="four3Item">
          <div class="ftItemNav">
            <div class="ftInfo">
              <div>
                <img src="../../assets/avatar01.jpg">
              </div>
              <div>你芃哥</div>
            </div>
            <div class="ftIcon">
              <div>
                <v-icon type="question-circle"></v-icon>
              </div>
            </div>
          </div>
          <div class="four3Context">
            <div>为什么我作业还没写完，我都已经秃啦！是因为我还不够秃吗？</div>
            <div>
              <div class="four3ItemBtn"><div>围观</div></div>
            </div>
          </div>
          <div class="four3Time">
            <div>2020-6-1 23:50</div>
          </div>
        </div>
        <div class="four3Item">
          <div class="ftItemNav">
            <div class="ftInfo">
              <div>
                <img src="../../assets/avatar01.jpg">
              </div>
              <div>你芃哥</div>
            </div>
            <div class="ftIcon">
              <div>
                <v-icon type="question-circle"></v-icon>
              </div>
            </div>
          </div>
          <div class="four3Context">
            <div>为什么我作业还没写完，我都已经秃啦！是因为我还不够秃吗？</div>
            <div>
              <div class="four3ItemBtn"><div>围观</div></div>
            </div>
          </div>
          <div class="four3Time">
            <div>2020-6-1 23:50</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'discuss.vue',
  data () {
    return {
      type: 1
    }
  },
  computed: {
    ...mapState([
    ])
  },
  methods: {
    ...mapMutations([
    ]),
    typeNew () {
      this.type = 1
    },
    typeMypart () {
      this.type = 2
    },
    toOneDiscuss (id) {
      this.$router.push('/courses/oneDiscuss')
    }
  },
  components: {
  }
}
</script>

<style scoped lang="less">
  #discuss {
    /*margin: 20px 0;*/
    position: relative;
    /*height: 700px;*/
    width: 100%;
    /*transform: translate(-50%);*/
    /*margin-bottom: 50px;*/
    color: black;
    background-color: #f9f9f9;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #fo1nav {
    width: 70%;
    min-width: 800px;
    max-width: 900px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    padding-top: 30px;
    .fo1Navicon {
      width: 30px;
      height: 30px;
      svg {
        height: 100%;
        width: 100%;
      }
    }
    .fo1Navtitle {
      margin-left: 10px;
      font-size: 14px;
      font-weight: 600;
    }
  }

#four2 {
    width: 70%;
    min-width: 800px;
    max-width: 900px;
    height: 350px;
    /*background-color: #83bafc;*/
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    >div:first-child {
      width: 30%;
      height: 300px;
      background-color: white;
    }
  }
  .four2Img {
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    box-shadow: 3px 3px 10px 1px rgba(213,213,213,1);
    .four2Cover {
      position: absolute;
      z-index: -20;
      width: 30%;
      height: 300px;
      background-color: white;
      border: 1px solid #f9f9f9;
      border-radius: 4px;
      box-shadow: 3px 3px 10px 1px rgba(213,213,213,1);
      left: 30px;
      top: 30px;
    }
    .four2ImgItem {
      width: 100%;
      height: 300px;
      border-radius: 4px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
    }
    .tItemTitle {
      position: relative;
      width: 100%;
      top: -30%;
      transform: translateY(-50%);
      height: 50px;
      background-color: rgba(26,26,26,0.3);
      z-index: 20;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      >div{
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
  .four2Content {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    /*background-color: #55a532;*/
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 50px;
    .four22Nav {
      width: 100%;
      height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      >div:first-child {
        width: 30px;
        height: 30px;
        svg {
          height: 100%;
          width: 100%;
        }
      }
      >div:last-child {
        font-size: 14px;
        font-weight: 600;
        position: relative;
        left: 15px;
      }
    }
    .four22Info {
      width: 100%;
      height: 270px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      margin-left: 5px;
      .four22Info1 {
        width :100%;
      }
    }
}
  .four2Item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 120px;
    width: 95%;
    background-color: white;
    margin: 10px 0;
    border-radius: 20px;
    box-shadow: 1px 1px 5px 0px rgba(213,213,213,0.6);
    .ftItemNav {
      width: 100%;
      height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .ftInfo {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        left: 15px;
        >div {
          margin: 0 5px;
        }
        >div:first-child {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          img {
            height: 100%;
            width: 100%;
            border-radius: 50%;
          }
        }
        >div:last-child {
        }
      }
      .ftIcon {
        margin-right: 15px;
      }
    }
    .ftItemContent {
      width: 100%;
      height: 50px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      overflow: hidden;
      >div{
        word-break: break-all;
        text-indent: 2em;
        font-size: 12px;
        width:80%;
      }
    }
    .ftItemTime {
      width: 90%;
      height: 30px;
      color: #b9b9b9;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    }
  }

#four3 {
  width: 70%;
  min-width: 800px;
  max-width: 900px;
  /*height: 350px;*/
  /*background-color: #83bafc;*/
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  #fourHandle {
    width: 70%;
    height: 40px;
    background-color: white;
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
      border: 1px solid #61c7fc;
      border-radius: 50px;
      font-weight: 600;
    }
  }
  #four3Content {
    width:100%;
  }
}
  .four3Item {
    width: 100%;
    /*height: 100px;*/
    margin: 15px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 1px 1px 5px 0px rgba(213,213,213,0.6);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    .ftItemNav {
      width: 100%;
      height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .ftInfo {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        left: 20px;
        >div {
          margin: 0 5px;
        }
        >div:first-child {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          img {
            height: 100%;
            width: 100%;
            border-radius: 50%;
          }
        }
        >div:last-child {
        }
      }
      .ftIcon {
        margin-right: 15px;
      }
    }
    .four3Context {
      margin: 2px 0;
      width: 90%;
      /*height: 40px;*/
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      >div:first-child {
        width: 80%;
        word-break: break-all;
        color: #bcbaba;
        font-size: 13px;
      }
      >div:last-child {
        width: 20%;
        .four3ItemBtn {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 70px;
          height: 30px;
          font-size: 13px;
          cursor: pointer;
          border: 1px solid #f9f9f9;
          border-radius: 50px;
          box-shadow: 1px 1px 5px 0px rgba(213,213,213,0.8);
          background-color: white;
        }
        .four3ItemBtn:active {
          box-shadow: -1px -1px 5px 0px rgba(213,213,213,0.8);
        }
        .four3ItemBtn:hover {
          font-size: 14px;
        }
      }
    }
    .four3Time {
      margin: 2px 0;
      width: 90%;
      height: 20px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      color: #bcbaba;
      font-size: 13px;
    }
  }
  .four3Item:active {
    box-shadow: -1px -1px 5px 0px rgba(213,213,213,0.6);
  }

  img {
    object-fit: cover;
  }
</style>
