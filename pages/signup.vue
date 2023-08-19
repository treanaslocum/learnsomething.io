<template>
  <div>
    <HeaderTwo/>

    <div class="mt-32 flex-col flex items-center">
      <div class="flex flex-col w-1/4">
        <h1 class="text-2xl font-semibold mb-4">Welcome to the community.</h1>
        <p class="mb-8">Learn from the best teachers in the world.</p>
        <input type="text" placeholder="Name" class="mb-4 py-2 px-6 border-2 rounded w-full text-black">
        <input type="email" placeholder="Email Address" class="mb-4 py-2 px-6 border-2 rounded w-full text-black">
        <input type="password" placeholder="Password" class="py-2 px-6 border-2 rounded w-full text-black">
     </div>
     <div>
      <input type="submit" value="Signup" class="black-btn text-white rounded-md px-16 py-3 mt-8">
      <div class="flex items-center mt-8 justify-center">
        <p class="mr-4">Already a member?</p>
        <nuxt-link to="/login" class="underline red-btn">Login</nuxt-link>
      </div>
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
