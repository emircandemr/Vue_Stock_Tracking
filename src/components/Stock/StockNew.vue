<script>
import { mapGetters } from "vuex";
import Button from "../Shared/Button.vue"
  export default{
    components:{
      Button
    },
    props : {
      stock : {
        type : Object,
        required : false
      }
    },
    data(){
      return {
        quantity : 1
      }
    },
    methods: {
      addStock() {
        this.$store.dispatch("addStock", {stock : this.stock , quantity : this.quantity});
      },
    },
  }

</script>

<template>
  <div class="stock">
    <div class="stock__name">
      <span>{{stock.symbol}} - {{stock.lastPrice}}</span>
    </div>
    <div class="stock__count">
      <input type="number" v-model="quantity" >
    </div>
    <div class="stock__button">
      <Button text="Add" size="10px 40px" :handler="addStock" ></Button>
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
      width: 100px;
      height: 25px;
      display: flex;
      align-items: center;
      margin-right: 2rem;
      input{
        width: 100%;
        height: 100%;
        padding: 0 5px;
        border-radius: 8px;
        border: none;
        outline: none;
        font-weight: 800;
        color: #000;
      }

    }

    &__button{
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

  }


</style>
