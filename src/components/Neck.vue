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
    transform: perspective(100em) rotateY(-5deg);
  }

  tunings,
  frets {
    display: flex;
  }

  frets {
    border: 2px solid whitesmoke;
  }

  tunings,
  fret {
    display: flex;
    flex-direction: column;
    border-right: 2px silver solid;
  }

  fret {
    position: relative;
    background-color: ghostwhite;

    &:nth-child(3)::before,
    &:nth-child(5)::before,
    &:nth-child(7)::before,
    &:nth-child(9)::before,
    &:nth-child(15)::before,
    &:nth-child(17)::before,
    &:nth-child(19)::before,
    &:nth-child(21)::before {
      background: rgba(225, 225, 225, .7);
      position: absolute;
      display: flex;
      top: calc(50% - .5em);
      left: calc(50% - .5em);
      height: 1em;
      width: 1em;
      border-radius: 1em;
      border: 2px solid silver;
      content: "";
    }

    &:nth-child(12)::before,
    &:nth-child(24)::before {
      background: rgba(225, 225, 225, .7);
      position: absolute;
      display: flex;
      top: calc(35% - .5em);
      left: calc(50% - .5em);
      height: 1em;
      width: 1em;
      border-radius: 1em;
      border: 2px solid silver;
      content: "";
    }

    &:nth-child(12)::after,
    &:nth-child(24)::after {
      background: rgba(225, 225, 225, .7);
      position: absolute;
      display: flex;
      top: calc(65% - .5em);
      left: calc(50% - .5em);
      height: 1em;
      width: 1em;
      border-radius: 1em;
      border: 2px solid silver;
      content: "";
      z-index: 1;
    }

    string {
      padding: .25em .75em;
      z-index: 2;
    }

    note {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2em;
      width: 2em;
      background: rgba(135, 206, 235, .7);
      color: #3d3d3d;
      border-radius: 1em;
      position: relative;
    }

    tunings note {
      color: gray;
      background: rgba(225, 225, 225, .7);
    }
  }
</style>
