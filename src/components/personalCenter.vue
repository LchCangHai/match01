<template>
    <div id="personalCenter">
      <div id="header">
        <img id="bc01" src="../assets/headbc2.jpg">
        <div id="Nav">
          <my-nav :type="2"></my-nav>
        </div>
        <div id="rightSider" @click="tostudent()">
          <div>教师主页</div>
        </div>
        <div id="personInfo">
          <div class="avatarC">
            <img class="avatarI" :src="this.currentUser.avatar">
          </div>
          <div class="info">
            <span class="college">{{currentUser.nickname}}</span>
            <span class="iden">{{currentUser.school}}</span>
            <div class="editBtn">
              <div class="Btn01" @click="openEdit()">
                <div>编辑资料</div>
              </div>
              <div class="Btn01" @click="openPop01()" v-show="false">
                <div>编辑资料</div>
              </div>
              <div class="Btn01"
                v-show="false"
                   @click="openPop02()">
                <div>学校认证</div>
              </div>
              <div class="Btn02"
                v-show="false">
                <div>
                  <span class="iconfont icon-zhengshu"></span>
                </div>
                <div>已认证</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="body02">
        <div class="course">
          <my-course></my-course>
        </div>
        <div class="task">
          <my-task></my-task>
        </div>
      </div>
      <div class="footer">
<!--        <my-chart1 v-bind="tem"></my-chart1>-->
      </div>
      <div id="cover" v-show="showPopUp01 || showPopUp02"></div>
      <div class="modify" v-show="showPopUp01">
        <my-setinfo></my-setinfo>
<!--        <my-login v-show="popUpType === 1 ? true : false"></my-login>-->
<!--        <my-signup v-show="popUpType === 2 ? true : false"></my-signup>-->
<!--        <my-retrieve v-show="popUpType === 3 ? true : false"></my-retrieve>-->
<!--        <my-otherway v-show="popUpType === 4 ? true : false"></my-otherway>-->
      </div>
      <div class="confirm" v-show="showPopUp02">
        <my-confirm></my-confirm>
      </div>
      <div class="confirmResult" v-show="confirmResult.show">
        <div class="resultItem" v-show="confirmResult.type === 1 ? true :false">
          <div class="resultIcon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-zhengshu"></use>
            </svg>
          </div>
          <div>认证成功</div>
        </div>
        <div class="resultItem" v-show="confirmResult.type === 2 ? true :false">
          <div class="resultIcon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-zhengshu"></use>
            </svg>
          </div>
          <div>认证失败</div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Course from '../views/personalcenter/courses.vue'
import Task from '../views/personalcenter/tasks.vue'
import SetInfo from '../views/personalcenter/PopOfPensonCenter/setInfo.vue'
import Confirm from '../views/personalcenter/PopOfPensonCenter/confirm.vue'
import myNav from '../views/navs/s_nav2.vue'

// import Chart from '../views/charts/try01.vue'
export default {
  name: 'personalCenter.vue',
  data () {
    return {
      tem: {
        width: '500px',
        height: '300px'
      },
      isComfirmed: false,
      data: [
        { content: '1st item' },
        { content: '2nd item' },
        { content: '3rd item' }
      ],
      confirmResult: {
        show: false,
        type: 1
      }
    }
  },
  computed: {
    ...mapState([
      'showPopUp01',
      'showPopUp02',
      'currentUser'
    ])
  },
  methods: {
    ...mapMutations([
      'closePop01',
      'openPop01',
      'closePop02',
      'openPop02',
      'setCurrentUser'
    ]),
    courseBtn () {
      this.$router.push('/courses')
    },
    tostudent () {
      this.$router.push('/tindex')
    },
    exit () {
      window.localStorage.setItem('access_token', null)
      this.$router.push('/unindex')
    },
    itemClick (data) {
      console.log(data)
    },
    openResult (type) {
      this.confirmResult.type = type
      this.confirmResult.show = true
      this.closeResult()
    },
    closeResult () {
      const that = this
      setTimeout(() => {
        that.confirmResult.show = false
      }, 2000)
    },
    openEdit () {
      const routeUrl = this.$router.resolve({
        path: '/studentInfo',
        query: { id: this.currentUser.uid }
      })
      window.open(routeUrl.href, '_blank')
    }
  },
  mounted () {
  },
  components: {
    'my-course': Course,
    'my-task': Task,
    'my-setinfo': SetInfo,
    'my-confirm': Confirm,
    'my-nav': myNav

  }
}
</script>

