<template>
  <div>
    <AlertMessage/>
    <Header/>

    <!-- Index Page Top Content -->

    <div class="mt-32 pl-32 max-w-4xl text-blue-900">
      <div class="max-w-xl font-regular leading-tight">
        <h1 class="text-5xl">Self-taught learners <span class="font-semibold">meet YouTube</span>.</h1>
      </div>
      <div class="mt-6 max-w-xl leading-tight font-regular text-xl">
        <p>Push your knowledge to the next level by unlocking the power of the #2 most used search engine in the world.
        <nuxt-link to="#get-started" class="mt-1 font-semibold">Ready to start learning?</nuxt-link></p>
        
      </div>
      
      <div class="mt-8 max-w-xl flex flex-wrap flex-wrap-reverse items-center justify-between content-around font-semibold">
        
        <div class="py-4">
          <a href="https://twitter.com/thelrnsomething" target="_blank" class="px-10 py-4 uppercase text-blue-900 bg-grey-100 hover:bg-grey-400 rounded flex items-center">
            <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" width="19.652" height="15.962" viewBox="0 0 19.652 15.962"><defs><style>.a{fill:#2f2e41;}</style></defs><path class="a" d="M19.633,8c.013.175.013.349.013.523A11.382,11.382,0,0,1,8.186,19.981,11.381,11.381,0,0,1,2,18.172a8.417,8.417,0,0,0,.973.05,8.069,8.069,0,0,0,5-1.721,4.036,4.036,0,0,1-3.767-2.793,5.129,5.129,0,0,0,.761.062,4.286,4.286,0,0,0,1.061-.137A4.027,4.027,0,0,1,2.8,9.68V9.63a4.065,4.065,0,0,0,1.82.511A4.034,4.034,0,0,1,3.371,4.755,11.457,11.457,0,0,0,11.677,8.97a4.577,4.577,0,0,1-.1-.923,4.032,4.032,0,0,1,6.971-2.756A7.957,7.957,0,0,0,21.1,4.318a4.02,4.02,0,0,1-1.771,2.22,8.073,8.073,0,0,0,2.319-.624A8.645,8.645,0,0,1,19.633,8Z" transform="translate(-2 -4.019)"/></svg>
            Join the community
          </a>
        </div>
        
      
        <div class="py-4">
          <nuxt-link to="/challenges" class="px-10 py-4 uppercase text-white bg-purple-500 hover:bg-purple-400 rounded">
          Take on a challenge
          </nuxt-link>
        </div>
        
        

      </div>
    </div>

    <!-- <section class="mt-32 bg-blue-900 h-12 flex items-center">
      <div class="px-32 flex items-center">
        <p class="text-white uppercase text-sm font-semibold text-grey-200">Promoted challenge  <span class="ml-2">&gt;&gt;</span></p>
        <p class="ml-12 text-xs text-grey-200 font-semibold"><nuxt-link to="/challenges/steameveryday"><span class="uppercase">#steameveryday</span></nuxt-link></p>
      </div>
    </section> -->

    <section id="get-started" class="mt-64 flex flex-col items-center justify-center">
      <div class="-mb-10 bg-purple-500 w-48 h-3"></div>
      <h2 class="text-blue-900 text-3xl font-semibold">How it works</h2>
      <p class="mt-12 text-black-900 text-lg">Learn anything and everything you to want to learn for free through curated video playlists.</p>
      <div class="mt-24 flex flex-1 items-center justify-center">
        <div class="flex flex-col items-center h-48">
          <svg class="stroke-current text-purple-500" xmlns="http://www.w3.org/2000/svg" width="53.652" height="65" viewBox="0 0 53.652 71.539"><defs></defs><g transform="translate(-64.016)"><g transform="translate(84.88 20.869)"><path class="a" d="M245.7,179.613,215.9,149.807a1.492,1.492,0,0,0-2.545,1.055v41.269a1.49,1.49,0,0,0,2.405,1.174l7.568-5.916,6.6,11.886a1.494,1.494,0,0,0,1.973.608l8.942-4.471a1.487,1.487,0,0,0,.757-.891,1.512,1.512,0,0,0-.119-1.165l-6.223-11.2h9.389a1.492,1.492,0,0,0,1.055-2.545Zm-12.974-.432a1.494,1.494,0,0,0-1.305,2.214l6.7,12.05-6.274,3.139-6.757-12.167a1.5,1.5,0,0,0-1.007-.739,1.47,1.47,0,0,0-.3-.03,1.5,1.5,0,0,0-.918.316l-6.533,5.109V154.46l24.721,24.721Z" transform="translate(-213.35 -149.372)"/></g><g transform="translate(84.88)"><path class="a" d="M214.84,0a1.491,1.491,0,0,0-1.49,1.49v8.942a1.49,1.49,0,1,0,2.981,0V1.49A1.491,1.491,0,0,0,214.84,0Z" transform="translate(-213.35)"/></g><g transform="translate(64.016 20.864)"><path class="a" d="M74.448,149.333H65.506a1.49,1.49,0,0,0,0,2.981h8.942a1.49,1.49,0,1,0,0-2.981Z" transform="translate(-64.016 -149.333)"/></g><g transform="translate(96.802 20.864)"><path class="a" d="M309.115,149.333h-8.942a1.49,1.49,0,1,0,0,2.981h8.942a1.49,1.49,0,1,0,0-2.981Z" transform="translate(-298.683 -149.333)"/></g><g transform="translate(70.126 6.112)"><path class="a" d="M116.613,50.507l-6.325-6.322a1.49,1.49,0,0,0-2.107,2.107l6.325,6.322a1.5,1.5,0,0,0,1.055.435,1.473,1.473,0,0,0,1.052-.435A1.491,1.491,0,0,0,116.613,50.507Z" transform="translate(-107.745 -43.749)"/></g><g transform="translate(70.126 29.298)"><path class="a" d="M116.613,210.137a1.491,1.491,0,0,0-2.107,0l-6.325,6.322a1.49,1.49,0,0,0,2.107,2.107l6.325-6.322A1.491,1.491,0,0,0,116.613,210.137Z" transform="translate(-107.745 -209.701)"/></g><g transform="translate(93.308 6.11)"><g transform="translate(0)"><path class="a" d="M282.547,44.171a1.49,1.49,0,0,0-2.11,0l-6.325,6.322a1.491,1.491,0,0,0,2.11,2.107l6.325-6.322A1.491,1.491,0,0,0,282.547,44.171Z" transform="translate(-273.676 -43.733)"/></g></g></g></svg>
          <p class="mt-8 text-black-900 font-semibold">Choose a topic you want to learn.</p>
        </div>
        <div class="ml-24 flex flex-col items-center h-48">
          <svg class="stroke-current text-purple-500" width="120" height="65" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="m49.123 47.288-10.259-4.197c-1.133-.463-1.864-1.553-1.864-2.777v-.718c3.077-2.126 5.427-5.126 6.759-8.596h.241c2.757 0 5-2.243 5-5v-8.597c0-5.01-2.244-9.679-6.156-12.81-2.898-2.317-6.536-3.593-10.247-3.593h-3.421c-6.09 0-11.677 3.067-14.946 8.204l-2.6 4.086 1.046.695c1.455.97 2.324 2.594 2.324 4.344v7.671c0 2.757 2.243 5 5 5h.241c1.332 3.471 3.682 6.47 6.759 8.596v.718c0 1.224-.731 2.313-1.864 2.776l-10.259 4.197c-6 2.455-9.877 8.231-9.877 14.713v1h54v-1c0-6.482-3.877-12.258-9.877-14.712zm-8.209 3.276-4.065 3.049 2.694-8.083.569.233zm-17.027-4.801.569-.233 2.694 8.083-4.065-3.049zm3.366 8.159 2.36 7.078h-.199l-4.127-4.127zm-.953-9.182c.147-.076.291-.157.428-.246l5.272 6.025 5.272-6.025c.137.089.281.169.428.246l-5.42 16.26h-.56zm10.447 9.182 1.966 2.951-4.127 4.127h-.199zm.253-33.922c-1.474 0-2.75.81-3.444 2h-3.112c-.694-1.19-1.97-2-3.444-2h-6v-4.981c2.8.115 5.519.751 8.094 1.896 3.115 1.383 6.423 2.085 9.831 2.085h4.075v1zm4 2v2c0 1.103-.897 2-2 2h-2c-1.103 0-2-.897-2-2s.897-2 2-2zm-12 2c0 1.103-.897 2-2 2h-2c-1.103 0-2-.897-2-2v-2h4c1.103 0 2 .897 2 2zm15.414 4.958c.379-1.482.586-3.025.586-4.607v-1.166c1.161.414 2 1.514 2 2.816 0 1.512-1.129 2.753-2.586 2.957zm-30.063-16.219 1.566-2.461c2.9-4.557 7.856-7.278 13.259-7.278h3.421c3.259 0 6.454 1.121 8.997 3.156 3.435 2.748 5.406 6.848 5.406 11.247v4.622c-.584-.442-1.257-.773-2-.924v-4.101h-6.075c-3.127 0-6.161-.644-9.019-1.914-3.115-1.384-6.423-2.086-9.906-2.086h-1v8.101c-.743.152-1.416.482-2 .924v-3.696c0-2.183-.979-4.225-2.649-5.59zm2.649 13.261c0-1.302.839-2.402 2-2.816v1.166c0 1.582.207 3.126.586 4.608-1.457-.204-2.586-1.445-2.586-2.958zm4-1.649v-.351c0 2.206 1.794 4 4 4h2c2.206 0 4-1.794 4-4h2c0 2.206 1.794 4 4 4h2c2.206 0 4-1.794 4-4v.351c0 7.023-4.406 13.247-11 15.592-6.594-2.345-11-8.569-11-15.592zm10.684 17.597.316.106.316-.105c.947-.316 1.855-.702 2.719-1.152.08.835.353 1.623.804 2.297l-3.839 4.387-3.84-4.388c.45-.674.724-1.462.804-2.297.864.45 1.773.837 2.72 1.152zm-16.049 7.192 6.076-2.486-.797 4.782 3.729 2.797-1.931 2.895 3.874 3.872h-9.586v-6h-2v6h-7.965c.373-5.255 3.665-9.842 8.6-11.86zm33.365 11.86v-6h-2v6h-9.586l3.873-3.873-1.931-2.895 3.729-2.797-.797-4.782 6.076 2.486c4.935 2.019 8.227 6.605 8.6 11.86h-7.964z"/><path d="m36 32h-2c0 1.103-.897 2-2 2s-2-.897-2-2h-2c0 2.206 1.794 4 4 4s4-1.794 4-4z"/><path d="m39.095 9.278c.821.658 1.533 1.427 2.116 2.284l1.654-1.125c-.695-1.022-1.543-1.937-2.52-2.72-2.192-1.752-4.944-2.717-7.748-2.717h-1.597v2h1.597c2.352 0 4.661.81 6.498 2.278z"/><path d="m42.77 15.21 1.955-.42c-.16-.745-.389-1.478-.68-2.175l-1.846.77c.244.585.436 1.199.571 1.825z"/></svg>          
          <p class="mt-8  text-black-900 font-semibold">Pick a teacher.</p>
        </div>
        <div class="ml-24 flex flex-col items-center h-48">
          <svg class="stroke-current text-purple-500" xmlns="http://www.w3.org/2000/svg" width="71.171" height="65" viewBox="0 0 71.171 59.309"><defs><style>.a{fill:#938dff;}</style></defs><g transform="translate(0 0)"><rect class="a" width="1.841" height="1.841" transform="translate(8.591 14.474)"/><rect class="a" width="2.455" height="1.841" transform="translate(3.682 14.474)"/><rect class="a" width="2.455" height="1.841" transform="translate(12.887 14.474)"/><rect class="a" width="2.455" height="1.841" transform="translate(17.796 14.474)"/><rect class="a" width="2.455" height="1.841" transform="translate(22.706 14.474)"/><rect class="a" width="2.455" height="1.841" transform="translate(27.001 14.474)"/><rect class="a" width="2.455" height="1.841" transform="translate(31.911 14.474)"/><rect class="a" width="2.455" height="1.841" transform="translate(36.82 14.474)"/><rect class="a" width="1.841" height="1.841" transform="translate(41.729 14.474)"/><rect class="a" width="2.455" height="1.841" transform="translate(46.025 14.474)"/><rect class="a" width="2.455" height="1.841" transform="translate(50.934 14.474)"/><rect class="a" width="2.455" height="1.841" transform="translate(55.844 14.474)"/><rect class="a" width="1.841" height="1.841" transform="translate(60.753 14.474)"/><rect class="a" width="2.455" height="1.841" transform="translate(65.049 14.474)"/><rect class="a" width="1.841" height="2.455" transform="translate(8.591 51.907)"/><rect class="a" width="2.455" height="2.455" transform="translate(3.682 51.907)"/><rect class="a" width="2.455" height="2.455" transform="translate(12.887 51.907)"/><rect class="a" width="2.455" height="2.455" transform="translate(17.796 51.907)"/><rect class="a" width="2.455" height="2.455" transform="translate(22.706 51.907)"/><rect class="a" width="2.455" height="2.455" transform="translate(27.001 51.907)"/><rect class="a" width="2.455" height="2.455" transform="translate(31.911 51.907)"/><rect class="a" width="2.455" height="2.455" transform="translate(36.82 51.907)"/><rect class="a" width="1.841" height="2.455" transform="translate(41.729 51.907)"/><rect class="a" width="2.455" height="2.455" transform="translate(46.025 51.907)"/><rect class="a" width="2.455" height="2.455" transform="translate(50.934 51.907)"/><rect class="a" width="2.455" height="2.455" transform="translate(55.844 51.907)"/><rect class="a" width="1.841" height="2.455" transform="translate(60.753 51.907)"/><rect class="a" width="2.455" height="2.455" transform="translate(65.049 51.907)"/><path class="a" d="M69.984,49.489H65.24V45.931a1.186,1.186,0,0,0-1.186-1.186H59.309V41.186A1.186,1.186,0,0,0,58.123,40H13.048a1.186,1.186,0,0,0-1.186,1.186v3.559H7.117a1.186,1.186,0,0,0-1.186,1.186v3.559H1.186A1.186,1.186,0,0,0,0,50.676V98.123a1.186,1.186,0,0,0,1.186,1.186h68.8a1.186,1.186,0,0,0,1.186-1.186V50.676A1.186,1.186,0,0,0,69.984,49.489Zm-55.75-7.117h42.7v2.372h-42.7ZM8.3,47.117H62.867v2.372H8.3ZM68.8,96.937H2.372V51.862H68.8Z" transform="translate(0 -40)"/><path class="a" d="M200,212.773a1.187,1.187,0,0,0,1.866.973L217.659,202.7a1.186,1.186,0,0,0,0-1.943l-15.793-11.048a1.186,1.186,0,0,0-1.866.973Zm2.372-19.817,12.537,8.771L202.372,210.5Z" transform="translate(-170.346 -167.327)"/></g></svg>
          <p class="mt-8 text-black-900 font-semibold">Work your way through the playlist.</p>
        </div>
        <div class="ml-24 flex flex-col items-center h-48">
          <svg class="stroke-current text-purple-500" xmlns="http://www.w3.org/2000/svg" width="70.698" height="65" viewBox="0 0 70.698 53.309"><defs><style>.a{fill:#938dff;}</style></defs><path class="a" d="M33.25,39.758l-7.275-7.275L18.7,39.758l7.275,7.275Zm-7.275-4.067,4.067,4.067-4.067,4.067-4.067-4.067Zm-9.074,5.2H14.633V38.624H16.9Zm36.765-1.134-7.275-7.275-7.275,7.275,7.275,7.275Zm-7.275-4.067,4.067,4.067-4.067,4.067-4.067-4.067Zm11.342,5.2H55.465V38.624h2.268ZM67.942,52.443v-6.7l3.591-5.984-3.591-5.985V18.87a5.686,5.686,0,0,0,3.344-6.031A5.8,5.8,0,0,0,65.478,8H63.4a2.271,2.271,0,0,0-2.268,2.268V25.013a5.671,5.671,0,0,1-11.342,0v-6.8a5.69,5.69,0,0,0,2.093-5.968,5.619,5.619,0,0,0-4.146-4.085,5.675,5.675,0,0,0-4.752,10.053v5.671a6.805,6.805,0,1,1-13.611,0V18.208a5.675,5.675,0,0,0-4.754-10.05,5.616,5.616,0,0,0-4.144,4.084,5.688,5.688,0,0,0,2.093,5.968v6.8a5.671,5.671,0,0,1-11.342,0V10.268A2.271,2.271,0,0,0,8.962,8H6.888a5.8,5.8,0,0,0-5.807,4.841,5.684,5.684,0,0,0,3.344,6.03v14.9L.834,39.758l3.591,5.985v6.7a3.4,3.4,0,0,0-2.268,3.193v2.268a3.407,3.407,0,0,0,3.4,3.4H66.807a3.407,3.407,0,0,0,3.4-3.4V55.637A3.4,3.4,0,0,0,67.942,52.443ZM66.583,43.6,62.74,39.758l3.843-3.842,2.3,3.842ZM3.327,13.162a3.525,3.525,0,0,1,3.561-2.893H8.962V25.013a7.94,7.94,0,0,0,15.879,0V16.947l-.566-.328a3.431,3.431,0,0,1-1.592-3.834,3.406,3.406,0,0,1,6.7.886,3.415,3.415,0,0,1-1.7,2.948l-.566.328v6.932a9.074,9.074,0,1,0,18.148,0V16.947l-.566-.328a3.407,3.407,0,0,1,2.535-6.253,3.375,3.375,0,0,1,2.459,2.419,3.433,3.433,0,0,1-1.592,3.834l-.567.328v8.067a7.94,7.94,0,1,0,15.879,0V10.268h2.073a3.525,3.525,0,0,1,3.561,2.893,3.413,3.413,0,0,1-2.515,3.805l-.852.219V33.618l-6.141,6.141L65.673,45.9v6.336H6.693V45.9l6.141-6.141L6.693,33.618V17.186l-.852-.219a3.414,3.414,0,0,1-2.515-3.805ZM5.784,35.917l3.843,3.842L5.784,43.6l-2.3-3.842ZM67.942,57.906a1.135,1.135,0,0,1-1.134,1.134H5.559a1.135,1.135,0,0,1-1.134-1.134V55.637A1.135,1.135,0,0,1,5.559,54.5H66.807a1.135,1.135,0,0,1,1.134,1.134ZM37.317,40.893H35.049V38.624h2.268Z" transform="translate(-0.834 -8)"/></svg>
          <p class="mt-8 text-black-900 font-semibold">Gain mastery over the topic.</p>
        </div>
      </div>
      <div class="mt-8 flex flex-col items-center">
        <nuxt-link to="/topics" class="ml-10 px-10 py-3 uppercase text-blue-900 font-semibold bg-grey-100 hover:bg-grey-400 transition duration-700 ease-out transform hover:-translate-y-1 hover:scale-100 rounded flex items-center">
          Browse all topics
        </nuxt-link>
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
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import AlertMessage from '~/components/AlertMessage.vue'

export default {
  components: {
    Header,
    Footer,
    AlertMessage
  },
  head () {
    return {
      title: "Home - LearnSomething.io",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'LearnSomething.io empowers self-taught learners to push their knowledge to the next level by unlocking the power of the #2 most used search engine in the world.' }
      ]
    }
  }
}
</script>

