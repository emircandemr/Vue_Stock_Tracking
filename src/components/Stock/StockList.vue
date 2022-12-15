<script>
  import { mapGetters } from "vuex";
  import StockItem from "./StockItem.vue"
  export default{
    components : {
      StockItem,
    },
    computed : {
      ...mapGetters({
        selectedStock : "getSelectedStock",
      })
    }
  }
</script>

<template>
  <div class="stockList">
    <template v-if="this.selectedStock.length > 0" >
        <StockItem
        v-for="(stock,index) in this.selectedStock"
        :stock="stock"
        :key="index">
      </StockItem>
    </template>
    <template v-else>
      <h1 class="stockList__empty">Stock List is Empty</h1>
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
      color: #28d7be;
      font-size: 2rem;
      font-weight: 600;
    }

  }

</style>
