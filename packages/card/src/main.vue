<template>
  <div class="la-card">
    <div class="la-card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="la-card__body">
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LaCard",
    props: {
      header: String
    }
  }
</script>
<style scoped lang="scss">
  @import "../../../styles/scss/card";
</style>
