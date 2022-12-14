<script>
import { filter24hrTicker } from '@/services/data';
import { mapGetters } from 'vuex';
import StockNew from './StockNew.vue';
import StockItem from './StockItem.vue';
import Loading from '../Loader/Loading.vue';

export default{
  components:{
    StockNew,
    StockItem,
    Loading
},
  data(){
    return{
      searchInput : "ETH",
      searchedStock : [],
    }
  },
  methods: {
    closeModal(){
      this.$store.commit('modalChangeStatu')
      this.$store.commit('loadingChangeStatu',false)
    },
    async searchStock(){
      this.$store.commit('loadingChangeStatu',true)
      const result = await filter24hrTicker(this.searchInput)
      .then(res => {
        this.searchedStock = res.map( stock => {
          return {
            ...stock ,
            isAdded : this.getSelectedStockSymbol.includes(stock.symbol),
            quantity : this.getQuantity[this.getSelectedStockSymbol.indexOf(stock.symbol)]
          }
        })
        this.$store.commit('loadingChangeStatu',false)
      })
    }
  },
  computed:{
      ...mapGetters({
        getSelectedStock : 'getSelectedStock',
        getLoadingStatu : 'getLoadingStatu'
      }),
      getSelectedStockSymbol(){
        return this.getSelectedStock.map(stock => stock.symbol)
      },
      getQuantity(){
        return this.getSelectedStock.map(stock => stock.quantity)
      },
    },
  mounted(){
    this.searchStock() // to show stocks on the screen when the modal is first opened
  }
}
</script>

<template>
  <div class="modal">
    <div class="modal__layer"></div>
    <div class="modal__content">
        <div @click="closeModal" class="modal__content--icon">
          <span class="material-symbols-outlined">
           close
          </span>
        </div>
        <div class="modal__content--search" >
          <input v-model="searchInput" @input="searchStock"  type="text" placeholder="Search Coins..">
        </div>
        <div v-if="this.getLoadingStatu" class="modal__content--loading">
          <Loading></Loading>
        </div>
        <div v-else class="modal__content--stock" >
          <template v-for="stock in searchedStock" :stock="stock">
            <StockItem v-if="stock.isAdded" :stock="stock"> </StockItem>
            <StockNew v-else  :stock="stock"> </StockNew>
          </template>
        </div>
    </div>
  </div>

</template>

<style lang="scss" scoped >
  .modal{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 99;
    &__layer{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0,0,0,0.5);
      }
      &__content{
        width: 45%;
        height: 65%;
        position: relative;
        display: flex;
        flex-direction: column;
        background: #212121;
        color: aliceblue;
        border-radius: 20px;
        padding: 1rem;

        &--icon{
          display: flex;
          justify-content: flex-end;
          align-items: center;
          box-sizing: border-box;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          position: relative;
          top: 0;
        }

        &--search{
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          margin-top: 2rem;
          input{
            width: 100%;
            height: 100%;
            border: none;
            border-radius: 10px;
            padding: 0 1rem;
            font-size: 1rem;
            outline: none;
            background: #121212;
            color: white;
          }
        }

        &--stock{
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          margin-top: 2rem;
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
          }
        }
        &--loading{
          width: 100%;
          height: 100%;
          text-align: center;
        }
      }
  }



  @media screen and (max-width: 1124px){
    .modal{
      &__content{
        width: 60%;
        height: 65%;
      }
    }
  }

  @media screen and (max-width: 768px){
    .modal{
      &__content{
        width: 80%;
        height: 65%;
      }
    }
  }

  @media screen and (max-width: 568px){

    .modal{
      &__content{
        width: 90%;
        height: 65%;
      }
    }

  }


</style>
