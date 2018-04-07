<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img :src="gravatarImage">
      </p>
    </figure>
    <div class="media-content">
      <div class="field">
        <div class="control has-icons-left">
          <input type="text" class="input" :placeholder="$t('bbsPage.form.subject')">
          <span class="icon is-small is-left">
            <i class="fas fa-question-circle"></i>
          </span>
        </div>
      </div>
      <div class="field">
        <p class="control">
          <textarea class="textarea" :placeholder="$t('bbsPage.form.comment')"></textarea>
        </p>
      </div>
      <div class="field">
        <div class="control has-icons-left">
          <input type="text" class="input" :placeholder="$t('bbsPage.form.url')">
          <span class="icon is-small is-left">
            <i class="fas fa-link"></i>
          </span>
        </div>
      </div>
      <div class="field">
        <div class="field-body">
          <div class="field">
            <div class="control is-expanded has-icons-left">
              <input type="text" class="input" :placeholder="$t('bbsPage.form.name')">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <div class="control is-expanded has-icons-left">
              <input type="text" class="input" :placeholder="$t('bbsPage.form.email')"
                 @blur="onEmailBlur">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <div class="control has-icons-left">
              <input type="password" class="input" :placeholder="$t('bbsPage.form.password')">
              <span class="icon is-small is-left">
                <i class="fas fa-key"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="field-body">
          <div class="field">
            <div class="control is-expanded">
              <label class="checkbox">
                <input type="checkbox">
                {{ $t('bbsPage.form.saveCookie') }}
              </label>
            </div>
          </div>
          <div class="field is-grouped is-grouped-right">
            <p class="control">
              <button class="button">{{ $t('bbsPage.form.reset') }}</button>
            </p>
            <p class="control">
              <button class="button is-primary">{{ $t('bbsPage.form.submit') }}</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import gravatar from 'gravatar'

export default {
  data () {
    return {
      email: ''
    }
  },
  computed: {
    gravatarImage () {
      return (this.email === '')
        ? 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&f=y&s=128'
        : gravatar.url(this.email, { s: 128, d: 'identicon', r: 'pg' })
    }
  },
  methods: {
    onEmailBlur (event) {
      this.email = event.target.value
    }
  }
}
</script>

<style scoped>
.image img {
  border-radius: 50%;
}
</style>
