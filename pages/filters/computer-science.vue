<template>
  <div class="body">
    <Header/>
      <section class="mt-32 px-32">  
        <h2 class="text-blue-900 text-5xl">Computer Science</h2>
        <p class="text-blue-900 leading-relaxed w-3/4">Computer science is the study of processes that interact with data and that can be represented as data in the form of programs. It enables the use of algorithms to manipulate, store, and communicate digital information.<a href="https://en.wikipedia.org/wiki/Computer_science" target="_blank" class="ml-1 text-sm text-purple-500 font-semibold">Wikipedia</a></p>
      </section>

      <section class="mt-20 px-32">
        <div class="flex items-center">
          <div class="flex flex-col w-1/4">
            <!-- Ruby -->
            <nuxt-link to="../topic/ruby">
              <div class="flex flex-col w-64">
                  <p class="text-blue-900 text-sm">Programming Language</p>
                  <div class="flex items-center">
                      <p class="text-lg text-blue-900 font-semibold">
                        #Ruby
                      </p>
                  </div>
              </div>
            </nuxt-link>
            <!-- Ruby on Rails -->
            <nuxt-link to="../topic/ruby-on-rails" class="mt-8">
              <div class="flex flex-col w-64">
                  <p class="text-blue-900 text-sm">Framework</p>
                  <div class="flex items-center">
                      <p class="text-lg text-blue-900 font-semibold">
                        #Ruby on Rails
                      </p>
                  </div>
              </div>
            </nuxt-link>
            <!-- Java -->
            <nuxt-link to="../topic/java" class="mt-8">
              <div class="flex flex-col w-64">
                  <p class="text-blue-900 text-sm">Programming Language</p>
                  <div class="flex items-center">
                      <p class="text-lg text-blue-900 font-semibold">
                        #Java
                      </p>
                  </div>
              </div>
            </nuxt-link>
            <!-- JavaScript -->
            <nuxt-link to="../topic/javascript" class="mt-8">
              <div class="flex flex-col w-64">
                  <p class="text-blue-900 text-sm">Programming Language</p>
                  <div class="flex items-center">
                      <p class="text-lg text-blue-900 font-semibold">
                        #JavaScript
                      </p>
                  </div>
              </div>
            </nuxt-link>
          </div> 

          <!-- second row of filters -->
          <div class="flex flex-col w-1/4">
            <!-- xxx -->
            <nuxt-link to="../topic/computer-networking">
              <div class="flex flex-col w-64">
                  <p class="text-blue-900 text-sm">Computer Networking</p>
                  <div class="flex items-center">
                      <p class="text-lg text-blue-900 font-semibold">
                        #Computer-Networking
                      </p>
                  </div>
              </div>
            </nuxt-link>
            <!-- xxx -->
            <nuxt-link to="../topic/xxx" class="mt-8">
              <div class="hidden flex flex-col w-64">
                  <p class="text-blue-900 text-sm">Framework</p>
                  <div class="flex items-center">
                      <p class="text-lg text-blue-900 font-semibold">
                        #xxx
                      </p>
                  </div>
              </div>
            </nuxt-link>
            <!-- xxx -->
            <nuxt-link to="../topic/xxx" class="mt-8">
              <div class="hidden flex flex-col w-64">
                  <p class="text-blue-900 text-sm">Programming Language</p>
                  <div class="flex items-center">
                      <p class="text-lg text-blue-900 font-semibold">
                        #xxx
                      </p>
                  </div>
              </div>
            </nuxt-link>
            <!-- xxx -->
            <nuxt-link to="../topic/xxx" class="mt-8">
              <div class="hidden flex flex-col w-64">
                  <p class="text-blue-900 text-sm">Programming Language</p>
                  <div class="flex items-center">
                      <p class="text-lg text-blue-900 font-semibold">
                        #xxx
                      </p>
                  </div>
              </div>
            </nuxt-link>
          </div> 
        </div>
      </section>
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
      title: "Computer Science - LearnSomething.io",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>