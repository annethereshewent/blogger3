<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-form lazy-validation @submit.prevent="register()">
          <div class="float-right">
            <v-btn icon @click="closeDialog()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <v-card-title>
            <span class="headline">Sign Up</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.username"
                    label="Username*"
                    required
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.email"
                    :rules="emailRules"
                    label="Email*"
                    required
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.password"
                    label="Password*"
                    type="password"
                    required
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-radio-group v-model="form.gender" row>
                    <v-radio label="Male" value="M" />
                    <v-radio label="Female" value="F" />
                    <v-radio label="Other" value="X" />
                  </v-radio-group>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <div class="pb-12">
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" type="submit">Register</v-btn>
            </v-card-actions>
          </div>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: 'RegisterModal',
  props: ['showDialog'],
  data: () => ({
    dialog: false,
    form: {
      username: '',
      password: '',
      email: '',
      gender: '',
    },
    emailRules: [
      (v) => !!v || 'Please enter a valid email',
      (v) => /.+@.+\..+/.test(v) || 'Please enter a valid email',
    ],
  }),
  watch: {
    showDialog(val) {
      this.dialog = val
    },
  },
  methods: {
    closeDialog() {
      this.dialog = false
      this.$emit('close-dialog', false)
    },
    async register() {
      try {
        const data = await this.$auth.register(this.form)

        if (data.success) {
          this.$router.push({
            path: '/dashboard',
          })
        }
      } catch (err) {
        console.log(err)
        // @TODO: show an error message that something went wrong
      }
    },
  },
}
</script>
