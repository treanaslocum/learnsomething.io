<template>
  <div class="body">
    <Header/>
    <div class="mt-32 px-32">
 
      <section class="mt-12">
        <div class="flex items-center">
          <div>
            <img src="~/assets/images/teachers/emi-wong.jpg" alt="Emi Wong" class="rounded-full">
          </div>
          <div class="ml-10">
            <p class="text-purple-500 uppercase font-semibold">Teacher</p>
            <h2 class="text-blue-900 text-5xl">Emi Wong</h2>
          </div>
        </div>
        <div class="mt-5 flex items-center justify-between">
          <div class="flex items-center">
            
          </div>  
          <!-- Outside website link block -->
          <div>
            <a class="mt-5 text-black-900 hover:text-black-800" href="https://www.instagram.com/emiwong_/" target="_blank">https://www.instagram.com/emiwong_/</a>
          </div>
        </div>
      </section>

      <section class="mt-20">
        <div class="flex justify-between">
          <div class="w-4/5">
            <h3 class="text-black-900 uppercase font-semibold">about</h3>
            <p class="mt-10 leading-relaxed w-3/5">be whoever you want to be. born in canada, living in hong kong uploaded my first video onto youtube on April 12, 2017 <a href="https://www.youtube.com/c/EmiWong/featured" target="_blank" class="ml-1 text-lg text-purple-500 font-semibold">&rsaquo;&rsaquo;</a></p>
          </div>
          <div class="w-1/5 flex flex-col truncate">
            <h3 class="text-black-400 uppercase font-semibold">topics I teach</h3>
            <nuxt-link to="/topic/calisthenics-bodyweight" class="mt-10 flex text-black-900 hover:text-black-800 mb-2">
              Calisthenics & Bodyweight
            </nuxt-link>
          </div>
        </div>
      </section>




      <!-- Video Playlist Section -->
      <section class="mt-20">
        <h3 class="text-black-900 uppercase font-semibold">Learning Playlists</h3>

        <h4 class="mt-16 text-xl font-semibold">Abs</h4>

        <div class="mt-12 flex items-center">
          <div class="rounded overflow-hidden">
            <iframe width="480" height="270" src="https://www.youtube.com/embed/videoseries?list=PLAFs3kxY4h18C-BEvQWBxwNZYPLK_BDQF" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div class="px-6 py-4">
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#mixed</span>
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#abs</span>
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">total duration 1:24:26</span>
            </div>
          </div>

          <div class="ml-10 rounded overflow-hidden">
            <iframe width="480" height="270" src="https://www.youtube.com/embed/videoseries?list=PLAFs3kxY4h190VrR7w4aCXJXU5-vWt-0w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="px-6 py-4">
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#mixed</span>
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#abs</span>
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">total duration 1:24:26</span>
            </div>
          </div>
        </div> 

        <div class="mt-12 flex items-center">
          <div class="rounded overflow-hidden">
            <iframe width="480" height="270" src="https://www.youtube.com/embed/videoseries?list=PLAFs3kxY4h1-LHUzBN2XhtJ1IutUxAB43" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div class="px-6 py-4">
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#mixed</span>
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#abs</span>
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">total duration 2:38:03</span>
            </div>
          </div>
        </div> 



      </section>

    </div>
    <Footer/>
    <!-- Default Statcounter code for Learnsomething.io
    http://www.learnsomething.io -->
    <script type="text/javascript">
    var sc_project=12370753; 
    var sc_invisible=1; 
    var sc_security="429f25a4"; 
    var sc_https=1; 
    </script>
    <script type="text/javascript"
    src="https://www.statcounter.com/counter/counter.js"
    async></script>
    <noscript><div class="statcounter"><a title="Web Analytics"
    href="https://statcounter.com/" target="_blank"><img
    class="statcounter"
    src="https://c.statcounter.com/12370753/0/429f25a4/1/"
    alt="Web Analytics"></a></div></noscript>
    <!-- End of Statcounter Code -->
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import CodeCompanion from '~/components/CodeCompanion.vue'

export default {
  components: {
    Header,
    Footer,
    CodeCompanion
  },
  head () {
    return {
      title: "Emi Wong - LearnSomething.io",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>