<template>
  <neck>
    <frets>
      <Fret v-for="(fret, index) in frets" :strings="fret.strings" :key="index + 1"/>
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
      frets() {
        const frets = [];

        for (let i = 1; i <= this.fretCount; i++) {
          let fret = {
            strings: []
          };

          for (let x = 1; x <= this.tuning.length; x++) {
            let tuning = this.tuning[x - 1];
            let baseNoteIndex = this.notes.indexOf(tuning);

            // generate notes
            let note = baseNoteIndex + i;

            note = note >= this.notes.length ? note % this.notes.length : note;

            fret.strings.push({
              note: {
                ...this.notes[note],
                fret: i,
                string: tuning
              }
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
