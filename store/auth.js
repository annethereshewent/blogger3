export const state = () => ({
  authenticated: false,
  user: null,
  userID: null,
  token: null,
  accounts: [],
})

export const mutations = {
  // some stuff
  setUser(state, user) {
    state.user = user
  },

  setToken(state, token) {
    state.token = token
  },
}

export const actions = {
  async login({ commit }, { email, password }) {
    let result = null
    try {
      result = await this.$auth.login(email, password)
    } catch (err) {
      console.log(err)
    }

    if (result != null) {
      this.$cookies.set('user', result.user)
      this.$cookies.set('token', result.access_token)

      commit('setUser', result.user)
      commit('setToken', result.access_token)

      return true
    }

    return false
  },
}
