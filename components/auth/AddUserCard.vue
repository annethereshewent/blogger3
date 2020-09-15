<template>
  <v-card>
    <v-card-text class="plus-icon">
      <v-icon color="primary" @click="addUser()">mdi-plus-circle</v-icon>
    </v-card-text>
    <v-spacer />
    <v-card-actions class="card-actions justify-center">
      <v-btn text color="secondary" @click="addUser()">Add Existing User</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: 'AddUserCard',
  methods: {
    addUser() {
      // do something
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';
.v-card {
  width: 175px;
  height: 175px;
  @media #{map-get($display-breakpoints, 'md-and-down')} {
    width: 125px;
    height: 125px;
    .v-btn {
      font-size: 10px;
    }
  }
  .plus-icon {
    .v-icon {
      margin-top: 10px;
      margin-left: 30px;
      font-size: 80px !important;
      @media #{map-get($display-breakpoints, 'md-and-down')} {
        margin-left: 15px;
        margin-top: 0px;
        font-size: 64px !important;
      }
    }
    .v-icon.v-icon::after {
      background: none !important;
      opacity: 1 !important;
    }
  }
}

.card-actions {
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>
