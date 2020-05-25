<template>
  <div class="body">
    <Header/>
    <div class="mt-32 px-32">
      <div class="flex items-center">
          <p class="text-sm text-blue-900 capitalize"><nuxt-link to="/about">About</nuxt-link> <span class="ml-1 font-semibold">&rsaquo;</span></p>
          <nuxt-link to="/about"><div class="ml-5"><p class="text-xs text-black-900 px-2 capitalize">Building an open knowledge society</p></div></nuxt-link>
          <div class="ml-5"><p class="text-xs text-grey-300 font-semibold bg-grey-500 px-2 capitalize">Open letter to the world on education</p></div>
          <nuxt-link to="../about/rapid-learning"><div class="ml-5"><p class="text-xs text-black-900 px-2">RAPID Learning Method</p></div></nuxt-link>
      </div>
      <div class="mt-12">
        <h2 class="text-blue-900 text-5xl">Open letter to the world on education.</h2>
      </div>

      <div class="mt-12">
        <p class="text-purple-500 uppercase font-semibold">introduction</p>
        <p class="mt-2 text-blue-900 text-lg leading-relaxed w-2/3">I am a self-taught learner and I am not alone. There are millions of us around the world. We work besides you, we live with you and we've built the products you use everyday. <br><br>This open letter is my attempt to recruit more people to take control over their education and ultimately their knowledge. <span class="font-semibold">If you don't know something, learn it. You have more access to power than you know.</span></p>
      </div>

      <div class="mt-12">
        <p class="text-purple-500 uppercase font-semibold">no excuses not to learn something</p>
        <p class="mt-2 text-blue-900 text-lg leading-relaxed w-2/3">Some of the most prolific minds of the 19th, 20th, and 21st century were self-taught learners. They would spend countless hours reading, writing, and tinkering in order to learn something. <br><br>
        Some would journey long distances in order to gain knowledge, while others braved through severe racial terrorism, wartime, economic depression, resource scarcities, and physical brutally in order to learn. No matter the condition, these past learners put in the grueling work, sweat, and tears in order to learn on their own terms.<br><br> 
        Today, we live in an age were information is readily available and accessible to anyone that knows the right query to ask.<br><br>
        LearnSomething.io has done the querying for you, making it easy for anyone with an internet connection to learn almost anything by utilizing the power of the second most used search engine in the world, YouTube.</p>
      </div>

      <div class="mt-12">
        <p class="text-purple-500 uppercase font-semibold">removing the stigma</p>
        <p class="mt-2 text-blue-900 text-lg leading-relaxed w-2/3">Look, we’re not reinventing the wheel here, you're about to travel down a path that has been trekked by the greats. If they succeeded so can you. <br><br>
        As I stated earlier, some of the most prolific and successful people of the 19th. 20th and 21st century were self-taught leaners so you’re in good company. <br><br>
        Traditional schooling, though useful to some is not the only avenue a person can take to learn a subject or topic and gain mastery.</p>
        <p class="mt-12 text-blue-900 text-lg leading-relaxed w-2/3">- Treana Slocum</p>
      </div>

      <div class="mt-12">
        <p class="mt-2 text-blue-900 text-lg leading-relaxed w-2/3">Below are few quotes from a few noteworthy individuals on education.</p>
      </div>

      <div class="">
        <p class="big-quote">"</p>
        <div class="ml-16">
          <div>
            <p class="text-purple-500 uppercase font-semibold"><a href="https://en.wikipedia.org/wiki/Soichiro_Honda" target="_blank">soichiro honda &rsaquo;&rsaquo;</a></p>
            <p class="mt-2 text-blue-900 font-semibold">I don't give a damn for the diploma. What I want is the knowledge.</p>
          </div>
          <div class="mt-10">
            <p class="text-purple-500 uppercase font-semibold"><a href="https://en.wikipedia.org/wiki/George_Washington_Carver" target="_blank">George washington carver &rsaquo;&rsaquo;</a></p>
            <p class="mt-2 text-blue-900 font-semibold">Education is the key to unlock the golden door of freedom.</p>
          </div>
          <div class="mt-10">
            <p class="text-purple-500 uppercase font-semibold"><a href="https://en.wikipedia.org/wiki/Mark_Twain" target="_blank">mark twain &rsaquo;&rsaquo;</a></p>
            <p class="mt-2 text-blue-900 font-semibold">I never let schooling interfere with my education.</p>
          </div>
          
        </div>
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