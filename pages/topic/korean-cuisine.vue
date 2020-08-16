<template>
  <div class="body">
    <Header/>
    <div class="mt-32 px-32">
      <div class="flex items-center">
        <p class="text-sm text-blue-900 capitalize"><nuxt-link to="/topics">Home</nuxt-link> <span class="ml-1 font-semibold">&rsaquo;</span></p>
        <p class="ml-5 text-sm text-blue-900 capitalize"><nuxt-link to="/topics/#cooking">Cooking</nuxt-link> <span class="ml-1 font-semibold">&rsaquo;</span></p>
        <div class="ml-5"><p class="text-xs text-blue-900 font-semibold px-2">Korean Cuisine</p></div>
      </div>

      <section class="mt-12">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-purple-500 uppercase font-semibold">Cooking</p>
            <h2 class="text-blue-900 text-5xl">Korean Cuisine</h2>
          </div>
          <!-- <div class="flex items-center border border-red-500 rounded-full py-1 px-3">
            <span><svg class="fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg></span>
            <p class="ml-1 text-red-500 text-sm font-semibold">Hot Topic</p>
          </div> -->
        </div>
        <!-- Filter Tags -->
        <div class="mt-5 flex items-center justify-between">
          <div class="flex items-center">
            <p class="text-grey-700">Tags</p>
            <nuxt-link to="../filters/cooking" class="ml-3">
              <p class="bg-grey-200 rounded-full px-3 text-grey-700 uppercase font-semibold hover:text-grey-300">cooking</p>
            </nuxt-link>
          </div>
          <!-- <div>
            <a class="mt-5 text-black-900 hover:text-black-800" href="https://www.ruby-lang.org/en/" target="_blank">https://www.ruby-lang.org/en/</a>
          </div> -->
        </div>
      </section>

      <section class="mt-20">
        <div class="flex justify-between">
          <div class="w-4/5">
            <h3 class="text-black-900 uppercase font-semibold">about</h3>
            <p class="mt-10 text-black-900 leading-relaxed w-3/5">Korean cuisine has evolved through centuries of social and political change. Originating from ancient agricultural and nomadic traditions in Korea and southern Manchuria, Korean cuisine has evolved through a complex interaction of the natural environment and different cultural trends.<a href="https://en.wikipedia.org/wiki/Korean_cuisine#:~:text=Korean%20cuisine%20has%20evolved%20through%20centuries%20of%20social%20and%20political%20change.&text=Korean%20cuisine%20is%20largely%20based,served%20at%20nearly%20every%20meal." target="_blank" class="ml-1 text-lg text-purple-500 font-semibold">&rsaquo;&rsaquo;</a></p>
          </div>
          <div class="w-1/5 flex flex-col">
            <h3 class="text-black-400 uppercase font-semibold">similar topics</h3>
            <nuxt-link to="/topic/" class="mt-10 mb-2 pointer-events-none text-grey-100 line-through">Indian Cuisine</nuxt-link>
            <nuxt-link to="/topic/" class="mb-2 pointer-events-none text-grey-100 line-through">Italian Cuisine</nuxt-link>
          </div>
        </div>
      </section>



      <section class="mt-20">
        <div class="flex justify-between">
          <div class="w-4/5">
            <h3 class="text-black-900 uppercase font-semibold">books to buy</h3>
            <div class="mt-10 flex items-center">
              <a href="https://www.amazon.com/Maangchis-Real-Korean-Cooking-Authentic/dp/054412989X" target="_blank">
                <img class="" src="~assets/images/maangchi-real-korean-cooking.jpg" alt="Maangchi's Real Korean Cooking" height="50px" width="50px">
              </a>
              <a href="https://www.amazon.com/Maangchis-Real-Korean-Cooking-Authentic/dp/054412989X" target="_blank" class="ml-5 text-black-900 hover:text-black-800">Maangchi's Real Korean Cooking</a>
            </div> 
            <div class="mt-10 flex items-center">
              <a href="https://www.amazon.com/Korean-Food-Made-Simple-Judy-ebook/dp/B01F2UTSSW/ref=zg_bs_13922571011_6?_encoding=UTF8&psc=1&refRID=WCSH8J4S766DTAMZQ42D" target="_blank">
                <img class="" src="~assets/images/korean-food-made-simple.jpg" alt="Korean Food Made Simple" height="50px" width="50px">
              </a>
              <a href="https://www.amazon.com/Korean-Food-Made-Simple-Judy-ebook/dp/B01F2UTSSW/ref=zg_bs_13922571011_6?_encoding=UTF8&psc=1&refRID=WCSH8J4S766DTAMZQ42D" target="_blank" class="ml-5 text-black-900 hover:text-black-800">Korean Food Made Simple</a>
            </div>
            <div class="mt-10 flex items-center">
              <a href="https://www.amazon.com/Cook-Korean-Comic-Book-Recipes/dp/1607748878/ref=zg_bs_13922571011_8?_encoding=UTF8&psc=1&refRID=WCSH8J4S766DTAMZQ42D" target="_blank">
                <img class="" src="~assets/images/cook-korean.jpg" alt="Cook Korean!: A Comic Book with Recipes [A Cookbook]" height="50px" width="50px">
              </a>
              <a href="https://www.amazon.com/Cook-Korean-Comic-Book-Recipes/dp/1607748878/ref=zg_bs_13922571011_8?_encoding=UTF8&psc=1&refRID=WCSH8J4S766DTAMZQ42D" target="_blank" class="ml-5 text-black-900 hover:text-black-800">Cook Korean!: A Comic Book with Recipes</a>
            </div>
          </div>
          <div class="w-1/5 flex flex-col">
            <h3 class="text-black-400 uppercase font-semibold">supplemental sites</h3>
            <a href="https://www.maangchi.com/" target="_blank" class="mt-10 flex items-center mb-2 text-black-900 hover:text-black-800">
              Maangchi.com
              <div class="ml-3 bg-grey-300 text-white text-xs font-semibold rounded uppercase px-2">free</div>
            </a>
            <a href="https://kimchimari.com/" target="_blank" class="flex mb-2 items-center text-black-900 hover:text-black-800">
              Kimchimari
              <div class="ml-3 bg-grey-300 text-white text-xs font-semibold rounded uppercase px-2">free</div>
            </a>
          </div>
        </div>
      </section>

        <!-- Teacher list Section -->
      <section class="mt-20">
        <!-- Introduction to Ruby Teacher section -->

        <!-- section header -->
        <div class="mt-12 flex">
          <div class="flex items-center">
            <p id="ruby-teachers" class="mt-10 text-black-900 font-semibold uppercase">Korean Cuisine Teachers</p>
          </div>
        </div>

        <div class="mt-16 flex flex-wrap xl:flex-no-wrap">

          <!-- teacher 1 -->
          <div class="flex items-center flex-shrink-0">
            <nuxt-link to="../teacher/maangchi">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/maangchi.jpg" alt="Maangchi">
            </nuxt-link>
            <div class="flex flex-col flex-wrap lg:flex-no-wrap xl:flex-no-wrap">
              <nuxt-link to="../teacher/maangchi">
                <p class="ml-5 font-semibold">Maangchi</p>
              </nuxt-link>
            </div>
          </div>

          <!-- teacher 2 -->
          <!-- <div class="ml-12 flex items-center flex-shrink-0">
            <nuxt-link to="../teacher/xxx">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/derek_banas.jpg" alt="Derek Banas">
            </nuxt-link>
            <div class="flex flex-col flex-wrap lg:flex-no-wrap xl:flex-no-wrap">
              <nuxt-link to="../teacher/xxx">
                <p class="ml-5 font-semibold">xxx</p>
              </nuxt-link>
            </div>
          </div> -->
        </div> 

      </section>

     


        
        
  

    </div>
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
      title: "Korean Cuisine - LearnSomething.io",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>