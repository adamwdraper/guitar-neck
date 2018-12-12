<template>
  <note @mouseenter="setFocus" @mouseleave="setFocus" @click="setRoot" :class="{'is-root': isRoot, 'is-focus': isFocus}">
    {{ note.name }}
  </note>
</template>

<script>
  import Vue from 'vue';
  import { mapState } from 'vuex';
  import { get } from 'lodash';

  // add any custom elements here to suppress warnings
  Vue.config.ignoredElements.push('note');

  export default {
    props: {
      note: Object
    },
    computed: {
      ...mapState({
        focus: state => state.focus,
        root: state => state.root
      }),
      isFocus() {
        return get(this.focus, 'name') === get(this.note, 'name');
      },
      isRoot() {
        return this.root && get(this.root, 'fret') === get(this.note, 'fret') && get(this.root, 'string') === get(this.note, 'string');
      }
    },
    methods: {
      setFocus() {
        this.$store.commit('setFocus', this.isFocus ? null : this.note);
      },
      setRoot() {
        this.$store.commit('setRoot', this.isRoot ? null : this.note);
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
;
    border-radius: 1em;
    position: relative;
    transition: background 0.5s, color 0.5s;

    &.is-focus {
      background: $color-blue;
    }

    &.is-root {
      background: $color-red;
      color: white;
    }
  }
</style>
