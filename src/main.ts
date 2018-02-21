import Vue, { PluginObject } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Http from 'vue-resource';

Vue.config.productionTip = false;
Vue.use(<any>Http)
Vue.http.options.root = 'http://localhost:3012'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
