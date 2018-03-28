<template>
  <section class="section">
    <div class="container">
      <div class="column is-4 is-offset-4 has-text-centered">
        <h3 class="title" v-t="'bbsPage.adminPage.title'"></h3>
        <p class="subtitle" v-t="'bbsPage.adminPage.passwordAsking'"></p>
        <div class="box">
          <div class="field">
            <div class="control has-icons-left">
              <input type="text" class="input is-medium" :placeholder="$t('bbsPage.adminPage.username')">
              <span class="icon is-small is-left">
                <i class="fa fa-user"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <div class="control has-icons-left">
              <input type="text" class="input is-medium" :placeholder="$t('bbsPage.adminPage.password')">
              <span class="icon is-small is-left">
                <i class="fa fa-key"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <label class="checkbox">
              <input type="checkbox">
              {{ $t('bbsPage.adminPage.rememberMe') }}
            </label>
          </div>
          <button class="button is-block is-primary is-medium is-fullwidth" v-t="'bbsPage.adminPage.authenticate'"></button>
        </div>
        <div class="notification is-warning has-text-left">
          <small v-html="$t('bbsPage.adminPage.note')"></small>
        </div>
      </div>
    </div>
  </section>
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
