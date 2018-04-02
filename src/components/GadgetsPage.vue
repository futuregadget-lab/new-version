<template>
  <div>
    <the-hero
       :title="$t('gadgetsPage.title')"
       :subtitle="$t('gadgetsPage.subtitle')"
       color="dark"
       size="small">
    </the-hero>
    <div class="container">
      <section class="section">
        <div class="columns is-multiline">
          <div class="column is-10 is-offset-1 content">
            <p v-t="'gadgetsPage.description'"></p>
            <p v-t="'gadgetsPage.mailInfo'"></p>
            <p v-t="'gadgetsPage.mailOrder'"></p>
          </div> 
          <aside class="column is-3 is-offset-1 menu">
            <p class="menu-label">Gadgets</p>
            <ul class="menu-list">
              <li
                 v-for="(gadget, i) in $t('gadgetsPage.gadgets')"
                 :key="i"
              >
                <a href="#">{{ gadget.name }}</a>
              </li>
            </ul>
          </aside>
          <div class="column is-7">
            <div v-for="(gadget, i) in $t('gadgetsPage.gadgets')" :key="i">
              <div class="columns">
                <div class="column">
                  <h3 class="title is-5" :id="'gadget-' + (i + 1)">{{ gadget.name }}</h3>
                  <p class="subtitle is-7">{{ gadget.price }}</p>
                </div>
                <div class="column has-text-right is-vcentered">
                  <div class="tags has-addons">
                    <span class="tag is-light" v-t="'gadgetsPage.number'"></span>
                    <span class="tag is-primary">{{ $t('gadgetsPage.gadgets').length - i }}</span>
                  </div>
                </div>
              </div>
              <div class="content">
                <p v-html="gadget.description"></p>
              </div>
              <hr v-if="i < $t('gadgetsPage.gadgets').length - 1">
            </div>         
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import TheHero from '@/components/TheHero'

export default {
  components: {
    TheHero
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.tags {
  justify-content: flex-end;
}
</style>
