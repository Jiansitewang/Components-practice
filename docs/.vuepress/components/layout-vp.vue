<template>
  <div class="demo">
    <h2>📌圣杯布局</h2>
    <!--<p>预览</p>-->
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-layout style="color: white; margin-bottom:50px;">
          <w-header style="display:flex;justify-content: center;align-items: center;height: 50px; background:#C8E6C9;">
            header
          </w-header>
          <w-content style="display:flex;justify-content: center;align-items: center;height: 100px; background:#4CAF50;">
            content
          </w-content>
          <w-footer style="display:flex;justify-content: center;align-items: center;height: 50px; background:#C8E6C9;">
            footer
          </w-footer>
        </w-layout>
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
    <h3>📌多栏布局</h3>
    <!--<p>预览</p>-->
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-layout style="color: white; overflow:hidden; margin-bottom:50px;">
          <w-header style="display:flex;justify-content: center;align-items: center;height: 50px; background:#C8E6C9;">
            header
          </w-header>
          <w-layout>
            <w-sider style="display:flex;justify-content: center;align-items: center;height: 100px; background:#388E3C; width:200px;">
              sider
            </w-sider>
            <w-content style="display:flex;justify-content: center;align-items: center;height: 100px; background:#4CAF50;">
              content
            </w-content>
          </w-layout>
          <w-footer style="display:flex;justify-content: center;align-items: center;height: 50px; background:#C8E6C9;">
            footer
          </w-footer>
        </w-layout>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <!--<div class="code-user-desc">-->
          <!--组件描述说明-->
          <!--</div>-->
          <pre v-highlightjs class="pre"><code class="vue">{{codeShow2}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(1)" ref="xxx">
        <w-icon class="icon-down" :name="isShow[1] === false ? 'down' : 'up'"></w-icon>
        <span class="lock-code-word">{{isShow[1] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <h3>📌多栏布局2</h3>
    <!--<p>预览</p>-->
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-layout style="color: white; overflow:hidden; margin-bottom:50px;">
          <w-sider style="display:flex;justify-content: center;align-items: center; background:#388E3C; width:200px; color: white;">
            sider
          </w-sider>
          <w-layout>
            <w-header style="display:flex;justify-content: center;align-items: center;height: 50px; background:#C8E6C9;">
              header
            </w-header>
            <w-content style="display:flex;justify-content: center;align-items: center;height: 100px; background:#4CAF50;">
              content
            </w-content>
            <w-footer style="display:flex;justify-content: center;align-items: center;height: 50px; background:#C8E6C9;">
              footer
            </w-footer>
          </w-layout>
        </w-layout>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <!--<div class="code-user-desc">-->
          <!--组件描述说明-->
          <!--</div>-->
          <pre v-highlightjs class="pre"><code class="vue">{{codeShow2}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(2)" ref="xxx">
        <w-icon class="icon-down" :name="isShow[2] === false ? 'down' : 'up'"></w-icon>
        <span class="lock-code-word">{{isShow[2] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <h3>attributes</h3>
    <p>组件参数说明后期扩展</p>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Layout from '../../../src/layout'
  import Header from '../../../src/header'
  import Content from '../../../src/content'
  import Sider from '../../../src/sider'
  import Footer from '../../../src/footer'
  import Icon from '../../../src/icon'
  import VueHighlightJS from 'vue-highlightjs';
  import 'highlight.js/styles/monokai-sublime.css';
  import mixin from '../mixin'
  Vue.use(VueHighlightJS);

  export default {
    name: 'demo',
    mixins: [mixin],
    components: {
      'w-layout': Layout,
      'w-header': Header,
      'w-content': Content,
      'w-sider': Sider,
      'w-footer': Footer,
      'w-icon': Icon,
    },
    data() {
      return {
        value: '1',
        codeShow: `
          <w-layout style="color: white; margin-bottom:50px;">
            <w-header style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
              header
            </w-header>
            <w-content style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;">
              content
            </w-content>
            <w-footer style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
              footer
            </w-footer>
          </w-layout>
        `.replace(/^ {8}/gm, '').trim(),
        codeShow2:`
          <w-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <w-header style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
              header
            </w-header>
            <w-layout>
              <w-sider style="display:flex;justify-content: center;align-items: center;height: 100px; background:#03a9f4d9; width:200px;">
                sider
              </w-sider>
              <w-content style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;">
                content
              </w-content>
            </w-layout>
            <w-footer style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
              footer
            </w-footer>
          </w-layout>
        `.replace(/^ {8}/gm, '').trim(),
        codeShow3:`
           <w-layout style="color: white; overflow:hidden; margin-bottom:50px;">
              <w-sider style="display:flex;justify-content: center;align-items: center; background:#03a9f4d9; width:200px; color: white;">
                sider
              </w-sider>
              <w-layout>
                <w-header style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
                  header
                </w-header>
                <w-content style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;">
                  content
                </w-content>
                <w-footer style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
                  footer
                </w-footer>
              </w-layout>
            </w-layout>
        `.replace(/^ {8}/gm, '').trim(),

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
