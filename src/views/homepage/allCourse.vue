<template>
  <div id="twoallcourse">
<!--    <div class="thandles">-->
<!--      <div class="taskstype">-->
<!--        <v-button class="typeBtn" type="ghost"-->
<!--                  :class="{ activeBtn: type === 1 ? true : false}"-->
<!--                  @click="typeGoods()">精品</v-button>-->
<!--        <v-button  class="typeBtn" type="ghost"-->
<!--                   :class="{ activeBtn: type === 2 ? true : false}"-->
<!--                   @click="typeGongxue()">工学</v-button>-->
<!--        <v-button  class="typeBtn" type="ghost"-->
<!--                   :class="{ activeBtn: type === 3 ? true : false}"-->
<!--                   @click="typeLixue()">理学</v-button>-->
<!--        <v-button class="typeBtn" type="ghost"-->
<!--                  :class="{ activeBtn: type === 4 ? true : false}"-->
<!--                  @click="typeYishu()">艺术</v-button>-->
<!--        <v-button class="typeBtn" type="ghost"-->
<!--                  :class="{ activeBtn: type === 5 ? true : false}"-->
<!--                  @click="typeFaxue()">法学</v-button>-->
<!--        <v-button class="typeBtn" type="ghost"-->
<!--                  :class="{ activeBtn: type === 6 ? true : false}"-->
<!--                  @click="typeYixue()">医学</v-button>-->
<!--      </div>-->
<!--      <div class="search">-->
<!--        <input placeholder="搜索" class="searchIn" v-model="searchCourse">-->
<!--        <v-icon  class="licon01" type="question-circle"></v-icon>-->
<!--      </div>-->
<!--    </div>-->
    <div class="tcontent">
      <vue-scroll>
        <div class="tcontent1">
          <div class="titem1"
               v-for="item in allcourse"
               :key="item.id"
               @click="toCourse(item.id)">
            <div class="timgBox">
              <img class="Img1" :src="item.avatar">
            </div>
            <div class="tcontext">
              <div class="ttitle2">{{item.name}}</div>
              <div class="tcollege2">教师：{{item.teacher_name}}</div>
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
    <div></div>
    <div></div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'allCourse.vue',
  data () {
    return {
      type: 1,
      searchCourse: '',
      allcourse: []
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
    typeGoods () {
      this.type = 1
    },
    typeGongxue () {
      this.type = 2
    },
    typeLixue () {
      this.type = 3
    },
    typeYishu () {
      this.type = 4
    },
    typeFaxue () {
      this.type = 5
    },
    typeYixue () {
      this.type = 6
    },
    toCourse (id) {
      this.setcurrentCourse(id)
      this.$router.push('/courses')
    },
    getAllCourse () {
      this.$axios.get('/api/course/course_list')
        .then(res => {
          console.log('获取课程信息成功')
          this.allcourse = res.data.data.courses
        }).catch(error => {
          this.$message.warning('获取课程信息出错')
          console.log(error)
        })
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
      margin: 0 10px;
      border: none;
      color: black;
    }
    .activeBtn {
      border: 1px solid deepskyblue;
      border-radius: 50px;
      font-weight: 600;
    }
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
        background: url("../../assets/avatar02.png");
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
