
export const state = () => ({
  darkMode: false
})

export const mutations = {
  darkMode (state, value) {
    state.darkMode = value
  }
}

export const actions = {
  toggleDarkMode ({ commit }, value = true) {
    commit('darkMode', value)
  }
}

export const getters = {
  darkMode: state => state.darkMode
}
