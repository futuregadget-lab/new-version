<template>
  <section class="section has-text-centered">
    <div class="container">
      <div class="column is-8 is-offset-2" id="road">
        <h3 class="title" v-t="'aboutPage.labmenPage.title'"></h3>
        <p class="subtitle" v-t="'aboutPage.labmenPage.subtitle'"></p>

        <div class="tile is-ancestor has-text-left"
           v-for="i in (laboratoryMembers.length / 4)" :key="i">
          <div class="tile is-parent is-3"
             v-for="j in 4" :key="j">
            <div class="tile is-child card">
              <div class="card-image">
                <figure class="image is-square">
                  <img :src="getMemberPictureUrl(j + (i - 1) * 4)" class="main-picture">
                </figure>
              </div>
              <div class="card-content">
                <p class="title is-5">{{ $t('aboutPage.labmenPage.labmenTitle', { number: '00' +  (j + (i - 1) * 4)}) }}</p>
                <p class="subtitle is-7">{{ laboratoryMembers[j + (i - 1) * 4 - 1].name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    laboratoryMembers () {
      return this.$t('aboutPage.labmenPage.laboratoryMembers')
    }
  },
  methods: {
    getMemberPictureUrl (number) {
      return require('@/assets/labmen/avatar/labmen0' + number + '.png')
    }
  }
}
</script>

<style scoped>
.card .card-image figure.image {
  background-image: url('../../assets/bg_body.gif');
}
</style>
