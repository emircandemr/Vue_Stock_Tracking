<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import { mapGetters } from 'vuex'

ChartJS.register(ArcElement, Tooltip, Legend)
export default {
  name: 'App',
  components: {
    Pie
  },
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  computed: {
    ...mapGetters( {
      stocksSymbol: 'getStocksSymbol',
      stocksCount: 'getStocksCount'
    }),
    stockData() {
        this.chartData = {
        labels: this.stocksSymbol ,
        datasets: [
          {
            data: this.stocksCount,
            backgroundColor : [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
          }
        ]
      }
      return this.chartData
    }
  },
  mounted() {
    console.log(this.stocksCount)
  }
}
</script>

<template>
  <Pie :data="stockData" :options="options" />
</template>

<style lang="scss" scoped>
</style>
