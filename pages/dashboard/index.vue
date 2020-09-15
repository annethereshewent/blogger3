<template>
  <div>
    successfully authenticated! your user is:
    <div>{{ user }}</div>
  </div>
</template>
<script>
export default {
  middleware: ['auth'],
  computed: {
    user() {
      return this.$store.state.auth.user
    },
  },
}
</script>
