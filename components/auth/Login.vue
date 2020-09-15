<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <!-- add account / login to existing account area -->
        <logo />
        <v-row>
          <v-col v-for="account in accounts" :key="account.id">
            <user-card :user="account" />
          </v-col>
          <v-col>
            <add-user-card />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <!-- login panel -->
        <v-row>
          <v-col cols="9" class="mt-16 mx-auto">
            <v-card id="login-panel" dark>
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                @submit.prevent="validate()"
              >
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  color="accent"
                  label="Email"
                />
                <v-text-field
                  v-model="password"
                  color="accent"
                  type="password"
                  label="Password"
                />
                <div class="mt-4">
                  <v-btn
                    color="primary"
                    rounded
                    class="ml-6 mb-6"
                    width="90%"
                    type="submit"
                  >
                    Sign In
                  </v-btn>
                </div>
              </v-form>
              <div class="links pb-4">
                <router-link class="blogger-link" to="/forgot-password">
                  Forgot password?
                </router-link>
              </div>
              <v-divider />
              <div class="mt-4 text-center pb-4">
                <v-btn
                  color="secondary"
                  rounded
                  width="50%"
                  @click="register()"
                >
                  Sign Up
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'Login',
  data: () => ({
    email: '',
    password: '',
    emailRules: [
      (v) => !!v || 'Please enter a valid email',
      (v) => /.+@.+\..+/.test(v) || 'Please enter a valid email',
    ],
    valid: false,
    error: null,
  }),
  computed: {
    accounts() {
      return this.$store.state.auth.accounts
    },
  },
  methods: {
    login() {
      // do something
    },
    register() {
      // do something
    },
    validate() {
      console.log('validating...')
      if (this.$refs.form.validate()) {
        this.error = null
        this.login()
      }
    },
  },
}
</script>
<style lang="scss" scoped>
#login-panel {
  .v-text-field {
    margin: auto;
    max-width: 80%;
  }
  .links {
    text-align: center;
  }
}
</style>
