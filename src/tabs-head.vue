<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actionWrapper">
      <slot name="extraAction"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabs-head",
    inject: ['eventBus'],
  }
</script>

<style scoped lang="scss">
  $tab-height: 40px;
  .tabs-head{
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    >.actionWrapper{
      margin-left: auto;
    }
  }

</style>
