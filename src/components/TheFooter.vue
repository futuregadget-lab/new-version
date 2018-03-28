<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
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
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>

</style>
