<template>
  <div class="body">
    <Header/>
    <div class="mt-32 px-32">
      
      <section class="mt-12">
        <div class="flex items-center">
          <div>
            <img src="~/assets/images/teachers/deanin.jpg" alt="Deanin" class="rounded-full h-24">
          </div>
          <div class="ml-10">
            <p class="text-purple-500 uppercase font-semibold">Teacher</p>
            <h2 class="text-blue-900 text-5xl">Deanin</h2>
          </div>
        </div>
        <div class="mt-5 flex items-center justify-between">
          <div class="flex items-center">
              <a href="https://twitter.com/deaniocom" target="_blank" class="flex items-center text-grey-700 uppercase font-semibold">
                <svg class="fill-current text-black-900" xmlns="http://www.w3.org/2000/svg" width="19.652" height="15.962" viewBox="0 0 19.652 15.962"><defs></defs><path class="a" d="M19.633,8c.013.175.013.349.013.523A11.382,11.382,0,0,1,8.186,19.981,11.381,11.381,0,0,1,2,18.172a8.417,8.417,0,0,0,.973.05,8.069,8.069,0,0,0,5-1.721,4.036,4.036,0,0,1-3.767-2.793,5.129,5.129,0,0,0,.761.062,4.286,4.286,0,0,0,1.061-.137A4.027,4.027,0,0,1,2.8,9.68V9.63a4.065,4.065,0,0,0,1.82.511A4.034,4.034,0,0,1,3.371,4.755,11.457,11.457,0,0,0,11.677,8.97a4.577,4.577,0,0,1-.1-.923,4.032,4.032,0,0,1,6.971-2.756A7.957,7.957,0,0,0,21.1,4.318a4.02,4.02,0,0,1-1.771,2.22,8.073,8.073,0,0,0,2.319-.624A8.645,8.645,0,0,1,19.633,8Z" transform="translate(-2 -4.019)"/></svg>
                <p class="ml-2">Twitter</p>
              </a>
              <!-- <a href="https://github.com/matz" target="_blank" class="ml-3 flex items-center bg-grey-200 rounded-full px-3 py-1 text-grey-700 uppercase font-semibold">
                <svg class="fill-current text-black-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026,2c-5.509,0-9.974,4.465-9.974,9.974c0,4.406,2.857,8.145,6.821,9.465	c0.499,0.09,0.679-0.217,0.679-0.481c0-0.237-0.008-0.865-0.011-1.696c-2.775,0.602-3.361-1.338-3.361-1.338	c-0.452-1.152-1.107-1.459-1.107-1.459c-0.905-0.619,0.069-0.605,0.069-0.605c1.002,0.07,1.527,1.028,1.527,1.028	c0.89,1.524,2.336,1.084,2.902,0.829c0.091-0.645,0.351-1.085,0.635-1.334c-2.214-0.251-4.542-1.107-4.542-4.93	c0-1.087,0.389-1.979,1.024-2.675c-0.101-0.253-0.446-1.268,0.099-2.64c0,0,0.837-0.269,2.742,1.021	c0.798-0.221,1.649-0.332,2.496-0.336c0.849,0.004,1.701,0.115,2.496,0.336c1.906-1.291,2.742-1.021,2.742-1.021	c0.545,1.372,0.203,2.387,0.099,2.64c0.64,0.696,1.024,1.587,1.024,2.675c0,3.833-2.33,4.675-4.552,4.922	c0.355,0.308,0.675,0.916,0.675,1.846c0,1.334-0.012,2.41-0.012,2.737c0,0.267,0.178,0.577,0.687,0.479	C19.146,20.115,22,16.379,22,11.974C22,6.465,17.535,2,12.026,2z"/></svg>
                <p class="ml-2">Github</p>
              </a> -->
          </div>
          <!-- Outside website link block -->
          <div>
            <a class="mt-5 text-black-900 hover:text-black-800" href="https://deanin.com/" target="_blank">https://deanin.com/</a>
          </div>
        </div>
      </section>

      <section class="mt-20">
        <div class="flex justify-between">
          <div class="w-4/5">
            <h3 class="text-black-900 uppercase font-semibold">about</h3>
            <p class="mt-10 leading-relaxed w-3/5">I'm a software developer who creates weekly tutorials for a myriad of programming-related topics. While going for my undergraduate degree in Computer Science, I set out to learn as much as I could outside of school in an attempt to complement the book smarts with my own street smarts...<a href="https://www.youtube.com/c/Deanin/featured" target="_blank" class="ml-1 text-lg text-purple-500 font-semibold">&rsaquo;&rsaquo;</a></p>
          </div>
          <div class="w-1/5 flex flex-col truncate">
            <h3 class="text-black-400 uppercase font-semibold">topics I teach</h3>
            <nuxt-link to="/topic/ruby" class="mt-10 flex mb-2 text-black-900 hover:text-black-800">
              Ruby
              <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
            </nuxt-link>
            <nuxt-link to="/topic/ruby-on-rails" class="flex mb-2 text-black-900 hover:text-black-800">
              Ruby on Rails
              <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
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
                <nuxt-link to="../teacher/web-crunch">
                  <img class="rounded-full" src="~assets/images/teachers/web-crunch.jpg" alt="Web-Crunch" height="50px" width="50px">
                </nuxt-link>
                <nuxt-link to ="../teacher/web-crunch" class="ml-5 text-black-900 hover:text-black-800">Web-Crunch</nuxt-link>
              </div>

              <div class="ml-10 flex items-center">
                <nuxt-link to="../teacher/david-battersby">
                  <img class="rounded-full" src="~assets/images/teachers/david_battersby.jpg" alt="David Battersby" height="50px" width="50px">
                </nuxt-link>
                <nuxt-link to ="../teacher/david-battersby" class="ml-5 text-black-900 hover:text-black-800">David Battersby</nuxt-link>
              </div>

            </div> 
          </div>
        </div>
      </section>

      <CodeCompanion/>

      <!-- Video Playlist Section -->
      <section class="mt-20">
        <h3 class="text-black-900 uppercase font-semibold">Learning Playlists</h3>

        <h4 class="mt-16 text-xl font-semibold">Ruby</h4>
        <div class="mt-12 flex items-center">
          <div class="rounded overflow-hidden">
              <iframe width="480" height="270" src="https://www.youtube.com/embed/KIccv7QVfFQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>           <div class="px-6 py-4">
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#beginner</span>
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#ruby</span>
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">total duration 13:12</span>
            </div>
          </div>
        </div> 

        <h4 class="mt-16 text-xl font-semibold">Ruby on Rails</h4>
        <div class="mt-12 flex items-center">
          <div class="rounded overflow-hidden">
            <iframe width="480" height="270" src="https://www.youtube.com/embed/videoseries?list=PL3mtAHT_eRexS2EjF6V9ZUXkETOrvdzy2" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="px-6 py-4">
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#mixed</span>
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#ruby on rails</span>
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">total duration 15:53:20</span>
            </div>
          </div>
          <div class="ml-10 rounded overflow-hidden">
           <iframe width="480" height="270" src="https://www.youtube.com/embed/videoseries?list=PL3mtAHT_eRez6d-PavT6O1KtcMe7mOr-C" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="px-6 py-4">
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#mixed</span>
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#ruby on rails</span>
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">total duration 16:54:04</span>
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
      title: "Deanin - LearnSomething.io",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>