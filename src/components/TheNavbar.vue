<template>
  <nav class="navbar is-white is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-shadow"></div>
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
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
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
    }
  },
  methods: {
    toggleMenu () {
      this.isActive = !this.isActive
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
