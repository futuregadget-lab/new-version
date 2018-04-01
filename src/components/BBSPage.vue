<template>
  <div>
    <the-hero
       :title="$t('bbsPage.title')"
       :subtitle="$t('bbsPage.subtitle')"
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
        { name: this.$t('bbsPage.messages'), to: '/bbs' },
        { name: this.$t('bbsPage.admin'), to: '/bbs/admin' }
      ]
    }
  }
}
</script>

<style scoped>
.level-item.with-title {
  flex-direction: column;
  align-items: left;
}

.level-item.with-title .subtitle {
  margin-top: 0;
}
</style>
