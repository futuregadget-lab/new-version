<template>
  <section class="section">
    <div class="container">
      <div class="column is-8 is-offset-2">
        <b-b-s-form></b-b-s-form>
        <article class="media" v-for="(comment, i) in $t('bbsPage.comments')" :key="i">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ comment.subject }}</strong> <small>{{ comment.name }}</small> · <small><time>{{ comment.date }}</time></small>
                <br>
                <span v-html="comment.comment"></span>
                <span v-if="comment.url">
                  <br><br>
                  <a>{{ comment.url }}</a>
                </span>
                <br>
                <small><a>{{ $t('bbsPage.like') }}</a> · <a>{{ $t('bbsPage.reply') }}</a></small>
              </p>
            </div>

            <article class="media" v-for="(reply, j) in comment.replies" :key="j">
              <figure class="media-left">
                <p class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png">
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>{{ reply.subject }}</strong> <small>{{ reply.name }}</small> · <small><time>{{ reply.date }}</time></small>
                    <br>
                    <span v-html="reply.comment"></span>
                    <br>
                    <small><a>{{ $t('bbsPage.like') }}</a> · <a>{{ $t('bbsPage.reply') }}</a></small>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import BBSForm from '@/components/BBSPage/BBSForm'

export default {
  components: {
    BBSForm
  },
  data () {
    return {}
  }
}
</script>

<style>

</style>
