export class Service {
  axios = null
  baseURL = null
  constructor(baseURL, axios, $cookies) {
    this.axios = axios
    this.baseURL = baseURL

    const user = $cookies.get('user')
    if (user != null) {
      this.axios.setHeader('Authorization', `Bearer ${user.token}`)
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