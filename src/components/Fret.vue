<template>
  <fret>
    <inlay/>
    <String v-for="(string, index) in strings" :string="string" :key="index"/>
    <fret-bar/>
  </fret>
</template>

<script>
  import Vue from 'vue';
  import String from './String.vue';

  // add any custom elements here to suppress warnings
  Vue.config.ignoredElements.push('fret', 'inlay', 'fret-bar');

  export default {
    components: {
      String
    },
    props: {
      strings: Array
    }
  };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  %inlay-design {
    content: "";
    background: rgba(225, 225, 225, .7);
    position: absolute;
    display: flex;
    height: 1em;
    width: 1em;
    border-radius: 1em;
    border: 2px solid silver;
  }

  fret {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: ghostwhite;

    $elements: 23;

    @for $i from 0 to $elements {
      &:nth-child(#{$i + 1}) {
         min-width: #{5 - ($i * .1)}em;
      }
    }


    &:first-child {
      background-color: gray;
      border-radius: .25em 0 0 .25em;
      padding-right: .5em;

      fret-bar {
        background: white;
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: .5em;
        border-radius: .25em 0 0 .25em;
      }
    }

    inlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 1;
    }

    &:nth-child(4) inlay::before,
    &:nth-child(6) inlay::before,
    &:nth-child(8) inlay::before,
    &:nth-child(10) inlay::before,
    &:nth-child(16) inlay::before,
    &:nth-child(18) inlay::before,
    &:nth-child(20) inlay::before,
    &:nth-child(22) inlay::before {
      @extend %inlay-design;
      top: calc(50% - .5em);
      left: calc(50% - .5em);
    }

    &:nth-child(12) inlay::before,
    &:nth-child(24) inlay::before {
      @extend %inlay-design;
      top: calc(35% - .5em);
      left: calc(50% - .5em);
    }

    &:nth-child(12) inlay::after,
    &:nth-child(24) inlay::after {
      @extend %inlay-design;
      top: calc(65% - .5em);
      left: calc(50% - .5em);
    }

    fret-bar {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: .125em;
      border-radius: .1em;
      background-color: rgba(225, 225, 225, .7);
      z-index: 0
    }
  }
</style>
