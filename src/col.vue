<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>

</template>

<script>
  export default {
   name: "wkcCol",
    props:{
     span:{
       type:[Number,String]
     },
     offset:{
       type:[Number,String]
     }
    },
    data(){
     return{
       gutter: 0
     }
    },
    computed:{
     colClass(){
       let {span,offset} = this
       return [span && `col-${span}`,offset && `offset-${offset}`]
     },
     colStyle(){
       return{
         paddingLeft: this.gutter/2 + 'px',
         paddingRight: this.gutter/2 + 'px'
       }
     }
    }
  }

</script>

<style scoped lang="scss">
  .col{
    height: 100px;
    width: 50%;
    border: 1px solid red;

    $class-prefix: col-;
      // loops through 24 times
      @for $n from 1 through 24 {

        // for each $col-#{n}
        &.#{$class-prefix}#{$n} {

          width: ($n/24)*100%
        }
      }
    $class-prefix: offset-;
      // loops through 24 times
      @for $n from 1 through 24 {

        // for each $col-#{n}
        &.#{$class-prefix}#{$n} {

          margin-left: ($n/24)*100%
        }
      }
  }

</style>