<template>
  <div>
    <header class="mt-10 px-20">
      <div class="flex items-center justify-between">
        <nuxt-link to="/">
          <svg class="w-48" xmlns="http://www.w3.org/2000/svg" width="209.5" height="47.5" viewBox="0 0 209.5 47.5"><defs><style>.a,.c{fill:#2f2e41;}.b{fill:#fff;font-size:40px;font-family:WorkSans-Medium, Work Sans;font-weight:500;}.c{font-size:20px;font-family:WorkSans-Regular, Work Sans;}</style></defs><g transform="translate(-107.5 -53.5)"><path class="a" d="M19.162,7.568a5,5,0,0,1,8.676,0L42.709,33.514A5,5,0,0,1,38.371,41H8.629a5,5,0,0,1-4.338-7.486Z" transform="translate(149.5 54) rotate(90)"/><text class="b" transform="translate(107.5 90.5)"><tspan x="0" y="0">ls</tspan></text><text class="c" transform="translate(157 84)"><tspan x="0" y="0">LearnSomething</tspan></text></g></svg>
        </nuxt-link>
        <div class="text-blue-900 font-semibold">
          <nuxt-link to="/topics" class="ml-8 hover:text-blue-800">Browse Topics</nuxt-link>
          <nuxt-link to="/challenges" class="ml-8 hover:text-blue-800">Challenges</nuxt-link>
          <nuxt-link to="/about" class="ml-8 hover:text-blue-800">About</nuxt-link>
          <a href="https://twitter.com/thelrnsomething" target="_blank" class="ml-8 hover:text-blue-800">Community</a>
          <!-- Connect to Teespring Shop -->
          <!-- <a href="" class="ml-8">Shop</a> -->
          <!-- <nuxt-link to="/about" class="ml-8 bg-grey-100 text-blue-900 rounded px-4 py-3">Signup</nuxt-link> -->
        </div>
      </div>
    </header>
  </div>
</template>