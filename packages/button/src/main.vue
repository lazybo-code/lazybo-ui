<template>
  <div class="lazy-button">
    {{title}}
  </div>
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
  .lazy-button {
    color: #fff;
    background: #2c3e50;
  }
</style>
