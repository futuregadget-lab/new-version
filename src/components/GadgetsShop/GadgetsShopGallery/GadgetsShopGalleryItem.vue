<template>
  <router-link :to="{ name: 'ProductDetails', params: { number: this.item.number } }">
    <div class="card is-shady">
      <div class="card-image">
        <figure class="image is-16by9">
          <div class="details-container has-text-centered">
            <a class="button is-primary is-inverted is-outlined">
              <span class="icon">
                <i class="fas fa-info"></i>
              </span>
              <span v-t="'gadgetsPage.shop.viewDetails'"></span>
            </a>
          </div>
          <img :src="image" alt="">
        </figure>
      </div>
      <div class="card-content">
        <ul class="has-text-grey is-size-7">
          <li class="has-text-weight-bold has-text-dark name">{{ item.name }}</li>
          <li v-if="item.preOrder" v-t="'gadgetsPage.shop.preOrder'"></li>
          <i18n path="gadgetsPage.shop.fromFor" tag="li" class="price from">
            <span>{{ $n(item.price + 5000, 'currency', 'ja-JP') }}</span>
          </i18n>
          <li class="price for">
            {{ $n(item.price, 'currency', 'ja-JP') }}
          </li>
        </ul>       
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'GadgetsShopGalleryItem',
  data () {
    return {}
  },
  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    image () {
      return require(`@/assets/gadgets/shop/gadget${this.item.number}-1.png`)
    }
  }
}
</script>

<style scoped>
.card {
  min-height: 100%;
}

.card-content {
  padding: 0.5rem;
}

.name {
  display: block;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 0.85rem;
}

.price {
  line-height: 1.25;
}

.price:first-of-type {
  margin-top: 0.25rem;
}

.price.from span{
  text-decoration: line-through;
}

.price.for {
  font-size: 1.75rem;
  color: #4827a3;
  text-transform: uppercase;
  letter-spacing: -0.05em;
}

.details-container {
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity .2s ease-in-out;
  will-change: opacity;
  align-items: center;
  justify-content: center;
}

.card:hover .details-container {
  opacity: 1;
  transition: opacity .2s ease-in-out;
}

.card:hover .card-image .image img {
  filter: blur(2px);
  transform: scale(1.3);
}

.card-image .image {
  overflow: hidden;
  border-radius: 3px 3px 0 0;
}

.card-image .image img {
  transform: scale(1.2);
  transition: filter .2s ease-in-out, transform .2s ease-in-out;
  will-change: filter, transform;
}
</style>
