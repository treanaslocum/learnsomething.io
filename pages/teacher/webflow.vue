<template>
  <div class="body">
    <Header/>
    <div class="mt-32 px-32">
 
      <section class="mt-12">
        <div class="flex items-center">
          <div>
            <img src="~/assets/images/teachers/webflow.jpg" alt="Webflow" class="rounded-full h-24">
          </div>
          <div class="ml-10">
            <p class="text-purple-500 uppercase font-semibold">Teacher</p>
            <h2 class="text-blue-900 text-5xl">Webflow</h2>
          </div>
        </div>
        <div class="mt-5 flex items-center justify-between">
          <div class="flex items-center">
            <a href="https://twitter.com/webflow" target="_blank" class="flex items-center text-grey-700 uppercase font-semibold">
              <svg class="fill-current text-black-900" xmlns="http://www.w3.org/2000/svg" width="19.652" height="15.962" viewBox="0 0 19.652 15.962"><defs></defs><path class="a" d="M19.633,8c.013.175.013.349.013.523A11.382,11.382,0,0,1,8.186,19.981,11.381,11.381,0,0,1,2,18.172a8.417,8.417,0,0,0,.973.05,8.069,8.069,0,0,0,5-1.721,4.036,4.036,0,0,1-3.767-2.793,5.129,5.129,0,0,0,.761.062,4.286,4.286,0,0,0,1.061-.137A4.027,4.027,0,0,1,2.8,9.68V9.63a4.065,4.065,0,0,0,1.82.511A4.034,4.034,0,0,1,3.371,4.755,11.457,11.457,0,0,0,11.677,8.97a4.577,4.577,0,0,1-.1-.923,4.032,4.032,0,0,1,6.971-2.756A7.957,7.957,0,0,0,21.1,4.318a4.02,4.02,0,0,1-1.771,2.22,8.073,8.073,0,0,0,2.319-.624A8.645,8.645,0,0,1,19.633,8Z" transform="translate(-2 -4.019)"/></svg>
              <p class="ml-2">Twitter</p>
            </a>
          </div>  
          <!-- Outside website link block -->
          <div>
            <a class="mt-5 text-black-900 hover:text-black-800" href="https://www.webflow.com" target="_blank">https://www.webflow.com</a>
          </div>
       
        </div>
      </section>

      <section class="mt-20">
        <div class="flex justify-between">
          <div class="w-4/5">
            <h3 class="text-black-900 uppercase font-semibold">about</h3>
            <p class="mt-10 leading-relaxed w-3/5">Design and develop for the web — visually. Build dynamic, responsive websites without writing code. Launch with a click, and enjoy the fastest, most reliable hosting on the web. Or export clean, semantic code to hand off to your devs.<a href="https://www.youtube.com/channel/UCELSb-IYi_d5rYFOxWeOz5g" target="_blank" class="ml-1 text-lg text-purple-500 font-semibold">&rsaquo;&rsaquo;</a></p>
          </div>
          <div class="w-1/5 flex flex-col truncate">
            <h3 class="text-black-400 uppercase font-semibold">topics I teach</h3>
            <nuxt-link to="/topic/webflow" class="mt-10 flex text-black-900 hover:text-black-800 mb-2">
              Webflow
            </nuxt-link>
            <nuxt-link to="/topic/web-design" class="flex mb-2 pointer-events-none text-grey-100 line-through">
              Web Design
            </nuxt-link>
          </div>
        </div>
      </section>

      <section class="mt-20">
        <div class="flex justify-between">
          <div class="w-4/5">
            <h3 class="text-black-900 uppercase font-semibold">similar teachers</h3>
            <div class="mt-10 flex items-center">
              <div class="flex items-center">
                <nuxt-link to="../teacher/flux">
                  <img class="rounded-full" src="~assets/images/teachers/flux.jpg" alt="Flux" height="50px" width="50px">
                </nuxt-link>
                <nuxt-link to ="../teacher/flux" class="ml-5 text-black-900 hover:text-black-800">Flux</nuxt-link>
              </div>

              <div class="ml-10 flex items-center">
                <nuxt-link to="../teacher/charli-marie-tv">
                  <img class="rounded-full" src="~assets/images/teachers/charli-marie-tv.jpg" alt="CharliMarieTV" height="50px" width="50px">
                </nuxt-link>
                <nuxt-link to ="../teacher/charli-marie-tv" class="ml-5 text-black-900 hover:text-black-800">CharliMarieTV</nuxt-link>
              </div>

              <!-- Web Design Teacher -->
              <!-- <div class="ml-10 flex items-center">
                <nuxt-link to="../teacher/xxx">
                  <img class="rounded-full" src="~assets/images/teachers/xxx.jpg" alt="xxx" height="50px" width="50px">
                </nuxt-link>
                <nuxt-link to ="../teacher/xxx" class="ml-5 text-black-900 hover:text-black-800">xxx</nuxt-link>
              </div> -->
              
            </div> 
          </div>
          
        </div>
      </section>




      <!-- Video Playlist Section -->
      <section class="mt-20">
        <h3 class="text-black-900 uppercase font-semibold">Learning Playlists</h3>

        <h4 class="mt-16 text-xl font-semibold">Webflow</h4>

        <div class="mt-12 flex items-center">
          <div class="rounded overflow-hidden">
            <iframe width="480" height="270" src="https://www.youtube.com/embed/videoseries?list=PLPmnoMVpkxfiYN2cE4qY9G9gIkz8YDY-u" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div class="px-6 py-4">
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#beginner</span>
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#webflow</span>
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">total duration 2:49:46</span>
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
      title: "Webflow - LearnSomething.io",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>