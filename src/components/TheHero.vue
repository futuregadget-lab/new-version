<template>
  <section class="hero is-purple video"
      :class="cssClass">

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
export default {
  data () {
    return {}
  },
  computed: {
    cssClass () {
      const size = (this.size !== 'small') ? `is-${this.size}` : ''
      return [ size ]
    }
  },
  props: {
    size: {
      type: String,
      default: 'large',
      validator (value) {
        return ['small', 'medium', 'large', 'fullheight'].indexOf(value) !== -1
      }
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
</style>
