<template>
  <info>
    <template v-if="root">
      <pattern-title>
        <root-note @click.prevent="openSelector('root')">{{ root.name }}</root-note> <pattern-name @click.prevent="openSelector('mode')">{{ pattern.name | capitalize }} {{ mode | capitalize }}</pattern-name>
      </pattern-title>
      <pattern-details>
        <detail>
          <label>
            Notes
          </label>
          <value>
            <notes>
              <note v-for="(note, index) in patternNotes" :key="index">
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
              <note v-for="(note, index) in patternNotes" :key="index">
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
      <display-details>
        <displays>
          <display @click.prevent="setDisplay('notes')" :class="{'is-active': display === 'notes'}">Notes</display>
          <display @click.prevent="setDisplay('intervals')" :class="{'is-active': display === 'intervals'}">Intervals</display>
        </displays>
      </display-details>
    </template>
  </info>
</template>

<script>
  import Vue from 'vue';
  import { mapState } from 'vuex';
  import { get, filter } from 'lodash';

  // add any custom elements here to suppress warnings
  Vue.config.ignoredElements.push('info', 'pattern-title', 'root-note', 'pattern-name', 'pattern-details', 'detail', 'display-details', 'displays', 'display', 'label', 'value', 'notes', 'note', 'name', 'interval');

  export default {
    computed: {
      ...mapState({
        params: state => state.params,
        root: state => state.root,
        mode: state => state.mode,
        pattern: state => state.pattern,
        display: state => state.display
      }),
      patternNotes() {
        return filter(this.pattern.notes, note => note.isInPattern);
      }
    },
    methods: {
      openSelector(name) {
        this.$store.commit('setSelector', name);
      },
      setDisplay(display) {
        this.$router.push({
          name: 'root',
          params: {
            root: get(this.params, 'root'),
            mode: get(this.params, 'mode'),
            pattern: get(this.params, 'pattern'),
            display: display
          }
        });
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  info {
    display: flex;
    flex: 1;
    flex-shrink: 0;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1em;

    pattern-title {
      font-size: 3rem;
      font-weight: 500;

      root-note {
        display: inline-block;
        cursor: pointer;
        border-bottom: 3px solid $color-blue;
        margin-right: .5em;
        padding: 0 .1em;
      }

      pattern-name {
        display: inline-block;
        cursor: pointer;
        border-bottom: 3px solid $color-blue;
        padding: 0 .1em;
      }
    }

    pattern-details {
      display: flex;
      margin-top: 2em;
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

              &:not(:last-child) {

                &:after {
                  content: ',';
                  font-weight: 400;
                }
              }
            }
          }
        }
      }
    }

    display-details {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;

      displays {
        display: block;
        background: $color-gray-3;
        border-radius: 1em;
        padding: 2px;
        font-size: .8em;
        margin-top: 1.5em;

        display {
          display: inline-block;
          padding: .25em .75em;
          border-radius: 1em;
          cursor: pointer;
          color: $color-gray-dark;
          transition: all 0.5s;

          &.is-active {
            cursor: default;
            color: white;
            background-color: $color-blue;
          }
        }
      }
    }
  }
</style>
