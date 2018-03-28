<template>
  <section class="section has-text-centered">
    <div class="container">
      <div class="column is-8 is-offset-2" id="road">
        <h3 class="title" v-t="'aboutPage.roadPage.title'"></h3>
        <p class="subtitle" v-t="'aboutPage.roadPage.subtitle'"></p>
        <p v-html="$t('aboutPage.roadPage.description')"></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>

</style>
