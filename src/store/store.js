import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isModalActive : false,
    selectedStock : [],
    quantity : 1,
  },
  getters: {
    getStocksSymbol(state){
      return state.selectedStock?.map((item) => item.symbol) || ["No Stock Selected"]
    },
    getStocksCount(state){
      return state.selectedStock?.map((item) => item.quantity) || [100]
    },
  },
  mutations: {
    modalChangeStatu(state){
      state.isModalActive = !state.isModalActive
    },
    selectedStock(state,stock){
      const customStock = {...stock, quantity: state.quantity}
      state.selectedStock.push(customStock)
    },
    setStockQuantity(state,quantity){
      state.quantity = quantity
    },
    updateStockQuantity(state,updatedStock){
      const findStock = state.selectedStock.find((item) => item.symbol === updatedStock.stock.symbol)
      findStock.quantity = updatedStock.quantity
    },
    removeStock(state,stock){
      state.selectedStock = state.selectedStock.filter((item) => item.symbol !== stock.symbol)
    }
  },
  actions: {
    addStock({commit},stock){
      commit("selectedStock",stock)
    },
    quantityChange({commit},quantity){
      commit("setStockQuantity",quantity)
    },

  },
  modules: {
  }
})
