import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast';

Vue.config.productionTip = false;

// 通过在原型上定义$bus使其在每个 Vue 的实例中可用。(事件总线对象)
Vue.prototype.$bus = new Vue();

//安装toast插件
Vue.use(toast)

//解决移动端300s的延迟
FastClick.attach(document.body)

//使用懒加载插件
Vue.use(VueLazyLoad,{
  loading:import('./assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");

