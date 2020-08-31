<template>
  <div class="body">
    <Header/>
    <div class="mt-32 px-32">
      <div class="flex items-center">
        <p class="text-sm text-blue-900 capitalize"><nuxt-link to="/topics">Home</nuxt-link> <span class="ml-1 font-semibold">&rsaquo;</span></p>
        <p class="ml-5 text-sm text-blue-900 capitalize"><nuxt-link to="/topics/#design">Design</nuxt-link> <span class="ml-1 font-semibold">&rsaquo;</span></p>
        <div class="ml-5"><p class="text-xs text-blue-900 font-semibold px-2">UI Design</p></div>
      </div>

      <section class="mt-12">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-purple-500 uppercase font-semibold">Design</p>
            <h2 class="text-blue-900 text-5xl">UI Design</h2>
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
            <nuxt-link to="../filters/design" class="ml-3">
              <p class="bg-grey-200 rounded-full px-3 text-grey-700 uppercase font-semibold hover:text-grey-300">Design</p>
            </nuxt-link>
          </div>
        </div>
      </section>

      <section class="mt-20">
        <div class="flex justify-between">
          <div class="w-4/5">
            <h3 class="text-black-900 uppercase font-semibold">about</h3>
            <p class="mt-10 leading-relaxed w-3/5">User interface design or user interface engineering is the design of user interfaces for machines and software, such as computers, home appliances, mobile devices, and other electronic devices, with the focus on maximizing usability and the user experience.<a href="https://en.wikipedia.org/wiki/User_interface_design" target="_blank" class="ml-1 text-lg text-purple-500 font-semibold">&rsaquo;&rsaquo;</a></p>
          </div>
          <div class="w-1/5 flex flex-col">
            <h3 class="text-black-400 uppercase font-semibold">similar topics</h3>
            <nuxt-link to="/topic/product-design" class="flex mt-10 mb-2 text-black-900 hover:text-black-800">
              Product Design
              <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>            -->
            </nuxt-link>
            <nuxt-link to="/topic/web-design" class="flex mb-2 pointer-events-none text-grey-100 line-through">
              Web Design
            </nuxt-link>
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
            <p class="mt-10 text-black-900 font-semibold uppercase">UI Design XD Teachers</p>
          </div>
        </div>

        <!-- <h4 class="mt-16 text-xl font-semibold">English</h4> -->
        <!-- english teachers 1st row list -->
        <div class="mt-16 flex flex-wrap xl:flex-no-wrap">
          
          <div class="xl:mt-0 lg:mt-12 flex items-center flex-shrink-0">
            <nuxt-link to="../teacher/adobe">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/adobe.jpg" alt="Bring Your Own Laptop">
            </nuxt-link>
            <div class="flex flex-col flex-wrap lg:flex-no-wrap xl:flex-no-wrap">
              <nuxt-link to="../teacher/adobe">
                <p class="ml-5 font-semibold">Adobe</p>
              </nuxt-link>
            </div>
          </div>

          <div class="xl:ml-12 xl:mt-0 lg:mt-12 lg:ml-0 flex items-center flex-shrink-0">
            <nuxt-link to="../teacher/design-course">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/design-course.jpg" alt="DesignCourse">
            </nuxt-link>
            <div class="flex flex-col flex-wrap lg:flex-no-wrap xl:flex-no-wrap">
              <nuxt-link to="../teacher/design-course">
                <p class="ml-5 font-semibold">DesignCourse</p>
              </nuxt-link>
            </div>
          </div>
        </div> 

        <!-- <h4 class="mt-16 text-xl font-semibold">Spanish</h4>
        spanish teachers 1st row list
        <div class="mt-16 flex flex-wrap xl:flex-no-wrap">

          teacher 1
          <div class="flex items-center flex-shrink-0">
            <nuxt-link to="../teacher/xxx">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/bring-your-own-laptop.jpg" alt="xxx">
            </nuxt-link>
            <div class="flex flex-col flex-wrap lg:flex-no-wrap xl:flex-no-wrap">
              <nuxt-link to="../teacher/xxx">
                <p class="ml-5 font-semibold">xxx</p>
              </nuxt-link>
            </div>
          </div>

          <div class="ml-12 flex items-center flex-shrink-0">
            <nuxt-link to="../teacher/xxx">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/freeCodeCamp.jpg" alt="xxx">
            </nuxt-link>            
            <div class="flex flex-col flex-wrap lg:flex-no-wrap xl:flex-no-wrap">
              <nuxt-link to="../teacher/xxx">
                <p class="ml-5 font-semibold">xxx</p>
              </nuxt-link>
            </div>
          </div>

          <div class="xl:ml-12 xl:mt-0 lg:mt-12 lg:ml-0 flex items-center flex-shrink-0">
            <nuxt-link to="../teacher/xxx">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/dani-krossing.jpg" alt="xxx">
            </nuxt-link>
            <div class="flex flex-col flex-wrap lg:flex-no-wrap xl:flex-no-wrap">
              <nuxt-link to="../teacher/xxx">
                <p class="ml-5 font-semibold">xxx</p>
              </nuxt-link>
            </div>
          </div>

          <div class="xl:ml-12 xl:mt-0 lg:mt-12 lg:ml-0 flex items-center flex-shrink-0">
            <nuxt-link to="../teacher/xxx">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/design-course.jpg" alt="xxx">
            </nuxt-link>
            <div class="flex flex-col flex-wrap lg:flex-no-wrap xl:flex-no-wrap">
              <nuxt-link to="../teacher/xxx">
                <p class="ml-5 font-semibold">xxx</p>
              </nuxt-link>
            </div>
          </div>
        </div> 

        <h4 class="mt-16 text-xl font-semibold">French</h4>
        spanish teachers 1st row list
        <div class="mt-16 flex flex-wrap xl:flex-no-wrap">

          teacher 1
          <div class="flex items-center flex-shrink-0">
            <nuxt-link to="../teacher/xxx">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/bring-your-own-laptop.jpg" alt="xxx">
            </nuxt-link>
            <div class="flex flex-col flex-wrap lg:flex-no-wrap xl:flex-no-wrap">
              <nuxt-link to="../teacher/xxx">
                <p class="ml-5 font-semibold">xxx</p>
              </nuxt-link>
            </div>
          </div>

          <div class="ml-12 flex items-center flex-shrink-0">
            <nuxt-link to="../teacher/xxx">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/freeCodeCamp.jpg" alt="xxx">
            </nuxt-link>            
            <div class="flex flex-col flex-wrap lg:flex-no-wrap xl:flex-no-wrap">
              <nuxt-link to="../teacher/xxx">
                <p class="ml-5 font-semibold">xxx</p>
              </nuxt-link>
            </div>
          </div>

          <div class="xl:ml-12 xl:mt-0 lg:mt-12 lg:ml-0 flex items-center flex-shrink-0">
            <nuxt-link to="../teacher/xxx">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/dani-krossing.jpg" alt="xxx">
            </nuxt-link>
            <div class="flex flex-col flex-wrap lg:flex-no-wrap xl:flex-no-wrap">
              <nuxt-link to="../teacher/xxx">
                <p class="ml-5 font-semibold">xxx</p>
              </nuxt-link>
            </div>
          </div>

          <div class="xl:ml-12 xl:mt-0 lg:mt-12 lg:ml-0 flex items-center flex-shrink-0">
            <nuxt-link to="../teacher/xxx">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/design-course.jpg" alt="xxx">
            </nuxt-link>
            <div class="flex flex-col flex-wrap lg:flex-no-wrap xl:flex-no-wrap">
              <nuxt-link to="../teacher/xxx">
                <p class="ml-5 font-semibold">xxx</p>
              </nuxt-link>
            </div>
          </div> -->
        <!-- </div>  -->
      </section>

      
      <Footer/>
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
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
  head () {
    return {
      title: "UI Design - LearnSomething.io",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>