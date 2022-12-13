import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isModalActive : false,
    selectedStock : [],
  },
  getters: {
    getStocksSymbol(state){
      return state.selectedStock?.map((item) => item.symbol) || ["No Stock Selected"]
    },
    getStocksCount(state){
      return state.selectedStock?.map((item) => item.quantity) || [100]
    },
    getSelectedStock(state){
      return state.selectedStock
    },
  },
  mutations: {
    modalChangeStatu(state){
      state.isModalActive = !state.isModalActive
    },
    selectedStock(state,customStock){
      state.selectedStock.push({...customStock.stock, quantity:customStock.quantity })
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
