<template>
  <div>
    <Button type="primary" icon="social-facebook"> Đăng nhập Facebook </Button>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  const { Button } = require('iview');

  export default Vue.extend({
    name: "FbLoginBox",
    components: {
      Button
    }
  })

</script>