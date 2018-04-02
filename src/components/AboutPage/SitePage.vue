<template>
  <section class="section has-text-centered">
    <div class="container">
      <div class="column is-8 is-offset-2" id="road">
        <h3 class="title" v-t="'aboutPage.aboutSitePage.title'"></h3>
        <div class="content has-text-left">
          <h4 v-t="'aboutPage.aboutSitePage.disclaimer.title'"></h4>
          <ul>
            <li
               v-for="(disclaimer, i) in $t('aboutPage.aboutSitePage.disclaimer.items')"
               :key="i"
            >
              {{ disclaimer }}
            </li>
          </ul>
          <h4 v-t="'aboutPage.aboutSitePage.inquiries.title'"></h4>
          <ul>
            <li
               v-for="(inquirie, i) in $t('aboutPage.aboutSitePage.inquiries.items')"
               :key="i"
            >
              {{ inquirie }}
            </li>
          </ul>
        </div>
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
