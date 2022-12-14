<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale
} from "chart.js";
import { PolarArea} from 'vue-chartjs'

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
    PolarArea
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
  <PolarArea :data="data" :options="options" />
</template>

<style lang="scss" scoped>
</style>
