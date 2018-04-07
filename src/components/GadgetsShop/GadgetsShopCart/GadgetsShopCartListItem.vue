<template>
  <tr>
    <td class="is-valigned">
      <figure class="image is-16by9">
        <img src="@/assets/gadgets/shop/gadget1-1.png" alt="">
      </figure>
    </td>
    <td>
      <ul>
        <li class="has-text-weight-bold">{{ product.name }}</li>
        <li
           class="is-size-7"
           :class="{ 'has-text-danger': product.preOrder, 'has-text-success': !product.preOrder }"
        >
          {{ availability }}
        </li>
      </ul>
    </td>
    <td>
      <ul>
        <li class="has-text-grey is-size-7 reference-price">
          {{ $n(product.price + 5000, 'currency', 'ja-JP') }}
        </li>
        <li class="has-text-primary has-text-weigth-bold">
          {{ $n(product.price, 'currency', 'ja-JP') }}
        </li>
      </ul>      
    </td>
    <td class="quantity has-text-right is-valigned">
      <input type="number" class="input is-small" v-model.number="product.quantity" min="1">
    </td>
    <td class="is-valigned">
      <a href="" class="delete is-small" @click="deleteProduct(product)"></a>
    </td>
  </tr>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'GadgetsShopCartListItem',
  data () {
    return {}
  },
  computed: {
    availability () {
      return !this.product.preOrder
        ? this.$t('gadgetsPage.shop.inStock')
        : this.$t('gadgetsPage.shop.acceptingReservations')
    }
  },
  methods: {
    ...mapMutations({
      deleteProduct: 'deleteProduct'
    })
  },
  props: {
    product: {
      type: Object,
      default () {
        return {}
      },
      required: true
    }
  }
}
</script>

<style scoped>
.quantity input {
  width: 50%;
}

.is-valigned {
  vertical-align: middle;
}

.is-valigned .delete {
  display: block;
}

.reference-price {
  text-decoration: line-through;
}
</style>
