<template>
  <v-footer color="accent lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  name: 'BloggerFooter',
  data: () => ({
    links: ['Home', 'Help', 'Privacy Policy', 'About', 'Contact'],
  }),
}
</script>
