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
          <language-selector></language-selector>
          <p>
            <span v-for="(copyright, i) in $t('general.copyright')" :key="i">
              {{ copyright }}<br v-if="i < $t('general.copyright').length - 1">
            </span>
          </p>
          <p>
            <i18n path="general.licenced" tag="span">
              <a href="http://opensource.org/licenses/mit-license.php" target="_blank">MIT</a>
            </i18n>
            <br>
            <i18n path="general.programmedWithLove" tag="span">
              <i class="fa fa-code" place="programmed"></i>
              <i class="fa fa-heart" place="love"></i>
              <a href="https://github.com/alessandrojean" target="_blank" place="developer">@alessandrojean</a>
            </i18n>
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
  components: {
    LanguageSelector
  },
  data () {
    return {}
  }
}
</script>

<style>

</style>
