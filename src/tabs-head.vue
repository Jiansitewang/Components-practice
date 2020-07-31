<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name="extraAction"></slot>
  </div>
</template>

<script>
  export default {
    name: "tabs-head",
    inject: ['eventBus'],
  }
</script>

<style scoped lang="scss">

</style>
