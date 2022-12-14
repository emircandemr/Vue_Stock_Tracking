<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)
export default {
  name: 'App',
  components: {
    Pie
  },
  props : {
    data : {
      type : Object,
      default : null
    },
    options : {
      type : Object,
      default : null
    }
  },
}
</script>

<template>
  <Pie :data="data" :options="options" />
</template>

<style lang="scss" scoped>
</style>
