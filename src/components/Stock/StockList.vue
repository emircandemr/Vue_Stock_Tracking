<script>
  import StockItem from "./StockItem.vue"
  export default{
    components : {
      StockItem,
    },
  }
</script>

<template>
  <div class="stockList">
    <template v-if="this.$store.state.selectedStock.length > 0" >
      <StockItem v-for="stock in this.$store.state.selectedStock" :stock="stock" ></StockItem>
    </template>
    <template v-else>
      <h1 class="stockList__empty">Stock List Empty</h1>
    </template>
  </div>
</template>

<style lang="scss" scoped>
  .stockList {
    width: 90%;
    height: 100%;

    &__empty{
      width: 100%;
      height: calc(100% - 100px);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #5293ee;
      font-size: 2rem;
      font-weight: 600;
    }

  }

</style>
