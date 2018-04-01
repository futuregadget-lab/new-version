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
                <i class="fas fa-user"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <div class="control has-icons-left">
              <input type="text" class="input is-medium" :placeholder="$t('bbsPage.adminPage.password')">
              <span class="icon is-small is-left">
                <i class="fas fa-key"></i>
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
        <article class="message is-warning is-small has-text-left">
          <div class="message-header" v-t="'bbsPage.adminPage.toLabmen'"></div>
          <div class="message-body" v-html="$t('bbsPage.adminPage.note')"></div>
        </article>
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
