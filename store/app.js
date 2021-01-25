
export const state = () => ({
  dark: false
})

export const mutations = {
  DARK (state, value) {
    state.dark = value
  }
}

export const actions = {
  toggleDark ({ commit }) {
    const dark = localStorage.getItem('dark') === 'true'
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
