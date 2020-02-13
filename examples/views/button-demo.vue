<template>
  <div class="button">
    <div>
      <la-button>default</la-button>
      <la-button type="primary">primary</la-button>
      <la-button type="success">success</la-button>
      <la-button type="info">info</la-button>
      <la-button type="danger">danger</la-button>
      <la-button type="warning">warning</la-button>
    </div>
    <div>
      <la-button disabled>default</la-button>
      <la-button disabled type="primary">primary</la-button>
      <la-button disabled type="success">success</la-button>
      <la-button disabled type="info">info</la-button>
      <la-button disabled type="danger">danger</la-button>
      <la-button disabled type="warning">warning</la-button>
    </div>
    <div>
      <la-button size="lg" type="primary">Primary lg</la-button>
      <la-button type="primary">Primary default</la-button>
      <la-button size="sm" type="primary">Primary sm</la-button>
      <la-button size="xs" type="primary">Primary xs</la-button>
    </div>
    <la-button-group>
      <la-button>default</la-button>
      <la-button type="primary">primary</la-button>
      <la-button>default</la-button>
      <la-button>default</la-button>
      <la-button>default</la-button>
      <la-button>default</la-button>
    </la-button-group>
  </div>
</template>

<script>
  import LaButton from '@p/button/src/main.vue';
  import LaButtonGroup from '@p/button/src/group.vue';
  export default {
    name: "Button",
    components: {
      LaButton,
      LaButtonGroup
    }
  }
</script>
<style scoped>
  .button {
    padding: 50px;
  }
</style>
