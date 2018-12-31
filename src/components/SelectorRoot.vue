<template>
  <selector-root>
    <h2>Select a Root Note</h2>
    <notes>
      <note v-for="note in notes" @click.prevent="to(note)" :class="{'is-root': params.root === note.id}" :key="note.id">
        {{ note.name }}
      </note>
    </notes>
  </selector-root>
</template>

<script>
  import Vue from 'vue';
  import { mapState } from 'vuex';
  import { get } from 'lodash';

  // add any custom elements here to suppress warnings
  Vue.config.ignoredElements.push('selector-root', 'notes', 'note');

  export default {
    components: {},
    computed: {
      ...mapState({
        notes: state => state.notes,
        params: state => state.params
      })
    },
    methods: {
      to(note) {
        this.$router.push({
          name: 'root',
          params: {
            root: get(note, 'id'),
            mode: get(this.params, 'mode'),
            pattern: get(this.params, 'pattern'),
            display: get(this.params, 'display')
          }
        });

        this.close();
      },
      closeOnEsc(evt) {
        if (evt.keyCode === 27) {
          this.close();
        }
      },
      close() {
        this.$store.commit('setSelector', null);
      }
    }
  }
</script>

<style lang="scss">
  selector-root {
    display: flex;
    flex-direction: column;
    align-items: center;

    notes {
      display: flex;
    }

    note {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      height: 2em;
      width: 2em;
      color: $color-gray-dark;
      background: $color-gray-light;
      border-radius: 1em;
      position: relative;
      transition: all 0.5s;
      margin: 0 .5em;

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
  }
</style>
