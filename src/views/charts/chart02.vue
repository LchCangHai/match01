
<script>

import { Doughnut } from 'vue-chartjs'
export default {
  name: 'chat01.vue',
  extends: Doughnut,
  props: ['chartdata2'],
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.chartdata2, { responsive: true, maintainAspectRatio: false })
  }
}
</script>

<style scoped lang="less">

</style>
