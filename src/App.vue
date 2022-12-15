<script>
import Header from "./components/Header/Header.vue"
import StockList from "./components/Stock/StockList.vue"
import StockModal from "./components/Stock/StockModal.vue"
import StockCharts from "./components/StockChart/StockCharts.vue";
import Loading from "./components/Loader/Loading.vue";
import { mapGetters } from "vuex";

export default{
  components : {
    Header,
    StockList,
    StockModal,
    StockCharts,
    Loading
  },
  data(){
    return {
      refreshInterval : null,
    }
  },
  computed:{
      ...mapGetters({
        getLoadingStatu : 'getLoadingStatu',
        getStocksSymbol : 'getStocksSymbol',
        getModalStatu : 'getModalStatu',
      }),
    },
  methods : {
    refreshStocks20Min(){
        this.$store.dispatch("refreshStock");
    }
  },
  created(){
    this.refreshInterval = setInterval(this.refreshStocks20Min, 1200000);
  },
  destroyed(){
    clearInterval(this.refreshInterval);
  }
}
</script>


<template>
  <div class="main">
    <div class="main__title">
      <img class="main__logo" src="./assets/equota.png" /></div>
    <div class="main__header">
      <Header></Header>
    </div>
      <div v-if="this.getLoadingStatu">
        <Loading ></Loading>
      </div>
    <div v-else class="main__content">
      <div class="main__content--stock">
        <StockList></StockList>
      </div>
      <div class="main__content--chart">
        <StockCharts></StockCharts>
      </div>
    </div>
      <StockModal v-if="this.getModalStatu" ></StockModal>
  </div>
</template>


<style lang="scss">

  body{
    margin: 0;
    padding: 0;
    height: 100vh;
    background-color: #121212;
    box-sizing: border-box;
  }
  .main {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title{
      width: 100%;
      text-align: center;
      color: #5293ee;
      margin-top: 1.5rem;
      letter-spacing: 2px;
      font-weight: 600;
    }

    &__header{
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #212121 ;
    }

    &__content{
      width: 90%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;


      &--stock{
        width: 50%;
        height: calc(100% - 100px);
        margin-top: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: start;
        border-right: 1px solid #212121 ;
        overflow-y: auto;

        &::-webkit-scrollbar {
            width: 6px;
        }

       &::-webkit-scrollbar-track {
          box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        }

        &::-webkit-scrollbar-thumb {
          background-color: #28d7be;
          outline: 1px solid #121212;
          border-radius: 20px;
      }}
      &--chart{
        width: 50%;
        height: calc(100% - 100px);
        margin-top: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .main{
      &__content{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &--stock{
          width: 100%;
          height: 50%;
          border-right: none;
          justify-content: center;
          border-bottom: 1px solid #212121 ;
        }
        &--chart{
          width: 100%;
          height: 50%;
        }
      }
    }
  }
</style>
