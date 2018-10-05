<template>
  <neck>
    <frets>
      <Fret v-for="fret in frets" :strings="fret.strings"/>
    </frets>
  </neck>
</template>

<script>
  import Vue from 'vue';
  import { mapState } from 'vuex';
  import Fret from './Fret.vue';

  // add any custom elements here to suppress warnings
  Vue.config.ignoredElements.push('neck', 'frets');

  export default {
    components: {
      Fret
    },
    computed: {
      ...mapState({
        notes: state => state.notes,
        fretCount: state => state.fretCount,
        tuning: state => state.tuning
      }),
      tunings() {
        const tunings = {
          strings: []
        };

        for (let tuning of this.tuning) {
          tunings.strings.push({
            note: tuning
          });
        }

        return tunings;
      },
      frets() {
        const frets = [];

        for (let i = 1; i <= this.fretCount; i++) {
          let fret = {
            strings: []
          };

          for (let tuning of this.tuning) {
            let baseNoteIndex = this.notes.indexOf(tuning);

            // generate notes
            let note = baseNoteIndex + i;

            note = note >= this.notes.length ? note % this.notes.length : note;

            fret.strings.push({
              note: this.notes[note]
            });
          }

          frets.push(fret);
        }

        return frets;
      }
    }
  };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  neck {
    display: flex;
  }

  frets {
    display: flex;
  }

  frets {
    border-top: 2px solid whitesmoke;
    border-bottom: 2px solid whitesmoke;
  }
</style>
