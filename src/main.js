import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 通过在原型上定义$bus使其在每个 Vue 的实例中可用。
Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
