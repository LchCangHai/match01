<template>
  <div id="fofilemanage">
    <div id="fonav">
      <div class="foicon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wenjianguanli"></use>
        </svg>
      </div>
      <div class="fotitle1">文件管理</div>
    </div>
    <div id="foFile">
      <div class="toleft">
        <vue-scroll>
          <div class="focontainer1">
            <div class="item1"
                 :class="{ foActive: courseid === 'try1' ? true : false}"
                 @click="setcourseId('try1')"><div>高等数学（上）</div></div>
            <div class="item1"
                 :class="{ foActive: courseid === 'try2' ? true : false}"
                 @click="setcourseId('try2')"><div>高等数学（下）</div></div>
            <div class="item1"></div>
            <div class="item1"></div>
            <div class="item1"></div>
            <div class="item1"></div>
            <div class="item1"></div>
            <div class="item1"></div>
            <div class="item1"></div>
          </div>
        </vue-scroll>
      </div>
      <div class="toright">
        <vue-scroll>
          <div class="focontainer2">
            <div class="item2" v-show="courseid === 'try1' ? true : false">
              <div class="item2-1">
                <div class="item2-1Main"
                     :class="{ item2Active: item2id === 'try2-1' ? true : false}"
                     @click="setItem2id('try2-1')">
                  <div>
                    <div class="fileicon">
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-shipin"></use>
                      </svg>
                    </div>
                    <div class="foFilename">9.4幂级数PPT</div>
                  </div>
                  <div>
                    <v-icon class="item2Icon" type="right"
                    :class="{ choosed: item2id === 'try2-1' ? true : false}"></v-icon>
                  </div>
                </div>
                <div class="item2-1Child"  v-show="item2id === 'try2-1' ? true : false">
                  <div class="item2-2">
                    <div>第一节PPT</div>
                    <div>
                      <v-icon type="download"></v-icon>
                    </div>
                  </div>
                  <div class="item2-2">
                    <div>第二节PPT</div>
                    <div>
                      <v-icon type="download"></v-icon>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item2-1">
                <div class="item2-1Main"
                     :class="{ item2Active: item2id === 'try2-2' ? true : false}"
                     @click="setItem2id('try2-2')">
                  <div>
                    <div class="fileicon">
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-shipin"></use>
                      </svg>
                    </div>
                    <div class="foFilename">9.4幂级数PPT</div>
                  </div>
                  <div>
                    <v-icon class="item2Icon" type="right"
                            :class="{ choosed: item2id === 'try2-2' ? true : false}"></v-icon>
                  </div>
                </div>
                <div class="item2-1Child"  v-show="item2id === 'try2-2' ? true : false">
                  <div class="item2-2">
                    <div>第一节PPT</div>
                    <div>
                      <v-icon type="download"></v-icon>
                    </div>
                  </div>
                  <div class="item2-2">
                    <div>第二节PPT</div>
                    <div>
                      <v-icon type="download"></v-icon>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div class="item2" v-show="courseid === 'try2' ? true : false">
              try2
            </div>
          </div>
        </vue-scroll>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'fileManager.vue',
  data () {
    return {
      courseid: 'try1',
      item2id: 'try2-1'
    }
  },
  computed: {
    ...mapState([
    ])
  },
  methods: {
    ...mapMutations([
    ]),
    setcourseId (id) {
      this.courseid = id
    },
    setItem2id (id) {
      if (this.item2id === id) {
        this.item2id = ''
      } else {
        this.item2id = id
      }
    }
  },
  components: {
  }
}
</script>

<style scoped lang="less">
#fofilemanage {
  position: relative;
  height: 100%;
  width: 70%;
  min-width: 700px;
  max-width: 800px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: black;
}

  #fonav {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .foicon {
      width: 30px;
      height: 30px;
      svg {
        width: 100%;
        height: 100%;
      }
    }
    .fotitle1 {
      position: relative;
      margin: 0 10px;
      font-size: 16px;
      font-weight: 600;
    }
  }

  #foFile {
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    .toleft {
      height: 300px;
      width: 20%;
      /*background-color: #83bafc;*/
      .focontainer1 {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
      }
    }
    .toright {
      height: 350px;
      width: 80%;
      background-color: #f5f5f5;
      border-radius: 20px;
      .focontainer2 {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }

  .item1 {
    width: 95%;
    height: 50px;
    background-color: #f5f5f5;
    margin: 3px 0;
    border-radius: 5px;
    >div {
      position: relative;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      font-size: 14px;
      color: black;
      cursor: pointer;
    }
    >div:hover {
      font-size: 15px;
    }
  }
  .foActive {
    font-weight: 600;
  }

  .item2 {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .item2-1 {
      width: 95%;
      margin: 5px 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      >div.item2-1Main {
        cursor: pointer;
        width: 100%;
        height: 40px;
        border-radius: 50px;
        background-color: #ebebeb;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        >div {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          .choosed {
            transform: rotate(0.25turn);}
        }
      }
      .item2Active {
        background-color: #e2e2e2;
      }
      >div.item2-1Child {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
      }
      .fileicon {
        position: relative;
        left: 10px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin: 0 5px;
        >svg {
          height: 100%;
          width: 100%;
        }
      }
      .foFilename {
        position: relative;
        left: 13px;
      }
      .item2Icon {
        position: relative;
        right: 10px;
        color: red;
        font-size: 15px;
        cursor: pointer;
      }
      .item2IconActive {
        transform: rotate(0.5turn);
      }
    }
    .item2-1Main:hover {
      background-color: #e2e2e2;
    }
  }
.item2-2 {
  width: 90%;
  height: 40px;
  /*border-radius: 50px;*/
  background-color: rgba(235,235,235,0.40);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid white;
  >div:first-child {
    position: relative;
    left: 30px;
  }
  >div:last-child {
    width: 10px;
    height: 10px;
    cursor: pointer;
    i {
      position: relative;
      right: 20px;
      font-size: 15px;
      font-weight: 600;
    }
  }
  >div:last-child:hover {
    i {
      color: #108ee9;
    }
  }
  >div:last-child:active {
    i {
      color: blue;
    }
  }
}
</style>
