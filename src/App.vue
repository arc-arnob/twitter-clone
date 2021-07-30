<template>
    <div>
      <router-view/>
    </div>

</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      authorized: false,
    }
  },
  methods: {
    setAuthorization(auth){
      this.authorized = auth;
    }
  }
   
}  

</script>

<style src=".\assets\css\tailwind.css"/>