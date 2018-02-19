<template>
  <div class="pt3 br2 pa4 shadow-5 login-form">
    <h1 class="tc">
      Login to <span class="blue f2">Ahh...</span> 
    </h1>
    <Alert show-icon type="warning" v-if="errorMsg.length > 0"> {{ errorMsg }} </Alert>
    <div class="flex mt2">
      <Input id="username" v-model="username" 
        type="text" @on-enter="callLogin" 
        placeholder="Tên đăng nhập" :autofocus=true 
        ref="username" icon="ios-person"
      />
    </div>
    <div class="flex mt2">
      <Input id="password" v-model="password" 
        type="password" @on-enter="callLogin" 
        placeholder="Mật khẩu" icon="ios-locked"
      />
    </div>
    <div class="mt2 flex">
      <Button type="primary" class="w4 mr2" @click="callLogin" icon="log-in"> Đăng nhập </button>
      <Button type="ghost" class="w4" icon="ios-telephone" @click="callLogin"> Liên hệ </button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  const { Input, Button, Alert } = require('iview');

  export default Vue.extend({
    name: 'LoginForm',
    data: function() {
      return {
        errorMsg: '',
        username: '',
        password: '',
        isSending: false
      }
    },
    components: {
      Input, Button, Alert
    },
    methods: {
      callLogin: function() {
        if (this.validateLogin()) {
          this.sendLoginForm(this.username, this.password)
        }
      },
      validateLogin: function() {
        if (this.username.length <= 0 || this.password.length <= 0) {
          this.errorMsg = 'Tên đăng nhập hoặc mật khẩu không được để trống';
          (this.$refs.username as HTMLFormElement).focus();
          return false;
        }
        this.errorMsg = '';
        return true;
      },
      sendLoginForm: function(username: string, password: string) {
        console.log(username)
        console.log(password)
        this.$router.push('facebook-login')
      }
    }
  })
</script>
