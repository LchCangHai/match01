<template>
  <div id="confirm">
    <div class="Ticon">
      <!--      <div id="backIcon" class="iconBtn" @click="loginPop()"><v-icon class="my-icon1" type="left"></v-icon></div>-->
      <div id="closeIcon" class="iconBtn" @click="closePop02()"><v-icon class="my-icon1" type="close"></v-icon></div>
    </div>
    <div id="title">学校认证</div>
    <div class="hrr"></div>
    <div id="content">
      <v-input class="loginIn" placeholder="学校"></v-input>
      <v-input class="loginIn" placeholder="学号"></v-input>
      <v-input class="loginIn" placeholder="认证码"></v-input>
      <v-button class="loginBtn" type="primary">完成认证</v-button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'confirm.vue',
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
      'closePop02'
    ])
  },
  components: {
  }
}
</script>

<style scoped lang="less">
#confirm {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.Ticon {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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
#title{
  color: black;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
}

.hrr {
  height: 0;
  width: 90%;
  border-bottom: 1px solid #d6d6d6;
  margin-top: 10px;
}

#content{
  width: 100%;
  margin: 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .loginIn{
    margin-top: 20px;
    width: 75%;
    height: 30px;
  }
  .loginBtn {
    margin-top: 20px;
    border-radius: 50px;
    width: 75%;
  }
  #tips{
    font-size: 10px;
    width: 75%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 5px 2px;
    >span {
      cursor: pointer;
    }
    >span:hover {
      color: black;
    }
    >span:active {
      text-decoration: underline;
    }
  }
}

#foot {
  font-size: 12px;
  margin-top: 10px;
  >span {
    cursor: pointer;
  }
  >span:hover {
    color:black;
  }
  >span:active {
    text-decoration: underline;
  }
}

</style>
