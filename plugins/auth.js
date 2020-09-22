import Vue from 'vue'
import { Service } from '~/classes/Service'

class AuthService extends Service {
  constructor(baseUrl, app) {
    super(baseUrl, app)
  }

  async login(email, password) {
    return await this.post(
      `/oauth/token?client_id=${this.store.state.env.BLOGGER_CLIENT_ID}&client_secret=${this.store.state.env.BLOGGER_CLIENT_SECRET}`,
      {
        username: email,
        password,
        grant_type: 'password',
      }
    )
  }

  async register({ username, password, email, gender }) {
    return await this.post('/api/v1/auth/register', {
      username,
      password,
      email,
      gender,
    })
  }
}

export default async ({ app }, inject) => {
  const { store } = app

  const authService = new AuthService(store.state.env.BLOGGER_SERVICE_URL, app)

  Vue.prototype.$auth = authService
  Vue.$auth = authService

  inject('auth', authService)
}
