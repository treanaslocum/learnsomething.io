<template>
  <div class="body">
    <Header/>
    <div class="mt-32 px-32">
      <div class="flex items-center">
        <p class="text-sm text-blue-900 capitalize"><nuxt-link to="/topic/ruby">Ruby</nuxt-link> <span class="ml-1 font-semibold">&rsaquo;</span></p>
        <div class="ml-5"><p class="text-xs text-grey-300 font-semibold bg-grey-500 px-2">Eloquent Ruby</p></div>
      </div>
      <section class="mt-12">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-purple-500 uppercase font-semibold">Book</p>
            <div class="mt-5 flex items-center">
              <img src="/_nuxt/assets/images/eloquent-ruby.png" alt="Eloquent Ruby" class="w-16">
              <h2 class="ml-5 text-blue-900 text-5xl">Eloquent Ruby</h2>
            </div>
          </div>
          <div class="flex items-center border border-orange-900 rounded-full py-1 px-3">
            <span>
              <svg class="fill-current text-orange-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.012,18H20c0.553,0,1-0.448,1-1V4c0-1.103-0.897-2-2-2H6C4.794,2,3,2.799,3,5v3v6v3v2c0,2.201,1.794,3,3,3h15v-2H6.012 C5.55,19.988,5,19.805,5,19S5.55,18.012,6.012,18z M5,8V5c0-0.805,0.55-0.988,1-1h13v12H5v-2V8z"/><path d="M8 6H17V8H8z"/></svg>
            </span>
            <p class="ml-1 text-orange-900 text-sm font-semibold">#2</p>
          </div>
        </div>
        <div class="mt-5 flex items-center justify-between">
          <div class="flex items-center">
              <a href="https://www.amazon.com/Eloquent-Ruby-Addison-Wesley-Professional/dp/0321584104" target="_blank" class="flex items-center bg-grey-200 rounded-full px-3 py-1 text-grey-700 uppercase font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.027,17.023c0.061-0.098,0.156-0.105,0.289-0.02c3.035,1.76,6.338,2.645,9.906,2.645c2.381,0,4.73-0.447,7.051-1.332	l0.262-0.117c0.115-0.051,0.195-0.084,0.244-0.109c0.189-0.074,0.326-0.037,0.438,0.109c0.102,0.143,0.076,0.279-0.1,0.4	c-0.213,0.158-0.5,0.342-0.84,0.545c-1.037,0.619-2.203,1.098-3.492,1.441c-1.277,0.336-2.539,0.508-3.77,0.508	c-1.889,0-3.68-0.33-5.369-0.99c-1.686-0.662-3.188-1.594-4.531-2.797c-0.084-0.061-0.125-0.123-0.125-0.184	c0-0.039,0.016-0.074,0.041-0.109L2.027,17.023z M7.506,11.834c0-0.84,0.207-1.555,0.619-2.152C8.539,9.09,9.102,8.641,9.828,8.336	c0.666-0.281,1.465-0.48,2.43-0.602c0.326-0.037,0.861-0.086,1.6-0.145V7.279c0-0.773-0.084-1.299-0.248-1.564	c-0.252-0.359-0.65-0.541-1.203-0.541h-0.15c-0.4,0.039-0.746,0.162-1.039,0.383c-0.293,0.225-0.48,0.527-0.564,0.916	c-0.049,0.25-0.172,0.387-0.361,0.426L8.188,6.635c-0.209-0.051-0.311-0.15-0.311-0.326c0-0.037,0.006-0.074,0.018-0.123	c0.209-1.078,0.715-1.881,1.52-2.404c0.814-0.514,1.752-0.814,2.828-0.875h0.451c1.379,0,2.469,0.361,3.244,1.076	c0.115,0.123,0.227,0.25,0.34,0.398c0.1,0.139,0.188,0.264,0.234,0.377c0.063,0.111,0.127,0.275,0.164,0.475	c0.051,0.213,0.088,0.352,0.113,0.426c0.023,0.086,0.051,0.25,0.064,0.514c0.006,0.262,0.016,0.41,0.016,0.461v4.406	c0,0.314,0.049,0.602,0.137,0.865c0.088,0.26,0.174,0.451,0.262,0.563l0.428,0.561c0.072,0.115,0.111,0.215,0.111,0.303	c0,0.102-0.049,0.188-0.148,0.26c-1.002,0.877-1.553,1.352-1.639,1.428c-0.137,0.113-0.313,0.125-0.525,0.039	c-0.162-0.141-0.314-0.277-0.439-0.414l-0.258-0.291c-0.051-0.063-0.141-0.174-0.266-0.352l-0.25-0.363	c-0.676,0.74-1.338,1.205-2.002,1.393c-0.414,0.125-0.914,0.188-1.529,0.188c-0.926,0-1.701-0.285-2.303-0.863	c-0.598-0.576-0.9-1.389-0.9-2.453l-0.043-0.063L7.506,11.834z M10.637,11.467c0,0.475,0.117,0.852,0.355,1.139	c0.236,0.285,0.563,0.428,0.965,0.428c0.035,0,0.088-0.008,0.16-0.018c0.078-0.012,0.111-0.02,0.141-0.02	c0.512-0.133,0.902-0.461,1.189-0.982c0.137-0.232,0.236-0.482,0.299-0.758c0.076-0.268,0.1-0.494,0.111-0.666	c0.016-0.166,0.016-0.453,0.016-0.84V9.299c-0.703,0-1.24,0.049-1.604,0.148c-1.063,0.303-1.604,0.977-1.604,2.029l-0.029-0.016	V11.467z M18.283,17.332c0.025-0.051,0.063-0.092,0.109-0.143c0.301-0.201,0.596-0.342,0.877-0.416	c0.459-0.113,0.908-0.186,1.344-0.201c0.117-0.01,0.234,0,0.346,0.025c0.539,0.051,0.873,0.141,0.977,0.273	c0.053,0.078,0.074,0.191,0.074,0.328v0.125c0,0.426-0.117,0.926-0.348,1.502s-0.553,1.041-0.963,1.402	c-0.061,0.049-0.115,0.074-0.164,0.074c-0.025,0-0.051,0-0.074-0.01c-0.076-0.037-0.09-0.1-0.055-0.201	c0.451-1.051,0.672-1.787,0.672-2.201c0-0.127-0.025-0.227-0.074-0.289c-0.119-0.137-0.457-0.217-1.02-0.217	c-0.203,0-0.443,0.016-0.727,0.039c-0.303,0.041-0.582,0.078-0.834,0.115c-0.074,0-0.123-0.014-0.15-0.037	c-0.025-0.025-0.031-0.039-0.018-0.064c0-0.014,0.006-0.025,0.018-0.053v-0.049L18.283,17.332z"/></svg>
                <p class="ml-2">Buy on Amazon</p>
              </a>
              <!-- <a href="https://github.com/matz" target="_blank" class="ml-3 flex items-center bg-grey-200 rounded-full px-3 py-1 text-grey-700 uppercase font-semibold">
                <svg class="fill-current text-black-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026,2c-5.509,0-9.974,4.465-9.974,9.974c0,4.406,2.857,8.145,6.821,9.465	c0.499,0.09,0.679-0.217,0.679-0.481c0-0.237-0.008-0.865-0.011-1.696c-2.775,0.602-3.361-1.338-3.361-1.338	c-0.452-1.152-1.107-1.459-1.107-1.459c-0.905-0.619,0.069-0.605,0.069-0.605c1.002,0.07,1.527,1.028,1.527,1.028	c0.89,1.524,2.336,1.084,2.902,0.829c0.091-0.645,0.351-1.085,0.635-1.334c-2.214-0.251-4.542-1.107-4.542-4.93	c0-1.087,0.389-1.979,1.024-2.675c-0.101-0.253-0.446-1.268,0.099-2.64c0,0,0.837-0.269,2.742,1.021	c0.798-0.221,1.649-0.332,2.496-0.336c0.849,0.004,1.701,0.115,2.496,0.336c1.906-1.291,2.742-1.021,2.742-1.021	c0.545,1.372,0.203,2.387,0.099,2.64c0.64,0.696,1.024,1.587,1.024,2.675c0,3.833-2.33,4.675-4.552,4.922	c0.355,0.308,0.675,0.916,0.675,1.846c0,1.334-0.012,2.41-0.012,2.737c0,0.267,0.178,0.577,0.687,0.479	C19.146,20.115,22,16.379,22,11.974C22,6.465,17.535,2,12.026,2z"/></svg>
                <p class="ml-2">Github</p>
              </a> -->
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
            <p class="mt-10 leading-relaxed w-3/5">It’s easy to write correct Ruby code, but to gain the fluency needed to write great Ruby code, you must go beyond syntax and absorb the “Ruby way” of thinking and problem solving. In Eloquent Ruby, Russ Olsen helps you write Ruby like true Rubyists do–so you can leverage its immense, surprising power..<a href="https://www.amazon.com/Eloquent-Ruby-Addison-Wesley-Professional/dp/0321584104" target="_blank" class="ml-1 text-lg text-purple-500 font-semibold">&rsaquo;&rsaquo;</a></p>
          </div>
          <div class="w-1/5 flex flex-col truncate">
            <h3 class="text-black-400 uppercase font-semibold">similar books</h3>
            <nuxt-link to="/books/the-well-grounded-rubyist" class="mt-10 flex mb-2 text-black-900 hover:text-black-800">
              The Well-Grounded Rubyist
            </nuxt-link>
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
      title: "Eloquent Ruby - LearnSomething.io",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>