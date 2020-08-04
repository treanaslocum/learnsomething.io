<template>
  <div class="body">
    <Header/>

    <div class="flex flex-col">
      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table class="min-w-full">
            <thead>
              <tr>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                    </div>
                    <div class="ml-4">
                      <div class="text-sm leading-5 font-medium text-gray-900">Bernard Lane</div>
                      <div class="text-sm leading-5 text-gray-500">bernardlane@example.com</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="text-sm leading-5 text-gray-900">Director</div>
                  <div class="text-sm leading-5 text-gray-500">Human Resources</div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                  Owner
                </td>
                <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                    </div>
                    <div class="ml-4">
                      <div class="text-sm leading-5 font-medium text-gray-900">Bernard Lane</div>
                      <div class="text-sm leading-5 text-gray-500">bernardlane@example.com</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="text-sm leading-5 text-gray-900">Director</div>
                  <div class="text-sm leading-5 text-gray-500">Human Resources</div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                  Owner
                </td>
                <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1505503693641-1926193e8d57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                    </div>
                    <div class="ml-4">
                      <div class="text-sm leading-5 font-medium text-gray-900">Bernard Lane</div>
                      <div class="text-sm leading-5 text-gray-500">bernardlane@example.com</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="text-sm leading-5 text-gray-900">Director</div>
                  <div class="text-sm leading-5 text-gray-500">Human Resources</div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Inactive
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                  Owner
                </td>
                <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                    </div>
                    <div class="ml-4">
                      <div class="text-sm leading-5 font-medium text-gray-900">Bernard Lane</div>
                      <div class="text-sm leading-5 text-gray-500">bernardlane@example.com</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <div class="text-sm leading-5 text-gray-900">Director</div>
                  <div class="text-sm leading-5 text-gray-500">Human Resources</div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Inactive
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                  Owner
                </td>
                <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>


    <div class="mt-20 flex items-center justify-center">
      <div class="flex items-center">
        <div class="h-2 w-2 rounded-full bg-purple-500"></div>
        <span class="ml-3 font-semibold">Computer Science</span>
      </div>
      <div class="ml-8 flex items-center">
        <div class="h-2 w-2 rounded-full bg-purple-500"></div>
        <span class="ml-3 font-semibold">Science</span>
      </div>
      <div class="ml-8 flex items-center">
        <div class="h-2 w-2 rounded-full bg-purple-500"></div>
        <span class="ml-3 font-semibold">Math</span>
      </div>
    </div>

    <section class="mt-32 px-32">
      <!-- teacher row 1 -->
      <div class="flex items-center">
        <!-- teacher 1 -->
        <div class="w-64 flex items-center">
          <nuxt-link to="teacher/mike-dane">
            <img class="rounded-full border-2 border-purple-500" height="70px" width="70px" src="~assets/images/ruby_teachers/mike_dane.jpg" alt="Mike Dane">
          </nuxt-link>
          <div class="flex flex-col">
            <nuxt-link to="../teacher/mike-dane">
              <p class="ml-5 font-semibold">Mike Dane</p>
            </nuxt-link>
            <p class="ml-5 text-sm">10 playlists</p>
            <!-- <div class="ml-5 mt-2 flex items-center">
              <div class=""><p class="text-xs text-black-900 uppercase">Computer Science</p></div>
              <div class="flex items-baseline">
                <div class="ml-3 w-4 h-1 border bg-black-900"></div>
                <div class="ml-1 w-4 h-1 border"></div>
                <div class="ml-1 w-4 h-1 border"></div>
              </div>
            </div> -->
          </div>
        </div>

        <!-- teacher 2 -->
        <div class="ml-12">
          <div class="flex items-center">
            <nuxt-link to="../teacher/derek-banas">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/ruby_teachers/derek_banas.jpg" alt="Derek Banas">
            </nuxt-link>
            <div class="flex flex-col">
              <nuxt-link to="../teacher/derek-banas">
                <p class="ml-5 font-semibold">Derek Banas</p>
              </nuxt-link>
              <p class="ml-5 text-sm">15 playlists</p>
            </div>
          </div>
        </div>

        <!-- teacher 3 -->
        <div class="ml-12 flex items-center">
            <div class="flex items-center opacity-30">
              <img class="rounded-full" height="70px" width="70px" src="~assets/images/ruby_teachers/david_battersby.jpg" alt="">
              <div class="flex flex-col">
                <p class="ml-5 font-semibold">David Battersby</p>
                <p class="ml-5 text-sm">15 lessons | 1 hour</p>
                <div class="ml-5 mt-2 flex items-center">
                  <div class=""><p class="text-xs text-black-900 uppercase">Beginner</p></div>
                  <div class="flex items-baseline">
                    <div class="ml-3 w-4 h-1 border bg-black-900"></div>
                    <div class="ml-1 w-4 h-1 border"></div>
                    <div class="ml-1 w-4 h-1 border"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

      </div>
      <div class="mt-10 flex items-center">
        content
      </div>
    </section>

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
      title: "All Teachers - LearnSomething.io",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>