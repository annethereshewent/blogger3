<template>
  <client-only>
    <v-app dark>
      <v-main>
        <v-container>
          <nuxt />
        </v-container>
      </v-main>
      <blogger-footer />
    </v-app>
  </client-only>
</template>
<style lang="scss" scoped>
@import '~/assets/theme.scss';

.theme--dark.v-application {
  background: $blogger_background_dark;
}
</style>
