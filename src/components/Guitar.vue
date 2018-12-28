<template>
  <guitar>
    <Neck/>
  </guitar>
</template>

<script>
  import Vue from 'vue';
  import { mapState } from 'vuex';

  import Neck from './Neck.vue';

  // add any custom elements here to suppress warnings
  Vue.config.ignoredElements.push('guitar');

  export default {
    components: {
      Neck
    },
    computed: {
      ...mapState({
        notes: state => state.notes,
        fretCount: state => state.fretCount,
        noteGrid: state => state.noteGrid,
        tuning: state => state.tuning
      }),
    },
    methods: {
      generateTuning() {
        return [
          this.notes[7],
          this.notes[2],
          this.notes[10],
          this.notes[5],
          this.notes[0],
          this.notes[7]
        ];
      },
      generateNoteGrid() {
        const grid = [];

        for (let i = 0; i <= this.fretCount; i++) {
          let fret = {
            strings: []
          };

          for (let x = 0; x < this.tuning.length; x++) {
            let tuning = this.tuning[x];
            let baseNoteIndex = this.notes.indexOf(tuning);

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
      },
      setParams(params = {}) {
        this.$store.commit('setParams', params);
      }
    },
    created() {
      // set initial tuning
      this.$store.commit('setTuning', this.generateTuning());

      // set grid
      this.$store.commit('setNoteGrid', this.generateNoteGrid());

      // set setParams
      this.setParams(this.$route.params);
    },
    beforeRouteUpdate (to, from, next) {
      this.setParams(to.params);

      next();
    }
  }
</script>

<style lang="scss">
  guitar {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
</style>
