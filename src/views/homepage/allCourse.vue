<template>
  <div id="twoallcourse">
    <div class="thandles" v-show="!oneShow">
      <div class="taskstype">
        <v-button class="typeBtn" type="ghost"
                  :class="{ activeBtn: type === 9 ? true : false}"
                  @click="typeChange(9)">全部课程</v-button>
        <v-button class="typeBtn" type="ghost"
                  :class="{ activeBtn: type === 7 ? true : false}"
                  @click="typeChange(7)">我加入的</v-button>
        <v-button class="typeBtn" type="ghost"
                  :class="{ activeBtn: type === 8 ? true : false}"
                  @click="typeChange(8)">我创建的</v-button>
        <v-button class="typeBtn activeBtn" type="ghost" v-show="type === 10" disabled>搜索</v-button>
      </div>
      <div class="search1">
        <div class="search">
          <input placeholder="搜索" class="searchIn" v-model="searchCourse" @keyup.enter="searchC()">
          <div @click="searchC()">
            <v-icon class="licon01" type="search"></v-icon>
          </div>
        </div>
        <div>
          <v-select search style="width: 120px;" :data="options" v-model="search"></v-select>
        </div>
      </div>

    </div>
    <div class="tcontent" v-show="!oneShow">
      <vue-scroll>
        <div class="tcontent1" id="content">
          <div class="titem1"
               v-for="item in allcourse"
               :key="item.id"
               @click="chooseCourse(item)"
               v-show="((type === 7 && item.join_status === 1) || (type === 8 && item.create_status === 1)
                    || (type === 9) || (type === 10)) ? true : false">
            <div class="timgBox">
              <img class="Img1" :src="item.avatar" @error="imgerror(item)">
            </div>
            <div class="tcontext">
              <div class="ttitle2">{{item.name}}</div>
              <div class="tcollege2">教师：{{item.teacher_name}}</div>
            </div>
          </div>
        </div>
      </vue-scroll>
    </div>
    <div class="tcontenttwo" v-show="oneShow">
      <div id="threeNav">
        <div class="three1icon" @click="back()">
          <svg t="1593444918519" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8156" width="200" height="200"><path d="M398.259 312.832V85.348L0.007 483.503 398.259 881.82V648.502c284.4 0 483.565 91.004 625.735 290.15-56.838-284.472-227.502-568.82-625.735-625.82" p-id="8157" fill="#1d78f4"></path></svg>
        </div>
        <div class="three1title" @click="back()">返回全部课程</div>
      </div>
      <div class="onecourseinfo">
        <div class="oneImgBox">
          <img :src="chooseOne.avatar" @error="imgerror(chooseOne)">
        </div>
        <div class="oneInfo">
          <div><span>课程名称：</span>{{chooseOne.name}}</div>
          <div><span>开课教师：</span>{{chooseOne.teacher_name}}</div>
          <div><span>开始时间：</span>{{chooseOne.stat_at}}</div>
          <div><span>结束时间：</span>{{chooseOne.end_at}}</div>
          <div><span>课程简介：</span>{{chooseOne.introduce}}</div>
        </div>
      </div>
      <div class="coursestatus">
        <div class="Btn btn01" @click="addInCourse(chooseOne)"
             v-show="chooseOne.join_status === 0 && chooseOne.create_status === 0">
          <div>加入课程</div>
        </div>
        <div class="Btn btnInfo" v-show="chooseOne.join_status === 1 && chooseOne.create_status === 0">
          <div>已加入该课程</div>
        </div>
        <div class="Btn btnInfo" v-show="chooseOne.create_status === 1">
          <div>您是该课程教师</div>
        </div>
        <div class="Btn btn01" @click="toCourse(chooseOne.id)"
             v-show="chooseOne.join_status === 1 || chooseOne.create_status === 1">
          <div>查看课程详情</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'allCourse.vue',
  data () {
    return {
      type: 9,
      searchCourse: '',
      allcoursed: [],
      allcourse: [],
      allcourse1: [],
      errorImg: require('../../assets/imgError01.jpg'),
      options: [{
        value: 'name',
        label: '课程名'
      }, {
        value: 'teacher_name',
        label: '教师昵称'
      }],
      search: 'name',
      oneShow: false,
      chooseOne: {}
    }
  },
  computed: {
    ...mapState([
      'currentUser',
      'currentCourse'
    ])
  },
  methods: {
    ...mapMutations([
      'setCurrentUser',
      'setcurrentCourse'
    ]),
    typeChange (id) {
      this.allcourse = this.allcoursed
      this.judge()
      this.type = id
    },
    chooseCourse (item) {
      this.oneShow = true
      this.chooseOne = item
    },
    back () {
      this.oneShow = false
    },
    toCourse (id) {
      const routeUrl = this.$router.resolve({
        path: '/courses',
        query: {
          id: id
        }
      })
      this.setcurrentCourse(id)
      window.open(routeUrl.href, '_blank')
    },
    addInCourse (item) {
      this.$axios.post('/api/course/' + item.id + '/join')
        .then(res => {
          this.$notification.success({
            message: '成功',
            description: '成功加入课程《' + item.name + '》',
            duration: 1
          })
          item.join_status = 1
          this.getAllCourse()
        }).catch(error => {
          console.log(error)
          this.$notification.error({
            message: '失败',
            description: '加入课程《' + item.name + '》出限问题，请重新尝试',
            duration: 2
          })
        })
    },
    searchC () {
      this.type = 10
      const type = this.search
      const data = this.searchCourse
      this.allcourse = this.allcoursed
      if (data) {
        this.allcourse1 = this.allcourse.filter(function (product) {
          return String(product[type]).toLowerCase().indexOf(data) > -1
        })
        this.allcourse = this.allcourse1
      } else {
        this.allcourse = this.allcoursed
        this.type = 9
      }
    },
    judge () {
      const content = window.document.getElementById('content')
      const cc = content.innerHTML
      console.log(cc)
    },
    getAllCourse () {
      this.$axios.get('/api/course/course_list')
        .then(res => {
          console.log('获取课程信息成功')
          this.allcourse = res.data.data.courses
          this.allcoursed = res.data.data.courses
        }).catch(error => {
          this.$message.warning('获取课程信息出错')
          console.log(error)
        })
    },
    imgerror (item) {
      item.avatar = this.errorImg
    }
  },
  mounted () {
    this.getAllCourse()
  },
  components: {
  }
}
</script>

