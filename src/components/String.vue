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
    padding: .25em .75em;
    z-index: 2;

    &::before {
      content: "";
      position: absolute;
      top: calc(50% - .05em);
      left: 0;
      height: .1em;
      width: 100%;
      background-color: silver;
    }

    @for $i from 0 to 10 {
      &:nth-child(#{$i + 1})::before {
        height: .03em * $i;
      }
    }

    &.no-string {

      &::before {
        display: none;
      }
    }
  }
</style>
