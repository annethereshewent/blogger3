<template>
  <v-card width="175px" height="175px">
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
.plus-icon {
  .v-icon {
    margin-top: 10px;
    margin-left: 30px;
    font-size: 80px !important;
    transition: none;
    ::after {
      background: none;
      opacity: 1;
    }
  }
}
.card-actions {
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>
