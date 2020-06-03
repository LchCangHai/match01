<template>
  <div class="course02">
    <div class="info02">
      <div class="courseImg02">
        <img class="img02" src="../../../assets/course01.jpg">
      </div>
      <div class="courseinfo02">
        <div class="courseTitle02">国防教育-军事理论</div>
        <div class="courseCollege02">福州大学</div>
        <div class="courseRate02">已完成100%</div>
        <div class="courseEnd02">2020年6月20日 截止</div>
      </div>
    </div>
    <div class="handle02">
      <div class="handleitem">
        <div class="icon02">
          <v-icon class="infoicon" type="caret-right"></v-icon>
        </div>
        <div>课程介绍</div>
      </div>
      <div class="handleitem">
        <div class="icon02">
          <v-icon class="exiticon" type="caret-right"></v-icon>
        </div>
        <div>退出课程</div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'course',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'showPopUp',
      'popUpType'
    ])
  },
  methods: {
    ...mapMutations([
      'closeLogin',
      'loginPop',
      'signUpPop',
      'retrievePop',
      'otherWayPop'
    ])
  },
  components: {
  }

}
</script>

<style scoped lang="less">
  .course02 {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .info02 {
    height: 100%;
    width: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .courseImg02 {
      width: 150px;
      height: 100%;
      position: relative;
      left: 0px;
      .img02 {
        width: 100%;
        height: 100%;
      }
    }
    .courseinfo02 {
      /*height: 100%;*/
      position: relative;
      left: 15px;
      >div {
        margin: 5px 0;
      }
      .courseTitle02 {
        color: black;
        font-size: 16px;
        font-weight: 600;
      }
      .courseCollege02 {
        font-size: 12px;
        color: black;
      }
      .courseRate02 {
        font-size: 10px;
        color: black;
      }
      .courseEnd02 {
        font-size: 10px;
        color: black;
      }
    }
  }

  .handle02 {
    height: 100px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .handleitem {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      position: relative;
      left: 10px;
      margin: 5px 0;
      color:black;
      >div:last-child {
        cursor: pointer;
        left:2px;
      }
      >div:last-child:hover{
        text-decoration: underline;
      }
      >div:last-child:active{
        font-weight: 600;
      }
    }
    .icon02 {
      width: 15px;
      height: 15px;
      i.infoicon {
        color: #83bafb;
      }
      i.exiticon {
        color: #fccc83;
      }
    }
  }

  img {
    object-fit: cover;
  }
</style>
