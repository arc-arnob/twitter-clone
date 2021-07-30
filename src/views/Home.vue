<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginSignUp from '@/components/LoginSignUp.vue'

export default {
  name: 'Home',
  components: {
    LoginSignUp
  }
}
</script>
