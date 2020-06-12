<template>
  <div id="oneDiscuss">
    <div id="fo1nav" @click="toBack()">
      <div class="fo1Navicon">
        <v-icon type="left"></v-icon>
      </div>
      <div class="fo1Navtitle"><div>返回</div></div>
    </div>
    <div id="focTitle">
      <div class="onetitle">
        <div>为什么我作业还没写完，我都已经秃啦！是因为我还不够秃吗？
          为什么我作业还没写完，我都已经秃啦！是因为我还不够秃吗？</div>
      </div>
      <div class="oneUser">
        <div class="oneUserAvatar">
          <img src="../../../assets/avatar02.png">
        </div>
        <div class="oneUserInfo">
          <div>张乐芃</div>
          <div>福州大学</div>
        </div>
      </div>
      <div class="oneTips">
        <div class="oneleft">
          <div>434 人围观</div>
          <div>999+ 回答</div>
          <div>03月06日</div>
        </div>
        <div class="oneright">
          <div class="Btn01" v-show="!isweig">
            <div>围观</div>
          </div>
          <div class="Btn01-1" v-show="isweig">
            <div>已围观</div>
          </div>
        </div>
      </div>
    </div>
    <div id="focNum">
      <div>999+ 条回答</div>
    </div>
    <div id="focReply">
      <div class="focRitem01">
        <div class="focMain">
          <div class="foc01Top">
            <div class="two01UserAvatar">
              <img src="../../../assets/avatar02.png">
            </div>
            <div class="two01Name">你芃妹妹</div>
            <div class="two01Name">福州大学</div>
            <div class="two01Time">6月7日</div>
          </div>
          <div class="two01Info">
            <div>大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。</div>
          </div>
          <div class="two01handle">
            <div class="two01zan">
              <div></div>
              <div>0个赞</div>
            </div>
            <div class="two01pinglun">
              <div></div>
              <div>0条评论</div>
              <div></div>
            </div>
          </div>
        </div>
        <div class="focChild">
          <div class="focChildTop"></div>
          <div class="focRitem02"></div>
          <div class="focRitem02"></div>
        </div>
      </div>
      <div class="focRitem01">
        <div class="focMain"></div>
        <div class="focChild">
          <div class="focChildTop"></div>
          <div class="focRitem02"></div>
          <div class="focRitem02"></div>
        </div>
      </div>
      <div class="focRitem01">
        <div class="focMain"></div>
        <div class="focChild">
          <div class="focChildTop"></div>
          <div class="focRitem02"></div>
          <div class="focRitem02"></div>
        </div>
      </div>
      <div class="focRitem01">
        <div class="focMain"></div>
        <div class="focChild">
          <div class="focChildTop"></div>
          <div class="focRitem02"></div>
          <div class="focRitem02"></div>
        </div>
      </div>
      <div class="focRitem01">
        <div class="focMain"></div>
        <div class="focChild">
          <div class="focChildTop"></div>
          <div class="focRitem02"></div>
          <div class="focRitem02"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'oneDiscuss.vue',
  data () {
    return {
      isweig: true
    }
  },
  computed: {
    ...mapState([
    ])
  },
  methods: {
    ...mapMutations([
    ]),
    toBack () {
      this.$router.go(-1)
    }
  },
  components: {
  }
}
</script>

<style scoped lang="less">
  #oneDiscuss {
    /*margin: 20px 0;*/
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

  #fo1nav {
    cursor: pointer;
    width: 100px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    padding-top: 10px;
    .fo1Navicon {
      width: 30px;
      height: 30px;
      i {
        font-size: 30px;
        color: #1296db;
      }
    }
    .fo1Navtitle {
      margin-left: 5px;
      font-size: 16px;
      font-weight: 600;
    }
  }

  #focTitle{
    width: 100%;
    height: 150px;
    background-color: #f9f9f9;
    margin-top: 5px;
    /*border-radius: 4px;*/
    box-shadow: 3px 3px 5px 0px rgba(213,213,213,0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .onetitle {
    width: 90%;
    height: 50px;
    >div {
      font-size: 17px;
      font-weight: 500;
    }
  }
  .oneUser {
    width: 90%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .oneUserAvatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
      }
    }
    .oneUserInfo {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-left: 5px;
      font-size: 13px;
      color: #777b80;
      >div {
        margin: 0 5px;
      }
    }
  }
  .oneTips {
    width: 90%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .oneleft {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      >div {
        color: #363532;
        margin: 0 10px;
      }
      >div:first-child {
        margin-left: 0;
      }
    }
    .oneright {
      .Btn01 {
        width: 80px;
        height: 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        /*border:#eeeeee solid 1px;*/
        border-bottom: solid 1px rgba(191,191,191,1);
        border-radius: 50px;
        color: #3d84ff;
        cursor: pointer;
        background-color: white;
        box-shadow: 1px 1px 5px 0px rgba(213,213,213,0.5);
      }
      .Btn01:hover {
        font-size: 13px;
      }
      .Btn01:active {
        background-color: #ebf2f2;
        border: #3d84ff solid 1px;
        box-shadow: -1px -1px 5px 0px rgba(213,213,213,0.5);
      }
      .Btn01-1 {
        width: 80px;
        height: 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: #3d84ff;
        font-size: 13px;
        font-weight: 600;
        border-bottom: solid 1px rgba(191,191,191,1);
        border-radius: 50px;
        background-color: white}
    }
  }

  #focNum {
    margin-top: 30px;
    width: 100%;
    height: 60px;
    background-color: #f9f9f9;
    border-bottom: solid 1px rgba(191,191,191,0.61);
    box-shadow: 3px 0px 5px 0px rgba(213,213,213,0.5),
    -3px 0px 5px 0px rgba(213,213,213,0.5);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    >div {
      margin-left: 30px;
      font-size: 16px;
      font-weight: 600;
    }
  }

  #focReply {
    width: 100%;
    box-shadow: 3px 3px 5px 0px rgba(213,213,213,0.5),
    -3px 0px 5px 0px rgba(213,213,213,0.5);
  }
  .focRitem01 {
    width: 100%;
    background-color: #f9f9f9;
    border-bottom: solid 1px rgba(191,191,191,0.61);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .focMain {
    width: 90%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
    .foc01Top {
      width: 100%;
      height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      .two01UserAvatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        img {
          height: 100%;
          width: 100%;
          border-radius: 50%;
        }
      }
    }
    .two01Info {
      width: 90%;
      height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
    .two01handle {
      width: 90%;
      height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }

  img {
    object-fit: cover;
  }
</style>
