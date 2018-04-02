<template>
  <section class="section has-text-centered">
    <div class="container">
      <div class="column is-6 is-offset-3" id="strength">
        <h3 class="title" v-t="'aboutPage.strengthPage.title'"></h3>
        <p class="subtitle" v-t="'aboutPage.strengthPage.subtitle'"></p>
        <p v-html="$t('aboutPage.strengthPage.description')"></p>
      </div>
      <nav class="column is-4 is-offset-4 panel has-text-left">
        <div class="panel-block"
           v-for="(requirement, i) in $t('aboutPage.strengthPage.requirements')"
           :key="i">
          <span class="panel-icon">
            <i class="fa fa-check"></i>
          </span>
          {{ requirement }}
        </div>
      </nav>
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
