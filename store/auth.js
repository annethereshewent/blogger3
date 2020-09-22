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
    state.authenticated = !!user
    state.user = user
    this.$cookies.set('user', user)
  },

  setToken(state, token) {
    state.token = token
    this.$cookies.set('token', token)
  },
}

export const actions = {
  async login({ commit, dispatch }, { email, password }) {
    let result = null
    try {
      result = await this.$auth.login(email, password)
    } catch (err) {
      console.log(err)
    }

    console.log(result)

    if (result != null) {
      commit('setUser', result.user)
      dispatch('setToken', result.access_token)

      return true
    }

    return false
  },

  setToken({ commit }, token) {
    if (process.client) {
      try {
        this.$axios.setHeader('Authorization', `Bearer ${token}`)
        commit('setToken', token)
      } catch (err) {
        console.log(err)
      }
    }
  },
}
