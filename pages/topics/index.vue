<template>
  <div class="body">
    <Header/>
    <section class="mt-32 px-32">
      <p class="text-purple-500 uppercase font-semibold">Hack your education</p>
      <h2 class="text-blue-900 text-5xl">Browse all topics.</h2>
      <p class="text-blue-900 leading-relaxed w-3/4">Here at LearnSomething.io we are always expanding our topic offerings. If you don't see a topic you want to learn available, don't panic. We'll add it as soon as we can. Demand dictates what's added first so please be patient with us. Go to the <nuxt-link to="/suggestions"><span class="text-purple-500 hover:text-purple-600">topic suggestions</span></nuxt-link> page to request a topic you'd like to see added to the site.</p>
    
      <div class="mt-10">
        <p class="text-purple-500 uppercase font-semibold">Stem</p>
        <div class="mt-10 flex">
          <!-- math section -->
          <div class="h-full w-1/3">
            <p id="math" class="text-black-900 uppercase font-semibold">Math</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/" class="flex items-center w-3/5 text-black-900 hover:text-black-800 mb-2">
                Basic Arithmetic
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex items-center w-1/2 text-black-900 hover:text-black-800 mb-2">
                Algebra 1
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                Pre-algebra
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                Geometry
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                Algebra 2
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                Trigonometry
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                Precalculus
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                Calculus
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                Statistics & Probability
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                Multivariable Calculus
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                Linear Algebra
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
            </div>           
          </div>
          <!-- science section -->
          <div class="h-full w-1/3">
            <p id="science" class="text-black-900 uppercase font-semibold">Science</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                Physics
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                Chemistry
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex items-center w-3/5 text-black-900 hover:text-black-800 mb-2">
                Biology
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                Organic Chemistry
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                Cosmology & Astronomy
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
            </div> 
          </div>
          <div class="h-full w-1/3">
            <p id="computer-science" class="text-black-900 uppercase font-semibold">computer science</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                Cybersecurity
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                Cryptography
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                Java
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                JavaScript
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/ruby" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                Ruby
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                Ruby on Rails
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                PHP
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                Python
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                Laravel
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                C++
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
               SQL
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
            </div> 
          </div>
        </div>
      </div>

      <div class="mt-10">
        <p class="text-purple-500 uppercase font-semibold">Essential Life Skills</p>
        <div class="mt-10 flex">
          <!-- math section -->
          <div class="h-full w-1/3">
            <p id="math" class="text-black-900 uppercase font-semibold">Cooking</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/" class="flex items-center w-3/5 text-black-900 hover:text-black-800 mb-2">
                Korean
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex items-center w-1/2 text-black-900 hover:text-black-800 mb-2">
                Italian
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                Indian
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                American
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                Thai
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                Chinese
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                Japanese
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                Mexican
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
            </div>           
          </div>
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
      title: "Browse Topics - LearnSomething.io",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>