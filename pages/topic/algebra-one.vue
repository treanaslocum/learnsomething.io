<template>
  <div class="body">
    <Header/>
    <div class="mt-32 px-32">
      <div class="flex items-center">
        <p class="text-sm text-blue-900 capitalize"><nuxt-link to="/topics">Home</nuxt-link> <span class="ml-1 font-semibold">&rsaquo;</span></p>
        <p class="ml-5 text-sm text-blue-900 capitalize"><nuxt-link to="/topics/#math">Math</nuxt-link> <span class="ml-1 font-semibold">&rsaquo;</span></p>
        <div class="ml-5"><p class="text-xs text-blue-900 font-semibold px-2">Algebra 1</p></div>
      </div>

      <section class="mt-12">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-purple-500 uppercase font-semibold">Math</p>
            <h2 class="text-blue-900 text-5xl">Algebra 1</h2>
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
            <nuxt-link to="../filters/math" class="ml-3 ">
              <p class="bg-grey-200 rounded-full px-3 text-grey-700 uppercase font-semibold hover:text-grey-300">Math</p>
            </nuxt-link>
          </div>
          <!-- <div>
            <a class="mt-5 text-black-900 hover:text-black-800" href="https://www.ruby-lang.org/en/" target="_blank">https://www.ruby-lang.org/en/</a>
          </div> -->
        </div>
      </section>

      <section class="mt-20">
        <div class="flex justify-between">
          <div class="w-4/5">
            <h3 class="text-black-900 uppercase font-semibold">about</h3>
            <p class="mt-10 text-black-900 leading-relaxed w-3/5">Algebra is one of the broad parts of mathematics, together with number theory, geometry and analysis. In its most general form, algebra is the study of mathematical symbols and the rules for manipulating these symbols; it is a unifying thread of almost all of mathematics<a href="https://en.wikipedia.org/wiki/Algebra" target="_blank" class="ml-1 text-lg text-purple-500 font-semibold">&rsaquo;&rsaquo;</a></p>
          </div>
          <div class="w-1/5 flex flex-col">
            <h3 class="text-black-400 uppercase font-semibold">similar topics</h3>
            <nuxt-link to="/topic/pre-algebra" class="mt-10 flex mb-2 text-black-900 hover:text-black-800">Pre-algebra</nuxt-link>
            <nuxt-link to="/topic/geometry" class="mb-2 text-grey-100 line-through">Geometry</nuxt-link>
            <nuxt-link to="/topic/algebra-two" class="mb-2 text-grey-100 line-through">Algebra 2</nuxt-link>
          </div>
        </div>
      </section>

      <section class="mt-20">
        <div class="flex justify-between">
          <div class="w-4/5">
            <h3 class="text-black-900 uppercase font-semibold">Pioneers</h3>
            <div class="mt-10 flex items-center">
              <a href="https://en.wikipedia.org/wiki/Muhammad_ibn_Musa_al-Khwarizmi" target="_blank">
                <img class="rounded-full" src="~assets/images/muhammad-ibn-musa.jpg" alt="Muhammad ibn Musa al-Khwarizmi" height="50px" width="50px">
              </a>
              <a href="https://en.wikipedia.org/wiki/Muhammad_ibn_Musa_al-Khwarizmi" target="_blank" class="ml-5 text-black-900 hover:text-black-800">Muhammad ibn Musa al-Khwarizmi</a>
              
            </div> 
            <div class="mt-10 flex items-center">
              <a href="https://en.wikipedia.org/wiki/Diophantus" target="_blank">
                <img class="rounded-full" src="~assets/images/diophantus.jpg" alt="Diophantus" height="50px" width="50px">
              </a>
              <a href="https://en.wikipedia.org/wiki/Diophantus" target="_blank" class="ml-5 text-black-900 hover:text-black-800">Diophantus</a>
            </div>
          </div>
          <div class="w-1/5 flex flex-col">
            <h3 class="text-black-400 uppercase font-semibold">supplemental sites</h3>
            <a href="https://www.khanacademy.org/math/algebra" target="_blank" class="mt-10 flex items-center mb-2 text-black-900 hover:text-black-800">
              Khan Academy
              <div class="ml-3 bg-grey-300 text-white text-xs font-semibold rounded uppercase px-2">free</div>
            </a>
            <a href="https://ocw.mit.edu/index.htm" target="_blank" class="flex mb-2 items-center text-black-900 hover:text-black-800">
              MIT OpenCourseWare
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
            <p class="mt-10 text-black-900 font-semibold uppercase">Algebra 1 Teachers</p>
          </div>
        </div>

        <!-- english teachers 1st row list -->
        <div class="mt-16 flex xl:justify-around flex-wrap xl:flex-no-wrap">

          <!-- teacher 1 -->
          <div class="flex items-center flex-shrink-0">
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
      title: "Algebra 1 - LearnSomething.io",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>