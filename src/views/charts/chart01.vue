
<script>

import { Bar } from 'vue-chartjs'
export default {
  name: 'chat01.vue',
  extends: Bar,
  props: ['chartdata1'],
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.chartdata1, { responsive: true, maintainAspectRatio: false })
  }
}
</script>

<style scoped lang="less">

</style>
