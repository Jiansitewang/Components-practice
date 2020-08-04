<template>
  <div class="demo">
    <h2>📌简单用法</h2>
    <p>预览</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-button @click="showToast1">上方弹出</w-button>
        <w-button @click="showToast2">中间弹出</w-button>
        <w-button @click="showToast3">下方弹出</w-button>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <!--<div class="code-user-desc">-->
          <!--组件描述说明-->
          <!--</div>-->
          <pre v-highlightjs class="pre"><code class="vue">{{codeShow}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)" ref="xxx">
        <w-icon class="icon-down" :name="isShow[0] === false ? 'down' : 'up'"></w-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <h3>attributes</h3>
    <p>组件参数说明后期扩展</p>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Toast from '../../../src/toast'
  import plugin from '../../../src/plugin'
  import Button from '../../../src/button'
  import Icon from '../../../src/icon'
  import VueHighlightJS from 'vue-highlightjs';
  import 'highlight.js/styles/atom-one-light.css';
  import mixin from '../mixin'
  Vue.use(VueHighlightJS);
  Vue.use(plugin);

  export default {
    name: 'demo',
    mixins: [mixin],
    components: {
      'w-toast': Toast,
      'w-button': Button,
      'w-icon': Icon,
    },
    data() {
      return {
        value: '1',
        codeShow: `
          <w-input></w-input>
          <w-input value="中文"></w-input>
          <w-input value="中文" disabled></w-input>
          <w-input value="中文" readonly></w-input>
        `.replace(/^ {8}/gm, '').trim(),
        codeShow2:`
          <w-input v-model="value"></w-input>
          <div style="margin-top: 20px">
            value: {{value}}
          </div>
        `.replace(/^ {8}/gm, '').trim(),

      }
    },
    methods:{
      showToast(position){
        this.$toast('不要把广告关了',{
          closeButton: {
            text: '知道了',
            callBack(){
              console.log('ok');
            }
          },
          enableHtml: false,
          autoClose: true,
          autoCloseDelay: 50,
          position
        })
      },
      showToast1(){this.showToast('top')},
      showToast2(){this.showToast('middle')},
      showToast3(){this.showToast('bottom')}
    }
  }
</script>

<style lang="scss" scoped>

</style>
