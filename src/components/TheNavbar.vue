<template>
  <nav
     class="navbar is-white"
     :class="{ 'is-fixed-top' : fixedTop }"
     role="navigation"
     aria-label="main navigation"
  >
    <div class="navbar-shadow" v-if="shadow"></div>
    <div class="container">
      <div class="navbar-brand">
        <div
          class="navbar-item has-text-primary has-text-weight-bold is-unselectable"
          v-t="'general.title'"
        />

        <div class="navbar-burger" :class="{ 'is-active': isActive }"
           @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': isActive }">
        <div class="navbar-end">
          <router-link
             class="navbar-item"
             v-for="(item, i) in items"
             :key="i"
             :to="item.to"
             :active-class="item.onlyExact ? '' : 'is-active'"
             exact-active-class="is-active"
             @click.native="isActive = false"
          >
            {{ item.title }}
          </router-link>
          <div class="navbar-item" v-if="cartCount">
            <div class="field">
              <p class="control">
                <router-link
                  class="button is-primary is-outlined"
                  to="/cart"
                >
                  <span class="icon">
                    <i class="fas fa-shopping-cart"></i>
                  </span>
                  <span>
                    {{ $t('gadgetsPage.shop.cart') }} ({{ cartCount }})
                  </span>
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TheNavbar',
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    items () {
      return [
        { title: this.$t('menu.homePage'), to: '/', onlyExact: true },
        { title: this.$t('menu.about'), to: '/about' },
        { title: this.$t('menu.futureGadgets'), to: '/gadgets' },
        { title: this.$t('menu.bbs'), to: '/bbs' }
      ]
    },
    ...mapGetters({
      cartCount: 'cartProductsCount'
    })
  },
  methods: {
    toggleMenu () {
      this.isActive = !this.isActive
    }
  },
  props: {
    fixedTop: {
      type: Boolean,
      default: true
    },
    shadow: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.navbar .navbar-shadow {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.1)), to(transparent));
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), transparent);
  height: 8px;
  left: 0;
  position: absolute;
  right: 0;
  top: 100%;
}
</style>
