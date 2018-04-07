<template>
  <div>
    <TheHero
       :title="$t('gadgetsPage.title')"
       :subtitle="$t('gadgetsPage.subtitle')"
       color="dark"
       size="small"
    />
    <router-view/>
  </div>
</template>

<script>
import TheHero from '@/components/TheHero'

export default {
  name: 'GadgetsShop',
  components: {
    TheHero
  },
  data () {
    return {}
  }
}
</script>

<style>

</style>
