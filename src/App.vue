<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view v-if="!loading"/>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'

export default {
  components: {
    TheNavbar
  },

  setup () {
    const store = useStore()
    const loading = ref(true)
    onMounted(async () => {
      await store.dispatch('getAllTasks')
      loading.value = false
    })
    return {
      loading
    }
  }
}
</script>

<style>

</style>
