<template>
  <section class="hero"
      :style="style"
      :class="cssClass"
      ref="theHero">
    <div class="hero-head">
      <the-navbar :color="color"
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
      <nav class="tabs">
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
    style () {
      const style = {}
      if (this.backgroundImage) {
        style['background-image'] = `url('${this.backgrounds[this.currentBackground]}')`
      }
      return style
    },
    cssClass () {
      const cssClass = [ 'is-' + this.color ]
      if (this.size !== 'small') {
        cssClass.push('is-' + this.size)
      }
      if (this.bold) {
        cssClass.push('is-bold')
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

    if (this.backgroundImage) {
      this.backgroundInterval = setInterval(() => {
        this.currentBackground = (this.currentBackground + 1) % this.backgrounds.length
      }, 5000)
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
    this.backgroundInterval = window.clearInterval(this.backgroundInterval)
  },
  props: {
    color: {
      type: String,
      default: 'dark'
    },
    backgroundImage: {
      type: Boolean,
      default: false
    },
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
    bold: {
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
  background-position: center;
  background-size: cover;
  transition: background-image 1s;
  transition-timing-function: ease;
  padding-top: 3.25rem;
  margin-top: -3.25rem;
}

.hero .navbar.is-dark.is-outside {
  background-color: #363636;
}

.hero .navbar.is-warning.is-outside {
  background-color: #ffdd57
}

.hero .navbar.is-primary.is-outside {
  background-color: #00d1b2
}
</style>
