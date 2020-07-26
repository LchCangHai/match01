<template>
  <div id="chat">
    <div id="messages">
      <vue-scroll>
        <div class="item my text" v-for="(item, index) in messages"
             :class="{my: currentUser.uid === item.uid,
             other: currentUser.uid !== item.uid}"
             :key="index">
          <div class="userInfo">
            <div>{{item.user.nickname}}</div>
          </div>
          <div class="contentInfo">
            <div class="Text">{{item.content}}</div>
          </div>
        </div>
      </vue-scroll>
    </div>
    <div id="inputBox">
      <div class="BoxTop">
        <v-input type="textarea" v-model="inText" @keyup.enter="submit()"></v-input>
      </div>
      <div class="BoxBottom">
        <div class="BoxIcon">
<!--          <div>-->
<!--            <svg class="icon" aria-hidden="true">-->
<!--              <use xlink:href="#icon-tupian1"></use>-->
<!--            </svg></div>-->
        </div>
        <div class="BoxBtn">
          <v-button type="primary" @click="submit">发送</v-button>
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
      inText: ''
    }
  },
  computed: {
    ...mapState([
      'currentUser',
      'currentUser',
      'messages'
    ])
  },
  methods: {
    ...mapMutations([
      'setcourseInfo'
    ]),
    submit () {
      console.log('submitSend')
      console.log('cid ' + this.$route.params.id)
      console.log('uid ' + this.currentUser.uid)
      this.$socket.emit('send_message', {
        cid: this.$route.params.id,
        uid: this.currentUser.uid,
        content: this.inText
      })
      this.inText = ''
    },
    joinRoom () {
      console.log('joinRoom')
      this.$socket.emit('join_room', {
        cid: this.$route.params.id,
        nickname: this.currentUser.nickname
      })
    },
    getCourse () {
      console.log(this.$route.params.id)
      this.$axios.get('/api/course/' + this.$route.params.id)
        .then(res => {
          this.setcourseInfo(res.data.data)
        }).catch(error => {
          console.log(error)
          this.$message.error('获取课程信息失败')
        })
    }
  },
  sockets: {
    connect: function () {
      console.log('socket connected,心跳包在这？')
    },
    customEmit: function (data) {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    },
    new_message: function (data) {
      console.log('joinroom' + data)
    },
    join_room: function (data) {
      this.$message('[' + data + ']加入房间')
    },
    leave_room: function (data) {
      this.$message('[' + data + ']离开房间')
    },
    get: function (data) {
      console.log('触发了socket事件:' + data)
    }
  },
  mounted () {
    this.getCourse()
    setTimeout(() => {
      this.joinRoom()
    }, 2000)
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
