<script>
import {  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement,} from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  ArcElement,
);
export default {
  name: 'App',
  components: {
    Doughnut
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
  <Doughnut :data="data" :options="options" />
</template>

<style lang="scss" scoped>
</style>
