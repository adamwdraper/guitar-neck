<template>
  <info>
    <template v-if="root">
      <stat>
        <label>
          Note
        </label>
        <value>
          {{ root.name }}
        </value>
      </stat>
      <stat>
        <label>
          Fret
        </label>
        <value>
          {{ root.fret }}
        </value>
      </stat>
      <stat>
        <label>
          String
        </label>
        <value>
          {{ root.string }}
        </value>
      </stat>
      <stat>
        <label>
          {{ scale | capitalize }} Scale
        </label>
        <value>
          <scale>
            <note v-for="(note, index) in scaleNotes" :key="index">
              <name>
                {{ note.name }}
              </name>
            </note>
          </scale>
        </value>
      </stat>
    </template>
    <template v-else>
      Select a note
    </template>
  </info>
</template>

<script>
  import Vue from 'vue';
  import { mapState } from 'vuex';
  import { findIndex } from 'lodash';

  // add any custom elements here to suppress warnings
  Vue.config.ignoredElements.push('info', 'stat', 'label', 'value');

  export default {
    computed: {
      ...mapState({
        notes: state => state.notes,
        root: state => state.root,
        scale: state => state.scale,
        scalePatterns: state => state.scalePatterns
      }),
      scaleNotes() {
        const pattern = this.scalePatterns[this.scale].slice(0, -1);
        const scaleNotes = [this.root];
        const baseNoteIndex = findIndex(this.notes, o => o.name === this.root.name);
        let noteIndexFromBase = baseNoteIndex;

        for (let steps of pattern) {
          // generate notes
          noteIndexFromBase = noteIndexFromBase + steps;

          const noteIndex = noteIndexFromBase >= this.notes.length ? noteIndexFromBase % this.notes.length : noteIndexFromBase;
          const note = this.notes[noteIndex];

          scaleNotes.push(note);
        }

        return scaleNotes;
      }
    }
  };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  info {
    display: flex;
    margin-top: 3em;
    justify-content: center;
    align-items: flex-start;

    stat {
      display: flex;
      flex-direction: column;
      margin: 2em;
      min-width: 5em;

      label {

      }

      value {
        font-size: 2em;

        scale {
          display: flex;

          note {
            margin-right: 1em;
            display: flex;
            flex-direction: column;

            name {

            }
          }
        }
      }
    }
  }
</style>
