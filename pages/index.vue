<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <!-- add account / login to existing account area -->
        <v-btn color="primary" @click="butt">primary</v-btn>
        <v-btn color="secondary" @click="butt">secondary</v-btn>
        <v-btn color="success" @click="butt">success</v-btn>
        <v-btn color="warning" @click="butt">warning</v-btn>
        <v-btn color="accent" @click="butt">accent</v-btn>
        <v-btn color="error" @click="butt">error</v-btn>
      </v-col>
      <v-col cols="6">
        <!-- login panel -->
        <v-row>
          <v-col cols="9" class="mt-16 mx-auto">
            <v-card id="login-panel" dark>
              <v-text-field v-model="email" color="accent" label="Email" />
              <v-text-field
                v-model="password"
                color="accent"
                label="Password"
              />
              <div class="mt-4">
                <v-btn
                  color="primary"
                  class="ml-6 mb-8"
                  width="90%"
                  @click="login()"
                >
                  Sign In
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
  data: () => ({
    email: '',
    password: '',
  }),
}
</script>
<style lang="scss" scoped>
#login-panel {
  .v-text-field {
    margin: auto;
    max-width: 80%;
  }
}
</style>
