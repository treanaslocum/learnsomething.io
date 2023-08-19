<template>
  <div>
    <HeaderTwo/>

    <div class="mt-32 flex-col flex items-center">
      <div class="flex flex-col w-1/4">
        <h1 class="text-2xl font-semibold mb-4">Welcome back.</h1>
        <p class="mb-8">Learn, grow, succeed.</p>
        <input type="email" placeholder="Email Address" class="mb-4 py-2 px-6 border-2 rounded w-full text-black">
        <input type="password" placeholder="Password" class="py-2 px-6 border-2 rounded w-full text-black">
     </div>
     <div class="text-center mt-8 underline">
      <!-- This is a link -->
      <p class="text-sm">Forgot password?</p>
     </div>
     <div>
      <input type="submit" value="Login" class="black-btn text-white rounded-md px-16 py-3 mt-8"> 
     </div>
     <div class="flex items-center mt-8 justify-center">
        <p class="mr-4">Don't have an account?</p>
        <nuxt-link to="/signup" class="underline red-btn">Signup</nuxt-link>
      </div>
      
      

    </div>
   
    
  </div>
</template>

<script>
import HeaderTwo from '~/components/HeaderTwo.vue';

export default {
  components: {
    HeaderTwo,
  },
}
</script>
