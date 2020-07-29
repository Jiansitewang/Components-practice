import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Content from './content'
import Footer from './footer'
import Header from './header'
import Layout from './layout'
import Sider from './sider'
import Toast from './toast'
import plugin from './plugin'

Vue.use(plugin)
Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
Vue.component('w-button-group', ButtonGroup)
Vue.component('w-input',Input)
Vue.component('w-row',Row)
Vue.component('w-col',Col)
Vue.component('w-content', Content)
Vue.component('w-footer', Footer)
Vue.component('w-header', Header)
Vue.component('w-layout', Layout)
Vue.component('w-sider', Sider)
Vue.component('w-toast', Toast)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: ''
  },
  created(){
  },
  mounted(){
  },
  methods: {
    inputChange(e){
      console.log(e.target.value);
    },
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
})



