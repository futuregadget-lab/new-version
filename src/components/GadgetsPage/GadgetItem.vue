<template>
  <div>
    <div class="columns is-vcentered">
      <div class="column">
        <h3 class="title is-5" :id="'gadget-' + (i + 1)">{{ gadget.name }}</h3>
        <p class="subtitle is-7" v-if="gadget.subtitle">{{ gadget.subtitle }}</p>
      </div>
      <div class="column has-text-right is-4">
        <div class="field is-grouped is-grouped-multiline">
          <div class="control" v-if="!gadget.subtitle">
            <div class="tags has-addons">
              <span class="tag is-light" v-t="'gadgetsPage.number'"></span>
              <span class="tag is-primary">{{ index }}</span>
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
    <div class="columns is-vcentered is-mobile">
      <div
          class="column is-one-fifth-tablet is-one-quarter-mobile gadget-image"
          v-if="gadget.image"
          @click="handleImageClicked"
      >
        <img :src="gadgetImage(gadget)" :alt="gadget.name">
      </div>
      <div class="column content">
        <p v-html="gadget.description"></p>
        <small v-if="gadget.note" v-html="gadget.note" class="has-text-grey is-size-7"></small>
      </div>
    </div>
    <hr v-if="divisionLine">
  </div>
</template>

<script>
export default {
  name: 'GadgetItem',
  data () {
    return {}
  },
  methods: {
    priceOrTBD (gadget) {
      return gadget.price === 0 ? this.$t('gadgetsPage.tbd') : this.$n(gadget.price, 'currency', 'ja-JP')
    },
    gadgetImage (gadget) {
      return require(`@/assets/gadgets/${gadget.image}`)
    },
    handleImageClicked () {
      this.$emit('image', { gadget: this.gadget })
    }
  },
  props: {
    gadget: {
      type: Object,
      default () {
        return {}
      },
      required: true
    },
    divisionLine: {
      type: Boolean,
      default: true
    },
    index: {
      type: Number,
      default: 0,
      required: true
    }
  }
}
</script>

<style scoped>
.field.is-grouped {
  justify-content: flex-end;
}

.gadget-image {
  cursor: pointer;
}

.gadget-image img {
  width: 100%;
  height: auto;
}

.columns.is-vcentered {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
</style>
