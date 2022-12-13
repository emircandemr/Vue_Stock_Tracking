<script>
  import StockItem from "./StockItem.vue"
  export default{
    components : {
      StockItem,
    },
    data() {
      return {

      }
    }
  }


</script>

<template>
  <div class="stockList">
    <template v-if="this.$store.state.selectedStock.length > 0" >
      <StockItem v-for="stock in this.$store.state.selectedStock" :stock="stock" ></StockItem>
    </template>
    <template v-else>
      <h1>Stock List Empty</h1>
    </template>
  </div>

</template>

<style lang="scss" scoped>
  .stockList {
    width: 90%;
    height: 100%;
  }

</style>
