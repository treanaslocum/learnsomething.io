<template>
  <div>
    <header class="m-6">
      <div class="flex justify-between items-center font-semibold text-sm">

        <div class="ml-12 flex items-center">
          <nuxt-link to="/topics"><button class="mr-6 font-semibold dropdown">Categories<span class="ml-2"><svg class="dropdown" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></span></button></nuxt-link>
          <nuxt-link to="/about" class="mr-8">Mission</nuxt-link>
          <nuxt-link to="/" class="">Community</nuxt-link>
          
        </div>
        
        <div class="mr-32">
          <nuxt-link to="/">
            <svg class="logo" xmlns="http://www.w3.org/2000/svg" width="130" height="50" viewBox="0 0 205.581 53">
              <g id="Group_22" data-name="Group 22" transform="translate(-856.998 -47)">
                <g id="Group_10" data-name="Group 10" transform="translate(768.022 -89)">
                  <g id="Group_9" data-name="Group 9">
                    <path id="Rectangle_67" data-name="Rectangle 67" d="M3.15,0h12.6A15.748,15.748,0,0,1,31.5,15.748V21A15.748,15.748,0,0,1,15.748,36.745h0A15.748,15.748,0,0,1,0,21V3.15A3.15,3.15,0,0,1,3.15,0Z" transform="translate(133.512 144.262) rotate(68)"/>
                    <text id="s" transform="matrix(0.174, 0.985, -0.985, 0.174, 108.672, 155.226)" fill="#fff" font-size="48" font-family="Heebo-Bold, Heebo" font-weight="700"><tspan x="0" y="0">s</tspan></text>
                  </g>
                  <text id="skillseed" transform="translate(149.557 174)" font-size="36" font-family="Heebo-Bold, Heebo" font-weight="700"><tspan x="0" y="0">skillseed</tspan></text>
                </g>
              </g>
            </svg>
          </nuxt-link>
        </div>
        <div class="mr-12 flex items-center">
          <nuxt-link to="/login" class="ml-4 mr-8">Login</nuxt-link>
          <p>&#x2022;</p>
          <nuxt-link to="/signup" class="ml-8 black-btn text-white rounded-md pt-2 pb-2 pl-4 pr-4">Signup</nuxt-link>
        </div>
      </div>
    
      
    </header>



    <!-- <header class="mt-10 px-20">
      <div class="flex items-center justify-between">
        <nuxt-link to="/">
          <svg class="w-48" xmlns="http://www.w3.org/2000/svg" width="209.5" height="47.5" viewBox="0 0 209.5 47.5"><defs><style>.a,.c{fill:#2f2e41;}.b{fill:#fff;font-size:40px;font-family:WorkSans-Medium, Work Sans;font-weight:500;}.c{font-size:20px;font-family:WorkSans-Regular, Work Sans;}</style></defs><g transform="translate(-107.5 -53.5)"><path class="a" d="M19.162,7.568a5,5,0,0,1,8.676,0L42.709,33.514A5,5,0,0,1,38.371,41H8.629a5,5,0,0,1-4.338-7.486Z" transform="translate(149.5 54) rotate(90)"/><text class="b" transform="translate(107.5 90.5)"><tspan x="0" y="0">ls</tspan></text><text class="c" transform="translate(157 84)"><tspan x="0" y="0">LearnSomething</tspan></text></g></svg>
        </nuxt-link>
        <div class="text-blue-900 font-semibold">
          <nuxt-link to="/topics" class="ml-8 hover:text-blue-800">Browse Topics</nuxt-link>
          <nuxt-link to="/challenges" class="ml-8 hover:text-blue-800">Challenges</nuxt-link>
          <nuxt-link to="/about" class="ml-8 hover:text-blue-800">Manifesto</nuxt-link>
          <a href="https://twitter.com/thelrnsomething" target="_blank" class="ml-8 hover:text-blue-800">Community</a>
          Connect to Teespring Shop
          <a href="" class="ml-8">Shop</a>
          <nuxt-link to="/about" class="ml-8 bg-grey-100 text-blue-900 rounded px-4 py-3">Signup</nuxt-link>
        </div>
      </div>
    </header> -->
  </div>
</template>