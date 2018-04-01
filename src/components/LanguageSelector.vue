<template>
  <div class="field">
    <div class="select is-small">
      <select v-model="lang">
        <option
            v-for="lang in languages"
            :key="lang.code"
            :value="lang.code">
          {{ lang.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { availableLanguages, loadLanguageAsync } from '@/setup/i18n-setup'

export default {
  name: 'LanguageSelector',
  data () {
    return {
      languages: availableLanguages
    }
  },
  computed: {
    lang: {
      get () {
        return this.$i18n.locale
      },
      set (value) {
        loadLanguageAsync(value)
      }
    }
  }
}
</script>

<style>

</style>
