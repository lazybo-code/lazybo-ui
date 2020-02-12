<template>
  <button class="lazy-button">
    <slot/>
  </button>
</template>

<script>
  export default {
    name: 'LaButton',
    props: {},
    data: () => ({
      title: '',
    }),
    computed: {},
    methods: {}
  }
</script>
<style scoped lang="scss">
  @import "../../../styles/scss/button";
</style>
