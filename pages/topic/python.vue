<template>
  <div class="body">
    <Header/>
    <div class="mt-32 px-32">
      <div class="flex items-center justify-center">
        <p class="capitalize"><nuxt-link to="/topics">Topic</nuxt-link> <span class="ml-1 font-semibold">&rsaquo;</span></p>
        <p class="ml-5 capitalize"><nuxt-link to="/topics/#computer-science">{{category}}</nuxt-link> <span class="ml-1 font-semibold">&rsaquo;</span></p>
        <div class="ml-2"><p class="font-semibold px-2">{{title}}</p></div>
      </div>

      <section class="mt-20 flex">
        <div>
          <div class="flex items-center">
          
          <h2 class="font-semibold text-4xl mr-4">{{title}}</h2>
          <button class="border-2 border-black px-6 py-2 rounded-md font-semibold text-sm">Follow</button>
    
          </div>
      
          <div class="mt-6">
            <div class="flex items-center">
              <p class="font-semibold">1,500 teachers</p><span class="ml-2">&#x25cf;</span><p class="ml-2 font-semibold">48,000 playlists</p>
            </div>
            <p class="mt-8 w-3/5"><a href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank">{{paragraph.length < 125 ? paragraph : paragraph.substring(0,125) + "..."}}</a></p>
            
          </div>
        </div>
        
        <div class="w-1/5 flex flex-col">
            <h3 class="capitalize text-lg font-semibold">similar topics</h3>
            <nuxt-link to="/topic/ruby" class="mt-6 flex mb-2">
              Ruby
              <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg> -->
            </nuxt-link>
            <nuxt-link to="/topic/javascript" class="flex mb-2">
              JavaScript
              <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>            -->
            </nuxt-link>
            <nuxt-link to="/topic/java" class="flex mb-2">
              Java
              <!-- <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>            -->
            </nuxt-link>
            <div class="mt-10 flex flex-col">
              <h3 class="capitalize text-lg font-semibold">Python frameworks</h3>
              <nuxt-link to="/topic/django" class="mt-10 flex mb-2">
                Django
              </nuxt-link>
              <nuxt-link to="/topic/flask">
                Flask
              </nuxt-link>
            </div>
          </div>
          
      
      </section>

      <section class="w-full">
        <div class="">
          <div class="">
            <h3 class="capitalize text-lg font-semibold">creator</h3>
            <div class="mt-10 flex items-center">
              <a href="https://en.wikipedia.org/wiki/Guido_van_Rossum" target="_blank">
                <img class="rounded-full" src="~assets/images/guido-van-rossum.jpg" alt="Guido van Rossum" height="50px" width="50px">
              </a>
              <a href="https://en.wikipedia.org/wiki/Guido_van_Rossum" target="_blank" class="ml-5 font-semibold">Guido van Rossum</a>
            </div> 
          </div>
        </div>
      </section>

      

      <div class="flex mt-20 ">
        <section class="mr-20">
        <div class="flex justify-between">
          <div class="">
            <h3 class="capitalize text-lg font-semibold">books</h3>
            <p class="mt-4">The best rated python books on Amazon.</p>
            <div class="flex">
              <div>
                <div class="mt-10 flex items-center">
                  <a href="https://www.amazon.com/Python-Crash-Course-Hands-Project-Based/dp/1593279280?SubscriptionId=AKIAJBKIFSMHEN2PCMZQ&tag=pythonbooks01-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=1593279280" target="_blank">
                    <img class="" src="~assets/images/python-crash-course.jpg" alt="Python Crash Course" height="50px" width="50px">
                  </a>
                  <a href="https://www.amazon.com/Python-Crash-Course-Hands-Project-Based/dp/1593279280?SubscriptionId=AKIAJBKIFSMHEN2PCMZQ&tag=pythonbooks01-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=1593279280" target="_blank" class="ml-5 font-semibold">Python Crash Course</a>
                </div> 
                <div class="mt-10 flex items-center">
                  <a href="https://www.amazon.com/Learning-Python-5th-Mark-Lutz/dp/1449355730?SubscriptionId=AKIAJBKIFSMHEN2PCMZQ&tag=pythonbooks01-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=1449355730" target="_blank">
                    <img class="" src="~assets/images/learning-python.jpg" alt="Learning Python" height="50px" width="50px">
                  </a>
                  <a href="https://www.amazon.com/Learning-Python-5th-Mark-Lutz/dp/1449355730?SubscriptionId=AKIAJBKIFSMHEN2PCMZQ&tag=pythonbooks01-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=1449355730" target="_blank" class="ml-5 font-semibold">Learning Python</a>
                </div>
              </div>
              <div class="ml-8">
                <div class="mt-10 flex items-center">
                  <a href="https://learnpythonthehardway.org/python3/#" target="_blank">
                    <img class="" src="~assets/images/python-the-hard-way.jpg" alt="Learn Python the Hardway" height="50px" width="50px">
                  </a>
                  <a href="https://learnpythonthehardway.org/python3/#" target="_blank" class="ml-5 font-semibold">Learn Python The Hard Way</a>
                </div>
              </div>
            </div>
            
            

          </div>
        
        </div>
      </section>
      <section class="">
        <div class="flex justify-between">
          <div class="">
            <h3 class="capitalize text-lg font-semibold">Products</h3>
            <p class="mt-4">Related products on Amazon.</p>
            <div class="flex">
              <div>
                <div class="mt-10 flex items-center">
                  <a href="https://www.amazon.com/Acer-Aspire-A515-56-347N-Slim-Laptop/dp/B0BL86VM7F/?_encoding=UTF8&pd_rd_w=qLXUB&content-id=amzn1.sym.5f7e0a27-49c0-47d3-80b2-fd9271d863ca%3Aamzn1.symc.e5c80209-769f-4ade-a325-2eaec14b8e0e&pf_rd_p=5f7e0a27-49c0-47d3-80b2-fd9271d863ca&pf_rd_r=RPE22XH82NWY9MMXMWBA&pd_rd_wg=0d4Gw&pd_rd_r=00bbf7d6-7407-4dc6-973e-92542b609759&ref_=pd_gw_ci_mcx_mr_hp_atf_m" target="_blank">
                    <img class="" src="~assets/images/python-crash-course.jpg" alt="Python Crash Course" height="50px" width="50px">
                  </a>
                  <a href="https://www.amazon.com/Acer-Aspire-A515-56-347N-Slim-Laptop/dp/B0BL86VM7F/?_encoding=UTF8&pd_rd_w=qLXUB&content-id=amzn1.sym.5f7e0a27-49c0-47d3-80b2-fd9271d863ca%3Aamzn1.symc.e5c80209-769f-4ade-a325-2eaec14b8e0e&pf_rd_p=5f7e0a27-49c0-47d3-80b2-fd9271d863ca&pf_rd_r=RPE22XH82NWY9MMXMWBA&pd_rd_wg=0d4Gw&pd_rd_r=00bbf7d6-7407-4dc6-973e-92542b609759&ref_=pd_gw_ci_mcx_mr_hp_atf_m" target="_blank" class="ml-5 font-semibold">HP 15'</a>
                </div> 
                <div class="mt-10 flex items-center">
                  <a href="https://www.amazon.com/Acer-Aspire-A515-56-347N-Slim-Laptop/dp/B0BL86VM7F/?_encoding=UTF8&pd_rd_w=qLXUB&content-id=amzn1.sym.5f7e0a27-49c0-47d3-80b2-fd9271d863ca%3Aamzn1.symc.e5c80209-769f-4ade-a325-2eaec14b8e0e&pf_rd_p=5f7e0a27-49c0-47d3-80b2-fd9271d863ca&pf_rd_r=RPE22XH82NWY9MMXMWBA&pd_rd_wg=0d4Gw&pd_rd_r=00bbf7d6-7407-4dc6-973e-92542b609759&ref_=pd_gw_ci_mcx_mr_hp_atf_m" target="_blank">
                    <img class="" src="~assets/images/learning-python.jpg" alt="Learning Python" height="50px" width="50px">
                  </a>
                  <a href="https://www.amazon.com/Acer-Aspire-A515-56-347N-Slim-Laptop/dp/B0BL86VM7F/?_encoding=UTF8&pd_rd_w=qLXUB&content-id=amzn1.sym.5f7e0a27-49c0-47d3-80b2-fd9271d863ca%3Aamzn1.symc.e5c80209-769f-4ade-a325-2eaec14b8e0e&pf_rd_p=5f7e0a27-49c0-47d3-80b2-fd9271d863ca&pf_rd_r=RPE22XH82NWY9MMXMWBA&pd_rd_wg=0d4Gw&pd_rd_r=00bbf7d6-7407-4dc6-973e-92542b609759&ref_=pd_gw_ci_mcx_mr_hp_atf_m" target="_blank" class="ml-5 font-semibold">Acer 15'</a>
                </div>
              </div>
              <div class="ml-8">
                <div class="mt-10 flex items-center">
                  <a href="https://learnpythonthehardway.org/python3/#" target="_blank">
                    <img class="" src="~assets/images/python-the-hard-way.jpg" alt="Learn Python the Hardway" height="50px" width="50px">
                  </a>
                  <a href="https://learnpythonthehardway.org/python3/#" target="_blank" class="ml-5 font-semibold">Asus 15'</a>
                </div>
              </div>
            </div>
            
            

          </div>
        
        </div>
      </section>
      </div>

     

      
        <!-- Teacher list Section -->
      <section class="mt-20">
        <!-- Introduction to Ruby Teacher section -->

        <!-- section header -->
        <div class="mt-12 flex">
          <div class="flex items-center">
            <p class="mt-10 text-lg font-semibold capitalize">Python Teachers</p>
          </div>
        </div>

        <!-- english teachers 1st row list -->
        <div class="mt-16 flex w-full">

          <!-- teacher 1 -->
          <div class="flex items-center">
            <nuxt-link to="../teacher/clever-programmer">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/clever-programmer.jpg" alt="Clever Programmer">
            </nuxt-link>
            <div class="">
              <nuxt-link to="../teacher/clever-programmer">
                <p class="ml-5 font-semibold">Clever Programmer</p>
                <p class="ml-5 text-sm">English</p>
              </nuxt-link>
            </div>
          </div>

          <div class="ml-12 flex items-center">
            <nuxt-link to="../teacher/mosh">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/mosh.jpg" alt="Mosh">
            </nuxt-link>            
            <div class="">
              <nuxt-link to="../teacher/mosh">
                <p class="ml-5 font-semibold">Mosh</p>
                <p class="ml-5 text-sm">English</p>
              </nuxt-link>
            </div>
          </div>

          <div class="ml-12 flex items-center">
            <nuxt-link to="../teacher/tech-with-tim">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/tech-with-tim.jpg" alt="Tech With Tim">
            </nuxt-link>
            <div class="">
              <nuxt-link to="../teacher/tech-with-tim">
                <p class="ml-5 font-semibold">Tech With Tim</p>
                <p class="ml-5 text-sm">English</p>
              </nuxt-link>
            </div>
          </div>

          <div class="ml-12 flex items-center">
            <nuxt-link to="../teacher/mike-dane">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/mike_dane.jpg" alt="Tech With Tim">
            </nuxt-link>
            <div class="">
              <nuxt-link to="../teacher/mike-dane">
                <p class="ml-5 font-semibold">Mike Dane</p>
                <p class="ml-5 text-sm">English</p>
              </nuxt-link>
            </div>
          </div>
          <div class="ml-12 flex items-center flex-shrink-0">
            <nuxt-link to="../teacher/freeCodeCamp">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/teachers/freeCodeCamp.jpg" alt="freeCodeCamp">
            </nuxt-link>
            <div class="">
              <nuxt-link to="../teacher/freeCodeCamp">
                <p class="ml-5 font-semibold">freeCodeCamp</p>
                <p class="ml-5 text-sm">English</p>
              </nuxt-link>
            </div>
          </div>
        </div> 

        <div class="mt-16 flex flex-wrap xl:flex-no-wrap">

          <!-- teacher 1 -->
          

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
  data () {
    return {
      title: 'Python',
      category: 'Computer Science',
      paragraph: 'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming.',
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>