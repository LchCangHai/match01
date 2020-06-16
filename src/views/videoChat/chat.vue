<template>
  <div id="chat">
    <div id="messages">
      <vue-scroll>
        <div class="item my text">
          <div class="userInfo">
            <div>林炜</div>
          </div>
          <div class="contentInfo">
            <div class="Text">我要秃了我要秃了我要秃了我要秃了我要秃了我要秃了我要秃了我要秃了我要秃了我要秃了我要秃了我要秃了我要秃了我要秃了我要秃了我要秃了我要秃了我要秃了</div>
          </div>
        </div>
        <div class="item other img">
          <div class="userInfo">
            <div>乐芃</div>
          </div>
          <div class="contentInfo">
            <div class="Img">
              <img src="../../assets/avatar02.png">
            </div>
          </div>
        </div>
        <div class="item my img">
          <div class="userInfo">
            <div>林炜</div>
          </div>
          <div class="contentInfo">
            <div class="Img">
              <img src="../../assets/avatar02.png">
            </div>
          </div>
        </div>
        <div class="item other text">
          <div class="userInfo">
            <div>乐芃</div>
          </div>
          <div class="contentInfo">
            <div class="contentInfo">
              <div class="Text">我要秃了我要秃了我要秃了我要秃了我要秃了我要秃了我要秃了我要秃了我要秃了我要秃了我要秃了我要秃了我要秃了我要秃了我要秃了我要秃了我要秃了我要秃了</div>
            </div>
          </div>
        </div>
      </vue-scroll>
    </div>
    <div id="inputBox">
      <div class="BoxTop">
        <v-input type="textarea"></v-input>
      </div>
      <div class="BoxBottom">
        <div class="BoxIcon">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-tupian1"></use>
            </svg></div>
        </div>
        <div class="BoxBtn">
          <v-button type="primary">发送</v-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'chat.vue',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
    ])
  },
  methods: {
    ...mapMutations([
    ])
  },
  mounted () {
  }
}
</script>

<style scoped lang="less">
#chat {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

#messages {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
  .item {
    width: 90%;
    margin: 10px 0;
    .userInfo {
      height: 15px;
      margin: 3px 0;
    }
    .contentInfo {
      width: 200px;
      background-color: #f4f4f4;
      border-radius: 4px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      >div {
        width: 95%;
        word-break: break-all;
        margin: 5px 0;
        img {
          width: 100%;
        }
      }
    }
  }
  .my {
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
  }
  .other {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

#inputBox{
  width: 100%;
  height: 120px;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
  .BoxTop {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    textarea {
      width: 90%;
      height: 70px;
      border-radius: 4px;
      background-color: white;
      resize: none;
    }
  }
  .BoxBottom {
    width: 90%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .BoxIcon {
      >div {
        cursor: pointer;
        width: 25px;
        height: 25px;
        svg {
          width: 100%;
          height: 100%;
        }
      }
    }
    .BoxBtn {
    }
  }

  img {
    object-fit: cover;
  }
</style>
