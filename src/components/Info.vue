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
            <note v-for="(note, index) in getRootScale" :key="index">
              <name>
                {{ note.name }}
              </name>
            </note>
          </scale>
        </value>
      </stat>
    </template>
    <template v-else>
      Select a Root note.
    </template>
  </info>
</template>

<script>
  import Vue from 'vue';
  import { mapState, mapGetters } from 'vuex';

  // add any custom elements here to suppress warnings
  Vue.config.ignoredElements.push('info', 'stat', 'label', 'value', 'scale', 'name');

  export default {
    computed: {
      ...mapState({
        notes: state => state.notes,
        root: state => state.root,
        scale: state => state.scale,
        scalePatterns: state => state.scalePatterns
      }),
      ...mapGetters([
        'getRootScale'
      ])
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
        color: $color-gray-light;
      }

      value {
        font-size: 2em;
        color: $color-gray-dark;

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
