<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <div v-if="confirmed">
          successfully authenticated! your user is:
          <div>{{ user }}</div>
        </div>
        <div v-else>
          <confirmation-component
            :user="user"
            @set-confirmation="confirmed = $event"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
const NOT_CONFIRMED = 100
export default {
  middleware: ['auth'],
  layout: 'dashboard',
  data: () => ({
    confirmed: true,
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
            this.confirmed = false
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
