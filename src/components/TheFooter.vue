<template>
  <div>
    <section class="hero is-dark is-bold is-small">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <p class="title" v-t="'general.crt.name'"></p>
              <p class="subtitle" v-t="'general.crt.subtitle'"></p>
            </div>
            <div class="column has-text-right-desktop has-text-centered">
              <img src="@/assets/1f.jpg">
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <LanguageSelector/>
          <p>
            <small>
              <span v-for="(copyright, i) in $t('general.copyright')" :key="i">
                {{ copyright }}<br v-if="i < $t('general.copyright').length - 1">
              </span>
            </small>
          </p>
          <p>
            <i18n path="general.programmedWithLove" tag="span">
              <i class="fa fa-code" place="programmed"></i>
              <i class="fa fa-heart has-text-danger" place="love"></i>
              <a href="https://github.com/alessandrojean" target="_blank" place="developer">Alessandro Jean</a>
            </i18n>
            <br>
            <small>
              <i18n path="general.licenced" tag="span">
                <a href="http://opensource.org/licenses/mit-license.php" target="_blank">MIT</a>
              </i18n>
            </small>
            <br>
          </p>
          <p>
            <a href="https://bulma.io" target="_blank">
              <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
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
  }
}
</script>

<style scoped>
.footer {
  padding: 3rem 1.5rem 3rem;
}
</style>
