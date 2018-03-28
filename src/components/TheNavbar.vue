<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation"
     :class="cssClass">
    <div class="container">
      <div class="navbar-brand">
        <a href="https://bulma.io" class="navbar-item">
          <img src="@/assets/logo.png" alt="">
        </a>

        <div class="navbar-burger" :class="{ 'is-active': isActive }"
           @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': isActive }">
        <div class="navbar-end">
          <router-link class="navbar-item" v-for="(item, i) in items"
             :key="i" :to="item.to" exact-active-class="is-active">
            {{ item.title }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    cssClass () {
      const cssClass = [ 'is-' + this.color ]
      if (this.outside) {
        cssClass.push('is-outside')
      }
      if (this.transparent) {
        cssClass.push('is-transparent')
      }
      return cssClass
    },
    items () {
      return [
        { title: this.$t('menu.homePage'), to: '/' },
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
  },
  props: {
    color: {
      type: String,
      default: 'dark'
    },
    outside: {
      type: Boolean,
      default: false
    },
    transparent: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.navbar {
  transition: background-color 250ms;
  transition-timing-function: ease;
}

.navbar.is-transparent .navbar-item {
  opacity: 0.9;
  transition: background-color 250ms;
  transition-timing-function: ease;
}

.navbar.is-transparent .navbar-item:hover,
.navbar.is-transparent .navbar-item.is-active {
  opacity: 1;
}
</style>
