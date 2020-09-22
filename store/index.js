export const state = () => ({
  env: {},
})

export const mutations = {
  SET_ENV(state, env) {
    state.env = env
  },
}

export const getters = {
  get: (state, _, __, rootGetters) => (id) => {
    return state.env
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    if (process.server) {
      commit('SET_ENV', {
        BLOGGER_SERVICE_URL: process.env.BLOGGER_SERVICE_URL,
        BLOGGER_CLIENT_ID: process.env.BLOGGER_CLIENT_ID,
        BLOGGER_CLIENT_SECRET: process.env.BLOGGER_CLIENT_SECRET,
      })
    }
  },
}
