<template>
  <div class="body">
    <Header/>
    <div class="mt-32 px-32">
      <div class="flex items-center">
          <p class="text-sm text-blue-900 capitalize"><nuxt-link to="/about">About</nuxt-link> <span class="ml-1 font-semibold">&rsaquo;</span></p>
          <nuxt-link to="/about"><div class="ml-5"><p class="text-xs text-black-900 px-2 capitalize">Building an open knowledge society</p></div></nuxt-link>
          <nuxt-link to="../about/open-letter"><div class="ml-5"><p class="text-xs text-black-900 px-2 capitalize">Open letter to the world on education</p></div></nuxt-link>
          <div class="ml-5"><p class="text-xs text-grey-300 bg-grey-500 font-semibold px-2">RAPID Learning Method</p></div>
      </div>
      <div class="mt-12">
        <h2 class="text-blue-900 text-5xl">RAPID learning method.</h2>
      </div>
      
      <div class="mt-12">
        <p class="text-purple-500 uppercase font-semibold">what is the rapid learning method</p>
        <p class="mt-2 text-blue-900 text-lg leading-relaxed w-2/3">Self-taught learning can be a lonely journey, but also extremely rewarding. <br><br>In order to learn anything on your own, you need a solid roadmap to point in you in the right direction. The RAPID learning method was developed out of necessity. If I wanted to know something I had to figure it out on my own. Now I am passing the knowledge of how I did it to everyone else around the world.</p>
      </div>
      
      <div class="mt-12">
        <p class="text-purple-500 uppercase font-semibold">learn from Teachers you genuinely love</p>
        <p class="mt-2 text-blue-900 text-lg leading-relaxed w-2/3">In order to learn as fast as possible you need to find teachers whose <span class="font-semibold">teaching style, voice,</span> and <span class="font-semibold">personality</span> you actually like.<br><br>
         Like in the dating world everyone's preferences and standards are different, so treat your search for potential teachers the same as you would your search for a potential wife or husband. You should have set standards and criteria that the person should meet in order for them to even be a consideration.</p>
      </div>

      <div class="mt-12">
        <p class="text-purple-500 uppercase font-semibold">Rapid exposure to a given topic or subject</p>
        <p class="mt-2 text-blue-900 text-lg leading-relaxed w-2/3">It doesn't matter if you understand what you're listening to or seeing but the exposure to it is familiarizing your brain to the core ideas that make up the given topic or subject your studying.<br><br>
         This process can be very uncomfortable. You might even feel stupid, but it's imperative to remember that it's okay if you don't understand some or all of the things your rapidly exposing yourself to because in time you will.</p>
      </div>

      <div class="mt-12">
        <p class="text-purple-500 uppercase font-semibold">Interfacing bits of information</p>
        <p class="mt-2 text-blue-900 text-lg leading-relaxed w-2/3">Our brains are good at spotting patterns. After you've completed the rapid exposure phase from multiple sources your brain would have picked up on several repeating bits of information. <br><br>
        Those repeating bits of information are the core ideas that you need to study in order to gain mastery of the given topic or subject.</p>
      </div>

      <div class="mt-12">
        <p class="text-purple-500 uppercase font-semibold">learn the fundamentals</p>
        <p class="mt-2 text-blue-900 text-lg leading-relaxed w-2/3">Getting a foundational understanding of any topic or subject is paramount and will lead you to great success.</p>
      </div>

      <div class="mt-12">
        <p class="text-purple-500 uppercase font-semibold">Learning is marathon not a sprint</p>
        <p class="mt-2 text-blue-900 text-lg leading-relaxed w-2/3">Be patient with yourself, there is not rule that states you have to know everything in order to master something, nor is there a rule which states that you must learn things fast.</p>
      </div>

      <div class="mt-12">
        <p class="text-purple-500 uppercase font-semibold">You are the educator</p>
        <p class="mt-2 text-blue-900 text-lg leading-relaxed w-2/3">At LearnSomething.io we believe that humans inherently know what it is that they want to learn. Its just a matter of trusting your gut instinct. You don't need an outside force to tell you what you'd be interested in learning, you just simply know. <br><br>
        That is one of the major pitfalls of the traditional educational system. It operates off of a need to know basis. Or in more literal terms the Prussian Educational System, whose main focus was to create obedient soldiers, workers and members of society.</p>
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