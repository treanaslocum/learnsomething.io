<template>
  <div class="body">
    <Header/>
    <div class="mt-32 px-32">
      <div class="flex items-center">
          <p class="text-sm text-blue-900 capitalize"><nuxt-link to="/about">About</nuxt-link> <span class="ml-1 font-semibold">&rsaquo;</span></p>
          <div class="ml-5"><p class="text-xs text-grey-300 font-semibold bg-grey-500 px-2 capitalize">Building an open knowledge society</p></div>
          <nuxt-link to="about/open-letter"><div class="ml-5"><p class="text-xs text-black-900 px-2 capitalize">Open letter to the world on education</p></div></nuxt-link>
          <nuxt-link to="about/rapid-learning"><div class="ml-5"><p class="text-xs text-black-900 px-2">RAPID Learning Method</p></div></nuxt-link>
      </div>
      <div class="mt-12">
        <h2 class="text-blue-900 text-5xl">Building an open knowledge society.</h2>
      </div>
      <div class="mt-12">
        <p class="text-purple-500 uppercase font-semibold">Gratitude goes a long way</p>
        <p class="mt-2 text-blue-900 text-lg leading-relaxed w-2/3">I owe a lot to the bright individuals from around the world that took their time to teach what they knew for free via YouTube and other sources.</p>
      </div>

      <div class="mt-12">
        <p class="text-purple-500 uppercase font-semibold">core beliefs</p>
        <p class="mt-2 text-blue-900 text-lg leading-relaxed w-2/3">xxx</p>
      </div>

      <div class="mt-12">
        <p class="text-purple-500 uppercase font-semibold">We all have the potential to learn anything</p>
        <p class="mt-2 text-blue-900 text-lg leading-relaxed w-2/3">If we match today's technology with the people of yesteryear's work-ethic, we can accomplish great things.</p>
      </div>
      
    </div>
    <Footer/>
  </div>

</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  head () {
    return {
      title: "LearnSomething.io - The home of self-taught learners",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>