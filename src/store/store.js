import Vue from 'vue'
import Vuex from 'vuex'
import useStockStore from './modules/useStockStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    useStockStore
    }
})
