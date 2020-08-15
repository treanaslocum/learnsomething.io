<template>
  <div class="body">
    <Header/>
    <div class="mt-32 px-32">
      <div class="flex items-center">
        <p class="text-sm text-blue-900 capitalize"><nuxt-link to="/topics">Home</nuxt-link> <span class="ml-1 font-semibold">&rsaquo;</span></p>
        <p class="ml-5 text-sm text-blue-900 capitalize"><nuxt-link to="/topics/#computer-science">Computer Science</nuxt-link> <span class="ml-1 font-semibold">&rsaquo;</span></p>
        <div class="ml-5"><p class="text-xs text-blue-900 font-semibold px-2">JavaScript</p></div>
      </div>

      <section class="mt-12">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-purple-500 uppercase font-semibold">Computer Science</p>
            <h2 class="text-blue-900 text-5xl">JavaScript</h2>
          </div>
          <!-- <div class="flex items-center border border-red-500 rounded-full py-1 px-3">
            <span><svg class="fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg></span>
            <p class="ml-1 text-red-500 text-sm font-semibold">Hot Topic</p>
          </div> -->
        </div>
        <!-- Filter Tags -->
        <div class="mt-5 flex items-center justify-between">
          <div class="flex items-center">
            <p class="text-grey-700">Tags</p>
            <nuxt-link to="../filters/computer-science" class="ml-3">
              <p class="bg-grey-200 rounded-full px-3 text-grey-700 uppercase font-semibold hover:text-grey-300">CS</p>
            </nuxt-link>
          </div>
          <div>
            <a class="mt-5 text-black-900 hover:text-black-800" href="https://www.ecma-international.org/ecma-262/" target="_blank">https://www.ecma-international.org/ecma-262/</a>
          </div>
        </div>
      </section>

      <section class="mt-20">
        <div class="flex justify-between">
          <div class="w-4/5">
            <h3 class="text-black-900 uppercase font-semibold">about</h3>
            <p class="mt-10 leading-relaxed w-3/5">Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it for client-side page behavior, and all major web browsers have a dedicated JavaScript engine to execute it.<a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" class="ml-1 text-lg text-purple-500 font-semibold">&rsaquo;&rsaquo;</a></p>
          </div>
          <div class="w-1/5 flex flex-col">
            <h3 class="text-black-400 uppercase font-semibold">similar topics</h3>
            <nuxt-link to="/topic/python" class="mt-10 flex mb-2 text-black-900 hover:text-black-800">Python</nuxt-link>
            <nuxt-link to="/topic/php" class="mb-2 text-grey-100 line-through">PHP</nuxt-link>
            <nuxt-link to="/topic/ruby" class="flex mb-2 text-black-900 hover:text-black-800">
              Ruby
            </nuxt-link>
          </div>
        </div>
      </section>

      <section class="mt-20">
        <div class="flex justify-between">
          <div class="w-4/5">
            <h3 class="text-black-900 uppercase font-semibold">creator</h3>
            <div class="mt-10 flex items-center">
              <a href="https://en.wikipedia.org/wiki/Brendan_Eich" target="_blank">
                <img class="rounded-full" src="~assets/images/brendan-eich.jpg" alt="Brendan Eich" height="50px" width="50px">
              </a>
              <a href="https://en.wikipedia.org/wiki/Brendan_Eich" target="_blank" class="ml-5 text-black-900 hover:text-black-800">Brendan Eich</a>
            </div> 
          </div>
          <div class="w-1/5 flex flex-col">
            <h3 class="text-black-400 uppercase font-semibold">JavaScript frameworks</h3>
            <nuxt-link to="/topic/react-js" class="mt-10 flex mb-2 text-grey-100 line-through">
              React
            </nuxt-link>
            <nuxt-link to="/topic/vue-js" class="flex mb-2 text-grey-100 line-through">
              Vue.js
            </nuxt-link>
            <nuxt-link to="/topic/angular" class="flex mb-2 text-grey-100 line-through">
              Angular
            </nuxt-link>
            <nuxt-link to="/topic/node-js" class="flex mb-2 text-grey-100 line-through">
              Node.js
            </nuxt-link>
            <nuxt-link to="/topic/ember" class="flex mb-2 text-grey-100 line-through">
              Ember
            </nuxt-link>
          </div>
        </div>
      </section>

      <section class="mt-20">
        <div class="flex justify-between">
          <div class="w-4/5">
            <h3 class="text-black-900 uppercase font-semibold">books</h3>
            <div class="mt-10 flex items-center">
              <a href="https://www.amazon.com/JavaScript-JQuery-Interactive-Front-End-Development/dp/1118531647/ref=sr_1_3?dchild=1&keywords=JavaScript+and+JQuery%3A+Interactive+Front-End+Web+Development&qid=1596687713&s=books&sr=1-3" target="_blank">
                <img src="~assets/images/javascript-jquery.jpg" alt="Javascript & JQuery" height="50px" width="50px">
              </a>
              <a href="https://www.amazon.com/JavaScript-JQuery-Interactive-Front-End-Development/dp/1118531647/ref=sr_1_3?dchild=1&keywords=JavaScript+and+JQuery%3A+Interactive+Front-End+Web+Development&qid=1596687713&s=books&sr=1-3" target="_blank" class="ml-5 text-black-900 hover:text-black-800">JavaScript and JQuery: Interactive Front-End Web Development </a>
            </div> 
            <div class="mt-10 flex items-center">
              <a href="https://eloquentjavascript.net/Eloquent_JavaScript.pdf" target="_blank">
                <img class="" src="~assets/images/eloquent-javascript.jpg" alt="Eloquent JavaScript" height="50px" width="50px">
              </a>
              <a href="https://eloquentjavascript.net/Eloquent_JavaScript.pdf" target="_blank" class="ml-5 text-black-900 hover:text-black-800">Eloquent JavaScript</a>
            </div>
          </div>
          <div class="w-1/5 flex flex-col">
            <h3 class="text-black-400 uppercase font-semibold">supplemental sites</h3>
            <a href="https://www.codecademy.com/learn/introduction-to-javascript" target="_blank" class="mt-10 flex items-center mb-2 text-black-900 hover:text-black-800">
              Codecademy
              <div class="ml-3 bg-grey-300 text-white text-xs font-semibold rounded uppercase px-2">free</div>
            </a>
            <a href="https://teamtreehouse.com/tracks/beginning-javascript" target="_blank" class="flex mb-2 items-center text-black-900 hover:text-black-800">
              Treehouse
              <div class="ml-3 bg-grey-600 text-white text-xs font-semibold rounded uppercase px-2">paid</div>
            </a>
            <a href="https://www.learnenough.com/javascript" target="_blank" class="flex mb-2 items-center text-black-900 hover:text-black-800">
              Learn Enough
              <div class="ml-3 flex items-center bg-grey-600 text-white text-xs font-semibold rounded uppercase px-2">free / paid</div>
            </a>
          </div>
        </div>
      </section>

      <div class="mt-8">
        <p class="big-quote">"</p>
        <div class="ml-16 w-3/4">
          <div>
            <p class="text-purple-500 uppercase font-semibold">Do This First</p>
            <p class="mt-2 text-blue-900 font-semibold">It's important to find the best teacher for you. Before diving in, skim through the playlist of each teacher. This allows you to immediately identify what teaching style suits you best. <br><br>Things to consider when picking a teacher:</p>
            <div class="flex items-center">
              <p class="mt-5 bg-grey-200 rounded-full px-3 text-grey-700 uppercase font-semibold">1 voice</p>
              <p class="mt-5 ml-3 bg-grey-200 rounded-full px-3 text-grey-700 uppercase font-semibold">2 personality</p>
              <p class="mt-5 ml-3 bg-grey-200 rounded-full px-3 text-grey-700 uppercase font-semibold">3 length of videos</p>
              <p class="mt-5 ml-3 bg-grey-200 rounded-full px-3 text-grey-700 uppercase font-semibold">4 video style</p>
              <p class="mt-5 ml-3 bg-grey-200 rounded-full px-3 text-grey-700 uppercase font-semibold">5 pace of teaching</p>
            </div>
          </div>          
        </div>
      </div>

      
        <!-- Teacher list Section -->
      <section class="mt-20">
        <!-- Introduction to Ruby Teacher section -->

        <!-- section header -->
        <div class="mt-12 flex">
          <div class="flex items-center">
            <p class="mt-10 text-black-900 font-semibold uppercase">JavaScript Teachers</p>
          </div>
        </div>

        <!-- 1st row list -->
        <div class="mt-16 flex xl:justify-around flex-wrap xl:flex-no-wrap">

          <!-- teacher 1 -->
          <div class="flex items-center flex-shrink-0">
            <nuxt-link to="../teacher/mike-dane">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/mike_dane.jpg" alt="Mike Dane">
            </nuxt-link>
            <div class="flex flex-col flex-wrap lg:flex-no-wrap xl:flex-no-wrap">
              <nuxt-link to="../teacher/mike-dane">
                <p class="ml-5 font-semibold">Mike Dane</p>
              </nuxt-link>
            </div>
          </div>

          <!-- teacher 2 -->
          <div class="ml-12 flex items-center flex-shrink-0">
            <nuxt-link to="../teacher/derek-banas">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/derek_banas.jpg" alt="Derek Banas">
            </nuxt-link>
            <div class="flex flex-col flex-wrap lg:flex-no-wrap xl:flex-no-wrap">
              <nuxt-link to="../teacher/derek-banas">
                <p class="ml-5 font-semibold">Derek Banas</p>
              </nuxt-link>
            </div>
          </div>

          <!-- LOCKED PROFILE -->
          <!-- teacher 3 -->
          <div class="ml-12 flex items-center flex-shrink-0">
            <nuxt-link to="../teacher/mosh">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/mosh.jpg" alt="Mosh">
            </nuxt-link>            
            <div class="flex flex-col flex-wrap lg:flex-no-wrap xl:flex-no-wrap">
              <nuxt-link to="../teacher/mosh">
                <p class="ml-5 font-semibold">Mosh</p>
              </nuxt-link>
            </div>
          </div>

          <!-- LOCKED PROFILE -->
          <!-- teacher 4 -->
          <div class="xl:ml-12 xl:mt-0 lg:mt-12 lg:ml-0 flex items-center flex-shrink-0">
            <nuxt-link to="../teacher/freeCodeCamp">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/freeCodeCamp.jpg" alt="freeCodeCamp">
            </nuxt-link>
            <div class="flex flex-col flex-wrap lg:flex-no-wrap xl:flex-no-wrap">
              <nuxt-link to="../teacher/freeCodeCamp">
                <p class="ml-5 font-semibold">freeCodeCamp</p>
              </nuxt-link>
            </div>
          </div>
        </div> 

        <div class="mt-16 flex xl:justify-around flex-wrap xl:flex-no-wrap">

          <!-- teacher 1 -->
          <div class="flex items-center flex-shrink-0">
            <nuxt-link to="../teacher/raul-palacios">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/raul-palacios.jpg" alt="Mike Dane">
            </nuxt-link>
            <div class="flex flex-col flex-wrap lg:flex-no-wrap xl:flex-no-wrap">
              <nuxt-link to="../teacher/raul-palacios">
                <p class="ml-5 font-semibold">Raul Palacios</p>
              </nuxt-link>
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

export default {
  components: {
    Header,
    Footer
  },
  head () {
    return {
      title: "JavaScript - LearnSomething.io",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>