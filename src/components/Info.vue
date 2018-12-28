<template>
  <info>
    <template v-if="root">
      <pattern-title>
        {{ root.name }} {{ pattern.name | capitalize }} {{ mode | capitalize }}
      </pattern-title>
      <metas>
        <meta>
          <label>
            Notes
          </label>
          <value>
            <scale>
              <note v-for="(note, index) in pattern.notes" :key="index">
                <name>
                  {{ note.name }}
                </name>
                <interval>
                  {{ note.interval.degree.short }}
                </interval>
              </note>
            </scale>
          </value>
        </meta>
      </metas>
    </template>
    <template v-else>
      Select a Root note.
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
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    pattern-title {
      font-size: 3rem;
    }

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

            interval {
              font-size: .65em;
              color: $color-gray-7;
            }
          }
        }
      }
    }
  }
</style>
