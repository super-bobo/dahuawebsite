// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// require('font-awesome-webpack') //字体图标
import FastClick from 'fastclick'
import store from './vuex/store'

import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

if ('addEventListener' in document) {//解决点击延迟事件
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

//Vue.config.productionTip = false  //是否显示console提示

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
