<template>
  <div class="body">
    <Header/>
    <section class="mt-32 px-32">
      <p class="text-purple-500 uppercase font-semibold">Hack your education</p>
      <h2 class="text-blue-900 text-5xl">Browse all topics.</h2>
      <p class="text-blue-900 leading-relaxed w-3/4">Here at LearnSomething.io we are always expanding our topic offerings. If you don't see a topic you want to learn available, don't panic. We'll add it as soon as we can. Demand dictates what's added first so please be patient with us. Go to the <a href="https://forms.gle/wwyM48EmXmz7vdn88" target="_blank"><span class="text-purple-500 hover:text-purple-600">topic suggestions</span></a> page to request a topic you'd like to see added to the site.</p>
    
      <div class="mt-20">
        <p class="text-purple-500 uppercase font-semibold">Stem</p>
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
              <nuxt-link to="/topic/basic-arithmetic" class="w-1/2 text-grey-100 mb-2 tooltip">
                Basic Arithmetic
                <span class="tooltiptext">coming soon</span>
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <!-- <nuxt-link to="/topic/pre-algebra" class="flex items-center w-1/2 text-black-900 hover:text-black-800 mb-2">
                Pre-algebra
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link> -->
              <nuxt-link to="/topic/pre-algebra" class="w-1/2 text-grey-100 mb-2 tooltip">
                Pre-algebra
                <span class="tooltiptext">coming soon</span>
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <nuxt-link to="/topic/algebra-one" class="flex items-center w-1/2 text-black-900 hover:text-black-800 mb-2">
                Algebra 1
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link>
              <!-- <nuxt-link to="/topic/geometry" class="flex items-center w-1/2 text-black-900 hover:text-black-800 mb-2">
                Geometry
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link> -->
              <nuxt-link to="/topic/geometry" class="w-1/2 text-grey-100 mb-2 tooltip">
                Geometry
                <span class="tooltiptext">coming soon</span>
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <nuxt-link to="/topic/algebra-two" class="w-1/2 text-grey-100 mb-2 tooltip">
                Algebra 2
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/trigonometry" class="w-1/2 text-grey-100 mb-2 tooltip">
                Trigonometry
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/precalculus" class="w-1/2 text-grey-100 mb-2 tooltip">
                Precalculus
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/calculus" class="w-1/2 text-grey-100 mb-2 tooltip">
                Calculus
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/statistics-probability" class="w-1/2 text-grey-100 mb-2 tooltip">
                Statistics & Probability
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/multivariable-calculus" class="w-1/2 text-grey-100 mb-2 tooltip">
                Multivariable Calculus
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/linear-algebra" class="w-1/2 text-grey-100 mb-2 tooltip">
                Linear Algebra
                <span class="tooltiptext">coming soon</span>
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
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link>
              <!-- <nuxt-link to="/topic/chemistry" class="flex items-center w-1/2 text-black-900 hover:text-black-800 mb-2">
                Chemistry
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link> -->
              <nuxt-link to="/topic/chemistry" class="w-1/2 text-grey-100 mb-2 tooltip">
                Chemistry
                <span class="tooltiptext">coming soon</span>
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <!-- <nuxt-link to="/topic/biology" class="flex items-center w-3/5 text-black-900 hover:text-black-800 mb-2">
                Biology
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link> -->
              <nuxt-link to="/topic/biology" class="w-1/2 text-grey-100 mb-2 tooltip">
                Biology
                <span class="tooltiptext">coming soon</span>
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <nuxt-link to="/topic/organic-chemistry" class="w-1/2 text-grey-100 mb-2 tooltip">
                Organic Chemistry
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/cosmology-astronomy" class="w-1/2 text-grey-100 mb-2 tooltip">
                Cosmology & Astronomy
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
            </div> 
          </div>
          <div class="h-full w-1/3">
            <nuxt-link to="../filters/computer-science" id="computer-science" class="text-black-900 uppercase font-semibold">computer science</nuxt-link>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/cybersecurity" class="flex w-1/2 text-grey-100 mb-2 tooltip">
                Cybersecurity
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/cryptography" class="flex w-1/2 text-grey-100 mb-2 tooltip">
                Cryptography
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/computer-networking" class="flex items-center w-3/4 text-black-900 hover:text-black-800 mb-2">
                Computer Networking
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link>
              <nuxt-link to="/topic/html-css" class="flex items-center w-1/2 text-black-900 hover:text-black-800 mb-2">
                HTML & CSS
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>              </nuxt-link>
              <nuxt-link to="/topic/java" class="flex items-center w-1/2 text-black-900 hover:text-black-800 mb-2">
                Java
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link>
              <nuxt-link to="/topic/javascript" class="flex items-center w-1/2 text-black-900 hover:text-black-800 mb-2">
                JavaScript
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link>
              <nuxt-link to="/topic/ruby" class="flex items-center w-1/2 text-black-900 hover:text-black-800 mb-2">
                Ruby
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link>
              <nuxt-link to="/topic/ruby-on-rails" class="flex items-center w-3/4 text-black-900 hover:text-black-800 mb-2">
                Ruby on Rails
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link>
              <nuxt-link to="/topic/php" class="w-1/2 text-grey-100 mb-2 tooltip">
                PHP
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/python" class="flex items-center w-1/2 text-black-900 hover:text-black-800 mb-2">
                Python
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>              </nuxt-link>
              <nuxt-link to="/topic/laravel" class="w-1/2 text-grey-100 mb-2 tooltip">
                Laravel
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/c++" class="w-1/2 text-grey-100 mb-2 tooltip">
                C++
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/sql" class="w-1/2 text-grey-100 mb-2 tooltip">
                SQL
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/command-line" class="flex w-1/2 text-grey-100 mb-2 tooltip">
                Command Line
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/git" class="w-1/2 text-grey-100 mb-2 tooltip">
                Git
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/text-editors" class="w-1/2 text-grey-100 mb-2 tooltip">
                Text Editors
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
            </div> 
          </div>
        </div>
      </div>

      <div class="mt-20">
        <p class="text-purple-500 uppercase font-semibold">Essential Life Skills</p>
        <div class="mt-10 flex">
          <!-- cooking section -->
          <div class="h-full w-1/3">
            <p id="cooking" class="text-black-900 uppercase font-semibold">Cooking</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/korean" class="flex w-1/2 text-grey-100 mb-2 tooltip">
                Korean
                <span class="tooltiptext">coming soon</span>
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <nuxt-link to="/topic/italian" class="flex w-1/2 text-grey-100 mb-2 tooltip">
                Italian
                <span class="tooltiptext">coming soon</span>
                <!-- <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <nuxt-link to="/topic/indian" class="flex w-1/2 text-grey-100 mb-2 tooltip">
                Indian
                <span class="tooltiptext">coming soon</span>
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <!-- <nuxt-link to="/topic/" class="flex w-1/2 text-grey-100 mb-2 tooltip">
                American
                <span class="tooltiptext">coming soon</span>
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
              </nuxt-link> -->
            </div>           
          </div>
          <!-- cleaning section -->
          <div class="h-full w-1/3">
            <p id="cleaning" class="text-black-900 uppercase font-semibold">Cleaning</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/bathroom" class="flex w-1/2 text-grey-100 mb-2 tooltip">
                Bathroom
                <span class="tooltiptext">coming soon</span>
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <nuxt-link to="/topic/kitchen" class="flex w-1/2 text-grey-100 mb-2 tooltip">
                Kitchen
                <span class="tooltiptext">coming soon</span>
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
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link> -->
            </div>           
          </div>
          <!-- survival section -->
          <div class="h-full w-1/3">
            <p id="survival" class="text-black-900 uppercase font-semibold">Survival</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/hunting" class="w-1/2 text-grey-100 mb-2 tooltip">
                Hunting
                <span class="tooltiptext">coming soon</span>
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <!-- <nuxt-link to="/topic/" class="flex items-center w-1/2 text-black-900 hover:text-black-800 mb-2">
                Italian
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
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link> -->
            </div>           
          </div>
        </div>
      </div>
      <div class="mt-20">
        <div class="mt-10 flex">
          <!-- self defense section -->
          <div class="h-full w-1/3">
            <p id="self-defense" class="text-black-900 uppercase font-semibold">Self Defense</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/krav-maga" class="flex w-1/2 text-grey-100 mb-2 tooltip">
                Krav Maga
                <span class="tooltiptext">coming soon</span>
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <nuxt-link to="/topic/boxing" class="flex w-1/2 text-grey-100 mb-2 tooltip">
                Boxing
                <span class="tooltiptext">coming soon</span>
                <!-- <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <nuxt-link to="/topic/brazilian-jiu-jitsu" class="flex w-1/2 text-grey-100 mb-2 tooltip">
                Brazilian Jiu Jitsu
                <span class="tooltiptext">coming soon</span>
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <!-- <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link> -->
            </div>           
          </div>
          <!-- dating section -->
          <!-- <div class="h-full w-1/3">
            <p id="dating" class="text-black-900 uppercase font-semibold">Dating</p>
            <div class="mt-5 flex flex-col"> -->
              <!-- <nuxt-link to="/topic/" class="flex items-center w-3/5 text-black-900 hover:text-black-800 mb-2">
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
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link> -->
            <!-- </div>           
          </div> -->
          <!-- xxx section -->
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
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
               xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
            </div>           
          </div> -->
        </div>
      </div>
      <div class="mt-20">
        <p class="text-purple-500 uppercase font-semibold">Self Care</p>
        <div class="mt-10 flex">
          <!-- skin care section -->
          <div class="h-full w-1/3">
            <p id="skin-care" class="text-black-900 uppercase font-semibold">Skin Care</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/acne-treatment" class="w-1/2 text-grey-100 mb-2 tooltip">
                Acne Treatment
                <span class="tooltiptext">coming soon</span>
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <nuxt-link to="/topic/skin-cleansing" class="w-1/2 text-grey-100 mb-2 tooltip">
                Cleansing
                <span class="tooltiptext">coming soon</span>
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <!-- <nuxt-link to="/topic/" class="flex items-center w-3/5 text-black-900 hover:text-black-800 mb-2">
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
              </nuxt-link> -->
              <!-- <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link> -->
            </div>           
          </div>
          <!-- fitness section -->
          <div class="h-full w-1/3">
            <p id="fitness" class="text-black-900 uppercase font-semibold">Fitness</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/calisthenics" class="w-1/2 text-grey-100 mb-2 tooltip">
                Calisthenics
                <span class="tooltiptext">coming soon</span>
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <nuxt-link to="/topic/weight-lifting" class="w-1/2 text-grey-100 mb-2 tooltip">
                Weight Lifting
                <span class="tooltiptext">coming soon</span>
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <nuxt-link to="/topic/running" class="w-1/2 text-grey-100 mb-2 tooltip">
                Running
                <span class="tooltiptext">coming soon</span>
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <nuxt-link to="/topic/walking" class="w-1/2 text-grey-100 mb-2 tooltip">
                Walking
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
            </div> 
          </div>
          <!-- nutrition section -->
          <div class="h-full w-1/3">
            <p id="nutrition" class="text-black-900 uppercase font-semibold">Nutrition</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/vegan" class="w-1/2 text-grey-100 mb-2 tooltip">
                Vegan
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/vegetarian" class="w-1/2 text-grey-100 mb-2 tooltip">
                Vegetarian
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/keto" class="w-1/2 text-grey-100 mb-2 tooltip">
                Keto
                <span class="tooltiptext">coming soon</span>
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <nuxt-link to="/topic/paleo" class="w-1/2 text-grey-100 mb-2 tooltip">
                Paleo
                <span class="tooltiptext">coming soon</span>
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
            </div> 
          </div>
        </div>
        <div class="mt-10 flex">
          <!-- meditation section -->
          <div class="h-full w-1/3">
            <p id="meditation" class="text-black-900 uppercase font-semibold">Meditation</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/mindfulness" class="w-1/2 text-grey-100 mb-2 tooltip">
                Mindfulness
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <!-- <nuxt-link to="/topic/" class="flex items-center w-3/5 text-black-900 hover:text-black-800 mb-2">
                Mindfulness
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
              </nuxt-link> -->
            </div>           
          </div>
          <!-- hair section -->
          <div class="h-full w-1/3">
            <p id="hair" class="text-black-900 uppercase font-semibold">Hair</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/black-hair" class="w-1/2 text-grey-100 mb-2 tooltip">
                Black Hair
                <span class="tooltiptext">coming soon</span>
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <!-- <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex items-center w-3/5 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link> -->
            </div> 
          </div>
          <!-- hygiene section -->
          <div class="h-full w-1/3">
            <p id="hygiene" class="text-black-900 uppercase font-semibold">Hygiene</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/feminine-hygiene" class="w-1/2 text-grey-100 mb-2 tooltip">
                Feminine Hygiene
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <!-- <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/ruby" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link> -->
            </div> 
          </div>
        </div>
      </div>

      <!-- Finances Section -->
      <div class="mt-20">
        <p class="text-purple-500 uppercase font-semibold">Finances</p>
        <div class="mt-10 flex">
          <!-- credit section -->
          <div class="h-full w-1/3">
            <p id="credit" class="text-black-900 uppercase font-semibold">Credit</p>
            <div class="mt-5 flex flex-col">
              <!-- <nuxt-link to="/topic/" class="flex items-center w-3/5 text-black-900 hover:text-black-800 mb-2">
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
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link> -->
            </div>           
          </div>
          <!-- money management section -->
          <div class="h-full w-1/3">
            <p id="money-management" class="text-black-900 uppercase font-semibold">Money Management</p>
            <div class="mt-5 flex flex-col">
              <!-- <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex items-center w-3/5 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link> -->
            </div> 
          </div>
          <!-- paying taxes section -->
          <div class="h-full w-1/3">
            <p id="paying-taxes" class="text-black-900 uppercase font-semibold">Paying Taxes</p>
            <div class="mt-5 flex flex-col">
              <!-- <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link> -->
            </div> 
          </div>
          <!-- trading section -->
          <div class="h-full w-1/3">
            <p id="trading" class="text-black-900 uppercase font-semibold">Trading</p>
            <div class="mt-5 flex flex-col">
              <!-- <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                Forex
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                Cryptocurrency
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link> -->
            </div> 
          </div>
        </div>
      </div>

      <!-- Business Administration Section -->
      <div class="mt-20">
        <p class="text-purple-500 uppercase font-semibold">Business Administration</p>
        <div class="mt-10 flex">
          <!-- office administration section -->
          <div class="h-full w-1/3">
            <p id="office-administration" class="text-black-900 uppercase font-semibold">Office Administration</p>
            <div class="mt-5 flex flex-col">
              <nuxt-link to="/topic/microsoft-word" class="flex w-1/2 text-grey-100 mb-2 tooltip">
                Microsoft Word
                <span class="tooltiptext">coming soon</span>
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <nuxt-link to="/topic/microsoft-excel" class="flex w-1/2 text-grey-100 mb-2 tooltip">
                Microsoft Excel
                <span class="tooltiptext">coming soon</span>
                <!-- <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div> -->
              </nuxt-link>
              <nuxt-link to="/topic/microsoft-powerpoint" class="flex w-1/2 text-grey-100 mb-2 tooltip">
                Microsoft Powerpoint
                <span class="tooltiptext">coming soon</span>
                <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
              </nuxt-link>
              <!-- <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link> -->
            </div>           
          </div>
          <!-- money management section -->
          <div class="h-full w-1/3">
            <!-- <p id="xxx" class="text-black-900 uppercase font-semibold">xxx</p> -->
            <div class="mt-5 flex flex-col">
              <!-- <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex items-center w-3/5 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
                <div class="ml-3 bg-purple-500 text-white text-xs font-semibold rounded uppercase px-2">new</div>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link> -->
            </div> 
          </div>
          <!-- paying taxes section -->
          <div class="h-full w-1/3">
            <!-- <nuxt-link to="filters/xxx" id="xxx" class="text-black-900 uppercase font-semibold">xxx</nuxt-link> -->
            <div class="mt-5 flex flex-col">
              <!-- <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="w-1/2 text-grey-100 mb-2 tooltip">
                xxx
                <span class="tooltiptext">coming soon</span>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link>
              <nuxt-link to="/topic/" class="flex w-1/2 text-black-900 hover:text-black-800 mb-2">
                xxx
                <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
              </nuxt-link> -->
            </div> 
          </div>
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
      title: "Browse Topics - LearnSomething.io",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>