<template>
  <div id="courseWare">
    <div id="Content01">
      <my-discuss></my-discuss>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Discuss from '../../Teacher/tdiscuss.vue'

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
    'my-discuss': Discuss
  },
  mounted () {
  }
}
</script>

<style scoped lang="less">
  #courseWare {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #f6f6f6;
  }

  #Content01 {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  img {
    object-fit: cover;
  }
</style>
