<template>
  <v-card>
    <v-img :src="user.avatar_src" class="white--text align-end" />
    <v-card-actions>
      <v-spacer />
      <v-btn color="secondary" text @click="login()">{{ user.username }}</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      required: true,
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
  }
  .v-img {
    width: 100%;
    height: 125px;
    @media #{map-get($display-breakpoints, 'md-and-down')} {
      height: 75px;
    }
  }
}
</style>
