<template>
  <div class="divergence-meter is-size-1-mobile is-unselectable">
    <ICountUp
       :startVal="startNumber"
       :endVal="endNumber"
       :decimals="6"
       :options="options"
       ref="counter"
    />
  </div>
</template>

<script>
import ICountUp from 'vue-countup-v2'

export default {
  name: 'DivergenceMeter',
  components: {
    ICountUp
  },
  data () {
    return {
      startNumber: 0.334581,
      endNumber: 0.334581,
      options: {
        decimal: ','
      }
    }
  },
  computed: {
    alphaLines () {
      return [
        0.571046,
        0.571024,
        0.571015,
        0.523307,
        0.523299,
        0.456914,
        0.456903,
        0.409431,
        0.409420,
        0.334581,
        0.337187
      ]
    },
    betaLines () {
      return [
        1.130426,
        1.130238,
        1.129848,
        1.130212,
        1.130211,
        1.130209,
        1.130208,
        1.130206,
        1.130205
      ]
    }
  },
  methods: {
    nextNumber () {
      // Probability from 1/12.
      const alphaOrBeta = this.randomNumber(1, 12)
      const lines = alphaOrBeta <= 3 ? this.betaLines : this.alphaLines
      const index = this.randomNumber(0, lines.length - 1)
      return lines[index]
    },
    randomNumber (a, b) {
      return Math.floor(Math.random() * b) + 1
    }
  },
  mounted () {
    setInterval(() => {
      this.startNumber = this.endNumber
      this.endNumber = this.nextNumber()
      this.$refs.counter.update(this.endNumber)
    }, 10000)
  }
}
</script>

<style scoped>
.divergence-meter {
  font-family: 'Noto Sans Japanese', sans-serif;
  font-weight: lighter;
  text-shadow: 0 0 10px #f4a111;
  color: #f4a111;
  font-size: 5rem;
  margin: 0;
}

.odometer-value {
  text-align: center !important;
}
</style>
