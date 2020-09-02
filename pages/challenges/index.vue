<template>
  <div class="body">
    <Header/>
    <div class="mt-32 px-32">
      <div class="mt-12">
        <h2 class="text-blue-900 text-5xl">Challenge yourself.</h2>
      </div>
      <div class="mt-12">
        <p class="text-purple-500 uppercase font-semibold">why do a challenge?</p>
        <p class="mt-2 text-blue-900 text-lg leading-relaxed w-2/3">Challenges make us stronger. They abruptly disrupt our lives, forcing us to shift to a new gear or level of human potential and output. With each new challenge we take on, new habits and skills are formed. Our brains become rewired, our thought patterns and perception of self changed forever. <br><br>You don't know how much you can do until you've been challenged to do it.</p>
      </div>

      <div class="">
        <p class="big-quote">"</p>
        <div class="ml-16">
          <div>
            <p class="text-purple-500 uppercase font-semibold"><a href="https://en.wikipedia.org/wiki/Franklin_D._Roosevelt" target="_blank">Franklin D. Roosevelt &rsaquo;&rsaquo;</a></p>
            <p class="mt-2 text-blue-900 font-semibold">A smooth sea never made a skilled sailor.</p>
          </div>          
        </div>
      </div>

      <div class="mt-32">
        
        <h2 class="text-blue-900 text-3xl font-semibold">It's time to level up</h2>
        <p class="mt-2 text-blue-900 text-lg leading-relaxed w-2/3">Pick a challenge category and gain a new skill.</p>
      
        <ul class="mt-8">
          <nuxt-link to="../challenges#preschool" class="text-sm uppercase font-semibold px-4 py-2 rounded-full inline-block bg-grey-600 text-blue-900">Preschool</nuxt-link>
          <nuxt-link to="../challenges#elementary" class="pointer-events-none opacity-40 ml-2 text-sm uppercase font-semibold px-4 py-2 rounded-full inline-block bg-grey-600 text-blue-900">Elementary</nuxt-link>
          <nuxt-link to="../challenges#middleschool" class="pointer-events-none opacity-40 ml-2 text-sm uppercase font-semibold px-4 py-2 rounded-full inline-block bg-grey-600 text-blue-900">Middle school</nuxt-link>
          <nuxt-link to="challenges#highschool" class="pointer-events-none opacity-40 ml-2 text-sm uppercase font-semibold px-4 py-2 rounded-full inline-block bg-grey-600 text-blue-900">High school</nuxt-link>
          <nuxt-link to="../challenges#university" class="pointer-events-none opacity-40 ml-2 text-sm uppercase font-semibold px-4 py-2 rounded-full inline-block bg-grey-600 text-blue-900">University</nuxt-link>
        </ul>
     
      </div>

       
      <h3 id="preschool" class="mt-24 text-2xl font-semibold text-blue-900">Preschool - 7 Days</h3>
      <p class="mt-4 text-lg w-1/2">Never done a challenge before? Or you're not sure you can fully commit to one? Start at preschool.</p>
      <div class="mt-12 flex items-center">
  
        <!-- first row challenges -->
        <div class="max-w-sm border-t-2 border-red-500 rounded overflow-hidden shadow">
            <div class="px-6 py-4 ">
              <p class="mt-5 text-xl font-semibold">Computer Science</p>
              <p class="mt-4 text-sm">Suggested computer science topics: </p>
              <div class="mt-2 flex items-center">
                <p><nuxt-link to="topic/html-css" class="underline"> HTML&CSS</nuxt-link> <span>or </span><nuxt-link to="topic/javascript" class="underline">JavaScript</nuxt-link></p>    
              </div>
             
            </div>
            <div class="bg-gray-700 mt-4 px-6 py-4">
              <h3 class="font-semibold text-sm">Objective</h3>
              <p class="mt-4 text-sm">&#9745; Program for 30 minutes each day for the next 7 days.</p>
            </div>
            <div class="bg-gray-700 mt-4 px-6 py-4">
              <h3 class="font-semibold text-sm">Track your progress</h3>
              <p class="mt-6 text-sm">&#9745; Tweet your progress every day with the hashtag #7CompLRNS</p>
            </div>
            <div class="ml-4 mt-4">
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#7CompLRNS</span>
            </div>
            <div class="mt-4"></div>
          </div> 


        <div class="ml-4 max-w-sm border-t-2 border-red-500 rounded overflow-hidden shadow">
          <div class="px-6 py-4">
            <p class="mt-5 text-xl font-semibold">Math</p>
            <p class="mt-4 text-sm">Suggested math topics: </p>
            <div class="mt-2 flex items-center">
              <p><nuxt-link to="topic/pre-algebra" class="underline">Pre-algebra</nuxt-link> <span>or </span><nuxt-link to="topic/algebra-one" class="underline">Algebra 1</nuxt-link></p>    
            </div>
            
          </div>
          <div class="bg-gray-700 mt-4 px-6 py-4">
            <h3 class="font-semibold text-sm">Objective</h3>
            <p class="mt-4 text-sm">&#9745; Do math sets for 30 minutes each day for the next 7 days.</p>
          </div>
          <div class="bg-gray-700 mt-4 px-6 py-4">
            <h3 class="font-semibold text-sm">Track your progress</h3>
            <p class="mt-6 text-sm">&#9745; Tweet your progress every day with the hashtag #7MathLRNS</p>
          </div>
          <div class="ml-4 mt-4">
            <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#7MathLRNS</span>
          </div>
          <div class="mt-4"></div>
        </div>
        <div class="ml-4 max-w-sm border-t-2 border-red-500 rounded overflow-hidden shadow">
          <div class="px-6 py-4">
            <p class="mt-5 text-xl font-semibold">Science</p>
            <p class="mt-4 text-sm">Suggested science topics: </p>
            <div class="mt-2 flex items-center">
              <p><nuxt-link to="topic/physics" class="underline">Physics</nuxt-link></p>   
            </div>
            
          </div>
          <div class="bg-gray-700 mt-4 px-6 py-4">
            <h3 class="font-semibold text-sm">Objective</h3>
            <p class="mt-4 text-sm">&#9745; Study science for 30 minutes each day for the next 7 days.</p>
          </div>
          <div class="bg-gray-700 mt-4 px-6 py-4">
            <h3 class="font-semibold text-sm">Track your progress</h3>
            <p class="mt-6 text-sm">&#9745; Tweet your progress every day with the hashtag #7ScienceLRNS</p>
          </div>
          <div class="ml-4 mt-4">
            <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#7ScienceLRNS</span>
          </div>
          <div class="mt-4"></div>
        </div> 
      </div> 


      <!-- Second row challenges -->
      <div class="mt-12 flex items-center">
        <div class="max-w-sm border-t-2 border-red-500  rounded overflow-hidden shadow">
            <div class="px-6 py-4 ">
              <p class="mt-5 text-xl font-semibold">Design</p>
              <p class="mt-4 text-sm">Suggested design topics:</p>
              <div class="flex items-center">
                <p><nuxt-link to="topic/adobe-xd" class="underline">Adobe XD</nuxt-link> <span>or </span><nuxt-link to="topic/ui-design" class="underline">UI Design</nuxt-link></p>    
              </div>
             
            </div>
            <div class="bg-gray-700 mt-4 px-6 py-4">
              <h3 class="font-semibold text-sm">Objective</h3>
              <p class="mt-4 text-sm">&#9745; Design for 30 minutes each day for the next 7 days.</p>
            </div>
            <div class="bg-gray-700 mt-4 px-6 py-4">
              <h3 class="font-semibold text-sm">Track your progress</h3>
              <p class="mt-6 text-sm">&#9745; Tweet your progress every day with the hashtag #7DesignLRNS</p>
            </div>
            <div class="ml-4 mt-4">
              <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#7DesignLRNS</span>
            </div>
            <div class="mt-4"></div>
          </div> 


        <div class="ml-4 max-w-sm border-t-2 border-red-500 rounded overflow-hidden shadow">
          <div class="px-6 py-4">
            <p class="mt-5 text-xl font-semibold">Cooking</p>
            <p class="mt-4 text-sm">Suggested cooking topics: </p>
            <div class="flex items-center">
              <p><nuxt-link to="topic/korean-cuisine" class="underline">Korean Cuisine</nuxt-link></p>    
            </div>
            
          </div>
          <div class="bg-gray-700 mt-4 px-6 py-4">
            <h3 class="font-semibold text-sm">Objective</h3>
            <p class="mt-4 text-sm">&#9745; Cook one meal each day for the next 7 days.</p>
          </div>
          <div class="bg-gray-700 mt-4 px-6 py-4">
            <h3 class="font-semibold text-sm">Track your progress</h3>
            <p class="mt-6 text-sm">&#9745; Tweet your progress every day with the hashtag #7CookingLRNS</p>
          </div>
          <div class="ml-4 mt-4">
            <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#7CookingLRNS</span>
          </div>
          <div class="mt-4"></div>
        </div>
        
        <div class="ml-4 max-w-sm border-t-2 border-red-500 rounded overflow-hidden shadow opacity-40">
          <div class="px-6 py-4">
            <p class="mt-5 text-xl font-semibold">Art</p>
            <p class="mt-4 text-sm">Suggested Art topics: </p>
            <div class="flex items-center">
              <p><nuxt-link to="topic/illustration" class="pointer-events-none underline">Illustration</nuxt-link></p>   
            </div>
            
          </div>
          <div class="bg-gray-700 mt-4 px-6 py-4">
            <h3 class="font-semibold text-sm">Objective</h3>
            <p class="mt-4 text-sm">&#9745; Study illustration for 30 minutes each day for the next 7 days.</p>
          </div>
          <div class="bg-gray-700 mt-4 px-6 py-4">
            <h3 class="font-semibold text-sm">Track your progress</h3>
            <p class="mt-6 text-sm">&#9745; Tweet your progress every day with the hashtag #7IllustrationLRNS</p>
          </div>
          <div class="ml-4 mt-4">
            <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#7IllustrationLRNS</span>
          </div>
          <div class="mt-4"></div>
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

export default {
  components: {
    Header,
    Footer
  },
  head () {
    return {
      title: "Challenges - LearnSomething.io",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>