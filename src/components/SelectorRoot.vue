<template>
  <selector-root>
    <notes>
      <note v-for="note in notes" @click.prevent="to(note)" :key="note.id">
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
        notes: state => state.notes
      })
    },
    methods: {
      to(note) {
        this.$router.push({
          name: 'root',
          params: {
            root: get(note, 'id'),
            mode: get(this.$router.currentRoute, 'params.mode', 'scales'),
            pattern: get(this.$router.currentRoute, 'params.pattern', 'major')
          }
        });
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

    note {
      display: block;
      cursor: pointer;
    }
  }
</style>
