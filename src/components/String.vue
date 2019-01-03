<template>
  <string>
    <Note :note="string.note"/>
  </string>
</template>

<script>
  import Vue from 'vue';
  import Note from './Note.vue';

  // add any custom elements here to suppress warnings
  Vue.config.ignoredElements.push('string');

  export default {
    components: {
      Note
    },
    props: {
      string: Object
    }
  };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  string {
    position: relative;
    display: flex;
    justify-content: center;
    padding: .25em 0;
    z-index: 2;
    width: 100%;

    &::before {
      content: "";
      position: absolute;
      top: calc(50% - .05em);
      left: 0;
      height: .1em;
      width: 100%;
      background-color: silver;
      background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.1) 100%),
      repeating-linear-gradient(
        to right,
        $color-gray-4,
        $color-gray-4 1px,
        $color-gray-6 1px,
        $color-gray-6 2px
      );
    }

    @for $i from 0 to 10 {
      &:nth-child(#{$i + 1})::before {
        height: .05em * $i;
      }
    }

    &.no-string {

      &::before {
        display: none;
      }
    }
  }
</style>
