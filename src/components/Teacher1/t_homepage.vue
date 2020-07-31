<template>
  <div id="personalCenter">
    <div id="header">
      <img id="bc01" src="../../assets/headbc3.jpg">
      <div id="Nav">
        <my-nav :type="2"></my-nav>
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
          </div>
        </div>
      </div>
    </div>
    <div id="body02">
      <allcourse></allcourse>
    </div>
    <div class="footer">
      <!--        <my-chart1 v-bind="tem"></my-chart1>-->
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import myNav from '../../views/navs/t_nav3.vue'
import tAllcourse from './homepage/t_allcourse'

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
        path: '/editInfo',
        query: { id: this.currentUser.uid }
      })
      window.open(routeUrl.href, '_blank')
    }
  },
  mounted () {
  },
  components: {
    'my-nav': myNav,
    allcourse: tAllcourse
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
  #body02 {
    position: relative;
    margin: 10px 0;
  }
  img {
    object-fit: cover;
  }
</style>
