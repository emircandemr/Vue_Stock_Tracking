
import {getStockFromLocal, setStocksToLocal, removeStocksFromLocal, updateStocksLocal} from '../../services/local'
import {refresh24hrTicker} from '../../services/getStocksData'

const state = {
  isModalActive : false,
  selectedStock : getStockFromLocal() || [],
  isLoading : false,
}

const getters = {
  getStocksSymbol(state){
    return state.selectedStock?.map((item) => item.symbol)
  },
  getStocksCount(state){
    return state.selectedStock?.map((item) => item.quantity)
  },
  getSelectedStock(state){
    return state.selectedStock
  },
  getLoadingStatu(state){
    return state.isLoading
  },
  getModalStatu(state){
    return state.isModalActive
  }
}

const mutations = {
  loadingChangeStatu(state,statu){
    state.isLoading = statu
  },
  modalChangeStatu(state){
    state.isModalActive = !state.isModalActive
  },
  setSelectedStock(state,customStock){
    state.selectedStock.push({...customStock.stock, quantity:customStock.quantity })
    setStocksToLocal(state.selectedStock)
  },
  updateStock(state,updatedStock){
    const findStock = state.selectedStock.find((item) => item.symbol === updatedStock.stock.symbol)
    findStock.quantity = updatedStock.quantity
    updateStocksLocal(updatedStock)
  },
  removeStock(state,stock){
    state.selectedStock = state.selectedStock.filter((item) => item.symbol !== stock.symbol)
    removeStocksFromLocal(stock)
  }
}

const actions = {
  refreshStock({commit,state}){
    commit("loadingChangeStatu",true)
    state.selectedStock.forEach( async (item) => {
    const refreshedStock = await refresh24hrTicker(item.symbol)
    commit("updateStock",{stock:refreshedStock[0],quantity:item.quantity})
    commit("loadingChangeStatu",false)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
