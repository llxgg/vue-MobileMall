<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from '@/components/MainTabBar.vue'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  methods: {

  },
  components: {
    MainTabBar
  }
}
</script>

<style>

</style>
