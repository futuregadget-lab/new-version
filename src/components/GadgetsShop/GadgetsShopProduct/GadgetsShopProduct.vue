<template>
  <div class="container">
    <div class="modal" :class="{ 'is-active': showModal }">
      <div class="modal-background" @click="viewModal"></div>
      <div class="modal-content">
        <p class="image is-16by9">
          <img :src="image" :alt="gadget.name">
        </p>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="viewModal"></button>
    </div>
    <section class="section">
      <nav class="breadcrumb has-angle-separator is-small" aria-label="breadcrumbs">
        <ul>
          <li><router-link to="/gadgets" v-t="'menu.futureGadgets'"/></li>
          <li class="is-active"><a aria-current="page">{{ gadget.name }}</a></li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column is-4">
          <div class="is-sticky">
            <figure class="image show-modal" @click="viewModal">
              <img :src="image" :alt="gadget.name">
            </figure>
            <div class="section-title">
              <h3 class="title is-5">{{ gadget.name }}</h3>
              <p class="subtitle is-7 has-text-grey">{{ $t('gadgetsPage.number', { number: number }) }}</p>
            </div>
            <div class="panel">
              <div class="panel-block">
                <div class="level is-mobile">
                  <div class="level-right has-text-grey is-size-7" v-t="'gadgetsPage.shop.stockAvailability'"></div>
                  <p class="level-right" :class="{ 'has-text-success': !gadget.preOrder, 'has-text-danger': gadget.preOrder }">
                    {{ availability }}
                  </p>
                </div>
              </div>
              <div class="panel-block">
                <div class="level is-mobile">
                  <div class="level-right has-text-grey is-size-7" v-t="'gadgetsPage.shop.quantity'"></div>
                  <div class="level-right">
                    <input class="input is-small" type="number" min="1" v-model="quantity">
                  </div>
                </div>
              </div>
              <div class="panel-block">
                <div class="level is-mobile">
                  <p class="level-right has-text-grey is-size-7" v-t="'gadgetsPage.shop.referencePrice'"></p>
                  <p class="level-right has-text-grey reference-price">
                    {{ $n(gadget.price + 5000, 'currency', 'ja-JP') }}
                  </p>
                </div>
              </div>
              <div class="panel-block">
                <div class="level is-mobile">
                  <p class="level-right has-text-grey is-size-7" v-t="'gadgetsPage.shop.price'"></p>
                  <p class="level-right has-text-primary has-text-weight-bold">
                    {{ $n(gadget.price, 'currency', 'ja-JP') }}
                  </p>
                </div>
              </div>
              <div class="panel-block">
                <div class="level is-mobile">
                  <p class="level-right has-text-grey is-size-7" v-t="'gadgetsPage.shop.off'"></p>
                  <p class="level-right has-text-primary">
                    {{ off }}
                  </p>
                </div>
              </div>
              <div class="panel-block">
                <button class="button is-primary is-outlined is-fullwidth" @click="handleClick"
                    :class="{ 'is-loading': loading }" :disabled="loading">
                  <span class="icon">
                    <i class="fas fa-shopping-cart"></i>
                  </span>
                  <span>{{ action }}</span>
                </button> 
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <section class="section is-horizontal-paddingless">
            <div class="section-title">
              <h4 class="title has-text-primary is-6" v-t="'gadgetsPage.shop.productDetails'"></h4>
            </div>
            <div class="content">
              <p v-html="gadget.description"></p>
              <ul class="has-text-grey is-size-7">
                <li v-for="(note, i) in gadget.notes" :key="i">
                  {{ note }}
                </li>
              </ul>
            </div>      
          </section>
          <section class="section is-horizontal-paddingless">
            <div class="section-title">
              <h4 class="title has-text-primary is-6" v-t="'gadgetsPage.shop.customersAlsoBought'"></h4>
            </div>
            <div class="columns is-multiline is-mobile">
              <div
                class="column is-half-mobile is-3-tablet"
                v-for="(related, i) in alsoBought"
                :key="i"
              >
                <GadgetsShopGalleryItem :item="related"/>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import GadgetsShopGalleryItem from '../GadgetsShopGallery/GadgetsShopGalleryItem'
import { mapGetters } from 'vuex'

export default {
  name: 'GadgetsShopProductDetails',
  components: {
    GadgetsShopGalleryItem
  },
  data () {
    return {
      quantity: 1,
      showModal: false,
      loading: false
    }
  },
  computed: {
    alsoBought () {
      return []
        .concat(this.$t('gadgetsPage.gadgets'))
        .reverse()
        .map((gadget, i) => ({ number: i + 1, ...gadget }))
        .filter(gadget => gadget.number !== this.gadgetNumber)
        .sort(() => 0.5 - Math.random())
        .slice(0, 4)
    },
    gadgetNumber () {
      return parseInt(this.number)
    },
    gadget () {
      const gadgets = this.$t('gadgetsPage.gadgets')
      return gadgets[gadgets.length - this.gadgetNumber]
    },
    availability () {
      return !this.gadget.preOrder
        ? this.$t('gadgetsPage.shop.inStock')
        : this.$t('gadgetsPage.shop.acceptingReservations')
    },
    action () {
      return !this.gadget.preOrder
        ? this.$t('gadgetsPage.shop.addToCart')
        : this.$t('gadgetsPage.shop.preOrderAddToCart')
    },
    off () {
      const discount = this.$n(5000, 'currency', 'ja-JP')
      const percent = 100 - Math.ceil((this.gadget.price * 100) / (this.gadget.price + 5000))
      return this.$t('gadgetsPage.shop.offPrice', { price: discount, percent: percent })
    },
    image () {
      return require(`@/assets/gadgets/shop/gadget${this.gadgetNumber}-1.png`)
    },
    ...mapGetters(['getItemByNumber'])
  },
  mounted () {
    if (this.gadgetNumber - 1 > this.$t('gadgetsPage.gadgets').length) {
      this.$router.push('/gadgets')
    }
  },
  methods: {
    handleClick () {
      if (!this.loading) {
        this.loading = true
        // Simulate server request delay.
        setTimeout(this.addToCart, 2000)
      }
    },
    addToCart () {
      const item = this.getItemByNumber(this.gadgetNumber)
      if (item) {
        item.quantity += this.quantity
      } else {
        this.$store.commit('addProduct', { item: this.gadget, number: this.gadgetNumber, quantity: 1 })
      }
      this.$router.push({ path: '/gadgets', query: { added: this.gadgetNumber } })
    },
    viewModal () {
      this.showModal = !this.showModal
      if (this.showModal) {
        document.querySelector('html').classList.add('is-clipped')
      } else {
        document.querySelector('html').classList.remove('is-clipped')
      }
    }
  },
  props: {
    number: {
      type: [ String, Number ],
      required: true
    }
  }
}
</script>

<style scoped>
.show-modal {
  cursor: pointer;
}

.column .section:first-of-type {
  padding-top: 0;
}

.breadcrumb {
  margin-top: -2.25rem;
}

.section:not(:last-of-type) {
  padding-bottom: 0;
}

.panel {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  border-radius: 5px;
  margin-top: 1rem;
}

.panel .panel-block {
  border-top: none;
  border-left: none;
  border-right: none;
}

.panel .panel-block:last-of-type {
  border-bottom: none;
}

.input[type="number"] {
  width: 40%;
}

.reference-price {
  text-decoration: line-through;
}

.section-title {
  border-bottom: 1px solid #dbdbdb;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.section-title:first-child {
  padding-top: 0;
}

.panel-block {
  display: block;
}
</style>
