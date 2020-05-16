<template>
  <div class="body">
    <Header/>
    about
  </div>

</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  },
  head () {
    return {
      title: "LearnSomething.io - The home of self-taught learners",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>