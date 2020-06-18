<template>
  <div id="chooseCourse">
    <div class="courseCheck"
         :class="{ toggled : open === false ? true : false}">
      <div class="zhankai" @click="toggle">
        <div v-show="!open">
          <v-icon type="right"></v-icon>
        </div>
        <div v-show="open">
          <v-icon type="down"></v-icon>
        </div>
      </div>
      <div class="courseItem" :class=" { choosed : '12' === '12' ? true : false } ">
        <div>
          <div>熬夜秃头学</div>
        </div>
      </div>
      <div class="courseItem">
        <div>
          <div>自闭学</div>
        </div>
      </div>
      <div class="courseItem">
        <div>
          <div>自闭学</div>
        </div>
      </div>
      <div class="courseItem">
        <div>
          <div>自闭学</div>
        </div>
      </div>
      <div class="courseItem">
        <div>
          <div>自闭学</div>
        </div>
      </div>
      <div class="courseItem">
        <div>
          <div>自闭学</div>
        </div>
      </div>
      <div class="courseItem">
        <div>
          <div>自闭学</div>
        </div>
      </div>
      <div class="courseItem">
        <div>
          <div>自闭学</div>
        </div>
      </div>
      <div class="courseItem">
        <div>
          <div>自闭学</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'chooseCourse.vue',
  data () {
    return {
      open: false
    }
  },
  computed: {
    ...mapState([
    ])
  },
  methods: {
    ...mapMutations([
      'closeAddTEPop'
    ]),
    toggle () {
      this.open = !this.open
    }
  },
  components: {
  },
  mounted () {
    this.setLeftSider(4)
  }
}
</script>

<style scoped lang="less">
  #chooseCourse {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .courseCheck {
    width: 100%;
    min-height: 50px;
    border-radius: 4px;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 30px;
    .zhankai {
      cursor: pointer;
      height: 50px;
      width: 50px;
      margin: 0 5px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      >div {
        i {
          font-size: 25px;
          font-weight: 500;
        }
      }
    }
    .courseItem {
      height: 50px;
      min-width: 100px;
      margin: 0 15px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      >div {
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 35px;
        padding: 0 20px;
        border-radius: 40px;
        border: 1px solid gray;
        box-shadow: 1px 1px 5px 1px rgba(150,150,150,0.3);
        >div {
          font-size: 13px;
        }
      }
      >div:hover {
        font-size: 14px;
      }
      >div:active {
        box-shadow: -1px -1px 5px 1px rgba(150,150,150,0.3);

      }
    }
    .choosed {
      >div {
        border: 1.5px solid #7bd0fc;
      }
    }
  }
  .toggled {
    height: 50px;
    overflow: hidden;
  }
</style>
