import Vue from 'vue'
import Vuex from 'vuex'
import {refresh24hrTicker} from '../services/data'
import {getStockFromLocal, setStocksToLocal, removeStocksFromLocal, updateStocksLocal} from '../services/local'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isModalActive : false,
    selectedStock : getStockFromLocal() || [],
    isLoading : false,
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
    getLoadingStatu(state){
      return state.isLoading
    }
  },
  mutations: {
    loadingChangeStatu(state,statu){
      state.isLoading = statu
    },
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
      updateStocksLocal(updatedStock)
    },
    removeStock(state,stock){
      state.selectedStock = state.selectedStock.filter((item) => item.symbol !== stock.symbol)
      removeStocksFromLocal(stock)
    }
  },
  actions: {
    addStock({commit,state},stock){
      commit("selectedStock",stock)
      setStocksToLocal(state.selectedStock)
    },
    quantityChange({commit},quantity){
      commit("setStockQuantity",quantity)
    },
    refreshStock({commit,state}){
      commit("loadingChangeStatu",true)
      state.selectedStock.forEach( async (item) => {
        const refreshedStock = await refresh24hrTicker(item.symbol)
        console.log(refreshedStock)
        commit("updateStockQuantity",{stock:refreshedStock[0],quantity:item.quantity})
        commit("loadingChangeStatu",false)
      })
    }
  },
  modules: {
  }
})
