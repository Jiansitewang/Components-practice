<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "tabs",
    props: {
      selected:{
        type: String,
        require: true
      },
      direction:{
        type: String,
        default:'horizontal',
        validator(value){
          return ['horizontal','vertical'].indexOf(value) >= 0
        }
      }
    },
    data(){
      return {
        eventBus: new Vue()
      }
    },
    created(){
      
    },
    provide(){
      return {
        eventBus: this.eventBus
      }
    }
  }
</script>

<style scoped>

</style>
