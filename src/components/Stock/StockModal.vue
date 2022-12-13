<script>
import { filter24hrTicker } from '@/services/data';
import StockItem from './StockItem.vue';
import StockNew from './StockNew.vue';

export default{
  components:{
    StockNew
},
  data(){
    return{
      searchInput : "",
      searchedStock : [],
    }
  },
  methods: {
    closeModal(){
      this.$store.commit('modalChangeStatu')
    },
    async searchStock(){
      const result = await filter24hrTicker(this.searchInput)
      .then(res => {
        this.searchedStock = res
        console.log(res)
      })
      // this.searchedStock = this.$store.state.stockList.filter(stock => stock.name.includes(this.searchInput))
    }
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
        <input v-model="searchInput" @change="searchStock"  type="text" placeholder="Search">
      </div>
      <div class="modal__content--stock" >
        <StockNew v-for="stock in searchedStock" :stock="stock" ></StockNew>
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
        }


      }

  }

</style>
