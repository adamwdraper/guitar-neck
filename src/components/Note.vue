<template>
  <note :class="{'is-root': isRoot, 'is-in-pattern': noteFromPattern.isInPattern}">
    {{ name }}
  </note>
</template>

<script>
  import Vue from 'vue';
  import { mapState } from 'vuex';
  import { get, find } from 'lodash';

  // add any custom elements here to suppress warnings
  Vue.config.ignoredElements.push('note');

  export default {
    props: {
      note: Object
    },
    computed: {
      ...mapState({
        root: state => state.root,
        mode: state => state.mode,
        pattern: state => state.pattern,
        display: state => state.display
      }),
      name() {
        return this.display === 'intervals' ? this.noteFromPattern.interval.degree.short : this.note.name
      },
      isRoot() {
        return get(this.root, 'id') === get(this.note, 'id');
      },
      noteFromPattern() {
        return find(this.pattern.notes, note => note.id === this.note.id)
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  note {
    cursor: default;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2em;
    width: 2em;
    color: $color-gray-dark;
    background: white;
    border-radius: 1em;
    position: relative;
    transition: all 0.5s;
    opacity: .25;

    &.is-in-pattern {
      background: $color-gray-light;
      opacity: 1;
    }

    &.is-root {
      background: $color-blue;
      color: white;
    }
  }
</style>
