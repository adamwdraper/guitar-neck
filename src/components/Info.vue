<template>
  <info>
    <template v-if="root">
      <pattern-title>
        {{ root.name }} {{ pattern.name | capitalize }} {{ mode | capitalize }}
      </pattern-title>
      <pattern-details>
        <detail>
          <label>
            Notes
          </label>
          <value>
            <notes>
              <note v-for="(note, index) in pattern.notes" :key="index">
                <name>
                  {{ note.name }}
                </name>
              </note>
            </notes>
          </value>
        </detail>
        <detail>
          <label>
            Intervals
          </label>
          <value>
            <notes>
              <note v-for="(note, index) in pattern.notes" :key="index">
                <interval>
                  {{ note.interval.degree.short }}
                </interval>
              </note>
            </notes>
          </value>
        </detail>
        <detail>
          <label>
            Semitones
          </label>
          <value>
            <notes>
              <note v-for="(semitone, index) in pattern.semitones" :key="index">
                <interval>
                  {{ semitone }}
                </interval>
              </note>
            </notes>
          </value>
        </detail>
      </pattern-details>
    </template>
  </info>
</template>

<script>
  import Vue from 'vue';
  import { mapState } from 'vuex';

  // add any custom elements here to suppress warnings
  Vue.config.ignoredElements.push('info', 'stat', 'label', 'value', 'scale', 'name', 'interval');

  export default {
    computed: {
      ...mapState({
        root: state => state.root,
        mode: state => state.mode,
        pattern: state => state.pattern
      })
    }
  };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  info {
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    pattern-title {
      font-size: 3rem;
      font-weight: 500;
    }

    pattern-details {
      display: flex;
      margin-top: 1.25em;
      font-size: .9em;

      detail {
        display: flex;
        margin: 0 1rem;

        label {
          font-weight: 300;
          color: $color-gray-7;
          text-transform: uppercase;
          margin-right: 1em;
        }

        value {
          color: $color-gray-7;
          font-weight: 500;

          notes {
            display: flex;

            note {
              margin-right: .5em;
              display: flex;
              flex-direction: column;

            }
          }
        }
      }
    }
  }
</style>
