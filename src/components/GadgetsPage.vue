<template>
  <div>
    <the-hero
       :title="$t('gadgetsPage.title')"
       :subtitle="$t('gadgetsPage.subtitle')"
       color="dark"
       size="small">
    </the-hero>
    <div class="modal" :class="{ 'is-active' : showModal }">
      <div class="modal-background"></div>
      <div class="modal-content has-text-centered">
        <img :src="modalGadget.image">
      </div>
      <button class="modal-close is-large" aria-label="close"
         @click="toggleModal"></button>
    </div>
    <div class="container">
      <section class="section">
        <div class="columns is-multiline">
          <div class="column is-10 is-offset-1 content">
            <p v-t="'gadgetsPage.description'"></p>
            <p v-t="'gadgetsPage.mailInfo'"></p>
            <p v-t="'gadgetsPage.mailOrder'"></p>
          </div> 
          <div class="column is-3 is-offset-1 is-hidden-mobile">
            <div class="is-sticky">
              <aside class="menu">
                <p class="menu-label" v-t="'gadgetsPage.futureGadgets'"></p>
                <ul
                   class="menu-list"
                   v-scroll-spy-active="{ selector: 'li > a', class: 'is-active' }"
                   v-scroll-spy-link
                >
                  <li
                     v-for="(gadget, i) in $t('gadgetsPage.gadgets')"
                     :key="i"
                  >
                    <a>{{ gadget.name }}</a>
                  </li>
                </ul>
              </aside>
              <section class="section has-text-centered">
                <p class="heading" v-t="'gadgetsPage.fax'"></p>
                <p class="title is-5">0C-3A66-1704</p>
              </section>
            </div>
          </div>
          <div class="column is-7" v-scroll-spy="scrollspy">
            <div v-for="(gadget, i) in $t('gadgetsPage.gadgets')" :key="i">
              <div class="columns">
                <div class="column">
                  <h3 class="title is-5" :id="'gadget-' + (i + 1)">{{ gadget.name }}</h3>
                  <p class="subtitle is-7" v-if="gadget.subtitle">{{ gadget.subtitle }}</p>
                </div>
                <div class="column has-text-right is-vcentered is-4">
                  <div class="field is-grouped is-grouped-multiline">
                    <div class="control" v-if="gadget.image">
                      <div
                         class="button is-small is-light"
                         @click="toggleModal(gadget)"
                      >
                        Picture
                      </div>
                    </div>
                    <div class="control" v-if="!gadget.subtitle">
                      <div class="tags has-addons">
                        <span class="tag is-light" v-t="'gadgetsPage.number'"></span>
                        <span class="tag is-primary">{{ $t('gadgetsPage.gadgets').length - i }}</span>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <span class="tag is-light" v-t="'gadgetsPage.price'"></span>
                        <span
                           class="tag" 
                           :class="{ 'is-danger' : gadget.specialPrice, 'is-dark' : !gadget.specialPrice }"
                        >
                          {{ priceOrTBD(gadget) }}
                        </span>
                      </div>
                    </div>
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
    return {
      scrollspy: {
        offset: 60,
        time: 100,
        steps: 30,
        allowNoActive: true
      },
      showModal: false,
      modalGadget: {
        image: ''
      }
    }
  },
  methods: {
    priceOrTBD (gadget) {
      return gadget.price === 0 ? this.$t('gadgetsPage.tbd') : this.$n(gadget.price, 'currency', 'ja-JP')
    },
    toggleModal (gadget) {
      this.showModal = !this.showModal
      console.log(gadget)

      if (!this.showModal) {
        document.querySelector('html').classList.remove('is-clipped')
        this.modalGadget.image = ''
      } else {
        document.querySelector('html').classList.add('is-clipped')
        this.modalGadget.image = require(`@/assets/gadgets/${gadget.image}`)
      }
    }
  }
}
</script>

<style scoped>
.field.is-grouped {
  justify-content: flex-end;
}

.is-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 4rem;
}
</style>
