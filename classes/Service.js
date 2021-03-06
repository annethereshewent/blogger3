export class Service {
  axios = null
  baseURL = null
  store = null
  constructor(baseURL, { $axios, $cookies, store }) {
    this.axios = $axios
    this.baseURL = baseURL
    this.store = store

    const token = $cookies.get('token')
    if (token != null) {
      this.axios.setHeader('Authorization', `Bearer ${token}`)
    }
  }

  async get(path) {
    let result = await this.axios.get(`${this.baseURL}${path}`)

    return result.data
  }

  async post(path, data = null) {
    let result = await this.axios.post(`${this.baseURL}${path}`, data)

    return result.data
  }

  async delete(path, data = null) {
    let result = await this.axios.delete(`${this.baseURL}${path}`, {
      data,
    })

    return result.data
  }
}
