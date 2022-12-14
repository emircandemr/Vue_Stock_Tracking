<script>
import StockBar from "./StockBar.vue"
import StockPie from "./StockPie.vue"
import StockDoughnut from "./StockDoughnut.vue"
import StockRadar from "./StockRadar.vue"
import Button from "../Shared/Button.vue"
import { mapGetters } from "vuex";


export default{
  components: {
    Button,
    StockBar,
    StockPie,
    StockDoughnut,
    StockRadar
  },
  data() {
      return {
        buttons : [
          {
            id : 1,
            text : "Pie",
            active : true,
          },
          {
            id : 2 ,
            text : "Bar",
            active : false,
          },
          {
            id : 3,
            text : "Doughnut",
            active : false,
          },
          {
            id : 4,
            text : "Radar",
            active : false,
          }
        ],
        options: {
        responsive: true,
        maintainAspectRatio: false,
      }
      }
    },

    methods: {
      buttonHandler(id) {
        this.buttons.forEach(btn => {
          if(btn.id === id) {
            btn.active = true
          }
          else{

            btn.active = false
          }
          console.log(btn.active)
        })
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
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 49, 137, 0.5)',
              'rgba(255, 205, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(255, 159, 64, 0.2)'
            ],
          }
        ]
      }
      return this.chartData
    }
  },

}
</script>

<template>
    <div class="stockChart">
      <div class="stockChart__btn">
        <Button v-for="button in buttons" :handler="() => buttonHandler(button.id)" :text="button.text" :isClicked="button.active" >
        </Button>
      </div>
      <div class="stockChart__content">
        <div>
          <StockPie v-if="buttons[0].active" :data="stockData" :options="options" ></StockPie>
          <StockBar v-if="buttons[1].active" :data="stockData" :options="options" ></StockBar>
          <StockDoughnut v-if="buttons[2].active" :data="stockData" :options="options"></StockDoughnut>
          <StockRadar v-if="buttons[3].active" :data="stockData" :options="options"></StockRadar>

        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>

  .stockChart{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__btn{
      width: 60%;
      display: flex;
      gap: 1rem;
    }

    &__content{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      div{
        width: 85%;
        height: 85%;
      }

    }
  }

  @media only screen and (min-device-width : 768px) and (max-device-width : 1124px){
    .stockChart{
      &__btn{
        width: 80%;
        margin-top: 1rem;

      }
    }
  }

  @media only screen and (min-device-width : 568px) and (max-device-width : 768px){
    .stockChart{
      &__btn{
        width: 100%;
        margin-top: 1rem;
      }
    }
  }

  @media only screen and (min-device-width : 320px) and (max-device-width : 568px){
    .stockChart{
      &__btn{
        width: 100%;
        margin-top: 1rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }
    }
  }

</style>
