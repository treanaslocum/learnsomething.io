<template>
  <div class="body">
    <Header/>
    <div class="mt-32 px-32">
      <div class="flex items-center">
        <p class="text-sm text-blue-900 capitalize"><nuxt-link to="/topics">Home</nuxt-link> <span class="ml-1 font-semibold">&rsaquo;</span></p>
        <p class="ml-5 text-sm text-blue-900 capitalize"><nuxt-link to="/topics/#science">Science</nuxt-link> <span class="ml-1 font-semibold">&rsaquo;</span></p>
        <div class="ml-5"><p class="text-xs text-blue-900 font-semibold px-2">Physics</p></div>
      </div>

      <section class="mt-12">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-purple-500 uppercase font-semibold">Science</p>
            <h2 class="text-blue-900 text-5xl">Physics</h2>
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
            <nuxt-link to="../filters/science" class="ml-3">
              <p class="bg-grey-200 rounded-full px-3 text-grey-700 uppercase font-semibold">Science</p>
            </nuxt-link>
          </div>
          <!-- <div>
            <a class="mt-5 text-black-900 hover:text-black-800" href="" target="_blank">xxx</a>
          </div> -->
        </div>
      </section>

      <section class="mt-20">
        <div class="flex justify-between">
          <div class="w-4/5">
            <h3 class="text-black-900 uppercase font-semibold">about</h3>
            <p class="mt-10 leading-relaxed w-3/5">Physics is the natural science that studies matter, its motion and behavior through space and time, and the related entities of energy and force.<a href="https://en.wikipedia.org/wiki/Physics" target="_blank" class="ml-1 text-lg text-purple-500 font-semibold">&rsaquo;&rsaquo;</a></p>
          </div>
          <div class="w-1/5 flex flex-col">
            <h3 class="text-black-400 uppercase font-semibold">similar topics</h3>
            <nuxt-link to="/topic/chemistry" class="flex mt-10 mb-2 text-black-900 hover:text-black-800">Chemistry</nuxt-link>
            <nuxt-link to="/topic/biology" class="flex mb-2 text-black-900 hover:text-black-800">Biology</nuxt-link>
          </div>
        </div>
      </section>

      <section class="mt-20">
        <div class="flex justify-between">
          <div class="w-4/5">
            <h3 class="text-black-900 uppercase font-semibold">pioneers</h3>
            <div class="mt-10 flex items-center">
              <a href="https://en.wikipedia.org/wiki/Isaac_Newton" target="_blank">
                <img class="rounded-full" src="~assets/images/isaac-newton.jpg" alt="Isaac Newton" height="50px" width="50px">
              </a>
              
              <a href="https://en.wikipedia.org/wiki/Isaac_Newton" target="_blank" class="ml-5 text-black-900 hover:text-black-800">Isaac Newton</a>
             
              <a href="https://en.wikipedia.org/wiki/Ernest_Rutherford" target="_blank">
                <img class="ml-10 rounded-full" src="~assets/images/ernest-rutherford.jpg" alt="Ernest Rutherford" height="50px" width="50px">
              </a>
              
              <a href="https://en.wikipedia.org/wiki/Ernest_Rutherford" target="_blank" class="ml-5 text-black-900 hover:text-black-800">Ernest Rutherford</a>
            
            </div> 
            <div class="mt-10 flex items-center">
              <a href="https://en.wikipedia.org/wiki/Albert_Einstein" target="_blank">
                <img class="rounded-full" src="~assets/images/albert-einstein.jpg" alt="Albert Einstein" height="50px" width="50px">
              </a>
              
              <a href="https://en.wikipedia.org/wiki/Albert_Einstein" target="_blank" class="ml-5 text-black-900 hover:text-black-800">Albert Einstein</a>
              

              <a href="https://en.wikipedia.org/wiki/Erwin_Schr%C3%B6dinger" target="_blank">
                <img class="ml-10 rounded-full" src="~assets/images/erwin-schrodinger.jpg" alt="Erwin Schrödinger" height="50px" width="50px">
              </a>
              
              <a href="https://en.wikipedia.org/wiki/Erwin_Schr%C3%B6dinger" target="_blank" class="ml-5 text-black-900 hover:text-black-800">Erwin Schrödinger</a>
              <!-- <nuxt-link to="/people/erwin-schrodinger" class="ml-5 text-black-900 hover:text-black-800">Erwin Schrödinger</nuxt-link> -->
            </div>
          </div>
          <div class="w-1/5 flex flex-col">
            <h3 class="text-black-400 uppercase font-semibold">Sub-Topics</h3>
            <nuxt-link to="/topic/astrophysics" class="mt-10 flex mb-2 pointer-events-none text-grey-100 line-through">
              Astrophysics
            </nuxt-link>
            <nuxt-link to="/topic/quantum-physics" class="flex mb-2 text-black-900 hover:text-black-800">
              Quantum Physics
              <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>            -->
            </nuxt-link>
          </div>
        </div>
      </section>

      <section class="mt-20">
        <div class="flex justify-between">
          <div class="w-4/5">
            <h3 class="text-black-900 uppercase font-semibold">books</h3>
            <div class="mt-10 flex items-center">
              <a href="https://www.amazon.com/exec/obidos/ASIN/0070350485/ref=nosim/mitopencourse-20" target="_blank">
                <img class="" src="~assets/images/an_introduction_to_mechanics.jpg" alt="An Introduction to Mechanics" height="50px" width="50px">
              </a>
              <a href="https://www.amazon.com/exec/obidos/ASIN/0070350485/ref=nosim/mitopencourse-20" target="_blank" class="ml-5 text-black-900 hover:text-black-800">An Introduction To Mechanics</a>
              <!-- <nuxt-link to="/books/xxx">
                <img class="" src="~assets/images/the-well-grounded-rubyist.png" alt="xxx" height="50px" width="50px">
              </nuxt-link>
              <nuxt-link to="/books/xxx" class="ml-5 text-black-900 hover:text-black-800">xxx</nuxt-link> -->
            </div> 
            <div class="mt-10 flex items-center">
              <a href="https://www.amazon.com/dp/111823071X?tag=simon0a5-20" target="_blank">
                <img class="" src="~assets/images/fundamentals_of_physics.jpg" alt="Fundamentals of Physics" height="50px" width="50px">
              </a>
              <a href="https://www.amazon.com/dp/111823071X?tag=simon0a5-20" target="_blank" class="ml-5 text-black-900 hover:text-black-800">Fundamentals of Physics</a>
              <!-- <nuxt-link to="/books/xxx">
                <img class="" src="~assets/images/eloquent-ruby.png" alt="xxx" height="50px" width="50px">
              </nuxt-link>
              <nuxt-link to="/books/xxx" class="ml-5 text-black-900 hover:text-black-800">xxx</nuxt-link> -->
            </div>
          </div>
          <div class="w-1/5 flex flex-col">
            <h3 class="text-black-400 uppercase font-semibold">supplemental sites</h3>
            <a href="https://www.khanacademy.org/science/physics" target="_blank" class="mt-10 flex items-center mb-2 text-black-900 hover:text-black-800">
              Khan Academy
              <div class="ml-3 bg-grey-300 text-white text-xs font-semibold rounded uppercase px-2">free</div>
            </a>
            <a href="https://ocw.mit.edu/index.htm" target="_blank" class="flex mb-2 items-center text-black-900 hover:text-black-800">
              MIT OpenCourseWare
              <div class="ml-3 bg-grey-300 text-white text-xs font-semibold rounded uppercase px-2">free</div>
            </a>
            <!-- <a href="xxx" class="flex mb-2 items-center text-black-900 hover:text-black-800">
              xxx
              <div class="ml-3 bg-grey-300 text-white text-xs font-semibold rounded uppercase px-2">free</div>
            </a>
            <a href="xxx" class="flex mb-2 items-center text-black-900 hover:text-black-800">
              xxx
              <div class="ml-3 flex items-center bg-grey-600 text-white text-xs font-semibold rounded uppercase px-2">free / paid</div>
            </a>
            <a href="xxx" class="flex mb-2 items-center text-black-900 hover:text-black-800">
              xxx
              <div class="ml-3 bg-grey-300 text-white text-xs font-semibold rounded uppercase px-2">free</div>
            </a> -->
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
            <p class="mt-10 text-black-900 font-semibold uppercase">Physics Teachers</p>
          </div>
        </div>

        <!-- english teachers 1st row list -->
        <div class="mt-16 flex flex-wrap xl:flex-no-wrap">

          <!-- teacher 0 -->
          <div class="flex items-center flex-shrink-0">
            <nuxt-link to="../teacher/mit">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/mit-opencourseware.jpg" alt="MIT OpenCourseWare">
            </nuxt-link>
            <div class="flex flex-col flex-wrap lg:flex-no-wrap xl:flex-no-wrap">
              <nuxt-link to="../teacher/mit">
                <p class="ml-5 font-semibold">MIT OpenCourseWare</p>
              </nuxt-link>
            </div>
          </div>

          <!-- teacher 1 -->
          <div class="ml-12 flex items-center flex-shrink-0">
            <nuxt-link to="../teacher/math-and-science">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/math-and-science.jpg" alt="Math and Science">
            </nuxt-link>
            <div class="flex flex-col flex-wrap lg:flex-no-wrap xl:flex-no-wrap">
              <nuxt-link to="../teacher/math-and-science">
                <p class="ml-5 font-semibold">Math and Science</p>
              </nuxt-link>
            </div>
          </div>

          <!-- teacher 2 -->
          <div class="ml-12 flex items-center flex-shrink-0">
            <nuxt-link to="../teacher/the-organic-chemistry-tutor">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/the-organic-chemistry-tutor.jpg" alt="The Organic Chemistry Tutor">
            </nuxt-link>
            <div class="flex flex-col flex-wrap lg:flex-no-wrap xl:flex-no-wrap">
              <nuxt-link to="../teacher/the-organic-chemistry-tutor">
                <p class="ml-5 font-semibold">The Organic Chemistry Tutor</p>
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
      title: "Physics - LearnSomething.io",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>