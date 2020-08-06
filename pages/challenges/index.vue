<template>
  <div class="body">
    <Header/>
    <div class="mt-32 px-32">
      <div class="mt-12">
        <h2 class="text-blue-900 text-5xl">Challenge yourself.</h2>
      </div>
      <div class="mt-12">
        <p class="text-purple-500 uppercase font-semibold">why do a challenge?</p>
        <p class="mt-2 text-blue-900 text-lg leading-relaxed w-2/3">Challenges make us stronger. They abruptly disrupt our lives, forcing us to shift to a new gear or level of human potential and output. With each new challenge we take on, new habits and skills are formed. Our brains become rewired, our thought patterns and perception of self changed forever. <br><br>You don't know how much you can do until you've been challenged to do it.</p>
      </div>

      <div class="">
        <p class="big-quote">"</p>
        <div class="ml-16">
          <div>
            <p class="text-purple-500 uppercase font-semibold"><a href="https://en.wikipedia.org/wiki/Franklin_D._Roosevelt" target="_blank">Franklin D. Roosevelt &rsaquo;&rsaquo;</a></p>
            <p class="mt-2 text-blue-900 font-semibold">A smooth sea never made a skilled sailor.</p>
          </div>          
        </div>
      </div>

      <div class="mt-12">
        <p class="mt-2 text-blue-900 text-lg leading-relaxed w-2/3">Pick a challenge and change your life for the better.</p>
      </div>

      <!-- Challenges Section -->
      <section class="mt-20">
        <div class="flex justify-between">
          <div class="">
            <div class="mt-10 flex items-center">
              <div class="flex flex-col">
                <p class="text-black-900 text-sm font-semibold capitalize">7 Day Challenges</p>
                <div class="mt-3 flex items-center">
                  <div class=""><p class="text-xs bg-purple-600 text-white font-semibold px-2 uppercase">Foundational</p></div>
                <div class="ml-3"><p class="text-sm text-blue-900 px-2">10 Challenges</p></div>
                </div> 
                <p class="mt-5 text-blue-900 w-1/2 leading-relaxed">7 day challenges are a great way to warm yourself up to the process of consciously creating a new habit or skill.</p> 
              </div>
            </div> 
            <div class="flex items-center">
              <div class="">
                <div class="mt-10 flex items-center">
                  <div class="mr-6">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-16 flex justify-between">
          <div class="">
            <div class="mt-10 flex items-center">
              <div class="w-1/3 flex flex-col">
                <nuxt-link to="challenge/read-everyday" class="text-black-900 text-sm font-semibold">#READeveryday</nuxt-link>
                <p class="mt-2 text-blue-900">Make yourself into a reading machine one day at a time.</p>
                <div class="mt-3 flex items-center">
                  <div class="bg-blue-900 h-1 w-4"></div>
                  <div class="ml-2 bg-grey-600 h-1 w-4"></div>
                  <div class="ml-2 bg-grey-600 h-1 w-4"></div>
                  <p class="ml-5 text-xs bg-purple-600 text-white font-semibold px-2 uppercase">Easy</p>
                </div>
              </div>
              <div class="ml-10 w-1/3 flex flex-col">
                <nuxt-link to="challenge/math-everyday" class="text-black-900 text-sm font-semibold">#MATHeveryday</nuxt-link>
                <p class="mt-2 text-blue-900">xxx</p>
                <div class="mt-3 flex items-center">
                  <div class="bg-blue-900 h-1 w-4"></div>
                  <div class="ml-2 bg-blue-900 h-1 w-4"></div>
                  <div class="ml-2 bg-grey-600 h-1 w-4"></div>
                  <p class="ml-5 text-xs bg-purple-600 text-white font-semibold px-2 uppercase">Medium</p>
                </div>
              </div>
              <div class="ml-10 w-1/3 flex flex-col">
                <nuxt-link to="challenge/steam-everyday" class="text-black-900 text-sm font-semibold">#STEAMeveryday</nuxt-link>
                <p class="mt-2 text-blue-900">xxx</p>
                <div class="mt-3 flex items-center">
                  <div class="bg-blue-900 h-1 w-4"></div>
                  <div class="ml-2 bg-grey-600 h-1 w-4"></div>
                  <div class="ml-2 bg-grey-600 h-1 w-4"></div>
                  <p class="ml-5 text-xs bg-purple-600 text-white font-semibold px-2 uppercase">Easy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-16 flex justify-between">
          <div class="">
            <div class="mt-10 flex items-center">
              <div class="w-1/3 flex flex-col">
                <nuxt-link to="challenge/art-everyday" class="text-black-900 text-sm font-semibold">#ARTeveryday</nuxt-link>
                <p class="mt-2 text-blue-900">Make yourself into a reading machine one day at a time.</p>
                <div class="mt-3 flex items-center">
                  <div class="bg-blue-900 h-1 w-4"></div>
                  <div class="ml-2 bg-grey-600 h-1 w-4"></div>
                  <div class="ml-2 bg-grey-600 h-1 w-4"></div>
                  <p class="ml-5 text-xs bg-purple-600 text-white font-semibold px-2 uppercase">Easy</p>
                </div>
              </div>
              <div class="ml-10 w-1/3 flex flex-col">
                <nuxt-link to="challenge/code-everyday" class="text-black-900 text-sm font-semibold">#CODEeveryday</nuxt-link>
                <p class="mt-2 text-blue-900">xxx</p>
                <div class="mt-3 flex items-center">
                  <div class="bg-blue-900 h-1 w-4"></div>
                  <div class="ml-2 bg-grey-600 h-1 w-4"></div>
                  <div class="ml-2 bg-grey-600 h-1 w-4"></div>
                  <p class="ml-5 text-xs bg-purple-600 text-white font-semibold px-2 uppercase">Easy</p>
                </div>
              </div>
              <div class="ml-10 w-1/3 flex flex-col">
                <nuxt-link to="challenge/xxx-everyday" class="text-black-900 text-sm font-semibold">#XXXeveryday</nuxt-link>
                <p class="mt-2 text-blue-900">xxx</p>
                <div class="mt-3 flex items-center">
                  <div class="bg-blue-900 h-1 w-4"></div>
                  <div class="ml-2 bg-grey-600 h-1 w-4"></div>
                  <div class="ml-2 bg-grey-600 h-1 w-4"></div>
                  <p class="ml-5 text-xs bg-purple-600 text-white font-semibold px-2 uppercase">Easy</p>
                </div>
              </div>
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
      title: "Challenges - LearnSomething.io",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>