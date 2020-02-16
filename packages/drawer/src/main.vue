<template>
  <transition
    name="la-drawer-fade">
    <div
      class="la-drawer_wrapper"
      :style="{
        top: `${top}px`,
        left: `${left}px`,
        right: `${right}px`,
        bottom: `${bottom}px`,
        color
      }"
      v-show="show"
      :class="show ? 'la-drawer__open' : ''">
      <div class="la-drawer_content" @click.self="wrapperClick">
        <div
          class="la-drawer_body"
          :class="direction"
          :style="{
            padding: `${bodyPadding}px`,
            height: `${bodyHeight}px`,
            borderColor,
            backgroundColor,
          }">
          <slot/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'LaDrawer',
    model: {
      prop: 'show',
      event: 'showEvent'
    },
    props: {
      show: Boolean,
      direction: {
        type: String,
        default: 'ltr',
        validator(val) {
          return ['ltr', 'rtl', 'ttb', 'btt'].indexOf(val) !== -1;
        }
      },
      wrapperClosable: Boolean,
      top: Number,
      left: Number,
      right: Number,
      bottom: Number,
      bodyPadding: {
        type: Number,
        default: 20
      },
      bodyHeight: {
        type: Number,
        default: 40
      },
      borderColor: String,
      backgroundColor: String,
      color: String
    },
    data: () => ({

    }),
    computed: {},
    methods: {
      wrapperClick() {
        if (this.wrapperClosable) this.$emit('showEvent', false)
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../../../styles/scss/drawer";
</style>
