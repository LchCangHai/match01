<template>
  <div id="Tindex">
    <nav>
      <div class="navlogo">
        <img id="logo" src="../../assets/logotem.jpg"/>
        <div>
          <span>教务管理中心</span>
        </div>
      </div>
      <div class="navbtn">
        <div class="btn01 tabActive">课程</div>
        <div class="btn01" @click="pcBtn()">个人中心</div>
        <v-dropdown class="avatarC1" :data="data" @item-click="itemClick">
          <a href="javascript:void(0)" class="avatarA ant-dropdown-link ant-dropdown-trigger">
            <img class="avatarI" src="../../assets/avatar02.png">
          </a>
        </v-dropdown>
        <div class="messageShow">
          <div class="headerNum" v-show="!isCnt99">{{counter}}</div>
          <div class="headerNum" v-show="isCnt99">99+</div>
          <span class="iconfont messageIcon">&#xe606;</span>
        </div>
      </div>
    </nav>
    <div id="rightSider" @click="tostudent()">
      <div>学生主页</div>
    </div>
    <div id="hcenter">
      <my-course-center></my-course-center>
    </div>
    <div id="handleBox">
      <div>
        <v-icon type="tags-o"></v-icon>
      </div>
      <div class="handle">
        <div class="hpindex">
          <div class="icon">
            <div>
              <v-icon type="home"></v-icon>
            </div>
            <div>首页</div>
          </div>
          <div class="BtnBox">
            <div class="item itemActive">首页</div>
          </div>
        </div>
        <div class="courseManage">
          <div class="icon">
            <div>
              <v-icon type="book"></v-icon>
            </div>
            <div>课程管理</div>
          </div>
          <div class="BtnBox">
            <div class="item">课件管理</div>
            <div class="item">视频管理</div>
            <div class="item">讨论管理</div>
          </div>
        </div>
        <div class="Exam">
          <div class="icon">
            <div>
              <v-icon type="file-text"></v-icon>
            </div>
            <div>作业与考试</div>
          </div>
          <div class="BtnBox">
            <div class="item">作业考试</div>
          </div>
        </div>
        <div class="studentManage">
          <div class="icon">
            <div>
              <v-icon type="solution"></v-icon>
            </div>
            <div>学生管理</div>
          </div>
          <div class="BtnBox">
            <div class="item">学生管理</div>
          </div>
        </div>
        <div class="dataCenter">
          <div class="icon">
            <div>
              <v-icon type="line-chart"></v-icon>
            </div>
            <div>数据中心</div>
          </div>
          <div class="BtnBox">
            <div class="item">数据中心</div>
          </div>
        </div>
      </div>
    </div>
    <div id="myCourse">
      <div class="title01">
        <div>我的课程</div>
      </div>
      <div class="tcontent">
        <vue-scroll>
          <div class="tcontent1">
            <div class="titem1">
              <div class="timgBox">
                <img class="Img1" src="../../assets/course01.jpg">
              </div>
              <div class="tcontext">
                <div class="ttitle2">国防教育--军事理论</div>
                <div class="tcollege2">西安交通大学</div>
              </div>
            </div>
            <div class="titem1">
              <div class="timgBox">
                <img class="Img1" src="../../assets/course01.jpg">
              </div>
              <div class="tcontext">
                <div class="ttitle2">国防教育--军事理论</div>
                <div class="tcollege2">西安交通大学</div>
              </div>
            </div>
            <div class="titem1">
              <div class="timgBox">
                <img class="Img1" src="../../assets/course01.jpg">
              </div>
              <div class="tcontext">
                <div class="ttitle2">国防教育--军事理论</div>
                <div class="tcollege2">西安交通大学</div>
              </div>
            </div>
            <div class="titem1">
              <div class="timgBox">
                <img class="Img1" src="../../assets/course01.jpg">
              </div>
              <div class="tcontext">
                <div class="ttitle2">国防教育--军事理论</div>
                <div class="tcollege2">西安交通大学</div>
              </div>
            </div>
            <div class="titem1">
              <div class="timgBox">
                <img class="Img1" src="../../assets/course01.jpg">
              </div>
              <div class="tcontext">
                <div class="ttitle2">国防教育--军事理论</div>
                <div class="tcollege2">西安交通大学</div>
              </div>
            </div>
            <div class="titem1">
              <div class="timgBox">
                <img class="Img1" src="../../assets/course01.jpg">
              </div>
              <div class="tcontext">
                <div class="ttitle2">国防教育--军事理论</div>
                <div class="tcollege2">西安交通大学</div>
              </div>
            </div>
            <div class="titem1">
              <div class="timgBox">
                <img class="Img1" src="../../assets/course01.jpg">
              </div>
              <div class="tcontext">
                <div class="ttitle2">国防教育--军事理论</div>
                <div class="tcollege2">西安交通大学</div>
              </div>
            </div>
            <div class="titem1">
              <div class="timgBox">
                <img class="Img1" src="../../assets/course01.jpg">
              </div>
              <div class="tcontext">
                <div class="ttitle2">国防教育--军事理论</div>
                <div class="tcollege2">西安交通大学</div>
              </div>
            </div>
            <div class="titem1">
              <div class="timgBox">
                <img class="Img1" src="../../assets/course01.jpg">
              </div>
              <div class="tcontext">
                <div class="ttitle2">国防教育--军事理论</div>
                <div class="tcollege2">西安交通大学</div>
              </div>
            </div>
            <div class="titem1">
              <div class="timgBox">
                <img class="Img1" src="../../assets/course01.jpg">
              </div>
              <div class="tcontext">
                <div class="ttitle2">国防教育--军事理论</div>
                <div class="tcollege2">西安交通大学</div>
              </div>
            </div>
            <div class="titem1">
              <div class="timgBox">
                <img class="Img1" src="../../assets/course01.jpg">
              </div>
              <div class="tcontext">
                <div class="ttitle2">国防教育--军事理论</div>
                <div class="tcollege2">西安交通大学</div>
              </div>
            </div>
            <div class="titem1">
              <div class="timgBox">
                <img class="Img1" src="../../assets/course01.jpg">
              </div>
              <div class="tcontext">
                <div class="ttitle2">国防教育--军事理论</div>
                <div class="tcollege2">西安交通大学</div>
              </div>
            </div>
            <div class="titem1">
              <div class="timgBox">
                <img class="Img1" src="../../assets/course01.jpg">
              </div>
              <div class="tcontext">
                <div class="ttitle2">国防教育--军事理论</div>
                <div class="tcollege2">西安交通大学</div>
              </div>
            </div>
            <div class="titem1">
              <div class="timgBox">
                <img class="Img1" src="../../assets/course01.jpg">
              </div>
              <div class="tcontext">
                <div class="ttitle2">国防教育--军事理论</div>
                <div class="tcollege2">西安交通大学</div>
              </div>
            </div>
          </div>
        </vue-scroll>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import courseCenter from '../../views/homepage/courseCenter.vue'

