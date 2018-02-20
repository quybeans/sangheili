import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import HttpOptions from "vue-resource";
import { default as HttpClient } from 'vue-resource';

Vue.config.productionTip = false;
Vue.use(HttpClient);
Vue.http.options.root = 'http://localhost:3012';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
