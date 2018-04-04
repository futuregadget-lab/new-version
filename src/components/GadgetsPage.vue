<template>
  <div>
    <the-hero
       :title="$t('gadgetsPage.title')"
       :subtitle="$t('gadgetsPage.subtitle')"
       color="dark"
       size="small">
    </the-hero>
    <div class="modal" :class="{ 'is-active' : showModal }">
      <div class="modal-background" @click="toggleModal"></div>
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
            <GadgetItem
               v-for="(gadget, i) in $t('gadgetsPage.gadgets')"
               :key="i"
               :gadget="gadget"
               :division-line="i < $t('gadgetsPage.gadgets').length - 1"
               :index="$t('gadgetsPage.gadgets').length - i"
               @image="toggleModal"
            />        
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import TheHero from '@/components/TheHero'
import GadgetItem from '@/components/GadgetsPage/GadgetItem'

export default {
  components: {
    TheHero,
    GadgetItem
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
    gadgetImage (gadget) {
      return require(`@/assets/gadgets/${gadget.image}`)
    },
    toggleModal (payload) {
      this.showModal = !this.showModal

      if (!this.showModal) {
        document.querySelector('html').classList.remove('is-clipped')
        this.modalGadget.image = ''
      } else {
        document.querySelector('html').classList.add('is-clipped')
        this.modalGadget.image = this.gadgetImage(payload.gadget)
      }
    }
  }
}
</script>

<style scoped>
.is-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 4rem;
}
</style>
