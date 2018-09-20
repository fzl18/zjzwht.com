const mutations = {
    changLang(state,lang) {
      state.lang = lang
    },
    toggle(state,type) {
      state[type] = !state[type]
    },
  }
  
  export default mutations