<style scoped lang="less">
  #personalCenter {
    width: 100%;
    height: 100%;
    min-width: 860px;
    min-height: 400px;
    /*background: url("../assets/headImg.png");*/
    /*background-repeat: repeat-x;*/
  }
  #bc01 {
    position: absolute;
    z-index: -2000;
    width: 100%;
    height: 200px;
  }
  #header{
    width: 100%;
    height: 200px;
  }
  #personInfo {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;
    bottom: -40px;
    left: 200px;
    height: 100px;
    width: 250px;
    /*background-color: #108ee9;*/
    .avatarC{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 80px;
      border: white 2px solid;
      border-radius: 50%;
      .avatarI {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      >span {
        color: white;
        margin: 1px 0;
      }
      >span.college {
        font-size: 14px;
        font-weight: 600;
      }
      >span.iden {
        font-size: 12px;
      }
    }
  }
  .editBtn {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .Btn01 {
      cursor: pointer;
      width: 60px;
      height: 20px;
      border: solid white 1px;
      border-radius: 60px;
      color: white;
      margin: 0 5px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .Btn02 {
      cursor: pointer;
      width: 60px;
      height: 20px;
      /*border: solid white 1px;*/
      border-radius: 60px;
      color: white;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 0 5px;
      .iconfont {
        font-size: 15px;
      }
    }
  }

  #Nav {
    top: 0;
    width:100%;
    height: 60px;
    margin: 0;
    padding: 0;
    /*overflow:;*/
  }

  #rightSider {
    z-index: 2030;
    cursor: pointer;
    width: 60px;
    height: 100px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: #ebf9ff;
    position: fixed;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    >div {
      color: #61c7fc;
      font-weight: 600;
      font-size: 13px;
      max-width: 90%;
    }
  }
  #rightSider:hover {
    background-color: #61c7fc;
    >div {
      color: #ebf9ff;
    }
  }
  #rightSider:active {
    background-color: #2492eb;
  }

  .course {
    width: 100%;
    height: 320px;
  }
  .task {
    width: 100%;
    height: 300px;
    background-color: #f6f6f6;
  }
  .footer {
    width: 100%;
    height: 50px;
    background-color: white;
  }
  #cover{
    /*display: none;*/
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(240,240,240,0.35);
    z-index: 2000;
  }
  .modify {
    position: absolute;
    top: 120px;
    left: 0;
    /*transform: translate(-50%, -35%);*/
    /*display: flex;*/
    /*flex-direction: row;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    /*width: 600px;*/
    /*height: 700px;*/
    /*background-color: white;*/
    /*border-radius: 4px;*/
    /*box-shadow: 0px 2px 10px 1px rgba(150,150,150,0.51);*/
    width: 100%;
    height: 800px;
  }
  .confirm {
    z-index: 2001;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 280px;
    background-color: white;
    box-shadow: 2px 2px 10px 5px rgba(0,0,0,0.1);
    border-radius: 4px;
  }
  .confirmResult {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 80px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 2px 10px 1px rgba(150,150,150,0.51);
    .resultItem {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      >div:last-child {
        color:black;
        font-size: 20px;
        margin-left: 5px;
      }
    }
    .resultIcon {
      width: 50px;
      height: 50px;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
  img {
    object-fit: cover;
  }
</style>
