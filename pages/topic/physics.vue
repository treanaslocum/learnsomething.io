<template>
  <div class="body">
    <Header/>
    <div class="mt-32 px-32">
      <div class="flex items-center">
        <p class="text-sm text-blue-900 capitalize"><nuxt-link to="/topics/#science">Science</nuxt-link> <span class="ml-1 font-semibold">&rsaquo;</span></p>
        <div class="ml-5"><p class="text-xs text-grey-300 font-semibold bg-grey-500 px-2">Physics</p></div>
      </div>

      <section class="mt-12">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-purple-500 uppercase font-semibold">Science</p>
            <h2 class="text-blue-900 text-5xl">Physics</h2>
          </div>
          <!-- <div class="flex items-center border border-red-500 rounded-full py-1 px-3">
            <span><svg class="fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg></span>
            <p class="ml-1 text-red-500 text-sm font-semibold">Hot Topic</p>
          </div> -->
        </div>
        <!-- Filter Tags -->
        <div class="mt-5 flex items-center justify-between">
          <div class="flex items-center">
            <nuxt-link to="../filters/science">
              <p class="bg-grey-200 rounded-full px-3 text-grey-700 uppercase font-semibold">Science</p>
            </nuxt-link>
          </div>
          <!-- <div>
            <a class="mt-5 text-black-900 hover:text-black-800" href="" target="_blank">xxx</a>
          </div> -->
        </div>
      </section>

      <section class="mt-20">
        <div class="flex justify-between">
          <div class="w-4/5">
            <h3 class="text-black-900 uppercase font-semibold">about</h3>
            <p class="mt-10 leading-relaxed w-3/5">Physics is the natural science that studies matter, its motion and behavior through space and time, and the related entities of energy and force.<a href="https://en.wikipedia.org/wiki/Physics" target="_blank" class="ml-1 text-lg text-purple-500 font-semibold">&rsaquo;&rsaquo;</a></p>
          </div>
          <div class="w-1/5 flex flex-col">
            <h3 class="text-black-400 uppercase font-semibold">similar topics</h3>
            <nuxt-link to="/topic/chemistry" class="mt-10 flex mb-2 text-black-900 hover:text-black-800">Chemistry</nuxt-link>
            <nuxt-link to="/topic/biology" class="flex mb-2 text-black-900 hover:text-black-800">Biology</nuxt-link>
            <!-- <nuxt-link to="/topic/" class="flex mb-2 text-black-900 hover:text-black-800">
              xxx
              <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>
            </nuxt-link>
            <nuxt-link to="/topic/" class="flex mb-2 text-black-900 hover:text-black-800">
              xxx
              <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>           
            </nuxt-link> -->
            <nuxt-link to="/topic/organic-chemistry" class="mb-2 text-grey-100 line-through">Organic Chemistry</nuxt-link>
          </div>
        </div>
      </section>

      <section class="mt-20">
        <div class="flex justify-between">
          <div class="w-4/5">
            <h3 class="text-black-900 uppercase font-semibold">pioneers</h3>
            <div class="mt-10 flex items-center">
              <img class="rounded-full" src="~assets/images/isaac-newton.jpg" alt="Isaac Newton" height="50px" width="50px">
              <nuxt-link to="/people/isaac-newton" class="ml-5 text-black-900 hover:text-black-800">Isaac Newton</nuxt-link>
              <img class="ml-10 rounded-full" src="~assets/images/ernest-rutherford.jpg" alt="Ernest Rutherford" height="50px" width="50px">
              <nuxt-link to="/people/ernest-rutherford" class="ml-5 text-black-900 hover:text-black-800">Ernest Rutherford</nuxt-link>
            </div> 
            <div class="mt-10 flex items-center">
              <img class="rounded-full" src="~assets/images/albert-einstein.jpg" alt="Albert Einstein" height="50px" width="50px">
              <nuxt-link to="/people/albert-einstein" class="ml-5 text-black-900 hover:text-black-800">Albert Einstein</nuxt-link>
              <img class="ml-10 rounded-full" src="~assets/images/erwin-schrodinger.jpg" alt="Erwin Schrödinger" height="50px" width="50px">
              <nuxt-link to="/people/erwin-schrodinger" class="ml-5 text-black-900 hover:text-black-800">Erwin Schrödinger</nuxt-link>
            </div>
          </div>
          <div class="w-1/5 flex flex-col">
            <h3 class="text-black-400 uppercase font-semibold">xxx</h3>
            <nuxt-link to="/topic/" class="mt-10 flex mb-2 text-grey-100 line-through">
              xxx
            </nuxt-link>
            <nuxt-link to="/topic/" class="flex mb-2 text-black-900 hover:text-black-800">
              xxx
              <svg class="ml-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M12.579,2.393c-0.349-0.248-0.808-0.245-1.153,0.006C9.592,3.728,4,8.252,4,14c0,3.247,1.948,6.043,4.734,7.296 C8.275,20.645,8,19.855,8,19c-0.017-3.221,3.558-6.893,3.71-7c0.173-0.124,0.407-0.124,0.579,0C12.441,12.107,16,14.974,16,19.002 c0,0.854-0.275,1.643-0.733,2.294C18.052,20.043,20,17.248,20,14.005C20,8.144,14.418,3.698,12.579,2.393z"/></svg>           
            </nuxt-link>
          </div>
        </div>
      </section>

      <section class="mt-20">
        <div class="flex justify-between">
          <div class="w-4/5">
            <h3 class="text-black-900 uppercase font-semibold">books</h3>
            <div class="mt-10 flex items-center">
              <nuxt-link to="/books/xxx">
                <img class="" src="~assets/images/the-well-grounded-rubyist.png" alt="xxx" height="50px" width="50px">
              </nuxt-link>
              <nuxt-link to="/books/xxx" class="ml-5 text-black-900 hover:text-black-800">xxx</nuxt-link>
            </div> 
            <div class="mt-10 flex items-center">
              <nuxt-link to="/books/xxx">
                <img class="" src="~assets/images/eloquent-ruby.png" alt="xxx" height="50px" width="50px">
              </nuxt-link>
              <nuxt-link to="/books/xxx" class="ml-5 text-black-900 hover:text-black-800">xxx</nuxt-link>
            </div>
          </div>
          <div class="w-1/5 flex flex-col">
            <h3 class="text-black-400 uppercase font-semibold">supplemental sites</h3>
            <a href="https://www.khanacademy.org/science/physics" class="mt-10 flex items-center mb-2 text-black-900 hover:text-black-800">
              Khan Academy
              <div class="ml-3 bg-grey-300 text-white text-xs font-semibold rounded uppercase px-2">free</div>
            </a>
            <a href="https://ocw.mit.edu/index.htm" class="flex mb-2 items-center text-black-900 hover:text-black-800">
              MIT OpenCourseWare
              <div class="ml-3 bg-grey-300 text-white text-xs font-semibold rounded uppercase px-2">free</div>
            </a>
            <!-- <a href="xxx" class="flex mb-2 items-center text-black-900 hover:text-black-800">
              xxx
              <div class="ml-3 bg-grey-300 text-white text-xs font-semibold rounded uppercase px-2">free</div>
            </a>
            <a href="xxx" class="flex mb-2 items-center text-black-900 hover:text-black-800">
              xxx
              <div class="ml-3 flex items-center bg-grey-600 text-white text-xs font-semibold rounded uppercase px-2">free / paid</div>
            </a>
            <a href="xxx" class="flex mb-2 items-center text-black-900 hover:text-black-800">
              xxx
              <div class="ml-3 bg-grey-300 text-white text-xs font-semibold rounded uppercase px-2">free</div>
            </a> -->
          </div>
        </div>
      </section>

      <!-- Video Playlist Section -->
      <section class="mt-20">
        <h3 class="text-black-900 uppercase font-semibold">Learn Physics - video playlists</h3>
        <div class="flex justify-between">
          <div class="">
            <div class="mt-10 flex items-center">
              <div class="flex items-center">
                <p class="text-black-900 text-sm font-semibold">Introduction To Physics</p>
                <!-- <div class="flex items-center">
                  <div class="ml-5 bg-blue-900 w-5 h-1"></div>
                  <div class="ml-2 bg-grey-300 w-5 h-1"></div>
                  <div class="ml-2 bg-grey-300 w-5 h-1"></div>
                </div> -->
                <!-- Maybe make the font-size the same as the introduction to Physics -->
                <div class="ml-5"><p class="text-xs bg-purple-600 text-white font-semibold px-2 uppercase">Beginner</p></div>
                <div class="ml-3"><p class="text-xs bg-blue-900 text-white font-semibold px-2 uppercase">English</p></div>
              </div>
            </div> 
            <div class="flex items-center">
              <div class="">
                <div class="mt-10 flex items-center">
                  <div class="mr-6">
                    <iframe src="https://www.youtube.com/embed/videoseries?list=PL8OivKAXXqReXHFoufg54Xq4s_VaeWo01" height="250" width="350" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
           <div class="">
            <div class="mt-10 flex items-center">
              <div class="flex items-center">
                <p class="text-black-900 text-sm font-semibold">Physics I</p>
                <!-- <div class="flex items-center">
                  <div class="ml-5 bg-blue-900 w-5 h-1"></div>
                  <div class="ml-2 bg-grey-300 w-5 h-1"></div>
                  <div class="ml-2 bg-grey-300 w-5 h-1"></div>
                </div> -->
                <!-- Maybe make the font-size the same as the introduction to Ruby -->
                <div class="ml-5"><p class="text-xs bg-purple-600 text-white font-semibold px-2 uppercase">Intermediate</p></div>
                <div class="ml-3"><p class="text-xs bg-blue-900 text-white font-semibold px-2 uppercase">English</p></div>
              </div>
            </div> 
            <div class="flex items-center">
              <div class="">
                <div class="mt-10 flex items-center">
                  <div class="mr-6">
                    <iframe src="https://www.youtube.com/embed/videoseries?list=PL8OivKAXXqReXHFoufg54Xq4s_VaeWo01" height="250" width="350" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
           <div class="">
            <div class="mt-10 flex items-center">
              <div class="flex items-center">
                <p class="text-black-900 text-sm font-semibold">Physics II</p>
                <!-- <div class="flex items-center">
                  <div class="ml-5 bg-blue-900 w-5 h-1"></div>
                  <div class="ml-2 bg-grey-300 w-5 h-1"></div>
                  <div class="ml-2 bg-grey-300 w-5 h-1"></div>
                </div> -->
                <!-- Maybe make the font-size the same as the introduction to Ruby -->
                <div class="ml-5"><p class="text-xs bg-purple-600 text-white font-semibold px-2 uppercase">Advanced</p></div>
                <div class="ml-3"><p class="text-xs bg-blue-900 text-white font-semibold px-2 uppercase">English</p></div>
              </div>
            </div> 
            <div class="flex items-center">
              <div class="">
                <div class="mt-10 flex items-center">
                  <div class="mr-6">
                    <iframe src="https://www.youtube.com/embed/videoseries?list=PL8OivKAXXqReXHFoufg54Xq4s_VaeWo01" height="250" width="350" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-16 flex justify-between">
          <div class="">
            <div class="mt-10 flex items-center">
              <div class="flex items-center">
                <p class="text-black-900 text-sm font-semibold">Introduction To Physics</p>
                <!-- <div class="flex items-center">
                  <div class="ml-5 bg-blue-900 w-5 h-1"></div>
                  <div class="ml-2 bg-grey-300 w-5 h-1"></div>
                  <div class="ml-2 bg-grey-300 w-5 h-1"></div>
                </div> -->
                <!-- Maybe make the font-size the same as the introduction to Ruby -->
                <div class="ml-5"><p class="text-xs bg-purple-600 text-white font-semibold px-2 uppercase">Beginner</p></div>
                <div class="ml-3"><p class="text-xs bg-blue-900 text-white font-semibold px-2 uppercase">Spanish</p></div>
              </div>
            </div> 
            <div class="flex items-center">
              <div class="">
                <div class="mt-10 flex items-center">
                  <div class="mr-6">
                    <iframe src="https://www.youtube.com/embed/videoseries?list=PL8OivKAXXqReXHFoufg54Xq4s_VaeWo01" height="250" width="350" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
           <div class="">
            <div class="mt-10 flex items-center">
              <div class="flex items-center">
                <p class="text-black-900 text-sm font-semibold">Physics I</p>
                <!-- <div class="flex items-center">
                  <div class="ml-5 bg-blue-900 w-5 h-1"></div>
                  <div class="ml-2 bg-grey-300 w-5 h-1"></div>
                  <div class="ml-2 bg-grey-300 w-5 h-1"></div>
                </div> -->
                <!-- Maybe make the font-size the same as the introduction to Ruby -->
                <div class="ml-5"><p class="text-xs bg-purple-600 text-white font-semibold px-2 uppercase">Intermediate</p></div>
                <div class="ml-3"><p class="text-xs bg-blue-900 text-white font-semibold px-2 uppercase">Spanish</p></div>
              </div>
            </div> 
            <div class="flex items-center">
              <div class="">
                <div class="mt-10 flex items-center">
                  <div class="mr-6">
                    <iframe src="https://www.youtube.com/embed/videoseries?list=PL8OivKAXXqReXHFoufg54Xq4s_VaeWo01" height="250" width="350" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
           <div class="">
            <div class="mt-10 flex items-center">
              <div class="flex items-center">
                <p class="text-black-900 text-sm font-semibold">Physics II</p>
                <!-- <div class="flex items-center">
                  <div class="ml-5 bg-blue-900 w-5 h-1"></div>
                  <div class="ml-2 bg-grey-300 w-5 h-1"></div>
                  <div class="ml-2 bg-grey-300 w-5 h-1"></div>
                </div> -->
                <!-- Maybe make the font-size the same as the introduction to Ruby -->
                <div class="ml-5"><p class="text-xs bg-purple-600 text-white font-semibold px-2 uppercase">Advanced</p></div>
                <div class="ml-3"><p class="text-xs bg-blue-900 text-white font-semibold px-2 uppercase">Spanish</p></div>
              </div>
            </div> 
            <div class="flex items-center">
              <div class="">
                <div class="mt-10 flex items-center">
                  <div class="mr-6">
                    <iframe src="https://www.youtube.com/embed/videoseries?list=PL8OivKAXXqReXHFoufg54Xq4s_VaeWo01" height="250" width="350" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>

    </div>
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
      title: "Physics - LearnSomething.io",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>