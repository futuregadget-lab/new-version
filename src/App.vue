<template>
  <div id="app">
    <TheNavbar/>
    <router-view/>
    <TheFooter/>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheFooter
  }
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/initial-variables";
@import "~bulma/sass/utilities/functions";

@import url(//fonts.googleapis.com/earlyaccess/notosansjapanese.css);
@import url(//use.fontawesome.com/releases/v5.0.9/css/all.css);

$primary: #4827a3;
$primary-invert: findColorInvert($primary);

$purple: #1a073e;
$purple-invert: findColorInvert($purple);

$link: $primary;
$link-invert: $primary-invert;

$family-serif: 'Noto Sans Japanese', sans-serif;
$family-primary: $family-serif;

@import "~bulma/sass/utilities/derived-variables";
$addColors: (
  "purple": ($purple, $purple-invert)
);
$colors: map-merge($colors, $addColors);

@import "~bulma";

html, body {
  padding: 0;
  margin: 0;
}
</style>
