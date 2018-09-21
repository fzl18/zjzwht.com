const mutations = {
    changeLang(state,lang) {
      state.local = lang
    },
    toggle(state,type) {
      state[type] = !state[type]
    },
  }
  
  export default mutations