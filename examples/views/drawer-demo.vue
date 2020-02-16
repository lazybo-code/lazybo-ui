<template>
  <div>
    <la-drawer
      v-model="show"
      direction="ttb"
      :bottom="40"
      :body-padding="0"
      background-color="rgba(0,0,0,.9)"
      wrapperClosable>
      嘿嘿嘿嘿
    </la-drawer>
    <la-drawer
      v-model="show"
      direction="btt"
      :top="40"
      :body-padding="0"
      background-color="rgba(0,0,0,.9)"
      wrapperClosable>
      嘿嘿嘿嘿
    </la-drawer>
  </div>
</template>

<script>
  import LaDrawer from '@p/drawer/src/main.vue'
  export default {
    data: () => ({
      show: true,
    }),
    watch: {
      show() {
        console.log(this.show);
        if (!this.show) {
          setTimeout(() => this.show = !this.show, 3000);
        }
      }
    },
    created() {
      // setInterval(() => this.show = !this.show, 3000);
    },
    methods: {

    },
    components: {
      LaDrawer
    },
  }
</script>
<style scoped>

</style>
