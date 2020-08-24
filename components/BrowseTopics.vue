<template>
  <div>
    <section class="mt-32 px-32">
      <p class="text-purple-500 uppercase font-semibold">Hack your education</p>
      <h2 class="text-blue-900 text-5xl">Browse all topics.</h2>
      <p class="text-blue-900 text-lg leading-relaxed w-3/4">Here at LearnSomething.io we are always expanding our topic offerings. If you don't see a topic you want to learn available, don't panic. We'll add it as soon as we can. Demand dictates what's added first so please be patient with us. Fill out the <a href="https://forms.gle/wwyM48EmXmz7vdn88" target="_blank"><span class="text-purple-500 hover:text-purple-600">topic suggestions</span></a> form to request a topic you'd like to see added to the site.</p>
      
      <!-- topic jump links -->
      <section class="mt-16">
        <div class="flex items-center">
          <p class="text-blue-900">Categories</p>
          <nuxt-link to="#stem" class="ml-3 ">
            <p class="bg-grey-200 rounded-full px-3 text-blue-900 uppercase font-semibold">Stem</p>
          </nuxt-link>
          <nuxt-link to="#art-design" class="ml-3 ">
            <p class="bg-grey-200 rounded-full px-3 text-blue-900 uppercase font-semibold">Art & Design</p>
          </nuxt-link>
          <nuxt-link to="#essential-life" class="ml-3 ">
            <p class="bg-grey-200 rounded-full px-3 text-blue-900 uppercase font-semibold">Essential Life Skills</p>
          </nuxt-link>
          <nuxt-link to="#self-care" class="ml-3 ">
            <p class="bg-grey-200 rounded-full px-3 text-blue-900 uppercase font-semibold">Self Care</p>
          </nuxt-link>
          <nuxt-link to="#finances" class="ml-3 ">
            <p class="bg-grey-200 rounded-full px-3 text-blue-900 uppercase font-semibold">Finances</p>
          </nuxt-link>
          <nuxt-link to="#business" class="ml-3 ">
            <p class="bg-grey-200 rounded-full px-3 text-blue-900 uppercase font-semibold">Business</p>
          </nuxt-link>
       
        </div>
      </section>

      <!-- start of stem section -->
      <div class="mt-32">
        <p id="stem" class="text-purple-500 uppercase font-semibold">Stem</p>
        <!-- start of stem row -->
        <div class="mt-10 flex">
          <!-- math section -->
          <div class="h-full w-1/3">
            <nuxt-link to="../filters/math" id="math" class="text-black-900 uppercase font-semibold">Math</nuxt-link>
            <div class="mt-5 flex flex-col">
              <!-- <nuxt-link to="/topic/basic-arithmetic" class="flex items-center w-3/5 text-black-900 hover:text-black-800 mb-2">
                Basic Arithmetic
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link> -->
              <nuxt-link to="/topic/basic-arithmetic" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Basic Arithmetic
                
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <!-- <nuxt-link to="/topic/pre-algebra" class="flex items-center w-1/2 text-black-900 hover:text-black-800 mb-2">
                Pre-algebra
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link> -->
              <nuxt-link to="/topic/pre-algebra" class="flex items-center w-1/2 text-black-900 hover:text-black-800 mb-2">
                Pre-algebra
                <!-- <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <nuxt-link to="/topic/algebra-one" class="flex items-center w-1/2 text-black-900 hover:text-black-800 mb-2">
                Algebra 1
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
                <!-- <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <!-- <nuxt-link to="/topic/geometry" class="flex items-center w-1/2 text-black-900 hover:text-black-800 mb-2">
                Geometry
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link> -->
              <nuxt-link to="/topic/geometry" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Geometry
                
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <nuxt-link to="/topic/algebra-two" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Algebra 2
                
              </nuxt-link>
              <nuxt-link to="/topic/trigonometry" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Trigonometry
                
              </nuxt-link>
              <nuxt-link to="/topic/precalculus" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Precalculus
                
              </nuxt-link>
              <nuxt-link to="/topic/calculus" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Calculus
                
              </nuxt-link>
              <nuxt-link to="/topic/statistics-probability" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Statistics & Probability
                
              </nuxt-link>
              <nuxt-link to="/topic/multivariable-calculus" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Multivariable Calculus
                
              </nuxt-link>
              <nuxt-link to="/topic/linear-algebra" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Linear Algebra
                
              </nuxt-link>
            </div>           
          </div>
          <!-- science section -->
          <div class="h-full w-1/3">
            <nuxt-link to="../filters/science" id="science" class="text-black-900 uppercase font-semibold">Science</nuxt-link>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/physics" class="flex items-center w-1/2 text-black-900 hover:text-black-800 mb-2">
                Physics
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
                <!-- <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <!-- <nuxt-link to="/topic/chemistry" class="flex items-center w-1/2 text-black-900 hover:text-black-800 mb-2">
                Chemistry
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link> -->
              <nuxt-link to="/topic/chemistry" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Chemistry
                
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <!-- <nuxt-link to="/topic/biology" class="flex items-center w-3/5 text-black-900 hover:text-black-800 mb-2">
                Biology
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link> -->
              <nuxt-link to="/topic/biology" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Biology
                
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <nuxt-link to="/topic/organic-chemistry" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Organic Chemistry
                
              </nuxt-link>
              <nuxt-link to="/topic/cosmology-astronomy" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Cosmology & Astronomy
                
              </nuxt-link>
            </div> 
          </div>
          <!-- computer science section -->
          <div class="h-full w-1/3">
            <nuxt-link to="../filters/computer-science" id="computer-science" class="text-black-900 uppercase font-semibold">computer science</nuxt-link>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/cybersecurity" class="pointer-events-none flex w-1/2 text-grey-100 mb-2">
                Cybersecurity
                
              </nuxt-link>
              <nuxt-link to="/topic/cryptography" class="pointer-events-none flex w-1/2 text-grey-100 mb-2">
                Cryptography
                
              </nuxt-link>
              <nuxt-link to="/topic/computer-networking" class="flex items-center w-3/4 text-black-900 hover:text-black-800 mb-2">
                Computer Networking
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
                <!-- <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <nuxt-link to="/topic/html-css" class="flex items-center w-1/2 text-black-900 hover:text-black-800 mb-2">
                HTML & CSS
                <!-- <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>              </nuxt-link> -->
              </nuxt-link>
              <nuxt-link to="/topic/java" class="flex items-center w-1/2 text-black-900 hover:text-black-800 mb-2">
                Java
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
                <!-- <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <nuxt-link to="/topic/javascript" class="flex items-center w-1/2 text-black-900 hover:text-black-800 mb-2">
                JavaScript
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
                <!-- <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <nuxt-link to="/topic/ruby" class="flex items-center w-1/2 text-black-900 hover:text-black-800 mb-2">
                Ruby
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
                <!-- <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <nuxt-link to="/topic/ruby-on-rails" class="flex items-center w-3/4 text-black-900 hover:text-black-800 mb-2">
                Ruby on Rails
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
                <!-- <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <nuxt-link to="/topic/sinatra" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Sinatra
              
              </nuxt-link>
              <nuxt-link to="/topic/php" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                PHP
                
              </nuxt-link>
              <nuxt-link to="/topic/python" class="flex items-center w-1/2 text-black-900 hover:text-black-800 mb-2">
                Python
                <!-- <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>               -->
              </nuxt-link>
              <nuxt-link to="/topic/laravel" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Laravel
                
              </nuxt-link>
              <nuxt-link to="/topic/c++" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                C++
                
              </nuxt-link>
              <nuxt-link to="/topic/sql" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                SQL
                
              </nuxt-link>
              <nuxt-link to="/topic/command-line" class="pointer-events-none flex w-1/2 text-grey-100 mb-2">
                Command Line
                
              </nuxt-link>
              <nuxt-link to="/topic/git" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Git
                
              </nuxt-link>
              <nuxt-link to="/topic/text-editors" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Text Editors
                
              </nuxt-link>
            </div> 
          </div>
        </div>
        <!-- end of stem row -->
      </div>
      <!-- end of stem section -->

      <!-- start of second stem row -->
      <div class="mt-10 flex">
        <!-- robotics section -->
        <div class="h-full w-1/3">
          <nuxt-link to="../filters/robotics" id="robotics" class="text-black-900 uppercase font-semibold">Robotics</nuxt-link>
          <div class="mt-5 flex flex-col">
            <nuxt-link to="/topic/arduino" class="pointer-events-none w-1/2 text-grey-100 mb-2">
              Arduino
              <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
            </nuxt-link>
            
          </div>           
        </div>
        <!-- electrical engineering -->
        <div class="h-full w-1/3">
          <nuxt-link to="../filters/electrical-engineering" id="electrical-engineering" class="text-black-900 uppercase font-semibold">Electrical Engineering</nuxt-link>
          <div class="mt-5 flex flex-col">
            <nuxt-link to="/topic/circuits-electronics" class="flex items-center w-1/2 pointer-events-none text-grey-100 mb-2">
              Circuits & Electronics
              <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              <!-- <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
            </nuxt-link>
          </div> 
        </div>
        <!-- mechanical engineering -->
        <div class="h-full w-1/3">
          <nuxt-link to="../filters/mechanical-engineering" id="mechanical-engineering" class="text-black-900 uppercase font-semibold">Mechanical Engineering</nuxt-link>
          <div class="mt-5 flex flex-col">
            <nuxt-link to="/topic/machines" class="pointer-events-none flex w-1/2 text-grey-100 mb-2">
              Machines
            </nuxt-link>
          </div> 
        </div>
      </div>
      <!-- end of second stem row -->

      <!-- start of third stem row-->
      <div class="mt-10 flex">
        <!-- civil engineering section -->
        <div class="h-full w-1/3">
          <nuxt-link to="../filters/civil-engineering" id="civic-engineering" class="text-black-900 uppercase font-semibold">Civil Engineering</nuxt-link>
          <div class="mt-5 flex flex-col">
            <!-- <nuxt-link to="/topic/xxx" class="flex items-center w-3/5 text-black-900 hover:text-black-800 mb-2">
              xxx
              <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
            </nuxt-link> -->
            <!-- <nuxt-link to="/topic/xxx" class="pointer-events-none w-1/2 text-grey-100 mb-2">
              xxx
              
              <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
            </nuxt-link> -->
          </div>           
        </div>
      </div>
      <!-- end of third stem row -->


        
    

      <!-- start of art & design section -->

      <div class="mt-20">
        <p id="art-design" class="text-purple-500 uppercase font-semibold">Art & Design</p>
        <!-- start of art & design row -->
        <div class="mt-10 flex">
          <!-- adobe section -->
          <div class="h-full w-1/3">
            <nuxt-link to="../filters/adobe" id="adobe" class="text-black-900 uppercase font-semibold">Adobe</nuxt-link>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/adobe-xd" class="flex items-center pointer-events-none w-1/2 text-grey-100 mb-2">
               Adobe XD
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <nuxt-link to="/topic/adobe-xd" class="flex items-center pointer-events-none w-1/2 text-grey-100 mb-2">
               After Effects
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <nuxt-link to="/topic/photoshop" class="flex items-center pointer-events-none w-1/2 text-grey-100 mb-2">
                Photoshop
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link> 
            </div>           
          </div>
          <!-- drawing section -->
          <div class="h-full w-1/3">
            <nuxt-link to="../filters/drawing" id="drawing" class="text-black-900 uppercase font-semibold">Drawing</nuxt-link>
            <div class="mt-5 flex flex-col">
            </div> 
          </div>
          <!-- xxx section -->
          <div class="h-full w-1/3">
            <!-- <nuxt-link to="../filters/xxx" id="xxx" class="text-black-900 uppercase font-semibold">xxx</nuxt-link> -->
            <div class="mt-5 flex flex-col">
            </div> 
          </div>
        </div>
        <!-- end of art & design row -->
      </div>
      <!-- end of art & design section -->

      
      <!-- start of essential life skills section -->
      <div class="mt-20">
        <p id="essential-life" class="text-purple-500 uppercase font-semibold">Essential Life Skills</p>
        <div class="mt-10 flex">
          <!-- cooking section -->
          <div class="h-full w-1/3">
            <nuxt-link to="../filters/cooking" id="cooking" class="text-black-900 uppercase font-semibold">Cooking</nuxt-link>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/korean-cuisine" class="flex items-center w-1/2 text-black-900 hover:text-black-800 mb-2">
                Korean Cuisine
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link>
              <nuxt-link to="/topic/italian-cuisine" class="pointer-events-none flex w-1/2 text-grey-100 mb-2">
                Italian Cuisine
                <!-- <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <nuxt-link to="/topic/indian-cuisine" class="pointer-events-none flex w-1/2 text-grey-100 mb-2">
                Indian Cuisine
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex w-1/2 pointer-events-none text-grey-100 mb-2">
                American Cuisine
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 pointer-events-none text-grey-100 mb-2">
                Thai Cuisine
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 pointer-events-none text-grey-100 mb-2">
                Chinese Cuisine
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 pointer-events-none text-grey-100 mb-2">
                Japanese Cuisine
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 pointer-events-none text-grey-100 mb-2">
                Mexican Cuisine
              </nuxt-link>
            </div>           
          </div>
          <!-- cleaning section -->
          <div class="h-full w-1/3">
            <p id="cleaning" class="text-black-900 uppercase font-semibold">Cleaning</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/bathroom" class="pointer-events-none flex w-1/2 text-grey-100 mb-2">
                Bathroom
                
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <nuxt-link to="/topic/kitchen" class="pointer-events-none flex w-1/2 text-grey-100 mb-2">
                Kitchen
                
                <!-- <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <!-- <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2">
                xxx
                
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2">
                xxx
                
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2">
                xxx
                
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2">
                xxx
                
              </nuxt-link> -->
            </div>           
          </div>
          <!-- survival section -->
          <div class="h-full w-1/3">
            <p id="survival" class="text-black-900 uppercase font-semibold">Survival</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/hunting" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Hunting
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <nuxt-link to="/topic/disaster-preparedness" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Disaster Preparedness
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <nuxt-link to="/topic/camping" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Camping
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <nuxt-link to="/topic/foraging" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Foraging
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <nuxt-link to="/topic/fishing" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Fishing
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <nuxt-link to="/topic/shelter-building" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Shelter Building
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <nuxt-link to="/topic/food-conservation" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Food Conservation
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
            </div>           
          </div>
        </div>
      </div>
      <!-- end of essential life skills section -->

      <!-- start of second essential life skills section -->
      <div class="mt-20">
        <div class="mt-10 flex">
          <!-- self defense section -->
          <div class="h-full w-1/3">
            <p id="self-defense" class="text-black-900 uppercase font-semibold">Self Defense</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/krav-maga" class="pointer-events-none flex w-1/2 text-grey-100 mb-2">
                Krav Maga
                
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <nuxt-link to="/topic/boxing" class="pointer-events-none flex w-1/2 text-grey-100 mb-2">
                Boxing
                
                <!-- <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <nuxt-link to="/topic/brazilian-jiu-jitsu" class="pointer-events-none flex w-1/2 text-grey-100 mb-2">
                Brazilian Jiu Jitsu
                
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
            </div>           
          </div>
          <!-- relationships section -->
          <div class="h-full w-1/3">
            <p id="relationships" class="text-black-900 uppercase font-semibold">Relationships</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/dating" class="flex items-center w-3/5 pointer-events-none text-grey-100 mb-2">
                Dating
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <nuxt-link to="/topic/friends" class="flex items-center w-1/2 pointer-events-none text-grey-100 mb-2">
                Friends
                <!-- <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <nuxt-link to="/topic/family" class="flex w-1/2 pointer-events-none text-grey-100 mb-2">
                Family
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>              
            </div>           
          </div>
          <!-- unmarked section -->
          <!-- <div class="h-full w-1/3">
            <p id="xxx" class="text-black-900 uppercase font-semibold">xxx</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/" class="flex items-center w-3/5 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex items-center w-1/2 text-black-900 hover:text-black-800 mb-2">
                xxx
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2">
                xxx
                
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2">
               xxx
                
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2">
                xxx
                
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2">
                xxx
                
              </nuxt-link>
            </div>           
          </div> -->
        </div>
      </div>
      <!-- end of second essential life skills section -->

      <!-- start of self care section -->
      <div class="mt-20">
        <p id="self-care" class="text-purple-500 uppercase font-semibold">Self Care</p>
        <div class="mt-10 flex">
          <!-- skin care section -->
          <div class="h-full w-1/3">
            <p id="skin-care" class="text-black-900 uppercase font-semibold">Skin Care</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/facial-care" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Facial Care
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <nuxt-link to="/topic/hydration" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Hydration
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
            </div>           
          </div>
          
          <!-- fitness section -->
          <div class="h-full w-1/3">
            <p id="fitness" class="text-black-900 uppercase font-semibold">Fitness</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/calisthenics-bodyweight" class="flex items-center pointer-events-none w-3/4 text-black-900 hover:text-black-800 mb-2">
                Calisthenics & Bodyweight
                <div class="ml-3 bg-yellow-500 text-white text-xs font-semibold rounded uppercase px-2">in progress</div>

                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <nuxt-link to="/topic/weight-lifting" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Weight Lifting
                
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <nuxt-link to="/topic/running" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Running
                
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <nuxt-link to="/topic/walking" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Walking
                
              </nuxt-link>
            </div> 
          </div>
          <!-- nutrition section -->
          <div class="h-full w-1/3">
            <p id="nutrition" class="text-black-900 uppercase font-semibold">Nutrition</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/vegan" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Vegan
                
              </nuxt-link>
              <nuxt-link to="/topic/vegetarian" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Vegetarian
                
              </nuxt-link>
              <nuxt-link to="/topic/keto" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Keto
                
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <nuxt-link to="/topic/paleo" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Paleo
                
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
            </div> 
          </div>
        </div>
        <!-- end of self care first row section -->
        <div class="mt-10 flex">
          <!-- mental health section -->
          <div class="h-full w-1/3">
            <p id="mental-health" class="text-black-900 uppercase font-semibold">Mental Health</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/meditation" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Meditation
              </nuxt-link>
              <!-- <nuxt-link to="/topic/" class="flex items-center w-3/5 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link> -->
            </div>            
          </div> 
          <!-- hair section -->
          <div class="h-full w-1/3">
            <p id="hair" class="text-black-900 uppercase font-semibold">Hair</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/black-hair" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Curly Hair
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <nuxt-link to="/topic/black-hair" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Coily Hair
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <nuxt-link to="/topic/styling" class="flex w-1/2 pointer-events-none w-1/2 text-grey-100 mb-2">
                Straight Hair
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link> 
              <nuxt-link to="/topic/styling" class="flex w-1/2 pointer-events-none w-1/2 text-grey-100 mb-2">
                Wavy Hair
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link> 
            </div> 
          </div>
          <!-- hygiene section -->
          <div class="h-full w-1/3">
            <p id="hygiene" class="text-black-900 uppercase font-semibold">Hygiene</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/feminine-hygiene" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Feminine Hygiene
              </nuxt-link>
              <nuxt-link to="/topic/grooming" class="w-1/2 pointer-events-none text-grey-100 mb-2">
                Grooming
              </nuxt-link>
            </div> 
          </div>
        </div>
      </div>
      <!-- end of self care section -->

      <!-- start of finances Section -->
      <div class="mt-20">
        <p id="finances" class="text-purple-500 uppercase font-semibold">Finances</p>
        <div class="mt-10 flex">
          <!-- credit section -->
          <div class="h-full w-1/3">
            <p id="credit" class="text-black-900 uppercase font-semibold">Credit</p>
            <div class="mt-5 flex flex-col">
            </div>           
          </div>
          <!-- money management section -->
          <div class="h-full w-1/3">
            <p id="money-management" class="text-black-900 uppercase font-semibold">Money Management</p>
            <div class="mt-5 flex flex-col">
            </div> 
          </div> 
          <!-- trading section -->
          <div class="h-full w-1/3">
            <p id="trading" class="text-black-900 uppercase font-semibold">Trading</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/stocks" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Stocks
              </nuxt-link>
              <nuxt-link to="/topic/forex" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Forex
              </nuxt-link>
              <nuxt-link to="/topic/cryptocurrency" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Cryptocurrency
              </nuxt-link>
              <nuxt-link to="/topic/options" class="flex items-center w-1/2 text-black-900 hover:text-black-800 mb-2">
                Options
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>

                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <nuxt-link to="/topic/futures" class="flex items-center w-1/2 text-black-900 hover:text-black-800 mb-2">
                Futures
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link> 
            </div> 
          </div>
        </div>

        <!-- start of second finances row -->
        <div class="mt-10 flex">
          <!-- paying taxes section -->
          <div class="h-full w-1/3">
            <p id="paying-taxes" class="text-black-900 uppercase font-semibold">Paying Taxes</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Income Taxes
              </nuxt-link>
              <nuxt-link to="/topic/" class="pointer-events-none w-1/2 text-grey-100 mb-2">
                Property Taxes
              </nuxt-link>
              <nuxt-link to="/topic/" class="pointer-events-none w-1/2 text-grey-100 mb-2 ">
                Business Taxes
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
            </div> 
          </div>
        </div>
        <!-- end of second finances row -->
      </div>
      <!-- end of finances Section -->


      <!-- start of business section -->
      <div class="mt-20">
        <p id="business" class="text-purple-500 uppercase font-semibold">Business</p>
        <div class="mt-10 flex">
          <!-- office administration section -->
          <div class="h-full w-1/3">
            <p id="office-administration" class="text-black-900 uppercase font-semibold">Office Administration</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/microsoft-word" class="pointer-events-none flex w-1/2 text-grey-100 mb-2">
                Microsoft Word
                
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <nuxt-link to="/topic/microsoft-excel" class="pointer-events-none flex w-1/2 text-grey-100 mb-2">
                Microsoft Excel
                
                <!-- <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <nuxt-link to="/topic/microsoft-powerpoint" class="pointer-events-none flex w-1/2 text-grey-100 mb-2">
                Microsoft Powerpoint
                
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <!-- <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2">
                xxx
                
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2">
                xxx
                
              </nuxt-link> -->
            </div>           
          </div>
          <!-- entrepreneurship section -->
          <div class="h-full w-1/3">
            <p id="entrepreneurship" class="text-black-900 uppercase font-semibold">Entrepreneurship</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/starting-a-business" class="flex w-1/2 pointer-events-none text-grey-100 mb-2">
                Starting A Business
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <nuxt-link to="/topic/startups" class="flex w-1/2 pointer-events-none text-grey-100 mb-2">
                Startups
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <nuxt-link to="/topic/remote-work" class="flex w-1/2 pointer-events-none text-grey-100 mb-2">
                Remote Work
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <!-- <nuxt-link to="/topic/" class="flex items-center w-3/5 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2">
                xxx
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2">
                xxx
              </nuxt-link>  --> 
            </div> 
          </div>
        </div>
      </div>
      <!-- end of business section -->
    </section>
    
  </div>
</template>