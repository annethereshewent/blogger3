export default async function ({ store, redirect, route, app }) {
  if (route.path != '/') {
    if (!store.state.auth.authenticated) {
      let user = fetchUser(app.$cookies)
      if (user == null) {
        redirect('/')
      } else {
        store.commit('auth/setUser', user)
      }
    }
  } else {
    if (store.state.auth.authenticated) {
      redirect('/dashboard')
    } else {
      let user = fetchUser(app.$cookies)
      if (user != null) {
        store.commit('auth/setUser', user)

        redirect('/dashboard')
      }
    }
  }
}

function fetchUser($cookies) {
  return $cookies.get('user')
}
