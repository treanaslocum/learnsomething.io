<template>
  <div class="body">
    <Header/>
    <div class="mt-32 px-32">
      <div class="flex items-center">
          <p class="text-sm text-blue-900 capitalize"><nuxt-link to="/challenges">Challenges</nuxt-link> <span class="ml-1 font-semibold">&rsaquo;</span></p>
          <div class="ml-5"><p class="text-xs text-grey-300 font-semibold bg-grey-500 px-2 capitalize">#READeverday</p></div>
      </div>
      <div class="mt-12 flex items-center justify-between">
        <div>
          <p class="text-purple-500 uppercase font-semibold">7 Day Challenge</p>
          <h2 class="text-blue-900 text-5xl">#READeverday</h2>
        </div>
        <div class="flex flex-col">
          <p class="text-blue-900">Challenges are better with friends</p>
          <div class="flex items-center">
          👉
          <div class="ml-3"> 
            <div class="mt-5 -mb-10 bg-grey-300 w-48 h-2"></div>
        <!-- Tailor the Twitter Intent Link to the specific challenge you're promoting. -->
            <a href="https://twitter.com/share?url=https%3A%2F%2Flearnsomething.io&via=thelrnsomething&hashtags=LearnSomethingeveryday&text=I%27m+challenging+myself+to+learn+something+everyday+Join+me+%E2%86%92" target="_blank" class="mt-5 move text-xs text-blue-900 font-normal"><span class="font-semibold">share this challenge with others!</span></a>
          </div>
        </div>
        </div>
        
      </div>
  
      <div class="mt-12">
        <p class="text-purple-500 uppercase font-semibold">Why read?</p>
        <p class="mt-2 text-blue-900 text-lg leading-relaxed w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore at ullam quis consequatur in recusandae tempore nesciunt, ea quaerat rem.</p>
      </div>

      <div class="mt-12">
        <p class="text-purple-500 uppercase font-semibold">Objectives</p>
        <p class="mt-2 text-blue-900 text-lg leading-relaxed w-2/3">1. Read any book.</p>
        <p class="mt-2 text-blue-900 text-lg leading-relaxed w-2/3">2. xxx.</p>
        <p class="mt-2 text-blue-900 text-lg leading-relaxed w-2/3">3. xxx.</p>
      </div>
      
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  head () {
    return {
      title: "Home - LearnSomething.io",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>
