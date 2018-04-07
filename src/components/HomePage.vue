<template>
  <div class="home-page">
    <TheHero
       :title="$t('general.title')"
       :subtitle="$t('homePage.welcome')"
       centered
       subtitle-spaced
       color="dark"
       size="medium"
       is-home
    />

    <div class="hero is-dark is-bold is-small">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column has-text-centered-mobile">
              <p class="title" v-t="'homePage.divergenceMeter.title'"></p>
              <p class="subtitle" v-t="'homePage.divergenceMeter.description'"></p>
            </div>
            <div class="column has-text-right-tablet has-text-centered-mobile is-paddingless">
              <DivergenceMeter/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="container">
      <div class="columns features">
        <div class="column is-4">
          <div class="card">
            <div class="card-image has-text-centered">
                <i class="fas fa-paw"></i>
            </div>
            <div class="card-content">
              <div class="content">
                <h4>Tristique senectus et netus et. </h4>
                <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                <p><a href="#">Learn more</a></p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="card">
            <div class="card-image has-text-centered">
              <i class="fab fa-empire"></i>
            </div>
            <div class="card-content">
              <div class="content">
                <h4>Tempor orci dapibus ultrices in.</h4>
                <p>Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing elit pellentesque. Sed arcu non odio euismod lacinia at quis risus. Faucibus turpis in eu mi bibendum neque egestas cmonsu songue. Phasellus vestibulum lorem sed risus.</p>
                <p><a href="#">Learn more</a></p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="card is-shady">
            <div class="card-image has-text-centered">
                <i class="fas fa-id-card"></i>
            </div>
            <div class="card-content">
              <div class="content">
                <h4> Leo integer malesuada nunc vel risus.  </h4>
                <p>Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget nullam. Commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <p><a href="#">Learn more</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="hero is-primary is-bold is-small">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <p class="title" v-t="'general.title'"></p>
              <p class="subtitle">
                <span class="icon">
                  <i class="fas fa-fax"></i>
                </span>
                0C-3A66-1704
              </p>
            </div>
            <div class="column is-3 has-text-right">
              <router-link
                 to="/gadgets"
                 class="button is-rounded is-medium"
              >
                <span class="icon">
                  <i class="far fa-lightbulb"></i>
                </span>
                <span v-t="'gadgetsPage.futureGadgets'"></span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHero from '@/components/TheHero'
import DivergenceMeter from '@/components/DivergenceMeter/DivergenceMeter'

export default {
  components: {
    TheHero,
    DivergenceMeter
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.home-page {
  background: #EFF3F4;
}

.features {
  padding: 5rem 0;
}

.card-image > .fas,
.card-image > .fab {
  font-size: 8rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: #209cee;
}

.card-content .content {
  font-size: 14px;
  margin: 1rem 1rem;
}

.card-content .content h4 {
  font-size: 16px;
  font-weight: 700;
}

.card {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  margin-bottom: 2rem;
}
</style>
