<template>
  <div id="app">
    <TheNavbar/>
    <router-view/>
    <TheFooter/>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheFooter
  }
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
}
</style>
