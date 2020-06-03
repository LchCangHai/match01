<template>
  <div id="fofilemanage">
    fileManager
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'fileManager.vue',
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
  components: {
  }
}
</script>

<style scoped lang="less">
#fofilemanage {
  position: relative;
  height: 100%;
  width: 70%;
  min-width: 700px;
  max-width: 800px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
