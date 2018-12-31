<template>
  <note @click.prevent="to" :class="{'is-root': isRoot, 'is-in-pattern': isInPattern}">
    {{ note.name }}
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
        pattern: state => state.pattern
      }),
      isRoot() {
        return get(this.root, 'id') === get(this.note, 'id');
      },
      isInPattern() {
        return find(this.pattern.notes, note => note.id === this.note.id)
      },
    },
    methods: {
      to() {
        this.$router.push({
          name: 'root',
          params: {
            root: get(this.note, 'id'),
            mode: get(this.$router.currentRoute, 'params.mode', 'scale'),
            pattern: get(this.$router.currentRoute, 'params.pattern', 'major')
          }
        });
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  note {
    cursor: pointer;
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

    &:hover {
      &:not(.is-root) {
        background: white;
        color: $color-gray-dark;
        opacity: 1;
      }
    }
  }
</style>
