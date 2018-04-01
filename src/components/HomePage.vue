<template>
  <div class="home-page">
    <the-hero
       :title="$t('general.title')"
       :subtitle="$t('homePage.welcome')"
       centered
       subtitle-spaced
       color="dark">
    </the-hero>

    <div class="box cta">
      <p class="has-text-centered">
        <span class="tag is-info" v-t="'homePage.breakingNews'"></span>
        {{ $t('homePage.stageOne') }}
      </p>
    </div>

    <section class="container">
      <div class="column is-10 is-offset-1">
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
                <i class="fas fa-id-card"></i>
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
          <div class="card">
            <div class="card-image has-text-centered">
                <i class="fas fa-rocket"></i>
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
      </div>
    </section>
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
.home-page {
  background: #EFF3F4;
}

.box.cta {
  border-radius: 0;
  border-left: none;
  border-right: none;
}

.box.cta .tag {
  margin-right: 0.5em;
}

.features {
  padding: 5rem 0;
}

.card-image > .fas {
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