export default {
  name: 'Tindex.vue',
  data () {
    return {
      counter: 5,
      isCnt99: false,
      data: [
        { content: '1st item' },
        { content: '2nd item' },
        { content: '3rd item' }
      ]
    }
  },
  computed: {
    ...mapState([
    ])
  },
  methods: {
    ...mapMutations([
    ]),
    pcBtn () {
      this.$router.push('/pCenter')
    },
    tostudent () {
      this.$router.push('/index')
    },
    pushCourse () {
    }
  },
  components: {
    'my-course-center': courseCenter
  }
}
</script>

<style scoped lang="less">
  #Tindex {
    width: 100%;
    min-width: 1050px;
    min-height: 400px;
    min-height: 600px;
    /*background: url("../assets/headImg.png");*/
    /*background-repeat: repeat-x;*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /*margin-bottom: 50px;*/
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;
    top: 0;
    left:0;
    width:100%;
    min-width: 1000px;
    height: 60px;
    margin: 0;
    padding: 0;
    color: black;
    border-bottom: 1px solid lightgrey;
    box-shadow: 1px 0px 10px 1px rgba(213,213,213,0.6);
    background-color: white;
    z-index: 2020;
    .navlogo {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 200px;
      height:100%;
      color: black;
      #logo{
        width:100px;
        height:50px;
      }
      > div{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        span {
          font-size: 16px;
          color: #61c7fc;
          font-weight: 600;
        }
      }
    }
    .navbtn {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 300px;
      font-size: 16px;
      .messageShow {
        width: 30px;
        height: 30px;
        cursor: pointer;
        .headerNum{
          width: 23px;
          height: 15px;
          position: absolute;
          background-color: #f04134;
          color: white;
          font-size: 12px;
          border-radius: 50px;
          position: relative;
          left: 100%;
          top: 0;
          transform: translate(-50%, -20%);
          text-align: center;
        }
        >span.messageIcon {
          position: relative;
          left: 0;
          top: -15px;
          /*transform: translate(-50%, -50%);*/
          font-size: 25px;
          color: #61c7fc;
        }
        >span.messageIcon:hover {
          color: #2492eb;
        }
      }
      .btn01{
        cursor: pointer;
      }
      .btn01:hover {
        font-weight: 600;
        /*color:*/
      }
      .btn01:active{
        color: #83bafc;
      }
      .btn01.tabActive {
        text-decoration: none;
        color:black;
        cursor: default;
      }
      .avatarC1{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border: white 2px solid;
        border-radius: 50%;
        .avatarI {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
      }
    }
    .tabActive {
      font-weight: 600;
      border-bottom: 3px solid #83bafc;
    }
  }

  #rightSider {
    z-index: 2030;
    cursor: pointer;
    width: 60px;
    height: 100px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
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

  #hcenter {
    width: 100%;
    height: 420px;
    background-color: white;
  }

  #handleBox {
    width: 70%;
    min-width: 700px;
    max-width: 800px;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 20px 0;
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 10px;
    >div:first-child {
      width: 100%;
      height: 30px;
      margin: 10px 0 0 20px;
      i {
        font-weight: 500;
        font-size: 35px;
        color: #1d78f4;
      }
    }
  }
    .handle {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      >div {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 60px;
        background-color: white;
        margin: 5px 0;
      }
      .icon {
        width: 150px;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        font-weight: 600;
        >div:first-child {
          i {
            font-size: 18px;
          }
          margin: 0 10px;
        }
        >div:last-child {
          font-size: 15px;
        }
        .active {
          color: #2c77e5;
        }
      }
      .BtnBox {
        height: 60px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        >div {
          margin: 0 15px;
        }
        .item {
          cursor: pointer;
          width: 110px;
          height: 35px;
          background-color: #ebf9ff;
          color: #3e3e3e;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          box-shadow: 1px 1px 3px 1px #e5e5e5;
          border-radius: 4px;
        }
        .item:active {
          box-shadow: -1px -1px 3px 1px #e5e5e5;
        }
        .itemActive {
          background-color: #6bbbe5;
        }
      }
    }

  #myCourse {
    width: 70%;
    min-width: 700px;
    max-width: 800px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 20px 0 50px 0;
  }
  .title01 {
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    >div {
      font-size: 16px;
      font-weight: 600;
      position: relative;
      left: 25px;
    }
  }
  .tcontent {
    width: 100%;
    height: 350px;
    /*background-color: #83bafc;*/
    position: relative;
    /*top: 40px;*/
    margin: 10px 0;
  }

  .tcontent1 {
    width: 100%;
    /*height: 100%;*/
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    .titem1 {
      cursor: pointer;
      width: 30%;
      height: 160px;
      margin: 7.5px 1.5%;
      background-color: white;
      border-radius: 20px;
      box-shadow: 15px 0px #f5f5f5;
      .timgBox {
        width: 100%;
        height: 70%;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        .Img1 {
          width: 100%;
          height: 100%;
          border-top-right-radius: 20px;
          border-top-left-radius: 20px;
        }
      }
      .tcontext {
        height: 30%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        >div{
          position: relative;
          left: 5px;
        }
        .ttitle2 {
          font-size: 14px;
          font-weight: 600;
        }
        .tcollege {
          font-size: 13px;
        }
      }
    }
    .titem1:hover {
      box-shadow: 2px 0px 10px  rgba(213,213,213,0.6);
    }
  }

  img {
    object-fit: cover;
  }
</style>
