import Vue from 'vue'
import { Service } from '~/classes/Service'

class AuthService extends Service {
  constructor(baseUrl, $axios, $cookies) {
    super(baseUrl, $axios, $cookies)
  }

  async login(email, password) {
    return this.post('/oauth/token', {
      username: email,
      password,
      grant_type: 'password',
    })
  }
}

export default async ({ app }, inject) => {
  const { $axios, store, $cookies } = app

  const authService = new AuthService(
    store.state.env.BLOGGER_SERVICE_URL,
    $axios,
    $cookies
  )

  Vue.prototype.$auth = authService
  Vue.$auth = authService

  inject('auth', authService)
}
