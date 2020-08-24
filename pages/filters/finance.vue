<template>
  <div class="body">
    <Header/>
      <section class="mt-32 px-32">  
        <h2 class="text-blue-900 text-5xl">Finance</h2>
        <p class="text-blue-900 leading-relaxed w-3/4">Finance is a term for matters regarding the management, creation, and study of money and investments. Specifically, it deals with the questions of how and why an individual, company or government acquires the money needed – called capital in the company context – and how they spend or invest that money. <a href="https://en.wikipedia.org/wiki/Finance" target="_blank" class="ml-1 text-sm text-purple-500 font-semibold">Wikipedia</a></p>
      </section>

      <section class="mt-20 px-32">
        <div class="flex items-center">
          <div class="flex flex-col w-1/4">

            <!-- Options -->
            <nuxt-link to="../topic/options">
              <div class="flex flex-col w-64">
                  <p class="text-blue-900 text-sm">Discipline</p>
                  <div class="flex items-center">
                      <p class="text-lg text-blue-900 font-semibold">
                        #Options
                      </p>
                  </div>
              </div>
            </nuxt-link>

            <!-- Futures -->
            <nuxt-link to="../topic/futures" class="mt-8">
              <div class="flex flex-col w-64">
                  <p class="text-blue-900 text-sm">Discipline</p>
                  <div class="flex items-center">
                      <p class="text-lg text-blue-900 font-semibold">
                        #Futures
                      </p>
                  </div>
              </div>
            </nuxt-link>

            <!-- Forex -->
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
      title: "Science - LearnSomething.io",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>