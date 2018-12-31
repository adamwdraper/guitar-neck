<template>
  <selector-mode>
    <modes>
      <mode>
        <h2>Scales</h2>
        <scale v-for="scale in scales" @click.prevent="to(scale)" :key="scale.id">
          {{ scale.name }}
        </scale>
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
        scales: state => state.modes.scales
      })
    },
    methods: {
      to(scale) {
        this.$router.push({
          name: 'root',
          params: {
            root: get(this.$router.currentRoute, 'params.root', 'c'),
            mode: get(this.$router.currentRoute, 'params.mode', 'scales'),
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

    scale {
      display: block;
      cursor: pointer;
    }
  }
</style>
