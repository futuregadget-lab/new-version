<template>
  <div class="box">
    <div class="columns is-mobile is-vcentered is-multiline">
      <div class="column has-text-success is-narrow">
        <div class="columns is-mobile is-vcentered is-variable is-1">
          <div class="column is-narrow">
            <span class="icon is-medium"><i class="fas fa-lg fa-check"></i></span>
          </div>
          <div class="column is-narrow">
            <figure class="image is-64x64">
              <img :src="image">
            </figure>
          </div>
          <p class="column is-narrow has-text-weight-bold">
            {{ $t('gadgetsPage.shop.addedToCart') }}
          </p>
        </div>
      </div>
      <div class="column">
        <span class="has-text-weight-bold" v-t="'gadgetsPage.shop.cartSubtotal'"></span>
        ({{ this.$tc('gadgetsPage.shop.item', this.count, { count: this.count }) }}):
        <div class="has-text-primary is-size-5">
          {{ $n(this.total, 'currency', 'ja-JP') }}
        </div>
      </div>
      <div class="column is-4-tablet is-full-mobile has-text-centered-mobile">
        <div class="buttons">
          <router-link to="/cart" class="button is-dark is-outlined">
            <span class="icon">
              <i class="fas fa-shopping-cart"></i>
            </span>
            <span v-t="'gadgetsPage.shop.cart'"></span>
          </router-link>
          <a class="button is-primary is-outlined"  v-t="'gadgetsPage.shop.proceedToCheckout'"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'GadgetsShopGalleryProductAdded',
  data () {
    return {}
  },
  computed: {
    number () {
      return this.$route.query.added
    },
    image () {
      return require(`@/assets/gadgets/shop/gadget${this.number}-1.png`)
    },
    ...mapGetters({
      count: 'cartProductsCount',
      total: 'cartSubtotalPrice'
    })
  }
}
</script>

<style scoped>
.box {
  padding: 0.5rem;
  margin-top: -1.5rem;
}

.image img {
  object-fit: cover;
  height: 100%;
}

.buttons {
  justify-content: center;
}
</style>
