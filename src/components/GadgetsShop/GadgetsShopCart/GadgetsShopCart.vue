<template>
  <div>
    <TheHero
       :title="$t('gadgetsPage.shop.shoppingCart')"
       color="dark"
       size="small"
    />
    <div class="container">
      <section class="section">
        <div class="columns">
          <div class="column is-8">
            <GadgetsShopCartList/>
          </div>
          <div class="column is-4">
            <GadgetsShopCartOrder class="is-sticky"/>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import TheHero from '@/components/TheHero'
import GadgetsShopCartOrder from './GadgetsShopCartOrder'
import GadgetsShopCartList from './GadgetsShopCartList'

export default {
  name: 'GadgetsShopCart',
  components: {
    TheHero,
    GadgetsShopCartOrder,
    GadgetsShopCartList
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.is-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 4rem;
}
</style>
