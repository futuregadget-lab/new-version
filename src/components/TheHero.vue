<template>
  <section class="hero is-primary"
      :class="cssClass"
      ref="theHero">
    <div class="hero-head">
      <the-navbar color="primary"
         :outside="navbarOutside" :transparent="navbarTransparent">
      </the-navbar>
    </div>

    <div class="hero-body">
      <div class="container"
         :class="{ 'has-text-centered': centered }">
        <h1 class="title" v-html="title" :class="{ 'is-spaced' : subtitleSpaced }"></h1>
        <p class="subtitle" v-html="subtitle"></p>
      </div>
    </div>

    <div class="hero-foot" v-if="links.length">
      <nav class="tabs is-boxed">
        <div class="container">
          <ul>
            <router-link v-for="(link, i) in links"
               :key="i" :to="link.to" tag="li"
               exact-active-class="is-active">
              <a>{{ link.name }}</a>
            </router-link>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'

import bg0 from '@/assets/b0.jpg'
import bg1 from '@/assets/b1.jpg'

export default {
  data () {
    return {
      backgrounds: [ bg0, bg1 ],
      currentBackground: 0,
      navbarOutside: false,
      navbarTransparent: true,
      debounceFunction: undefined,
      backgroundInterval: 0
    }
  },
  components: {
    TheNavbar
  },
  computed: {
    cssClass () {
      const cssClass = []
      if (this.size !== 'small') {
        cssClass.push('is-' + this.size)
      }
      return cssClass
    }
  },
  methods: {
    handleScroll () {
      const windowTop = window.pageYOffset
      const theHero = this.$refs.theHero
      this.navbarOutside = windowTop > (theHero ? theHero.offsetTop : 0)
      this.navbarTransparent = !this.navbarOutside
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  props: {
    size: {
      type: String,
      default: 'medium'
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    subtitleSpaced: {
      type: Boolean,
      default: false
    },
    centered: {
      type: Boolean,
      default: false
    },
    links: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
.hero {
  background-position: right 55%;
  background-image: url('../assets/haikei.jpg');
  background-repeat: no-repeat;
  padding-top: 3.25rem;
  margin-top: -3.25rem;
}

.hero .navbar.is-outside {
  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1)
}

.hero .navbar.is-primary.is-outside {
  background-color: #1a073e;
}
</style>
