<template>
  <table class="table is-fullwidth is-narrow"
     :class="{ 'is-hoverable' : cart.length }">
    <col class="first-column">
    <col class="second-column">
    <col class="third-column">
    <col class="fourth-column">
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th v-t="'gadgetsPage.shop.price'" class="is-size-7 has-text-weight-normal has-text-grey"></th>
        <th v-t="'gadgetsPage.shop.quantity'" class="is-size-7 has-text-weight-normal has-text-grey has-text-right"></th>
        <th></th>
      </tr>
    </thead>
    <tfoot v-if="cart.length">
      <tr>
        <th></th>
        <th class="has-text-right has-text-weight-bold">
          {{ $t('gadgetsPage.shop.cartSubtotal') }}
          ({{ $tc('gadgetsPage.shop.item', count, { count: count }) }}):
        </th>
        <th class="has-text-primary has-text-weight-bold">
          {{ $n(subtotal, 'currency', 'ja-JP') }}
        </th>
        <th></th>
        <th></th>
      </tr>
    </tfoot>
    <tbody>
      <template v-for="(item, i) in cart">
        <GadgetsShopCartListItem :product="item" :key="i"/>
      </template>
      <tr v-if="!cart.length">
        <td colspan="4" class="has-text-centered" v-t="'gadgetsPage.shop.cartEmpty'"></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex'
import GadgetsShopCartListItem from './GadgetsShopCartListItem'

export default {
  name: 'GadgetsShopCartList',
  components: {
    GadgetsShopCartListItem
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      cart: 'cartProducts',
      count: 'cartProductsCount',
      subtotal: 'cartSubtotalPrice'
    })
  }
}
</script>

<style scoped>
.column {
  border-bottom: 1px solid #dbdbdb;
}

.first-column {
  width: 15%;
}

.second-column {
  width: 45%;
}

.third-column,
.fourth-column {
  width: 20%;
}
</style>
