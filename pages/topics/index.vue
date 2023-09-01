<template>
  <div class="body">
    <!-- multi-language banner -->
    <!-- <MultiLanguageSupport/> -->
    <Header/>

    <div class="mt-40 mx-20">
      <p class="uppercase font-semibold">Hack your education</p>
      <h2 class="text-5xl font-semibold">Browse all topics.</h2>
      <!-- <p class="text-lg leading-relaxed w-3/4">Here at Skillseed we are always expanding our topic offerings. If you don't see a topic you want to learn available, don't panic. We'll add it as soon as we can. Demand dictates what's added first so please be patient with us. Fill out the <a href="https://forms.gle/wwyM48EmXmz7vdn88" target="_blank"><span class="font-semibold">topic suggestions</span></a> form to request a topic you'd like to see added to the site.</p> -->
    </div>
    
    <div class="flex m-20">
      <!-- stem section -->
      <div class="w-1/3">
        <div class="w-3/4 mb-8">
          <h3 class="text-lg font-semibold">S.T.E.M</h3>
          <p>Learn Science, Technology, Engineering and Mathematics</p>
        </div>
        <div class="mb-8 border-b-2 border-black w-12"></div>

        <div class="text-sm flex flex-col">
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/cs">CS</nuxt-link></span> <nuxt-link to="/" >Cybersecurity</nuxt-link>
          </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/cs">CS</nuxt-link></span> <nuxt-link to="/" >Cryptography</nuxt-link>
         </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/cs">CS</nuxt-link></span> <nuxt-link to="/" >Computer Networking</nuxt-link>
         </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/cs">CS</nuxt-link></span> <nuxt-link to="/" >HTML & CSS</nuxt-link>
         </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/cs">CS</nuxt-link></span> <nuxt-link to="/" >Java</nuxt-link>
         </div>
         <div class="flex">
           <span class="font-bold mr-2"><nuxt-link to="/cs">CS</nuxt-link></span> <nuxt-link to="/" >JavaScript</nuxt-link>
          </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/cs">CS</nuxt-link></span> <nuxt-link to="/" >Ruby</nuxt-link>
         </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/cs">CS</nuxt-link></span> <nuxt-link to="/" >Ruby on Rails</nuxt-link>
         </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/cs">CS</nuxt-link></span> <nuxt-link to="/" >PHP</nuxt-link>
         </div>
         <div class="fle">
          <span class="font-bold mr-2"><nuxt-link to="/cs">CS</nuxt-link></span> <nuxt-link to="/" >Python</nuxt-link>
         </div>
         <div class="fle">
          <span class="font-bold mr-2"><nuxt-link to="/cs">CS</nuxt-link></span> <nuxt-link to="/" >Laravel</nuxt-link>
         </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/cs">CS</nuxt-link></span> <nuxt-link to="/" >C++</nuxt-link>
         </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/cs">CS</nuxt-link></span> <nuxt-link to="/" >SQL</nuxt-link>
         </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/cs">CS</nuxt-link></span> <nuxt-link to="/" >Command Line</nuxt-link>
         </div>
         <div class="fle">
          <span class="font-bold mr-2"><nuxt-link to="/cs">CS</nuxt-link></span> <nuxt-link to="/" >Git</nuxt-link>
         </div>
          
        </div>
      </div>
      
      <!-- art and design section -->
      <div class="w-1/3">
        <div class="mb-8">
          <h3 class="text-lg font-semibold">Art & Design</h3>
          <p class="w-3/4">Create new and wonderful things by learning art and design.</p>
        </div>
        <div class="mb-8 border-b-2 border-black w-12"></div>

        <div class="text-sm flex flex-col">
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/art">ART</nuxt-link></span> <nuxt-link to="/" >Painting</nuxt-link>
          </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/art">ART</nuxt-link></span> <nuxt-link to="/" >Photography</nuxt-link>
         </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/art">ART</nuxt-link></span> <nuxt-link to="/" >Drawing</nuxt-link>
         </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/art">ART</nuxt-link></span> <nuxt-link to="/" >Illustration</nuxt-link>
         </div>
         <div class="flex mt-4">
          <span class="font-bold mr-2"><nuxt-link to="/design">DESG</nuxt-link></span> <nuxt-link to="/" >Adobe Photoshop</nuxt-link>
         </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/design">DESG</nuxt-link></span> <nuxt-link to="/" >Concept Art</nuxt-link>
         </div>

          
        </div>
      </div>
      
      
      <!-- Languages section -->
      <div class="w-1/3">
        <div class="mb-8">
          <h3 class="text-lg font-semibold">Languages</h3>
          <p>Become a polyglot and learn multiple languages.</p>
        </div>
        <div class="mb-8 border-b-2 border-black w-12"></div>

        <div class="text-sm flex flex-col">
          <h3 class="font-semibold mb-4">Latin America</h3>
          <div class="flex mb-6">
            <span class="font-bold mr-2"><nuxt-link to="/languages">LANG</nuxt-link></span> <nuxt-link to="/" >Spanish</nuxt-link>
          </div>

          <h3 class="font-semibold mt-4 mb-4">Asia</h3>
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/languages">LANG</nuxt-link></span> <nuxt-link to="/" >Korean</nuxt-link>
          </div>
          <div class="flex mb-6">
            <span class="font-bold mr-2"><nuxt-link to="/languages">LANG</nuxt-link></span> <nuxt-link to="/" >Japanese</nuxt-link>
          </div>

          <h3 class="font-semibold mt-4 mb-4">Africa</h3>
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/languages">LANG</nuxt-link></span> <nuxt-link to="/" >Yoruba</nuxt-link>
          </div>
          <div class="flex mb-6">
            <span class="font-bold mr-2"><nuxt-link to="/languages">LANG</nuxt-link></span> <nuxt-link to="/" >Swahili</nuxt-link>
          </div>
      

          <h3 class="font-semibold mt-4 mb-4">Europe</h3>
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/languages">LANG</nuxt-link></span> <nuxt-link to="/" >French</nuxt-link>
          </div>
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/languages">LANG</nuxt-link></span> <nuxt-link to="/" >Italian</nuxt-link>
          </div>
          <div class="flex mb-6">
            <span class="font-bold mr-2"><nuxt-link to="/languages">LANG</nuxt-link></span> <nuxt-link to="/" >German</nuxt-link>
          </div>

          <h3 class="font-semibold mt-4 mb-4">Middle East</h3>
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/languages">LANG</nuxt-link></span> <nuxt-link to="/" >Arabic</nuxt-link>
          </div>
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/languages">LANG</nuxt-link></span> <nuxt-link to="/" >Pashto</nuxt-link>
          </div>
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/languages">LANG</nuxt-link></span> <nuxt-link to="/" >Hebrew</nuxt-link>
          </div>
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/languages">LANG</nuxt-link></span> <nuxt-link to="/" >Farsi</nuxt-link>
          </div>
          <div class="flex mb-6">
            <span class="font-bold mr-2"><nuxt-link to="/languages">LANG</nuxt-link></span> <nuxt-link to="/" >Turkish</nuxt-link>
          </div>

          <h3 class="font-semibold mt-4 mb-4">Other</h3>
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/languages">LANG</nuxt-link></span> <nuxt-link to="/" >Sign Language</nuxt-link>
          </div>
          
        </div>
      </div>
    </div> 
    <div class="flex m-20">
         <!-- Essential Life Skill section -->
      <div class="w-1/3">
        <div class="mb-8">
          <h3 class="text-lg font-semibold">Essential Life Skills</h3>
          <p>Learn the skills everyone should know.</p>
        </div>
        <div class="mb-8 border-b-2 border-black w-12"></div>

        <div class="text-sm flex flex-col">
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/diy">DIY</nuxt-link></span> <nuxt-link to="/" >Crafts</nuxt-link>
          </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/diy">DIY</nuxt-link></span> <nuxt-link to="/" >Clothes</nuxt-link>
         </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/diy">DIY</nuxt-link></span> <nuxt-link to="/" >Building</nuxt-link>
         </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/diy">DIY</nuxt-link></span> <nuxt-link to="/" >Organizing</nuxt-link>
         </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/diy">DIY</nuxt-link></span> <nuxt-link to="/" >Renovations</nuxt-link>
         </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/diy">DIY</nuxt-link></span> <nuxt-link to="/" >Engineering</nuxt-link>
         </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/diy">DIY</nuxt-link></span> <nuxt-link to="/" >Decorating</nuxt-link>
         </div>

         <!-- category divider -->
         <div class="flex mt-4">
          <span class="font-bold mr-2"><nuxt-link to="/survival">SURV</nuxt-link></span> <nuxt-link to="/" >Hunting</nuxt-link>
         </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/survival">SURV</nuxt-link></span> <nuxt-link to="/" >Fishing</nuxt-link>
         </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/survival">SURV</nuxt-link></span> <nuxt-link to="/" >Canning</nuxt-link>
         </div>

         <!-- category divider -->
         <div class="flex mt-4">
          <span class="font-bold mr-2"><nuxt-link to="/combat">COMB</nuxt-link></span> <nuxt-link to="/" >Krav Maga</nuxt-link>
         </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/combat">COMB</nuxt-link></span> <nuxt-link to="/" >Boxing</nuxt-link>
         </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/combat">COMB</nuxt-link></span> <nuxt-link to="/" >Brazilian Jiu Jitsu</nuxt-link>
         </div>

         <!-- category divider -->
         <div class="flex mt-4">
          <span class="font-bold mr-2"><nuxt-link to="/relationship">RELA</nuxt-link></span> <nuxt-link to="/" >Dating</nuxt-link>
         </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/relationship">RELA</nuxt-link></span> <nuxt-link to="/" >Public Speaking</nuxt-link>
         </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/relationship">RELA</nuxt-link></span> <nuxt-link to="/" >Family</nuxt-link>
         </div>

         <!-- category divider -->
         <div class="flex mt-4">
          <span class="font-bold mr-2"><nuxt-link to="/cooking">COOK</nuxt-link></span> <nuxt-link to="/" >Korean</nuxt-link>
         </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/cooking">COOK</nuxt-link></span> <nuxt-link to="/" >Italian</nuxt-link>
         </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/cooking">COOK</nuxt-link></span> <nuxt-link to="/" >American</nuxt-link>
         </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/cooking">COOK</nuxt-link></span> <nuxt-link to="/" >Indian</nuxt-link>
         </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/cooking">COOK</nuxt-link></span> <nuxt-link to="/" >Mexican</nuxt-link>
         </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/cooking">COOK</nuxt-link></span> <nuxt-link to="/" >Japanese</nuxt-link>
         </div>

          <!-- category divider -->
          <div class="flex mt-4">
          <span class="font-bold mr-2"><nuxt-link to="/cleaning">CLEA</nuxt-link></span> <nuxt-link to="/" >Bathroom</nuxt-link>
         </div>
         <div class="flex">
          <span class="font-bold mr-2"><nuxt-link to="/cleaning">CLEA</nuxt-link></span> <nuxt-link to="/" >Kitchen</nuxt-link>
         </div>
       
          
        </div>
      </div>


      <!-- self care section -->
      <div class="w-1/3">
        <div class="mb-8">
          <h3 class="text-lg font-semibold">Self Care</h3>
          <p>Treat yourself how you should be treated</p>
        </div>
        <div class="mb-8 border-b-2 border-black w-12"></div>

        <div class="text-sm flex flex-col">
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/skin">SKIN</nuxt-link></span> <nuxt-link to="/" >Facial</nuxt-link>
          </div>
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/skin">SKIN</nuxt-link></span> <nuxt-link to="/" >Body</nuxt-link>
          </div>
          

          <!-- category divider -->
          <div class="flex mt-4">
            <span class="font-bold mr-2"><nuxt-link to="/mental-health">MENT</nuxt-link></span> <nuxt-link to="/" >Meditation</nuxt-link>
          </div>
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/mental-health">MENT</nuxt-link></span> <nuxt-link to="/" >Therapy</nuxt-link>
          </div>


          <!-- category divider -->
          <div class="flex mt-4">
            <span class="font-bold mr-2"><nuxt-link to="/fitness">FIT</nuxt-link></span> <nuxt-link to="/" >Calisthenics & Bodyweight</nuxt-link>
          </div>
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/fitness">FIT</nuxt-link></span> <nuxt-link to="/" >Weight Lifting</nuxt-link>
          </div>
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/fitness">FIT</nuxt-link></span> <nuxt-link to="/" >Running</nuxt-link>
          </div>
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/fitness">FIT</nuxt-link></span> <nuxt-link to="/" >Walking</nuxt-link>
          </div>
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/fitness">FIT</nuxt-link></span> <nuxt-link to="/" >Jump Roping</nuxt-link>
          </div>

           <!-- category divider -->
           <div class="flex mt-4">
            <span class="font-bold mr-2"><nuxt-link to="/hair">HAIR</nuxt-link></span> <nuxt-link to="/" >Curly Hair</nuxt-link>
          </div>
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/hair">HAIR</nuxt-link></span> <nuxt-link to="/" >Coily Hair</nuxt-link>
          </div>
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/hair">HAIR</nuxt-link></span> <nuxt-link to="/" >Straight Hair</nuxt-link>
          </div>
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/hair">HAIR</nuxt-link></span> <nuxt-link to="/" >Wavy Hair</nuxt-link>
          </div>

          <!-- category divider -->
          <div class="flex mt-4">
            <span class="font-bold mr-2"><nuxt-link to="/nutrition">NUTR</nuxt-link></span> <nuxt-link to="/" >Keto</nuxt-link>
          </div>
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/nutrition">NUTR</nuxt-link></span> <nuxt-link to="/" >Vegan</nuxt-link>
          </div>
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/nutrition">NUTR</nuxt-link></span> <nuxt-link to="/" >Vegetarian</nuxt-link>
          </div>
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/nutrition">NUTR</nuxt-link></span> <nuxt-link to="/" >Paleo</nuxt-link>
          </div>

          <!-- category divider -->
          <div class="flex mt-4">
            <span class="font-bold mr-2"><nuxt-link to="/hygiene">HYGN</nuxt-link></span> <nuxt-link to="/" >Feminine Care</nuxt-link>
          </div>
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/hygiene">HYGN</nuxt-link></span> <nuxt-link to="/" >Grooming</nuxt-link>
          </div>
          
        </div>
      </div>

      <!-- business and finance section -->
      <div class="w-1/3">
        <div class="mb-8">
          <h3 class="text-lg font-semibold">Business & Finance</h3>
          <p>Learn business and finance</p>
        </div>
        <div class="mb-8 border-b-2 border-black w-12"></div>

        <div class="text-sm flex flex-col">
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/business">BUS</nuxt-link></span> <nuxt-link to="/" >Entrepreneurship</nuxt-link>
          </div>
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/business">BUS</nuxt-link></span> <nuxt-link to="/" >Funding</nuxt-link>
          </div>
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/business">BUS</nuxt-link></span> <nuxt-link to="/" >Startup</nuxt-link>
          </div>
          
          

          <!-- category divider -->
          <div class="flex mt-4">
            <span class="font-bold mr-2"><nuxt-link to="/finances">FIN</nuxt-link></span> <nuxt-link to="/" >Futures</nuxt-link>
          </div>
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/finances">FIN</nuxt-link></span> <nuxt-link to="/" >Stocks</nuxt-link>
          </div>
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/finances">FIN</nuxt-link></span> <nuxt-link to="/" >Forex</nuxt-link>
          </div>
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/finances">FIN</nuxt-link></span> <nuxt-link to="/" >Options</nuxt-link>
          </div>
          <div class="flex">
            <span class="font-bold mr-2"><nuxt-link to="/finances">FIN</nuxt-link></span> <nuxt-link to="/" >Crypto</nuxt-link>
          </div>



         

          
        </div>
      </div>
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
import MultiLanguageSupport from '~/components/MultiLanguageSupport.vue'
import BrowseTopics from '~/components/BrowseTopics.vue'

export default {
  components: {
    Header,
    Footer,
    MultiLanguageSupport,
    BrowseTopics
  },
  head () {
    return {
      title: "Browse Topics - Skillseed",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>