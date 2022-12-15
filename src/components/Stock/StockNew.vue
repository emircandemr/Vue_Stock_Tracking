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
        this.$store.commit("setSelectedStock", {stock : this.stock , quantity : this.quantity});
      },
    },
    computed:{
      ...mapGetters({
        selectedStock : "getSelectedStock",
      }),
      isAdded(){
        return this.selectedStock.map(stock => stock.symbol).includes(this.stock.symbol)
      }
    }
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
      <Button text="Add" size="10px 40px" :handler="addStock" :clickable="!isAdded" ></Button>
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
    }
  }
  @media screen and (max-width: 768px){
    .stock{
      flex-direction: column;
      height: 150px;
      padding: 1rem 0.5rem;
      margin-bottom: 0.5rem;

      &__name{
        width: 100%;
        height: 30%;
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      &__count{
        width: 50%;
        height: 30%;
        margin: 0 auto 1rem auto;
      }

      &__button{
        width: 100%;
        height: 30%;
      }
    }
  }
</style>
