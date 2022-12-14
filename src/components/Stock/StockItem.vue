<script>
  import Button from "../Shared/Button.vue"
  export default{
    components:{
      Button
    },
    props : {
     stock: {
       type : Object,
       required : false
     }
    },
    methods : {
      updateStock(e){
        this.$store.commit("updateStockQuantity", {stock : this.stock, quantity : e.target.value})
      },
      removeStock(){
        this.$store.commit("removeStock", this.stock)
      }
    }
  }
</script>

<template>
  <div class="stock">
    <div class="stock__name">
      <span>{{stock.symbol}}</span>
      <span>{{stock.lastPrice}} - {{stock.weightedAvgPrice}}</span>
    </div>
    <div class="stock__count">
      <input type="number" :value="stock.quantity" @input="updateStock" >
    </div>
    <div class="stock__button">
      <Button text="Update"  size="10px 12px"></Button>
      <Button text="Remove" :handler="removeStock" size="10px 12px"></Button>
    </div>
  </div>
</template>


<style lang="scss" scoped>

  .stock{
    width: 95%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 2px solid #121212;
    border-radius: 1rem;
    color: white;
    background-color: #212121;

    &__name{
      width: 30%;
      height: 100%;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      align-items: flex-start;
      justify-content: center;

      span{
        font-size: 14px;
        margin-top: 5px;
      }
    }

    &__count{
      width: 60px;
      height: 25px;
      margin-right: 2rem;
      input{
        width: 100%;
        height: 100%;
        border-radius: 8px;
        border: none;
        outline: none;
        font-weight: 800;
        padding: 0 5px;
        color: #000;
      }
    }

    &__button{
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      gap: 0.5rem;
    }

  }


</style>
