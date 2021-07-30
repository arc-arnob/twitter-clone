<template>
  <div class="flex h-screen w-full">
  
    <div class="bg-cover lg:w-1/2 border-r border-lighter" style="background-image: url(https://abs.twimg.com/sticky/illustrations/lohp_en_850x623.png)">
      <!-- Image-->
    </div>

    <div class="w-full md:w-1/2 h-screen">
    <!-- Buttons-->
      <button class="h-12 w-12 mt-10 ml-8 hover:bg-lightblue text=3xl rounded-full text-blue">
        <img src="../../public/twitterlogo.png"/>
      </button>
      <div class="mt-16 ml-16">
        <p class="text-6xl font-bold">Happening Now</p>
        <p class="text-4xl font-bold mt-12">Join Twitter Today.</p>
      </div>
      <div class="mt-16 ml-16">
          <button type="submit" class="hover:bg-lightest text-lg font-bold h-12 px-24 rounded-full border-2 border-lighter">
            <i class="fab fa-google float-left p-2"></i>
            <p class="ml-2 float-left">Sign up with Google</p>
          </button>

          
          <button type="submit" class="hover:bg-lightest mt-2 text-lg font-bold h-12 px-20 rounded-full border-2 border-lighter">
            <router-link :to="{ path: '/signup' }" class="ml-2 float-left">Sign up with phone or email</router-link>
            <!-- <p class="ml-2 float-left">Sign up with phone or email</p> -->
          </button> 
          
      </div>
      <div class="mt-2 ml-16">
        <p class="text-lg text-dark float-left">Already a member?</p>
        <router-link :to="{ path: '/application' }" class="ml-1 text-lg text-blue float-left">Log in</router-link>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'Login',
  methods: {
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="..\assets\css\tailwind.css"/>