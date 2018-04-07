<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column">
          <p class="title is-6" v-t="'general.sitemap'"></p>
          <ul>
            <li
                v-for="(item, i) in sitemap"
                :key="i"  
            >
              <router-link :to="item.to">{{ item.title }}</router-link>
            </li>
          </ul>
        </div>
        <div class="column has-text-centered has-text-left-mobile">
          <i class="fas fa-language is-size-1 is-size-3-mobile has-text-grey"></i>
          <LanguageSelector/>
        </div>
        <div class="column has-text-right-tablet has-text-left-mobile">
          <div class="content">
            <p>
              <small class="is-size-7">
                <span v-for="(copyright, i) in $t('general.copyright')" :key="i">
                  {{ copyright }}<br v-if="i < $t('general.copyright').length - 1">
                </span>
              </small>
            </p>
            <p>
              <i18n path="general.programmedWithLove" tag="span">
                <i class="fas fa-code" place="programmed"></i>
                <i class="fas fa-heart has-text-danger" place="love"></i>
                <a href="https://github.com/alessandrojean" target="_blank" place="developer">Alessandro Jean</a>
              </i18n>
            </p>
            <p class="is-size-7">
              <small>
                <i18n path="general.licenced" tag="span">
                  <a href="http://opensource.org/licenses/mit-license.php" target="_blank">MIT</a>
                </i18n>
                <br>
                <i18n path="general.icons" tag="span">
                  <a href="https://fontawesome.com" target="_blank">Font Awesome</a>
                </i18n>
                <i18n path="general.fonts" tag="span">
                  <a href="https://fonts.google.com" target="_blank">Google</a>
                </i18n>
              </small>
            </p>
            <p>
              <a href="https://bulma.io" target="_blank">
                <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import LanguageSelector from '@/components/LanguageSelector'

export default {
  name: 'TheFooter',
  components: {
    LanguageSelector
  },
  data () {
    return {}
  },
  computed: {
    showAd () {
      return this.$route.path !== '/'
    },
    sitemap () {
      return [
        { title: this.$t('menu.homePage'), to: '/', onlyExact: true },
        { title: this.$t('menu.about'), to: '/about' },
        { title: this.$t('menu.futureGadgets'), to: '/gadgets' },
        { title: this.$t('menu.bbs'), to: '/bbs' },
        { title: this.$t('menu.shoppingCart'), to: '/cart' }
      ]
    }
  }
}
</script>

<style scoped>
.footer {
  padding: 3rem 1.5rem 3rem;
}

.fas.fa-language {
  margin-bottom: 1rem;
}

.fas.fa-heart {
  animation: pulse 700ms linear infinite;
}

@keyframes pulse {
  50% {
    transform: scale(1.125);
  }
}
</style>
