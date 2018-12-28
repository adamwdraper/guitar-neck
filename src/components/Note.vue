<template>
  <router-link tag="note" :to="to" :class="{'is-root': isRoot, 'is-in-pattern': isInPattern}">
    {{ note.name }}
  </router-link>
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
        return this.root.id === get(this.note, 'id');
      },
      isInPattern() {
        return find(this.pattern.notes, note => note.id === this.note.id)
      },
      to() {
        return {
          name: 'root',
          params: {
            root: get(this.note, 'id'),
            mode: this.$router.currentRoute.params.mode,
            pattern: this.$router.currentRoute.params.pattern
          }
        };
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
    background: $color-gray-light;
    border-radius: 1em;
    position: relative;
    transition: background 0.5s, color 0.5s, opacity 0.5s;
    opacity: 0;

    &.is-in-pattern {
      opacity: 1;
    }

    &.is-root {
      background: $color-red;
      color: white;
    }
  }
</style>
