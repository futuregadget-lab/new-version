<template>
  <div>
    <TheHero
       :title="$t('gadgetsPage.title')"
       :subtitle="$t('gadgetsPage.subtitle')"
       color="dark"
       size="small"
       :links="links"
    />
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
        { name: 'Gadgets', to: '/gadgets/' },
        { name: 'Shop', to: '/gadgets/shop' }
      ]
    }
  }
}
</script>

<style>

</style>
