<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png">
      </p>
    </figure>
    <div class="media-content">
      <div class="field">
        <div class="control has-icons-left">
          <input type="text" class="input" :placeholder="$t('bbsPage.form.subject')">
          <span class="icon is-small is-left">
            <i class="fa fa-question-circle"></i>
          </span>
        </div>
      </div>
      <div class="field">
        <p class="control">
          <textarea class="textarea" :placeholder="$t('bbsPage.form.comment')"></textarea>
        </p>
      </div>
      <div class="field is-grouped">
        <div class="control is-expanded has-icons-left">
          <input type="text" class="input" :placeholder="$t('bbsPage.form.name')">
          <span class="icon is-small is-left">
            <i class="fa fa-user"></i>
          </span>
        </div>
        <div class="control is-expanded has-icons-left">
          <input type="text" class="input" :placeholder="$t('bbsPage.form.email')">
          <span class="icon is-small is-left">
            <i class="fa fa-envelope"></i>
          </span>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control is-expanded has-icons-left">
          <input type="text" class="input" :placeholder="$t('bbsPage.form.url')">
          <span class="icon is-small is-left">
            <i class="fa fa-link"></i>
          </span>
        </div>
        <div class="control has-icons-left">
          <input type="password" class="input" :placeholder="$t('bbsPage.form.password')">
          <span class="icon is-small is-left">
            <i class="fa fa-key"></i>
          </span>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control is-expanded">
          <label class="checkbox">
            <input type="checkbox">
            {{ $t('bbsPage.form.saveCookie') }}
          </label>
        </div>
        <p class="control">
          <button class="button">{{ $t('bbsPage.form.reset') }}</button>
        </p>
        <p class="control">
          <button class="button is-primary">{{ $t('bbsPage.form.submit') }}</button>
        </p>
      </div>
    </div>
  </article>
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
