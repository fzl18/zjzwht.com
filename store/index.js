import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import lang from "../lang/index"
Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    state: {
      local:'cn',
      lang,
      skin:1,
      topShow :false,
      leftShow :false,
    },
    mutations
  })
}

export default createStore