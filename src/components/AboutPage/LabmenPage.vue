<template>
  <section class="section has-text-centered">
    <div class="container">
      <div class="column is-8 is-offset-2" id="road">
        <h3 class="title" v-t="'aboutPage.labmenPage.title'"></h3>
        <p class="subtitle" v-t="'aboutPage.labmenPage.subtitle'"></p>

        <div class="tile is-ancestor has-text-left">
          <div class="tile is-vertical is-3" v-for="i in [1, 2, 3, 4]" :key="i">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <div class="tile is-child card" v-for="j in [0, 1]" :key="j">
                  <div class="card-image">
                    <figure class="image is-square">
                      <img :src="getMemberPictureUrl(i + j * 4)" class="main-picture">
                    </figure>
                  </div>
                  <div class="card-content">
                    <p class="title is-5">{{ $t('aboutPage.labmenPage.labmenTitle', { number: '00' +  (i + j * 4)}) }}</p>
                    <p class="subtitle is-7">{{ laboratoryMembers[i + j * 4 - 1].name }}</p>
                  </div>
                </div>
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
