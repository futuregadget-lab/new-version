<template>
  <section class="section">
    <div class="container">
      <div class="column is-10 is-offset-1">
        <b-b-s-form></b-b-s-form>
        <article class="media" v-for="(comment, i) in $t('bbsPage.comments')" :key="i">
          <figure class="media-left">
            <p class="image is-64x64">
              <img :src="gravatarUrl(comment)">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ comment.subject }}</strong>
                <br>
                <small class="has-text-grey">{{ comment.name }} · <time>{{ commentDate(comment) }}</time></small>
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
                  <img :src="gravatarUrl(reply, 96)">
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>{{ reply.subject }}</strong>
                    <br>
                    <small class="has-text-grey">{{ reply.name }} · <time>{{ commentDate(reply) }}</time></small>
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
import gravatar from 'gravatar'

export default {
  components: {
    BBSForm
  },
  data () {
    return {}
  },
  methods: {
    commentEmail (name) {
      return name.replace(/\s/g, '').toLowerCase() +
        '@futuregadget-lab.github.io'
    },
    gravatarUrl (comment, size = '128', d = 'identicon') {
      const email = this.commentEmail(comment.name)
      return gravatar.url(email, { s: size, r: 'pg', d: d })
    },
    commentDate (comment) {
      const date = Date.parse(comment.date)
      return this.$d(new Date(date), 'short')
    }
  }
}
</script>

<style scoped>
.image img {
  border-radius: 50%;
}
</style>
