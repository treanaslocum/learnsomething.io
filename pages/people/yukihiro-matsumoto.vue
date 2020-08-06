<template>
  <div class="body">
    <Header/>
    <div class="mt-32 px-32">
      <div class="flex items-center">
        <p class="text-sm text-blue-900 capitalize"><nuxt-link to="/topic/ruby">Ruby</nuxt-link> <span class="ml-1 font-semibold">&rsaquo;</span></p>
        <div class="ml-5"><p class="text-xs text-grey-300 font-semibold bg-grey-500 px-2">Yukihiro Matsumoto</p></div>
      </div>
      <section class="mt-12">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-purple-500 uppercase font-semibold">Notable Person</p>
            <h2 class="text-blue-900 text-5xl">Yukihiro Matsumoto</h2>
          </div>
          <div class="flex items-center border border-purple-600 rounded-full py-1 px-3">
            <span>
              <svg class="fill-current text-purple-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.219,3.375L8,7.399L4.781,3.375C4.515,3.043,4.068,2.916,3.669,3.056C3.269,3.197,3,3.575,3,4v15c0,1.103,0.897,2,2,2 h14c1.103,0,2-0.897,2-2V4c0-0.425-0.269-0.803-0.669-0.944c-0.4-0.138-0.846-0.012-1.112,0.319L16,7.399l-3.219-4.024 C12.4,2.901,11.6,2.901,11.219,3.375z M5,19v-2h14.001v2H5z M15.219,9.625c0.381,0.475,1.182,0.475,1.563,0L19,6.851L19.001,15H5 V6.851l2.219,2.774c0.381,0.475,1.182,0.475,1.563,0L12,5.601L15.219,9.625z"/></svg>
            </span>
            <p class="ml-1 text-purple-600 text-sm font-semibold">Legend</p>
          </div>
        </div>
        <div class="mt-5 flex items-center justify-between">
          <div class="flex items-center">
              <a href="https://twitter.com/yukihiro_matz" target="_blank" class="flex items-center bg-grey-200 rounded-full px-3 py-1 text-grey-700 uppercase font-semibold">
                <svg class="fill-current text-black-900" xmlns="http://www.w3.org/2000/svg" width="19.652" height="15.962" viewBox="0 0 19.652 15.962"><defs></defs><path class="a" d="M19.633,8c.013.175.013.349.013.523A11.382,11.382,0,0,1,8.186,19.981,11.381,11.381,0,0,1,2,18.172a8.417,8.417,0,0,0,.973.05,8.069,8.069,0,0,0,5-1.721,4.036,4.036,0,0,1-3.767-2.793,5.129,5.129,0,0,0,.761.062,4.286,4.286,0,0,0,1.061-.137A4.027,4.027,0,0,1,2.8,9.68V9.63a4.065,4.065,0,0,0,1.82.511A4.034,4.034,0,0,1,3.371,4.755,11.457,11.457,0,0,0,11.677,8.97a4.577,4.577,0,0,1-.1-.923,4.032,4.032,0,0,1,6.971-2.756A7.957,7.957,0,0,0,21.1,4.318a4.02,4.02,0,0,1-1.771,2.22,8.073,8.073,0,0,0,2.319-.624A8.645,8.645,0,0,1,19.633,8Z" transform="translate(-2 -4.019)"/></svg>
                <p class="ml-2">Twitter</p>
              </a>
              <a href="https://github.com/matz" target="_blank" class="ml-3 flex items-center bg-grey-200 rounded-full px-3 py-1 text-grey-700 uppercase font-semibold">
                <svg class="fill-current text-black-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026,2c-5.509,0-9.974,4.465-9.974,9.974c0,4.406,2.857,8.145,6.821,9.465	c0.499,0.09,0.679-0.217,0.679-0.481c0-0.237-0.008-0.865-0.011-1.696c-2.775,0.602-3.361-1.338-3.361-1.338	c-0.452-1.152-1.107-1.459-1.107-1.459c-0.905-0.619,0.069-0.605,0.069-0.605c1.002,0.07,1.527,1.028,1.527,1.028	c0.89,1.524,2.336,1.084,2.902,0.829c0.091-0.645,0.351-1.085,0.635-1.334c-2.214-0.251-4.542-1.107-4.542-4.93	c0-1.087,0.389-1.979,1.024-2.675c-0.101-0.253-0.446-1.268,0.099-2.64c0,0,0.837-0.269,2.742,1.021	c0.798-0.221,1.649-0.332,2.496-0.336c0.849,0.004,1.701,0.115,2.496,0.336c1.906-1.291,2.742-1.021,2.742-1.021	c0.545,1.372,0.203,2.387,0.099,2.64c0.64,0.696,1.024,1.587,1.024,2.675c0,3.833-2.33,4.675-4.552,4.922	c0.355,0.308,0.675,0.916,0.675,1.846c0,1.334-0.012,2.41-0.012,2.737c0,0.267,0.178,0.577,0.687,0.479	C19.146,20.115,22,16.379,22,11.974C22,6.465,17.535,2,12.026,2z"/></svg>
                <p class="ml-2">Github</p>
              </a>
          </div>
          <!-- Outside website link block -->
          <!-- <div>
            <a class="mt-5 text-black-900 hover:text-black-800" href="https://www.ruby-lang.org/en/">https://www.ruby-lang.org/en/</a>
          </div> -->
        </div>
      </section>

      <section class="mt-20">
        <div class="flex justify-between">
          <div class="w-4/5">
            <h3 class="text-black-900 uppercase font-semibold">about</h3>
            <p class="mt-10 leading-relaxed w-3/5">Yukihiro Matsumoto is a Japanese computer scientist and software programmer best known as the chief designer of the Ruby programming language and its reference implementation, Matz's Ruby Interpreter.<a href="https://en.wikipedia.org/wiki/Yukihiro_Matsumoto" target="_blank" class="ml-1 text-lg text-purple-500 font-semibold">&rsaquo;&rsaquo;</a></p>
            <div class="mt-5">
              <div class="flex">
                <p class="text-black-900 text-sm font-semibold">Born</p>
                <p class="ml-8 text-black-900 text-sm">April 14, 1965, Osaka Prefecture, Japan</p>
              </div>
              <div class="mt-3 flex">
                <p class="text-black-900 text-sm font-semibold">Education</p>
                <p class="ml-8 text-black-900 text-sm">University of Tsukuba</p>
              </div>
              <div class="mt-3 flex">
                <p class="text-black-900 text-sm font-semibold">Known For</p>
                <p class="ml-8 underline text-black-900 hover:text-black-800 text-sm">
                  <nuxt-link to="../topic/ruby">Ruby</nuxt-link>
                </p>
              </div>
            </div>
          </div>
          <div class="w-1/5 flex flex-col truncate">
            <h3 class="text-black-400 uppercase font-semibold">similar people</h3>
            <nuxt-link to="/people/" class="mt-10 mb-2 text-grey-100 line-through">Bjarne Stroustrup</nuxt-link>
            <nuxt-link to="/people/" class="flex mb-2 text-black-900 hover:text-black-800">
              James Gosling
              <svg class="ml-1 fill-current text-purple-600" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M11.219,3.375L8,7.399L4.781,3.375C4.515,3.043,4.068,2.916,3.669,3.056C3.269,3.197,3,3.575,3,4v15c0,1.103,0.897,2,2,2 h14c1.103,0,2-0.897,2-2V4c0-0.425-0.269-0.803-0.669-0.944c-0.4-0.138-0.846-0.012-1.112,0.319L16,7.399l-3.219-4.024 C12.4,2.901,11.6,2.901,11.219,3.375z M5,19v-2h14.001v2H5z M15.219,9.625c0.381,0.475,1.182,0.475,1.563,0L19,6.851L19.001,15H5 V6.851l2.219,2.774c0.381,0.475,1.182,0.475,1.563,0L12,5.601L15.219,9.625z"/></svg>
            </nuxt-link>
            <nuxt-link to="/people/" class="flex mb-2 text-black-900 hover:text-black-800">
              Brendan Eich
              <svg class="ml-1 fill-current text-purple-600" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M11.219,3.375L8,7.399L4.781,3.375C4.515,3.043,4.068,2.916,3.669,3.056C3.269,3.197,3,3.575,3,4v15c0,1.103,0.897,2,2,2 h14c1.103,0,2-0.897,2-2V4c0-0.425-0.269-0.803-0.669-0.944c-0.4-0.138-0.846-0.012-1.112,0.319L16,7.399l-3.219-4.024 C12.4,2.901,11.6,2.901,11.219,3.375z M5,19v-2h14.001v2H5z M15.219,9.625c0.381,0.475,1.182,0.475,1.563,0L19,6.851L19.001,15H5 V6.851l2.219,2.774c0.381,0.475,1.182,0.475,1.563,0L12,5.601L15.219,9.625z"/></svg>
            </nuxt-link>
            <nuxt-link to="/people/" class="flex mb-2 text-black-900 hover:text-black-800">
              David Heinemeier Hansson
              <svg class="ml-1 fill-current text-purple-600" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M11.219,3.375L8,7.399L4.781,3.375C4.515,3.043,4.068,2.916,3.669,3.056C3.269,3.197,3,3.575,3,4v15c0,1.103,0.897,2,2,2 h14c1.103,0,2-0.897,2-2V4c0-0.425-0.269-0.803-0.669-0.944c-0.4-0.138-0.846-0.012-1.112,0.319L16,7.399l-3.219-4.024 C12.4,2.901,11.6,2.901,11.219,3.375z M5,19v-2h14.001v2H5z M15.219,9.625c0.381,0.475,1.182,0.475,1.563,0L19,6.851L19.001,15H5 V6.851l2.219,2.774c0.381,0.475,1.182,0.475,1.563,0L12,5.601L15.219,9.625z"/></svg>           
            </nuxt-link>
            <nuxt-link to="/people/" class="mb-2 text-grey-100 line-through">Rasmus Lerdorf</nuxt-link>
          </div>
        </div>
      </section>
    </div>
    

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
      title: "Yukihiro Matsumoto - LearnSomething.io",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>