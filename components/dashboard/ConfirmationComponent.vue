<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card id="confirmation-card">
      <v-card-title>
        <span class="headline">Confirm your account</span>
      </v-card-title>
      <v-card-text>
        <p>
          In order to continue, please check your e-mail to confirm your
          account.
        </p>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: 'ConfirmationComponent',
  props: ['user'],
  data: () => ({
    dialog: true,
  }),
  mounted() {
    // every 5 seconds check to see if user has confirmed account
    const interval = setInterval(async () => {
      const data = await this.$user.checkConfirmation(this.user)

      if (data.confirmed) {
        this.$emit('set-confirmation', true)
        clearInterval(interval)
      }
    }, 5 * 1000)
  },
}
</script>
