import Vue from 'vue'
import { Service } from '~/classes/Service'

class UserService extends Service {
  constructor(baseUrl, app) {
    super(baseUrl, app)
  }

  async fetchUserPosts(user) {
    return await this.get('/api/v1/users/dashboard')
  }

  async checkConfirmation(user) {
    return await this.get(`/api/v1/users/${user.id}/confirmations/status`)
  }
}

export default async ({ app }, inject) => {
  const { store } = app

  const userService = new UserService(store.state.env.BLOGGER_SERVICE_URL, app)

  Vue.prototype.$user = userService
  Vue.$user = userService

  inject('user', userService)
}
