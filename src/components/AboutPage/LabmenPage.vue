<template>
  <section class="section has-text-centered">
    <div class="container">
      <div class="column is-10 is-offset-1" id="road">
        <h3 class="title" v-t="'aboutPage.labmenPage.title'"></h3>
        <p class="subtitle" v-t="'aboutPage.labmenPage.subtitle'"></p>

        <div class="columns is-multiline has-text-left">
          <div
             class="column is-one-quarter"
             v-for="(labmen, i) in $t('aboutPage.labmenPage.laboratoryMembers')"
             :key="labmen.number"
          >
            <div class="card">
              <div class="card-image">
                <figure class="image is-square">
                  <img :src="getMemberPictureUrl(i + 1)" class="main-picture">
                </figure>
              </div>
              <div class="card-content">
                <p class="title is-5">{{ $t('aboutPage.labmenPage.labmenTitle', { number: labmen.number }) }}</p>
                <p class="subtitle is-7">{{ labmen.name }}</p>
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
