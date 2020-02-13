<template>
  <button :disabled="disabled" :class="className" @click="onClick">
    <slot/>
    <i v-if="loading" class="la-icon-loading"/>
  </button>
</template>

<script>
  export default {
    name: 'LaButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: ''
      },
      disabled: Boolean,
      loading: Boolean
    },
    computed: {
      className() {
        let cls = {};
        cls['la-button'] = true;
        cls[`la-button-${this.type}`] = this.type !== 'default';
        cls[`la-button-${this.size}`] = this.size.trim().length > 0;
        return cls;
      }
    },
    methods: {
      onClick(evt) {
        this.$emit('click', evt);
      },
    }
  }
</script>
<style scoped lang="scss">
  @import "../../../styles/scss/button";
</style>
