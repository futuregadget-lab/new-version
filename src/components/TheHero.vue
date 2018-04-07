<template>
  <section class="hero is-purple"
      :class="cssClass">

    <div class="hero-body">
      <div class="container"
         :class="{ 'has-text-centered': centered }">
        <div class="columns is-vcentered">
          <div class="column">
            <h1 class="title" v-html="title" :class="{ 'is-spaced' : subtitleSpaced }"></h1>
            <p class="subtitle" v-html="subtitle"></p>
          </div>
          <div class="column is-narrow" v-if="!isHome">
            <div class="ad-container">
              <div class="box">
                <img src="@/assets/1f.jpg">
              </div>
            </div>
          </div>
        </div>       
      </div>
    </div>

    <div class="hero-foot">
      <nav class="tabs is-boxed" v-if="links.length">
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
      const classes = [ size ]

      if (this.isHome) {
        classes.push('is-home')
      }

      return classes
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
    isHome: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '',
      required: true
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
  margin-top: -3.25rem;
  padding-top: 3.25rem;
}

.hero.is-home {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/b1.jpg');
  background-size: cover;
  background-position: center;
}

/* From Bulma.io website. */
.ad-container {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: calc(400px + 1rem);;
  min-height: calc(100px + 1rem);;
}

.ad-container .box {
  padding: 0.5rem;
  width: calc(400px + 1rem);
  height: calc(100px + 1rem);
}
</style>
