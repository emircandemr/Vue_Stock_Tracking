<script>
import StockNew from './StockNew.vue';
import StockItem from './StockItem.vue';
  export default {
    components:{
      StockNew,
      StockItem,
    },
    props : {
      stock : {
        type : Object,
        required : false
      }
    },
  }
</script>

<template>
  <div class="content">
      <StockItem v-if="stock.isAdded" :stock="stock" ></StockItem>
      <StockNew v-else  :stock="stock"  ></StockNew>
  </div>
</template>


<style lang="scss" scoped>

</style>
