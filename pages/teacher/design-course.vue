<template>
  <div class="body">
    <Header/>
    <div class="mt-32 px-32">
   
      <section class="mt-12">
        <div class="flex items-center">
          <div>
            <img src="~/assets/images/teachers/design-course.jpg" alt="Design Course" class="rounded-full h-24">
          </div>
          <div class="ml-10">
            <p class="text-purple-500 uppercase font-semibold">Teacher</p>
            <h2 class="text-blue-900 text-5xl">DesignCourse</h2>
          </div>
        </div>
        <div class="mt-5 flex items-center justify-between">
          <div class="flex items-center">
              
          </div>
          <!-- Outside website link block -->
          <div>
            <a class="mt-5 text-black-900 hover:text-black-800" href="https://coursetro.com" target="_blank">https://coursetro.com</a>
          </div>
        </div>
      </section>

      <section class="mt-20">
        <div class="flex justify-between">
          <div class="w-4/5">
            <h3 class="text-black-900 uppercase font-semibold">about</h3>
            <p class="mt-10 leading-relaxed w-3/5">Hi, I'm Gary. I've created close to 100 courses from graphic design to advanced frontend development. I've worked with Envato Network's TutsPlus.com, DigitalTutors.com, Pluralsight.com, LinkedIn Learning & Lynda.com. <a href="https://www.youtube.com/c/DesignCourse/featured" target="_blank" class="ml-1 text-lg text-purple-500 font-semibold">&rsaquo;&rsaquo;</a></p>
          </div>
          <div class="w-1/5 flex flex-col truncate">
            <h3 class="text-black-400 uppercase font-semibold">topics I teach</h3>
            <nuxt-link to="/topic/html-css" class="mt-10 flex mb-2 text-black-900 hover:text-black-800">
              HTML & CSS
              <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
            </nuxt-link>
            <nuxt-link to="/topic/adobe-xd" class="flex mb-2 text-black-900 hover:text-black-800">
              Adobe XD
              <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
            </nuxt-link>
            <nuxt-link to="/topic/figma" class="flex mb-2 text-black-900 hover:text-black-800">
              Figma
              <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
            </nuxt-link>
            <nuxt-link to="/topic/ui-design" class="flex mb-2 text-black-900 hover:text-black-800">
              UI Design
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
                <nuxt-link to="../teacher/freeCodeCamp">
                  <img class="rounded-full" src="~assets/images/teachers/freeCodeCamp.jpg" alt="freeCodeCamp" height="50px" width="50px">
                </nuxt-link>
                <nuxt-link to ="../teacher/freeCodeCamp" class="ml-5 text-black-900 hover:text-black-800">freeCodeCamp</nuxt-link>
              </div>

              <div class="ml-10 flex items-center">
                <nuxt-link to="../teacher/dev-ed">
                  <img class="rounded-full" src="~assets/images/teachers/dev-ed.jpg" alt="Dev Ed" height="50px" width="50px">
                </nuxt-link>
                <nuxt-link to ="../teacher/dev-ed" class="ml-5 text-black-900 hover:text-black-800">Dev Ed</nuxt-link>
              </div>

              <div class="ml-10 flex items-center">
                <nuxt-link to="../teacher/adobe">
                  <img class="rounded-full" src="~assets/images/teachers/adobe.jpg" alt="Adobe" height="50px" width="50px">
                </nuxt-link>
                <nuxt-link to ="../teacher/adobe" class="ml-5 text-black-900 hover:text-black-800">Adobe</nuxt-link>
              </div>

              <div class="ml-10 flex items-center">
                <nuxt-link to="../teacher/bring-your-own-laptop">
                  <img class="rounded-full" src="~assets/images/teachers/bring-your-own-laptop.jpg" alt="Bring Your Own Laptop" height="50px" width="50px">
                </nuxt-link>
                <nuxt-link to ="../teacher/bring-your-own-laptop" class="ml-5 text-black-900 hover:text-black-800">Bring Your Own Laptop</nuxt-link>
              </div>
              
            </div> 
          </div>
          
        </div>
      </section>

      <CodeCompanion/>

      <!-- Video Playlist Section -->
      <section class="mt-20">
        <h3 class="text-black-900 uppercase font-semibold">Learning Playlists</h3>

        <h4 class="mt-16 text-xl font-semibold">HTML & CSS</h4>

        <div class="mt-12 flex items-center">
          <div class="rounded overflow-hidden">
            <iframe width="480" height="270" src="https://www.youtube.com/embed/8gNrZ4lAnAw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="px-6 py-4">
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#beginner</span>
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#htmlcss</span>
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">total duration 2:40:38</span>
            </div>
          </div>
          

        </div> 

        <h4 class="mt-16 text-xl font-semibold">Adobe XD</h4>

        <div class="mt-12 flex items-center">
          <div class="rounded overflow-hidden">
            <iframe width="480" height="270" src="https://www.youtube.com/embed/videoseries?list=PL0lNJEnwfVVO7neEAyqUVV-bannq8hu6x" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="px-6 py-4">
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#mixed</span>
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#adobe-xd</span>
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">total duration 12:25:12</span>
            </div>
          </div>
        
        </div> 

        <h4 class="mt-16 text-xl font-semibold">Figma</h4>

        <div class="mt-12 flex items-center">
          <div class="rounded overflow-hidden">
            <iframe width="480" height="270" src="https://www.youtube.com/embed/3q3FV65ZrUs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="px-6 py-4">
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#mixed</span>
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#figma</span>
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">total duration 36:34</span>
            </div>
          </div>
        
        </div> 

        <h4 class="mt-16 text-xl font-semibold">UI Design</h4>

        <div class="mt-12 flex items-center">
          <div class="rounded overflow-hidden">
            <iframe width="480" height="270" src="https://www.youtube.com/embed/_Hp_dI0DzY4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="px-6 py-4">
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#beginner</span>
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#ui-design</span>
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">total duration 1:36:52</span>
            </div>
          </div>

           <div class="ml-10 rounded overflow-hidden">
            <iframe width="480" height="270" src="https://www.youtube.com/embed/tRpoI6vkqLs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="px-6 py-4">
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#mixed</span>
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#ui-design</span>
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">total duration 1:09:44</span>
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
      title: "DesignCourse - LearnSomething.io",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>