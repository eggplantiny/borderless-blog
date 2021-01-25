
export const state = () => ({
  dark: false
})

export const mutations = {
  DARK (state, value) {
    state.darkMode = value
  }
}

export const actions = {
  toggleDark (params) {
    const { commit, getters } = params
    console.log(params)
    const dark = getters.dark === true
    commit('DARK', !dark)
    localStorage.setItem('dark', `${!dark}`)
  },
  fetchDark ({ commit }) {
    const dark = localStorage.getItem('dark') === 'true'
    commit('DARK', dark)
  }
}

export const getters = {
  dark: state => state.dark
}
