<template>
  <div class="row" :style="{marginRight: -gutter/2+'px',marginLeft: -gutter/2+'px'}">
    <slot></slot>
  </div>

</template>

<script>
  export default {
    name: "wkcRow",
    props:{
      gutter:{
        type:[Number,String]
      }
    },
    mounted() {
      this.$children.forEach((vm)=>{
        vm.gutter = this.gutter
      })
    }
  }
</script>

<style scoped lang="scss">
  .row{
    display: flex;
  }

</style>