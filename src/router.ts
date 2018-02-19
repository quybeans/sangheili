import Vue from "vue";
import Router from "vue-router";
import LoginPage from "./components/page/LoginPage.vue";
import FbLoginPage from "./components/page/FbLoginPage.vue";
import 'iview/dist/styles/iview.css';
import 'tachyons/css/tachyons.min.css';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
        component: LoginPage
    },
    {
      path: "/facebook-login",
      name: "facebook",
        component: FbLoginPage
    }
  ]
});
