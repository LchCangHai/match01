<template>
  <div id="dataCenter">
    <div id="Nav">
      <my-nav :type="1"></my-nav>
    </div>
    <div id="rightSider" @click="tostudent()">
      <div>学生主页</div>
    </div>
    <div id="Content01">
      <div id="threeNav">
        <div class="three1icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tubiao-"></use>
          </svg>
        </div>
        <div class="three1title">数据中心</div>
      </div>
      <div id="handle">
        <div>
          <v-button
            :type="type === 1 ? 'primary' : ''"
            @click="toggleType(1)">图表分析</v-button>
        </div>
        <div>
          <v-button
            :type="type === 2 ? 'primary' : ''"
            @click="toggleType(2)">作业详情</v-button>
        </div>
      </div>
      <div id="chartBox" v-show="type === 1">
        <div class="chartTwo">
          <div>
            <my-chart02 width="300px" :chartdata2="chardata02"></my-chart02>
          </div>
          <div>
            <my-chart02 width="300px" :chartdata2="chartdata03"></my-chart02>
          </div>
        </div>
        <div>
          <my-chart01 width="700px" :chartdata1="chartdata01"></my-chart01>
        </div>
        <div>
          <my-chart01 width="700px" :chartdata1="chartdata04"></my-chart01>
        </div>
      </div>
      <div id="detailTable" v-show="type === 2">
        <div class="item title">
          <div><div>姓名</div></div>
          <div><div>学号</div></div>
          <div><div>完成情况</div></div>
          <div><div>分数</div></div>
        </div>
        <div class="item">
          <div><div>林炜</div></div>
          <div><div>XXXXXXXXX</div></div>
          <div><div>已完成</div></div>
          <div><div>95</div></div>
        </div>
        <div class="item">
          <div><div>林炜</div></div>
          <div><div>XXXXXXXXX</div></div>
          <div><div>已完成</div></div>
          <div><div>95</div></div>
        </div>
        <div class="item">
          <div><div>林炜</div></div>
          <div><div>XXXXXXXXX</div></div>
          <div><div>已完成</div></div>
          <div><div>95</div></div>
        </div>
        <div class="item">
          <div><div>林炜</div></div>
          <div><div>XXXXXXXXX</div></div>
          <div><div>已完成</div></div>
          <div><div>95</div></div>
        </div>
        <div class="item">
          <div><div>林炜</div></div>
          <div><div>XXXXXXXXX</div></div>
          <div><div>已完成</div></div>
          <div><div>95</div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import myNav from '../../views/navs/nav3.vue'
import Chart01 from '../../views/charts/chart01.vue'
import Chart02 from '../../views/charts/chart02.vue'

export default {
  name: 'dataCenter.vue',
  data () {
    return {
      type: 1,
      chartdata01: {
        labels: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100'],
        datasets: [
          {
            label: '分数段人数',
            backgroundColor: '#53a8ff',
            data: [4, 3, 5, 1, 10, 10, 15, 20, 15, 13]
          }
        ]
      },
      chardata02: {
        labels: ['完成', '未完成'],
        datasets: [
          {
            // label: '完成',
            backgroundColor: ['#409eff', '#c6e2ff'],
            data: [30, 70]
          }
        ]
      },
      chartdata03: {
        labels: ['及格', '不及格'],
        datasets: [
          {
            // label: '完成',
            backgroundColor: ['#67C23A', '#f56c6c'],
            data: [30, 70]
          }
        ]
      },
      chartdata04: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
          '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
          '21', '22', '23', '24', '25'],
        datasets: [
          {
            label: '各题正确率',
            backgroundColor: '#606266',
            data: [0.4, 0.3, 0.5, 1, 1, 0.8, 0.5, 0.2, 0.25, 0.3,
              0.4, 0.3, 0.5, 1, 1, 0.8, 0.5, 0.2, 0.5, 0.3,
              0.4, 0.3, 0.5, 1, 1]
          }
        ]
      }
    }
  },
  computed: {
    ...mapState([
      'leftSiderActive'
    ])
  },
  methods: {
    ...mapMutations([
    ]),
    tostudent () {
      this.$router.push('/index')
    },
    toggleType (type) {
      this.type = type
    }
  },
  components: {
    'my-nav': myNav,
    'my-chart01': Chart01,
    'my-chart02': Chart02
  },
  mounted () {
  }
}
</script>

<style scoped lang="less">
  #dataCenter {
    width: 100%;
    min-width: 1050px;
    min-height: 400px;
    min-height: 600px;
    /*background: url("../assets/headImg.png");*/
    /*background-repeat: repeat-x;*/
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    color:black;
  }

  #Nav {
    position: relative;
    top: 0;
    left:0;
    width:100%;
    min-width: 1000px;
    height: 60px;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid lightgrey;
    box-shadow: 1px 0px 10px 1px rgba(213,213,213,0.6);
    background-color: white;
    z-index: 20;
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

  #Content01 {
    width: 70%;
    min-width: 800px;
    max-width: 900px;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  #threeNav {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 0;
    .three1icon {
      width: 35px;
      height: 35px;
      svg {
        height: 100%;
        width: 100%;
      }
    }
    .three1title {
      margin-left: 10px;
      font-size: 18px;
      font-weight: 600;
    }
  }

  #handle {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    >div {
      margin: 0 10px;
    }
  }

  #chartBox {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 0;
  }
    .chartTwo {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-start;
    }

  #detailTable {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
    .item {
      width: 80%;
      min-height: 50px;
      margin: 3px 0;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      background-color: #f9f9f9;
      border-radius: 10px;
      cursor: pointer;
      >div {
        width: 25%;
        margin: 2px 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        >div {
          font-size: 15px;
        }
      }
    }
    .title {
      cursor: default;
      margin: 5px 0;
      >div{
        >div{
          font-size: 16px;
          font-weight: 600;
        }
      }
    }
    .item:hover {
      box-shadow: 1px 1px 5px 1px rgba(213,213,213,0.6);
    }
    .title:hover {
      box-shadow: none;
    }

  img {
    object-fit: cover;
  }
</style>
