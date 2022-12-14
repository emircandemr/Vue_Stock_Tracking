<script>
import { Chart as ChartJS,Title,Tooltip,Legend,BarElement,CategoryScale,
  LinearScale,LineElement,PointElement,ArcElement,RadialLinearScale } from 'chart.js'
import { Bar } from 'vue-chartjs'

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
  RadialLinearScale
);
export default {
  name: 'App',
  components: {
    Bar
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
  <Bar :data="data" :options="options" style="width: 60%; height: 60%;"/>
</template>

<style lang="scss" scoped>
</style>
