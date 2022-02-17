<template>
  <div class="body">
    <Header/>
      <section class="mt-32 px-32">  
        <h2 class="text-blue-900 text-5xl">Nutrition</h2>
        <p class="text-blue-900 leading-relaxed w-3/4">Nutrition is the science that interprets the nutrients and other substances in food in relation to maintenance, growth, reproduction, health and disease of an organism. It includes ingestion, absorption, assimilation, biosynthesis, catabolism and excretion.<a href="https://en.wikipedia.org/wiki/Nutrition" target="_blank" class="ml-1 text-sm text-purple-500 font-semibold">Wikipedia</a></p>
      </section>

      <section class="mt-20 px-32">
        <div class="flex items-center">
          <div class="flex flex-col w-1/4">
            <!-- Algebra 1 -->
            <nuxt-link to="../topic/keto">
              <div class="flex flex-col w-64">
                  <p class="text-blue-900 text-sm">Discipline</p>
                  <div class="flex items-center">
                      <p class="text-lg text-blue-900 font-semibold">
                        #Keto
                      </p>
                  </div>
              </div>
            </nuxt-link>
            <!-- xxx -->
            <!-- <nuxt-link to="../topic/..." class="mt-8">
              <div class="flex flex-col w-64">
                  <p class="text-blue-900 text-sm">Discipline</p>
                  <div class="flex items-center">
                      <p class="text-lg text-blue-900 font-semibold">
                        #xxx                      
                      </p>
                  </div>
              </div>
            </nuxt-link> -->
            <!-- xxx -->
            <!-- <nuxt-link to="../topic/biology" class="mt-8">
              <div class="flex flex-col w-64">
                  <p class="text-blue-900 text-sm">Discipline</p>
                  <div class="flex items-center">
                      <p class="text-lg text-blue-900 font-semibold">
                        #Biology
                      </p>
                  </div>
              </div>
            </nuxt-link> -->
            <!-- xxx -->
            <!-- <nuxt-link to="../topic/xxx" class="mt-8">
              <div class="flex flex-col w-64">
                  <p class="text-blue-900 text-sm">Discipline</p>
                  <div class="flex items-center">
                      <p class="text-lg text-blue-900 font-semibold">
                        #xxx
                      </p>
                  </div>
              </div>
            </nuxt-link> -->
          </div> 

          <!-- second row of filters -->
          <div class="flex flex-col w-1/4">
            <!-- xxx -->
            <!-- <nuxt-link to="../topic/xxx">
              <div class="flex flex-col w-64">
                  <p class="text-blue-900 text-sm">Discipline</p>
                  <div class="flex items-center">
                      <p class="text-lg text-blue-900 font-semibold">
                        #xxx
                      </p>
                  </div>
              </div>
            </nuxt-link> -->
            <!-- xxx -->
            <!-- <nuxt-link to="../topic/xxx" class="mt-8">
              <div class="flex flex-col w-64">
                  <p class="text-blue-900 text-sm">Discipline</p>
                  <div class="flex items-center">
                      <p class="text-lg text-blue-900 font-semibold">
                        #xxx
                      </p>
                  </div>
              </div>
            </nuxt-link> -->
            <!-- xxx -->
            <!-- <nuxt-link to="../topic/xxx" class="mt-8">
              <div class="flex flex-col w-64">
                  <p class="text-blue-900 text-sm">Discipline</p>
                  <div class="flex items-center">
                      <p class="text-lg text-blue-900 font-semibold">
                        #xxx
                      </p>
                  </div>
              </div>
            </nuxt-link> -->
            <!-- xxx -->
            <!-- <nuxt-link to="../topic/xxx" class="mt-8">
              <div class="flex flex-col w-64">
                  <p class="text-blue-900 text-sm">Discipline</p>
                  <div class="flex items-center">
                      <p class="text-lg text-blue-900 font-semibold">
                        #xxx
                      </p>
                  </div>
              </div>
            </nuxt-link> -->
          </div> 
        </div>
      </section>
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
      title: "Nutrition - LearnSomething.io",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>