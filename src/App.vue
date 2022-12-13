<script>
import Header from "./components/Header/Header.vue"
import StockList from "./components/Stock/StockList.vue"
import StockModal from "./components/Stock/StockModal.vue"
import StockPie from "./components/StockChart/StockPie.vue"

export default{
  components : {
    Header,
    StockList,
    StockModal,
    StockPie,
  },
  data() {
      return {
      }
    },
  methods:{
  }
}
</script>


<template>
  <div class="main">
    <div class="main__header">
      <Header></Header>
    </div>
    <div class="main__content">
      <div class="main__content--stock">
        <StockList></StockList>
      </div>
      <div class="main__content--chart">
        <StockPie></StockPie>
      </div>
    </div>
      <StockModal v-if="this.$store.state.isModalActive" ></StockModal>
  </div>
</template>


<style lang="scss">

  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .main {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #121212;

    &__header{
      width: 90%;
      height: 100px;
      margin-top: 2rem;
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
      }


      &--chart{
        width: 50%;
        height: calc(100% - 100px - 2rem);
        margin-top: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

    }

  }

</style>