<style scoped lang="less">
#twoallcourse {
  position: relative;
  height: 100%;
  width: 70%;
  min-width: 700px;
  max-width: 800px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.thandles {
  width: 100%;
  min-width: 600px;
  height: 40px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 40px;
  margin: 15px 0px;
  .taskstype {
    margin: 0 15px;
    .typeBtn {
      margin: 0 5px;
      border: none;
      color: black;
    }
    .activeBtn {
      border: 1px solid deepskyblue;
      border-radius: 50px;
      font-weight: 600;
    }
  }
  .search1 {
    width: 350px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    position: relative;
  }
  .search {
    margin: 15px;
    border-radius: 50px;
    width: 200px;
    height: 30px;
    border: 1px solid #83bafc;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    .searchIn {
      width: 150px;
      outline: none;
      border: none;
    }
    .licon01 {
      font-size: 14px;
      cursor: pointer;
    }
  }
}

  .tcontent {
    width: 100%;
    height: 350px;
    /*background-color: #83bafc;*/
    position: relative;
    top: 40px;
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
        background: url("../../assets/noImgBc.jpg");
        background-size: cover;
        background-repeat: no-repeat;
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

  .tcontenttwo {
    width: 100%;
    height: 400px;
    margin: 15px 0;
    position: relative;
    top: 40px;
    border: 1px #f5f5f5 solid;
    box-shadow: 2px 2px 5px 2px #f5f5f5,
    -2px -2px 5px 2px #f5f5f5;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
    .onecourseinfo {
      width: 100%;
      height: 220px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
      .oneImgBox {
        width: 270px;
        height: 180px;
        border-radius: 10px;
        background: url("../../assets/noImgBc.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        >img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }
      .oneInfo {
        height: 180px;
        max-width: 400px;
        min-width: 220px;
        >div {
          font-size: 13px;
          margin: 5px 0;
          >span {
            font-size: 14px;
            font-weight: 600;
          }
        }
        >div:last-child {
          overflow: hidden;
          max-height: 60px;
        }
      }
    .coursestatus {
      width: 100%;
      height: 120px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
      .Btn {
      width: 170px;
      height: 45px;
      border-radius: 50px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 0 20px;
      >div {
        color:black;
        font-weight: 600;
        font-size: 16px;
      }
    }
      .btn01 {
      background-color: #00a854;
      cursor: pointer;
      >div {
        color: white;
      }
    }
      .btn01:hover {
      background-color: #3dbd7d;
    }
      .btn01:active {
      background-color: #00924c;
    }
      .btnInfo {
      border: 1px solid #0f81d4;
      color: #49a9ee;
    }

#threeNav {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 5px 10px;
  .three1icon {
    width: 30px;
    height: 30px;
    margin-left: 15px;
    svg {
      height: 100%;
      width: 100%;
    }
  }
  .three1title {
    margin-left: 10px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
  }
  .three1title:hover {
    font-size: 16px;
  }
  .three1title:active {
    font-size: 15px;
  }
}

  img {
    object-fit: cover;
  }
</style>
