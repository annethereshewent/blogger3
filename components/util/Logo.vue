<template>
  <h1 id="title">
    <span class="bracket mr-1">[</span>
    <span class="title-text mr-1">blogger</span>
    <span class="bracket">]</span>
    <span class="period">.</span>
  </h1>
</template>
<script>
export default {
  name: 'Logo',
}
</script>
<style lang="scss" scoped>
@import '~/assets/_colors';
// @import url('https://fonts.googleapis.com/css2?family=Ranchers&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2:wght@800&display=swap');
#title {
  .title-text {
    // font-family: 'Ranchers';
    font-family: 'Baloo Tammudu 2';
    // font-weight: 400;
    font-weight: 800;
    font-size: 2.2rem;
    color: white;
  }
  .bracket {
    color: $blogger_primary;
  }
  .period {
    color: $blogger_secondary;
  }
}
</style>
