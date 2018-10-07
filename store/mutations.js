const mutations = {
    changeLang(state,lang) {
      state.local = lang
    },
    toggle(state,type) {
      state[type] = !state[type]
    },
    changeSkin(state,type) {
      state.skin = type
    },
  }
  
  export default mutations