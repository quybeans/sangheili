<template>
  <div class="vh-100 flex justify-center items-center">
    <div>
      <h1 class="white f2 mw7 fw3">
        Tiết kiệm thời gian quản lý trang mạng xã hội hơn với <span class="blue bg-white br2 ph2 fw6">Ahh.vn</span>
      </h1>
      <div class="white">
          <FbLoginBox v-if="!isFbConnected&&!isConnecting"/>
          <Spin class="white" v-if="isConnecting">
            <Icon type="load-c" size=36 class="demo-spin-icon-load"></Icon>
             <p class="mt3">Đăng nhập Facebook ...</p>
          </Spin>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import FbLoginBox from '../social/FbLoginBox.vue';
  import { facebook } from 'facebook-js-sdk';

  const { Spin, Icon } = require('iview');
  declare var FB: facebook.FacebookStatic;

  export default Vue.extend({
    name: "FbLoginPage",
    components: {
      Spin, Icon, FbLoginBox
    },
    methods: {
      getAllPage: function(token: string) {
        this.$http.post('page').then(function(response) {
          console.log(token)
        })
      }
    },
    mounted: function() {
      var component = this;

      component.isConnecting = true;
      (<any>window).fbAsyncInit = function() {
        FB.init({
          appId: "1151926771557379",
          xfbml: true,
          version: "v2.12"
        });

        FB.getLoginStatus(function(response: facebook.AuthResponse) {
          component.isConnecting = false;
          if (response.status==='connected') {
            component.getAllPage(response.authResponse.accessToken);
            component.isFbConnected = true
          } else {
            component.isFbConnected = false
          }
        });
      };

      (function(d, s, id) {
        var js: any,
          fjs: any = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    },
    data: function() {
      return {
        isFbConnected: false,
        isConnecting: false,
        currentAccessToken: ''
      }
    }
  });
</script>

<style>
.demo-spin-icon-load {
  animation: ani-spin 2s linear infinite;
}
@keyframes ani-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>