<template>
  <div class="vh-100 flex justify-center items-center">
    <LoginForm />
  </div>
  
</template>

<script lang="ts">
  import Vue from 'vue'
  import LoginForm from '../form/LoginForm.vue'

  export default Vue.extend({
    name: 'LoginPage',
    components: {
      LoginForm
    }
  })
</script>
