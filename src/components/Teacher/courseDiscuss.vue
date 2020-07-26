<template>
  <div id="courseWare">
    <div id="Nav">
      <my-nav :type="1"></my-nav>
    </div>
    <div id="rightSider" @click="tostudent()">
      <div>学生主页</div>
    </div>
    <div id="leftSider">
      <my-left></my-left>
    </div>
    <div id="Content01">
      <div id="checkcourse">
        <my-choose-course></my-choose-course>
      </div>
      <my-discuss></my-discuss>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import LeftSider from './leftSider/leftSider.vue'
import Discuss from './tdiscuss.vue'
import chooseCourse from './chooseCourse/chooseCourse.vue'
import myNav from '../../views/navs/s_nav1.vue'

export default {
  name: 'courseDiscuss.vue',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'leftSiderActive'
    ])
  },
  methods: {
    ...mapMutations([
      'setLeftSider'
    ]),
    pcBtn () {
      this.$router.push('/pCenter')
    },
    tostudent () {
      this.$router.push('/index')
    }
  },
  components: {
    'my-left': LeftSider,
    'my-discuss': Discuss,
    'my-choose-course': chooseCourse,
    'my-nav': myNav
  },
  mounted () {
    this.setLeftSider(3)
  }
}
</script>

<style scoped lang="less">
  #courseWare {
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
    background-color: #f6f6f6;
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

  #leftSider {
    width: 150px;
    height: 450px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: white;
    position: fixed;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  #Content01 {
    width: 70%;
    min-width: 700px;
    max-width: 800px;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  img {
    object-fit: cover;
  }
</style>
