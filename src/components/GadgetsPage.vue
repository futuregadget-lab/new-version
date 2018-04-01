<template>
  <div>
    <the-hero
       :title="$t('gadgetsPage.title')"
       :subtitle="$t('gadgetsPage.subtitle')"
       color="dark"
       size="small">
    </the-hero>
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
  }
}
</script>

<style>

</style>
