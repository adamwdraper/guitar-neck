<template>
  <guitar>
    <Neck/>
  </guitar>
</template>

<script>
  import Vue from 'vue';
  import { mapState } from 'vuex';
  import { find } from 'lodash';

  import Neck from './Neck.vue';

  // add any custom elements here to suppress warnings
  Vue.config.ignoredElements.push('guitar');

  export default {
    components: {
      Neck
    },
    computed: {
      ...mapState({
        params: state => state.params,
        notes: state => state.notes,
        tunings: state => state.tunings,
        fretCount: state => state.fretCount,
        noteGrid: state => state.noteGrid,
        tuning: state => state.tuning
      }),
    },
    methods: {
      setup(params) {
        // set setParams
        this.$store.commit('setParams', params);

        // set initial tuning
        this.$store.commit('setTuning', this.generateTuning());

        // set grid
        this.$store.commit('setNoteGrid', this.generateNoteGrid());
      },
      generateTuning() {
        return find(this.tunings, tuning => this.params.tuning === tuning.id, this.tunings[0]);
      },
      generateNoteGrid() {
        const grid = [];

        for (let i = 0; i <= this.fretCount; i++) {
          let fret = {
            strings: []
          };

          for (let x = 0; x < this.tuning.notes.length; x++) {
            let baseNoteIndex = this.notes.indexOf(this.tuning.notes[x]);

            // generate notes
            let note = baseNoteIndex + i;

            note = note >= this.notes.length ? note % this.notes.length : note;

            fret.strings.push({
              note: {
                ...this.notes[note],
                fret: i,
                string: x + 1
              }
            });
          }

          grid.push(fret);
        }

        return grid;
      }
    },
    created() {
      this.setup(this.$route.params);
    },
    beforeRouteUpdate (to, from, next) {
      this.setup(to.params);

      next();
    }
  }
</script>

<style lang="scss">
  guitar {
    display: flex;
    flex: 2;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    // include space for fret numbers
    margin-bottom: 3em;
  }
</style>
