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
      return state.selectedStock?.map((item) => item.count) || [100]
    },
    getStockQuantity(state){
      return state.quantity
    },
  },
  mutations: {
    modalChangeStatu(state){
      state.isModalActive = !state.isModalActive
    },
    selectedStock(state,stock){
      const customStock = {...stock}
      state.selectedStock.push(customStock)
    },
    setStockQuantity(state,quantity){
      state.quantity = quantity
    },
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
