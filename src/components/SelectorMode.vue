<template>
  <selector-mode>
    <h2>Select a Mode</h2>
    <modes>
      <mode>
        <h3>Scales</h3>
        <scales>
          <scale v-for="scale in scales" @click.prevent="to('scale', scale)" :class="{'is-active': params.mode === 'scale' && params.pattern === scale.id}" :key="scale.id">
            {{ scale.name }}
          </scale>
        </scales>
      </mode>
      <mode>
        <h3>Chords</h3>
        <chords>
          <chord v-for="chord in chords" @click.prevent="to('chord', chord)" :class="{'is-active': params.mode === 'chord' && params.pattern === chord.id}" :key="chord.id">
            {{ chord.name }}
          </chord>
        </chords>
      </mode>
    </modes>
  </selector-mode>
</template>

<script>
  import Vue from 'vue';
  import { mapState } from 'vuex';
  import { get } from 'lodash';

  // add any custom elements here to suppress warnings
  Vue.config.ignoredElements.push('selector-mode', 'modes', 'mode', 'scales', 'chords', 'scale', 'chord');

  export default {
    components: {},
    computed: {
      ...mapState({
        scales: state => state.modes.scales,
        chords: state => state.modes.chords,
        params: state => state.params
      })
    },
    methods: {
      to(mode, pattern) {
        this.$router.push({
          name: 'root',
          params: {
            root: get(this.params, 'root'),
            mode,
            pattern: get(pattern, 'id'),
            display: get(this.params, 'display')
          }
        });

        this.close();
      },
      closeOnEsc(evt) {
        if (evt.keyCode === 27) {
          this.close();
        }
      },
      close() {
        this.$store.commit('setSelector', null);
      }
    }
  }
</script>

<style lang="scss">
  selector-mode {
    display: flex;
    flex-direction: column;
    align-items: center;

    modes {
      display: flex;
      flex-direction: column;
    }

    scales,
    chords {
      display: flex;
    }

    scale,
    chord {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      background: $color-gray-3;
      color: $color-gray-dark;
      border-radius: 1em;
      position: relative;
      transition: all 0.5s;
      padding: .25em .75em;
      margin: 0 .5em;

      &.is-active {
        background: $color-blue;
        color: white;
      }

      &:hover {

        &:not(.is-active) {
          background: white;
          background: $color-gray-light;
          opacity: 1;
        }
      }
    }
  }
</style>
