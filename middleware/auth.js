export default async function ({ store, redirect, route, app }) {
  if (route.path != '/') {
    if (!store.state.auth.authenticated) {
      let user = fetchUser(app.$cookies)
      if (user == null) {
        redirect('/')
      } else {
        await store.dispatch('auth/fetchPermissions')
        store.commit('auth/setUser', user)
      }
    } else {
      await store.dispatch('auth/fetchPermissions')
    }
  } else {
    if (store.state.auth.authenticated) {
      await store.dispatch('auth/fetchPermissions')
      redirect('/dashboard')
    } else {
      let user = fetchUser(app.$cookies)
      if (user != null) {
        await store.dispatch('auth/fetchPermissions')
        store.commit('auth/setUser', user)

        redirect('/dashboard')
      }
    }
  }
}

function fetchUser($cookies) {
  return $cookies.get('user')
}
