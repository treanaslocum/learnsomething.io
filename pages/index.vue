<template>
  <div class="body min-h-screen max-h-screen">
    <Header/>
    <div class="mt-32 px-32 text-blue-900">
      <h1 class="font-regular text-5xl leading-tight">Self-taught<br> learners <span class="font-semibold">unite</span>.</h1>
      <p class="mt-4 font-regular text-lg w-3/5">Push your knowledge to the next level, through self-guided studying using YouTube video playlists and supplemental materials. <br><span class="font-semibold">Ready to challenge yourself?</span></p>
      <div class="mt-2 flex items-center font-semibold">
        <nuxt-link to="/challenges" class="px-10 py-3 uppercase box-shadow text-white bg-purple-500 hover:bg-purple-400 transition duration-700 ease-out transform hover:-translate-y-1 hover:scale-105 rounded flex items-center">
          <svg class="mr-3 stroke-current text-green-300" xmlns="http://www.w3.org/2000/svg" width="27.768" height="24.752" viewBox="0 0 27.768 24.752"><defs></defs><path class="a" d="M23.547,33.828c-.523-.2-1.081-.384-1.667-.547.151-.59.272-1.164.36-1.718.454-2.881-.048-4.9-1.414-5.69a2.675,2.675,0,0,0-1.356-.346c-1.588,0-3.6,1.18-5.62,3.172-.442-.434-.887-.833-1.329-1.191-2.267-1.834-4.269-2.409-5.634-1.621A3.618,3.618,0,0,0,5.343,28.88a.443.443,0,0,0,.882.08,2.905,2.905,0,0,1,1.1-2.305c1.011-.584,2.7-.022,4.634,1.542.422.341.846.722,1.268,1.136a28.7,28.7,0,0,0-2.506,3.093,28.508,28.508,0,0,0-4.035.647,16.094,16.094,0,0,1-.443-2.412.443.443,0,0,0-.882.087A16.949,16.949,0,0,0,5.834,33.3c-.567.16-1.107.337-1.614.532C1.5,34.875,0,36.32,0,37.9s1.5,3.022,4.221,4.069c.523.2,1.081.384,1.667.547-.151.59-.272,1.164-.36,1.718-.454,2.881.048,4.9,1.414,5.69a2.675,2.675,0,0,0,1.356.346c1.57,0,3.549-1.153,5.55-3.1.429.419.859.8,1.288,1.151a7.349,7.349,0,0,0,4.283,1.965,2.662,2.662,0,0,0,1.352-.345c1.366-.789,1.868-2.809,1.414-5.69-.087-.553-.208-1.128-.36-1.717a17.029,17.029,0,0,0,2.494-.884.443.443,0,0,0-.366-.807,16.173,16.173,0,0,1-2.366.838,28.516,28.516,0,0,0-1.417-3.711,28.643,28.643,0,0,0,1.474-3.836c3.289.921,5.238,2.375,5.238,3.769a2.9,2.9,0,0,1-1.445,2.109.443.443,0,1,0,.511.724,3.617,3.617,0,0,0,1.82-2.833c0-1.577-1.5-3.022-4.221-4.069ZM19.47,26.414a1.8,1.8,0,0,1,.913.227c1.011.584,1.369,2.328.981,4.784-.083.526-.2,1.073-.342,1.635a28.656,28.656,0,0,0-4.049-.64,28.58,28.58,0,0,0-2.5-3.087q.235-.232.471-.449c1.728-1.592,3.337-2.469,4.53-2.469Zm-5.618,3.554a26.879,26.879,0,0,1,1.969,2.369q-.954-.052-1.936-.053c-.675,0-1.343.019-2,.056A27.413,27.413,0,0,1,13.852,29.968Zm0,15.932a26.831,26.831,0,0,1-2.037-2.45c.68.04,1.373.06,2.073.06.675,0,1.343-.02,2-.057A27.258,27.258,0,0,1,13.848,45.9Zm.036-3.276c-.952,0-1.866-.037-2.736-.105-.489-.713-.962-1.464-1.412-2.244s-.851-1.542-1.22-2.313c.383-.807.81-1.62,1.276-2.427.451-.782.931-1.54,1.428-2.263.849-.065,1.739-.1,2.665-.1.9,0,1.77.033,2.6.1.5.725.98,1.488,1.439,2.282s.888,1.612,1.27,2.415c-.367.765-.773,1.534-1.215,2.3-.45.78-.929,1.537-1.426,2.259-.869.068-1.762.1-2.668.1Zm-3.877-.216a26.484,26.484,0,0,1-3.025-.521A26.774,26.774,0,0,1,8.041,39q.434.859.926,1.713Q9.47,41.588,10.007,42.408Zm.07-9.029q-.542.826-1.054,1.712Q8.5,36,8.038,36.918a27.18,27.18,0,0,1-1.11-3A26.488,26.488,0,0,1,10.078,33.379ZM.886,37.9c0-1.387,1.928-2.833,5.185-3.755a28.918,28.918,0,0,0,1.466,3.819,28.5,28.5,0,0,0-1.413,3.7C2.835,40.746.886,39.292.886,37.9ZM8.3,49.381a1.8,1.8,0,0,1-.913-.227C6.374,48.57,6.016,46.826,6.4,44.37c.083-.526.2-1.073.342-1.635a28.5,28.5,0,0,0,3.91.627,28.56,28.56,0,0,0,2.572,3.17q-.2.2-.4.379C11.1,48.5,9.491,49.381,8.3,49.381Zm13.01-5c.388,2.457.03,4.2-.981,4.784s-2.7.022-4.634-1.542c-.407-.329-.816-.7-1.224-1.093a28.579,28.579,0,0,0,2.574-3.166,28.937,28.937,0,0,0,3.922-.621C21.11,43.309,21.225,43.856,21.309,44.383Zm-.581-2.49a27.2,27.2,0,0,1-3.033.517q.539-.823,1.05-1.706.489-.847.92-1.7a26.775,26.775,0,0,1,1.063,2.888Zm-1.059-4.971q-.457-.909-.98-1.817t-1.068-1.734a26.641,26.641,0,0,1,3.165.537A26.923,26.923,0,0,1,19.669,36.921Z" transform="translate(0 -25.528)"/><path class="a" d="M199.716,197.392a2.216,2.216,0,1,0,2.216,2.216A2.218,2.218,0,0,0,199.716,197.392Zm0,3.545a1.329,1.329,0,1,1,1.329-1.329A1.331,1.331,0,0,1,199.716,200.937Z" transform="translate(-185.831 -187.238)"/></svg>
          take on a challenge
        </nuxt-link>
        <div class="mt-6 flex flex-col items-center">
          <a href="https://twitter.com/lrnsomething_io" target="_blank" class="ml-10 px-10 py-3 uppercase text-blue-900 bg-grey-100 hover:bg-grey-400 transition duration-700 ease-out transform hover:-translate-y-1 hover:scale-105 rounded flex items-center">
            <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" width="19.652" height="15.962" viewBox="0 0 19.652 15.962"><defs><style>.a{fill:#2f2e41;}</style></defs><path class="a" d="M19.633,8c.013.175.013.349.013.523A11.382,11.382,0,0,1,8.186,19.981,11.381,11.381,0,0,1,2,18.172a8.417,8.417,0,0,0,.973.05,8.069,8.069,0,0,0,5-1.721,4.036,4.036,0,0,1-3.767-2.793,5.129,5.129,0,0,0,.761.062,4.286,4.286,0,0,0,1.061-.137A4.027,4.027,0,0,1,2.8,9.68V9.63a4.065,4.065,0,0,0,1.82.511A4.034,4.034,0,0,1,3.371,4.755,11.457,11.457,0,0,0,11.677,8.97a4.577,4.577,0,0,1-.1-.923,4.032,4.032,0,0,1,6.971-2.756A7.957,7.957,0,0,0,21.1,4.318a4.02,4.02,0,0,1-1.771,2.22,8.073,8.073,0,0,0,2.319-.624A8.645,8.645,0,0,1,19.633,8Z" transform="translate(-2 -4.019)"/></svg>
            Join the community
          </a>
          <div class="mt-5 -mb-10 ml-12 bg-grey-300 w-64 h-2"></div>
          <a href="" target="_blank" class="mt-5 ml-12 move text-xs text-blue-900 font-normal">Or <span class="font-semibold">share a challenge with your network!</span></a>
        </div>
      </div>
    </div>

    <section class="mt-32 bg-blue-900 h-12 flex items-center">
      <div class="px-32 flex items-center">
        <p class="text-white uppercase text-sm font-semibold text-grey-200">Promoted challenge  <span class="ml-2">&gt;&gt;</span></p>
        <p class="ml-12 text-xs text-grey-200 font-semibold"><nuxt-link to="/steameveryday"><span class="uppercase">#steameveryday</span></nuxt-link></p>
      </div>
    </section>

    <section class="mt-40 flex flex-col items-center justify-center">
      <div class="-mb-10 bg-purple-500 w-48 h-3"></div>
      <h2 class="text-blue-900 text-3xl font-semibold">How it works</h2>
      <p class="mt-12 text-black-900 text-lg font-semibold">Learn anything and everything you to want to learn for free through curated video playlists.</p>
      <div class="mt-24 flex flex-1 items-center justify-center">
        <div class="flex flex-col items-center h-48">
          <svg class="stroke-current text-purple-500" xmlns="http://www.w3.org/2000/svg" width="53.652" height="65" viewBox="0 0 53.652 71.539"><defs></defs><g transform="translate(-64.016)"><g transform="translate(84.88 20.869)"><path class="a" d="M245.7,179.613,215.9,149.807a1.492,1.492,0,0,0-2.545,1.055v41.269a1.49,1.49,0,0,0,2.405,1.174l7.568-5.916,6.6,11.886a1.494,1.494,0,0,0,1.973.608l8.942-4.471a1.487,1.487,0,0,0,.757-.891,1.512,1.512,0,0,0-.119-1.165l-6.223-11.2h9.389a1.492,1.492,0,0,0,1.055-2.545Zm-12.974-.432a1.494,1.494,0,0,0-1.305,2.214l6.7,12.05-6.274,3.139-6.757-12.167a1.5,1.5,0,0,0-1.007-.739,1.47,1.47,0,0,0-.3-.03,1.5,1.5,0,0,0-.918.316l-6.533,5.109V154.46l24.721,24.721Z" transform="translate(-213.35 -149.372)"/></g><g transform="translate(84.88)"><path class="a" d="M214.84,0a1.491,1.491,0,0,0-1.49,1.49v8.942a1.49,1.49,0,1,0,2.981,0V1.49A1.491,1.491,0,0,0,214.84,0Z" transform="translate(-213.35)"/></g><g transform="translate(64.016 20.864)"><path class="a" d="M74.448,149.333H65.506a1.49,1.49,0,0,0,0,2.981h8.942a1.49,1.49,0,1,0,0-2.981Z" transform="translate(-64.016 -149.333)"/></g><g transform="translate(96.802 20.864)"><path class="a" d="M309.115,149.333h-8.942a1.49,1.49,0,1,0,0,2.981h8.942a1.49,1.49,0,1,0,0-2.981Z" transform="translate(-298.683 -149.333)"/></g><g transform="translate(70.126 6.112)"><path class="a" d="M116.613,50.507l-6.325-6.322a1.49,1.49,0,0,0-2.107,2.107l6.325,6.322a1.5,1.5,0,0,0,1.055.435,1.473,1.473,0,0,0,1.052-.435A1.491,1.491,0,0,0,116.613,50.507Z" transform="translate(-107.745 -43.749)"/></g><g transform="translate(70.126 29.298)"><path class="a" d="M116.613,210.137a1.491,1.491,0,0,0-2.107,0l-6.325,6.322a1.49,1.49,0,0,0,2.107,2.107l6.325-6.322A1.491,1.491,0,0,0,116.613,210.137Z" transform="translate(-107.745 -209.701)"/></g><g transform="translate(93.308 6.11)"><g transform="translate(0)"><path class="a" d="M282.547,44.171a1.49,1.49,0,0,0-2.11,0l-6.325,6.322a1.491,1.491,0,0,0,2.11,2.107l6.325-6.322A1.491,1.491,0,0,0,282.547,44.171Z" transform="translate(-273.676 -43.733)"/></g></g></g></svg>
          <p class="mt-8 text-black-900 font-semibold"><span class="text-purple-500">C</span>hoose a topic you want to learn.</p>
        </div>
        <div class="ml-24 flex flex-col items-center h-48">
          <svg class="stroke-current text-purple-500" xmlns="http://www.w3.org/2000/svg" width="71.171" height="65" viewBox="0 0 71.171 59.309"><defs><style>.a{fill:#938dff;}</style></defs><g transform="translate(0 0)"><rect class="a" width="1.841" height="1.841" transform="translate(8.591 14.474)"/><rect class="a" width="2.455" height="1.841" transform="translate(3.682 14.474)"/><rect class="a" width="2.455" height="1.841" transform="translate(12.887 14.474)"/><rect class="a" width="2.455" height="1.841" transform="translate(17.796 14.474)"/><rect class="a" width="2.455" height="1.841" transform="translate(22.706 14.474)"/><rect class="a" width="2.455" height="1.841" transform="translate(27.001 14.474)"/><rect class="a" width="2.455" height="1.841" transform="translate(31.911 14.474)"/><rect class="a" width="2.455" height="1.841" transform="translate(36.82 14.474)"/><rect class="a" width="1.841" height="1.841" transform="translate(41.729 14.474)"/><rect class="a" width="2.455" height="1.841" transform="translate(46.025 14.474)"/><rect class="a" width="2.455" height="1.841" transform="translate(50.934 14.474)"/><rect class="a" width="2.455" height="1.841" transform="translate(55.844 14.474)"/><rect class="a" width="1.841" height="1.841" transform="translate(60.753 14.474)"/><rect class="a" width="2.455" height="1.841" transform="translate(65.049 14.474)"/><rect class="a" width="1.841" height="2.455" transform="translate(8.591 51.907)"/><rect class="a" width="2.455" height="2.455" transform="translate(3.682 51.907)"/><rect class="a" width="2.455" height="2.455" transform="translate(12.887 51.907)"/><rect class="a" width="2.455" height="2.455" transform="translate(17.796 51.907)"/><rect class="a" width="2.455" height="2.455" transform="translate(22.706 51.907)"/><rect class="a" width="2.455" height="2.455" transform="translate(27.001 51.907)"/><rect class="a" width="2.455" height="2.455" transform="translate(31.911 51.907)"/><rect class="a" width="2.455" height="2.455" transform="translate(36.82 51.907)"/><rect class="a" width="1.841" height="2.455" transform="translate(41.729 51.907)"/><rect class="a" width="2.455" height="2.455" transform="translate(46.025 51.907)"/><rect class="a" width="2.455" height="2.455" transform="translate(50.934 51.907)"/><rect class="a" width="2.455" height="2.455" transform="translate(55.844 51.907)"/><rect class="a" width="1.841" height="2.455" transform="translate(60.753 51.907)"/><rect class="a" width="2.455" height="2.455" transform="translate(65.049 51.907)"/><path class="a" d="M69.984,49.489H65.24V45.931a1.186,1.186,0,0,0-1.186-1.186H59.309V41.186A1.186,1.186,0,0,0,58.123,40H13.048a1.186,1.186,0,0,0-1.186,1.186v3.559H7.117a1.186,1.186,0,0,0-1.186,1.186v3.559H1.186A1.186,1.186,0,0,0,0,50.676V98.123a1.186,1.186,0,0,0,1.186,1.186h68.8a1.186,1.186,0,0,0,1.186-1.186V50.676A1.186,1.186,0,0,0,69.984,49.489Zm-55.75-7.117h42.7v2.372h-42.7ZM8.3,47.117H62.867v2.372H8.3ZM68.8,96.937H2.372V51.862H68.8Z" transform="translate(0 -40)"/><path class="a" d="M200,212.773a1.187,1.187,0,0,0,1.866.973L217.659,202.7a1.186,1.186,0,0,0,0-1.943l-15.793-11.048a1.186,1.186,0,0,0-1.866.973Zm2.372-19.817,12.537,8.771L202.372,210.5Z" transform="translate(-170.346 -167.327)"/></g></svg>
          <p class="mt-8 text-black-900 font-semibold"><span class="text-purple-500">W</span>ork your way through the playlist.</p>
        </div>
        <div class="ml-24 flex flex-col items-center h-48">
          <svg class="stroke-current text-purple-500" xmlns="http://www.w3.org/2000/svg" width="70.698" height="65" viewBox="0 0 70.698 53.309"><defs><style>.a{fill:#938dff;}</style></defs><path class="a" d="M33.25,39.758l-7.275-7.275L18.7,39.758l7.275,7.275Zm-7.275-4.067,4.067,4.067-4.067,4.067-4.067-4.067Zm-9.074,5.2H14.633V38.624H16.9Zm36.765-1.134-7.275-7.275-7.275,7.275,7.275,7.275Zm-7.275-4.067,4.067,4.067-4.067,4.067-4.067-4.067Zm11.342,5.2H55.465V38.624h2.268ZM67.942,52.443v-6.7l3.591-5.984-3.591-5.985V18.87a5.686,5.686,0,0,0,3.344-6.031A5.8,5.8,0,0,0,65.478,8H63.4a2.271,2.271,0,0,0-2.268,2.268V25.013a5.671,5.671,0,0,1-11.342,0v-6.8a5.69,5.69,0,0,0,2.093-5.968,5.619,5.619,0,0,0-4.146-4.085,5.675,5.675,0,0,0-4.752,10.053v5.671a6.805,6.805,0,1,1-13.611,0V18.208a5.675,5.675,0,0,0-4.754-10.05,5.616,5.616,0,0,0-4.144,4.084,5.688,5.688,0,0,0,2.093,5.968v6.8a5.671,5.671,0,0,1-11.342,0V10.268A2.271,2.271,0,0,0,8.962,8H6.888a5.8,5.8,0,0,0-5.807,4.841,5.684,5.684,0,0,0,3.344,6.03v14.9L.834,39.758l3.591,5.985v6.7a3.4,3.4,0,0,0-2.268,3.193v2.268a3.407,3.407,0,0,0,3.4,3.4H66.807a3.407,3.407,0,0,0,3.4-3.4V55.637A3.4,3.4,0,0,0,67.942,52.443ZM66.583,43.6,62.74,39.758l3.843-3.842,2.3,3.842ZM3.327,13.162a3.525,3.525,0,0,1,3.561-2.893H8.962V25.013a7.94,7.94,0,0,0,15.879,0V16.947l-.566-.328a3.431,3.431,0,0,1-1.592-3.834,3.406,3.406,0,0,1,6.7.886,3.415,3.415,0,0,1-1.7,2.948l-.566.328v6.932a9.074,9.074,0,1,0,18.148,0V16.947l-.566-.328a3.407,3.407,0,0,1,2.535-6.253,3.375,3.375,0,0,1,2.459,2.419,3.433,3.433,0,0,1-1.592,3.834l-.567.328v8.067a7.94,7.94,0,1,0,15.879,0V10.268h2.073a3.525,3.525,0,0,1,3.561,2.893,3.413,3.413,0,0,1-2.515,3.805l-.852.219V33.618l-6.141,6.141L65.673,45.9v6.336H6.693V45.9l6.141-6.141L6.693,33.618V17.186l-.852-.219a3.414,3.414,0,0,1-2.515-3.805ZM5.784,35.917l3.843,3.842L5.784,43.6l-2.3-3.842ZM67.942,57.906a1.135,1.135,0,0,1-1.134,1.134H5.559a1.135,1.135,0,0,1-1.134-1.134V55.637A1.135,1.135,0,0,1,5.559,54.5H66.807a1.135,1.135,0,0,1,1.134,1.134ZM37.317,40.893H35.049V38.624h2.268Z" transform="translate(-0.834 -8)"/></svg>
          <p class="mt-8 text-black-900 font-semibold"><span class="text-purple-500">G</span>ain mastery over the topic.</p>
        </div>
      </div>
      <div class="mt-8 flex flex-col items-center">
        <nuxt-link to="/topics" class="ml-10 px-10 py-3 uppercase text-blue-900 font-semibold bg-grey-100 hover:bg-grey-400 transition duration-700 ease-out transform hover:-translate-y-1 hover:scale-100 rounded flex items-center">
          Browse all topics
        </nuxt-link>
      </div>
    </section>

    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  head () {
    return {
      title: "Home - LearnSomething.io",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>

