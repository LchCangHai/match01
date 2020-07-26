
<script>

import { Doughnut } from 'vue-chartjs'
export default {
  name: 'chat03.vue',
  extends: Doughnut,
  props: ['chartdata3'],
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.chartdata3, { responsive: true, maintainAspectRatio: false })
  }
}
</script>

<style scoped lang="less">

</style>
