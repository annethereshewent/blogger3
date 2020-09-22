<template>
  <div>
    <div v-if="!not_confirmed">
      successfully authenticated! your user is:
      <div>{{ user }}</div>
    </div>
    <div v-else>
      <!-- prettier was being super annoying -->
      <!-- prettier-ignore -->
      User is not confirmed yet! Please check your email and confirm your user account.
    </div>
  </div>
</template>
<script>
const NOT_CONFIRMED = 100
export default {
  middleware: ['auth'],
  data: () => ({
    not_confirmed: false,
  }),
  computed: {
    user() {
      return this.$store.state.auth.user
    },
  },
  async mounted() {
    try {
      const data = await this.$user.fetchUserPosts(this.user)
    } catch (err) {
      console.log(err)
      if (err.response != null) {
        const response = err.response
        if (response.status == 404) {
          // user not found, redirect back to login page and reset cookies
          this.$store.commit('setUser', null)
          this.$store.dispatch('setToken', null)
          this.$router.push({
            path: '/',
          })
        } else if (response.status == 400) {
          const data = err.response.data
          if (data.code == NOT_CONFIRMED) {
            // show modal that user isn't confirmed yet.
            this.not_confirmed = true
          }
        }
      }
    }
  },
  methods: {
    //
  },
}
</script>
