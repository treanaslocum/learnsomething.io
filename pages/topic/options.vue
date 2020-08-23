<template>
  <div class="body">
    <Header/>
    <div class="mt-32 px-32">
      <div class="flex items-center">
        <p class="text-sm text-blue-900 capitalize"><nuxt-link to="/topics">Home</nuxt-link> <span class="ml-1 font-semibold">&rsaquo;</span></p>
        <p class="ml-5 text-sm text-blue-900 capitalize"><nuxt-link to="/topics/#computer-science">Computer Science</nuxt-link> <span class="ml-1 font-semibold">&rsaquo;</span></p>
        <div class="ml-5"><p class="text-xs text-blue-900 font-semibold px-2">Ruby</p></div>
      </div>

      <section class="mt-12">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-purple-500 uppercase font-semibold">Finances</p>
            <h2 class="text-blue-900 text-5xl">Ruby</h2>
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
            <a class="mt-5 text-black-900 hover:text-black-800" href="https://www.ruby-lang.org/en/" target="_blank">https://www.ruby-lang.org/en/</a>
          </div>
        </div>
      </section>

      <section class="mt-20">
        <div class="flex justify-between">
          <div class="w-4/5">
            <h3 class="text-black-900 uppercase font-semibold">about</h3>
            <p class="mt-10 text-black-900 leading-relaxed w-3/5">Ruby is an interpreted, high-level, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan. Ruby is dynamically typed and uses garbage collection.<a href="https://en.wikipedia.org/wiki/Ruby_(programming_language)" target="_blank" class="ml-1 text-lg text-purple-500 font-semibold">&rsaquo;&rsaquo;</a></p>
          </div>
          <div class="w-1/5 flex flex-col">
            <h3 class="text-black-400 uppercase font-semibold">similar topics</h3>
            <nuxt-link to="/topic/python" class="mt-10 mb-2 text-black-900 hover:text-black-800">Python</nuxt-link>
            <nuxt-link to="/topic/php" class="mb-2 pointer-events-none text-grey-100 line-through">PHP</nuxt-link>
            <nuxt-link to="/topic/java" class="flex mb-2 text-black-900 hover:text-black-800">
              Java
              <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
            </nuxt-link>
            <nuxt-link to="/topic/javascript" class="flex mb-2 text-black-900 hover:text-black-800">
              JavaScript
              <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>            -->
            </nuxt-link>
            <nuxt-link to="/topic/" class="mb-2 pointer-events-none text-grey-100 line-through">C++</nuxt-link>
          </div>
        </div>
      </section>

      <section class="mt-20">
        <div class="flex justify-between">
          <div class="w-4/5">
            <h3 class="text-black-900 uppercase font-semibold">creator</h3>
            <div class="mt-10 flex items-center">
              <a href="https://en.wikipedia.org/wiki/Yukihiro_Matsumoto" target="_blank">
                <img class="rounded-full" src="~assets/images/yukihiro-matsumoto.jpg" alt="Yukihiro Matsumoto" height="50px" width="50px">
              </a>
              <a href="https://en.wikipedia.org/wiki/Yukihiro_Matsumoto" target="_blank" class="ml-5 text-black-900 hover:text-black-800">Yukihiro Matsumoto</a>
            </div> 
          </div>
          <div class="w-1/5 flex flex-col">
            <h3 class="text-black-400 uppercase font-semibold">ruby frameworks</h3>
            <nuxt-link to="/topic/" class="mt-10 flex mb-2 pointer-events-none text-grey-100 line-through">
              Sinatra
            </nuxt-link>
            <nuxt-link to="/topic/ruby-on-rails" class="flex mb-2 text-black-900 hover:text-black-800">
              Ruby on Rails
              <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>            -->
            </nuxt-link>
          </div>
        </div>
      </section>

      <!-- Use Gitbook to produce Learnsomething.io books. -->

      <section class="mt-20">
        <div class="flex justify-between">
          <div class="w-4/5">
            <h3 class="text-black-900 uppercase font-semibold">books to buy</h3>
            <div class="mt-10 flex items-center">
              <a href="https://www.amazon.com/Well-Grounded-Rubyist-David-Black/dp/1617291692" target="_blank">
                <img class="" src="~assets/images/the-well-grounded-rubyist.png" alt="The Well Grounded Rubyist" height="50px" width="50px">
              </a>
              <a href="https://www.amazon.com/Well-Grounded-Rubyist-David-Black/dp/1617291692" target="_blank" class="ml-5 text-black-900 hover:text-black-800">The Well-Grounded Rubyist</a>
            </div> 
            <div class="mt-10 flex items-center">
              <a href="https://www.amazon.com/Eloquent-Ruby-Addison-Wesley-Professional/dp/0321584104/ref=sr_1_1?dchild=1&keywords=Eloquent+Ruby&qid=1596588849&s=books&sr=1-1" target="_blank">
                <img class="" src="~assets/images/eloquent-ruby.png" alt="Eloquent Rubyist" height="50px" width="50px">
              </a>
              <a href="https://www.amazon.com/Eloquent-Ruby-Addison-Wesley-Professional/dp/0321584104/ref=sr_1_1?dchild=1&keywords=Eloquent+Ruby&qid=1596588849&s=books&sr=1-1" target="_blank" class="ml-5 text-black-900 hover:text-black-800">Eloquent Ruby</a>
            </div>
          </div>
          <div class="w-1/5 flex flex-col">
            <h3 class="text-black-400 uppercase font-semibold">supplemental sites</h3>
            <a href="https://www.codecademy.com/learn/learn-ruby" target="_blank" class="mt-10 flex items-center mb-2 text-black-900 hover:text-black-800">
              Codecademy
              <div class="ml-3 bg-grey-300 text-white text-xs font-semibold rounded uppercase px-2">free</div>
            </a>
            <a href="https://teamtreehouse.com/tracks/learn-ruby" target="_blank" class="flex mb-2 items-center text-black-900 hover:text-black-800">
              Treehouse
              <div class="ml-3 bg-grey-600 text-white text-xs font-semibold rounded uppercase px-2">paid</div>
            </a>
            <a href="https://www.rubyguides.com/" target="_blank" class="flex mb-2 items-center text-black-900 hover:text-black-800">
              Ruby Guides
              <div class="ml-3 bg-grey-300 text-white text-xs font-semibold rounded uppercase px-2">free</div>
            </a>
            <a href="https://www.learnenough.com/ruby" target="_blank" class="flex mb-2 items-center text-black-900 hover:text-black-800">
              Learn Enough
              <div class="ml-3 flex items-center bg-grey-600 text-white text-xs font-semibold rounded uppercase px-2">free / paid</div>
            </a>
            <a href="https://www.tutorialspoint.com/ruby/index.htm" target="_blank" class="flex mb-2 items-center text-black-900 hover:text-black-800">
              Tutorials Point
              <div class="ml-3 bg-grey-300 text-white text-xs font-semibold rounded uppercase px-2">free</div>
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
            <div class="flex items-center max-w-full">
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
            <p id="ruby-teachers" class="mt-10 text-black-900 font-semibold uppercase">Ruby Teachers</p>
          </div>
        </div>

        <div class="mt-16 flex flex-wrap xl:flex-no-wrap">

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

          <!-- teacher 3 -->
          <div class="ml-12 flex items-center flex-shrink-0">
            <nuxt-link to="../teacher/david-battersby">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/david_battersby.jpg" alt="David Battersby">
            </nuxt-link>
            <div class="flex flex-col flex-wrap lg:flex-no-wrap xl:flex-no-wrap">
              <nuxt-link to="../teacher/david-battersby">
                <p class="ml-5 font-semibold">David Battersby</p>
              </nuxt-link>
            </div>
          </div>

          <!-- teacher 4 -->
          <div class="xl:ml-12 xl:mt-0 lg:mt-12 lg:ml-0 flex items-center flex-shrink-0">
            <nuxt-link to="../teacher/deanin">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/deanin.jpg" alt="Deanin">
            </nuxt-link>
            <div class="flex flex-col flex-wrap lg:flex-no-wrap xl:flex-no-wrap">
              <nuxt-link to="../teacher/deanin">
                <p class="ml-5 font-semibold">Deanin</p>
              </nuxt-link>
            </div>
          </div>
        </div> 

        <div class="mt-16 flex flex-wrap xl:flex-no-wrap">

          <!-- teacher 1 -->
           <div class="xl:ml-12 xl:mt-0 lg:mt-12 lg:ml-0 flex items-center flex-shrink-0">
            <nuxt-link to="../teacher/boris-paskhaver">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/boris-paskhaver.jpg" alt="Boris Paskhaver">
            </nuxt-link>
            <div class="flex flex-col flex-wrap lg:flex-no-wrap xl:flex-no-wrap">
              <nuxt-link to="../teacher/boris-paskhaver">
                <p class="ml-5 font-semibold">Boris Paskhaver</p>
              </nuxt-link>
            </div>
          </div>

          <div class="xl:ml-12 xl:mt-0 lg:mt-12 lg:ml-0 flex items-center flex-shrink-0">
            <nuxt-link to="../teacher/raul-palacios">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/raul-palacios.jpg" alt="Boris Paskhaver">
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
      title: "Options - LearnSomething.io",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>