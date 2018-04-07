<template>
  <div class="container">
    <section class="section">
      <GadgetsShopGalleryProductAdded v-if="$route.query.added"/>
      <div class="level is-mobile">
        <div class="level-left"></div>
        <div class="level-right">
          <div class="level-item">
            <label class="label is-small" v-t="'gadgetsPage.shop.sortBy'"></label>
          </div>
          <div class="level-item">
            <div class="field">
              <div class="control">
                <div class="select is-small">
                  <select v-model="sort.sorting">
                    <option
                      v-for="(sort, i) in $t('gadgetsPage.shop.sorting')"
                      :value="i"
                      :key="i">
                      {{ sort }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="level-item">
            <div class="buttons has-addons">
              <a class="button is-small is-active is-primary">
                <span class="icon is-small">
                  <i class="fas fa-th"></i>
                </span>
              </a>
              <a class="button is-small">
                <span class="icon is-small">
                  <i class="fas fa-th-list"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-3 is-hidden-mobile">
          <div class="is-sticky">
            <p class="title is-6 filter" v-t="'gadgetsPage.shop.filterBy'"></p>
            <aside class="menu">
              <div class="menu-label">
                <div class="level is-mobile">
                  <p class="level-left" v-t="'gadgetsPage.shop.stockAvailability'"></p>
                  <div class="level-right">
                    <a class="button is-danger is-small is-outlined" v-t="'gadgetsPage.shop.deselect'"
                       role="button" @click="deselectFilters(0, 1)"
                       :class="{ 'is-invisible': !filter.byPreOrder && !filter.byInStock }"></a>
                  </div>
                </div>
              </div>
              <ul class="menu-list">
                <li>
                  <a v-t="'gadgetsPage.shop.preOrder'" :class="{ 'is-active': filter.byPreOrder }"
                     @click="activeFilter(0)"/>
                </li>
                <li>
                  <a v-t="'gadgetsPage.shop.inStock'" :class="{ 'is-active': filter.byInStock }"
                     @click="activeFilter(1)"/>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div class="column">
          <div class="columns is-multiline is-mobile">
            <div
                class="column is-4-tablet is-6-mobile"
                v-for="(item, i) in vendible"
                :key="i"
            >
              <GadgetsShopGalleryItem :item="item"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import GadgetsShopGalleryItem from './GadgetsShopGalleryItem'
import GadgetsShopGalleryProductAdded from './GadgetsShopGalleryProductAdded'

export default {
  name: 'GadgetsShopGallery',
  components: {
    GadgetsShopGalleryItem,
    GadgetsShopGalleryProductAdded
  },
  data () {
    return {
      filter: {
        byPreOrder: false,
        byInStock: false
      },
      sort: {
        sorting: 0,
        functions: [
          (a, b) => a.number - b.number,
          (a, b) => b.number - a.number,
          (a, b) => a.price - b.price,
          (a, b) => b.price - a.price
        ]
      }
    }
  },
  computed: {
    vendible () {
      return []
        .concat(this.$t('gadgetsPage.gadgets'))
        .reverse()
        .map((g, i) => ({ ...g, number: i + 1 }))
        .filter(g => {
          return this.filter.byPreOrder || this.filter.byInStock
            ? this.filter.byPreOrder ? g.preOrder : !g.preOrder
            : true
        })
        .sort(this.sort.functions[this.sort.sorting])
    },
    haveFilter () {
      return this.filter.byPreOrder || this.filter.byInStock
    }
  },
  methods: {
    activeFilter (id) {
      this.filter.byPreOrder = id === 0
      this.filter.byInStock = id === 1
    },
    deselectFilters (...ids) {
      ids.forEach(id => {
        this.filter.byPreOrder = id === 0 ? false : this.filter.byPreOrder
        this.filter.byInStock = id === 1 ? false : this.filter.byInStock
      })
    }
  }
}
</script>

<style scoped>
.is-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 4rem;
}

.filter {
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.menu-label .button {
  text-transform: none;
  letter-spacing: 0;
}

.menu-list {
  padding-left: 0.5rem;
}
</style>
