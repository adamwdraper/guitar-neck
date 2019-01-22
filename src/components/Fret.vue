<template>
  <fret>
    <inlay/>
    <String v-for="(string, index) in strings" :string="string" :key="index"/>
    <fret-bar/>
    <fret-number><span>{{ fretNumber }}</span></fret-number>
  </fret>
</template>

<script>
  import Vue from 'vue';
  import String from './String.vue';

  // add any custom elements here to suppress warnings
  Vue.config.ignoredElements.push('fret', 'inlay', 'fret-bar', 'fret-number');

  export default {
    components: {
      String
    },
    props: {
      strings: Array,
      fretNumber: Number
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

    fret-number {
      display: none;
      position: absolute;
      background: $color-gray-3;
      color: $color-gray-7;
      width: 30px;
      height: 30px;
      border-radius: 50% 0 50% 50%;
      align-items: center;
      justify-content: center;
      bottom: -3em;
      transform: rotate(-45deg);

      span {
        font-size: .85em;
        transform: rotate(45deg);
      }
    }

    $elements: 23;

    @for $i from 0 to $elements {
      &:nth-child(#{$i + 1}) {
         min-width: #{5 - ($i * .1)}em;
      }
    }

    &.fret-0 {
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

    &.fret-3,
    &.fret-5,
    &.fret-7,
    &.fret-9,
    &.fret-12,
    &.fret-15,
    &.fret-17,
    &.fret-19,
    &.fret-21 {

      fret-number {
        display: flex;
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

    &.fret-3 inlay::before,
    &.fret-5 inlay::before,
    &.fret-7 inlay::before,
    &.fret-9 inlay::before,
    &.fret-15 inlay::before,
    &.fret-17 inlay::before,
    &.fret-19 inlay::before,
    &.fret-21 inlay::before {
      @extend %inlay-design;
      top: calc(50% - .5em);
      left: calc(50% - .5em);
    }

    &.fret-12 inlay::before,
    &.fret-24 inlay::before {
      @extend %inlay-design;
      top: calc(35% - .5em);
      left: calc(50% - .5em);
    }

    &.fret-12 inlay::after,
    &.fret-24 inlay::after {
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
      width: .2em;
      border-radius: .1em;
      background: rgba(225, 225, 225, .7);
      z-index: 0
    }
  }
</style>
