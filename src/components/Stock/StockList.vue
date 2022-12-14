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
      color: #5293ee;
      text-align: center;
      font-size: 2rem;
      font-weight: 600;
    }

  }

</style>
