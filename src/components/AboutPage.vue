<template>
  <div>
    <the-hero
       :title="$t('aboutPage.title')"
       :subtitle="$t('aboutPage.subtitle')"
       :links="links"
       color="dark"
       size="small">
    </the-hero>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHero from '@/components/TheHero'

export default {
  components: {
    TheHero
  },
  data () {
    return {}
  },
  computed: {
    links () {
      return [
        { name: this.$t('aboutPage.roadPage.link'), to: '/about' },
        { name: this.$t('aboutPage.labmenPage.link'), to: '/about/labmen' },
        { name: this.$t('aboutPage.strengthPage.link'), to: '/about/strength' },
        { name: this.$t('aboutPage.aboutSitePage.link'), to: '/about/site' }
      ]
    }
  }
}
</script>

<style>

</style>
