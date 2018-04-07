<template>
  <nav class="panel is-sticky">
    <p class="panel-heading" v-t="'gadgetsPage.shop.order'"></p>
    <div class="panel-block">
      <div class="level is-mobile">
        <p class="level-left has-text-grey is-size-7">{{ subtotalFormatted }}</p>
        <p class="level-right has-text-weight-bold has-text-primary">{{ subtotalPriceFormatted }}</p>
      </div>
    </div>
    <div class="panel-block has-text-grey is-size-7">
      <label class="checkbox">
        <input type="checkbox">
        {{ $t('gadgetsPage.shop.containsGift') }}
      </label>
    </div>
    <div class="panel-block">
      <button
          class="button is-outlined is-primary is-fullwidth"
          v-t="'gadgetsPage.shop.proceedToCheckout'"
      />
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'GadgetsShopCartOrder',
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      count: 'cartProductsCount',
      subtotal: 'cartSubtotalPrice'
    }),
    subtotalPriceFormatted () {
      return this.$n(this.subtotal, 'currency', 'ja-JP')
    },
    subtotalFormatted () {
      const items = this.$tc('gadgetsPage.shop.item', this.count, { count: this.count })
      return this.$t('gadgetsPage.shop.subtotal', { number: items })
    }
  }
}
</script>

<style scoped>
.panel-block {
  display: block;
}
</style>
