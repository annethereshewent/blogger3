<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-btn color="primary" @click="wut()">Primary</v-btn>
      <v-btn color="accent" @click="hello()">Accent</v-btn>
      <v-btn color="secondary" @click="there()">Secondary</v-btn>
      <v-btn color="info" @click="asdf()">Info</v-btn>
      <v-btn color="warning" @click="asdfasdf()">Warning</v-btn>
      <v-btn color="error" @click="fuck()">Error</v-btn>
      <v-btn color="success" @click="asdfasdfasdf()">Success</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>

