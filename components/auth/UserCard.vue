<template>
  <v-card width="350px" height="350px">
    <v-img
      :src="user.avatar_src"
      class="white--text align-end"
      width="350px"
      height="300px"
    />
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
