<template>
  <div>
    successfully authenticated! your user is:
    <div>{{ user }}</div>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.auth.user
    },
  },
}
</script>
