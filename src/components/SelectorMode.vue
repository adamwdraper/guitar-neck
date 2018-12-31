<template>
  <selector-mode>
    <h2>Select a Mode</h2>
    <modes>
      <mode>
        <h3>Scales</h3>
        <scale v-for="scale in scales" @click.prevent="to('scale', scale)" :key="scale.id">
          {{ scale.name }}
        </scale>
      </mode>
      <mode>
        <h3>Chords</h3>
        <chord v-for="chord in chords" @click.prevent="to('chord', chord)" :key="chord.id">
          {{ chord.name }}
        </chord>
      </mode>
    </modes>
  </selector-mode>
</template>

<script>
  import Vue from 'vue';
  import { mapState } from 'vuex';
  import { get } from 'lodash';

  // add any custom elements here to suppress warnings
  Vue.config.ignoredElements.push('selector-mode', 'modes', 'mode', 'scale');

  export default {
    components: {},
    computed: {
      ...mapState({
        scales: state => state.modes.scales,
        chords: state => state.modes.chords
      })
    },
    methods: {
      to(mode, scale) {
        this.$router.push({
          name: 'root',
          params: {
            root: get(this.$router.currentRoute, 'params.root', 'c'),
            mode,
            pattern: get(scale, 'id')
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

    scale,
    chord {
      display: block;
      cursor: pointer;
    }
  }
</style>
