<template>
  <div id="signUp">
    <div class="Ticon">
      <div id="backIcon" class="iconBtn" @click="loginPop()"><v-icon class="my-icon1" type="left"></v-icon></div>
      <div id="closeIcon" class="iconBtn" @click="closeLogin()"><v-icon class="my-icon1" type="close"></v-icon></div>
    </div>

  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'signUp.vue',
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
  }
}
</script>

<style scoped lang="less">
  #signUp {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  .Ticon {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 30px;
    margin: 0;
    padding: 0;
  }
  .iconBtn {
    position: relative;
    cursor: pointer;
    width: 30px;
    height: 30px;
    .my-icon1 {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 20px;
    }
  }
  .iconBtn:hover {
    background-color: #108ee9;
    color: white;
  }

  .iconBtn:active {
    background-color: #49a9ee;
  }
</style>
