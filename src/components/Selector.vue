<template>
  <selector v-if="selector">
    <SelectorRoot v-if="selector === 'root'"/>
    <SelectorMode v-if="selector === 'mode'"/>
  </selector>
</template>

<script>
  import Vue from 'vue';
  import { mapState } from 'vuex';

  import SelectorRoot from './SelectorRoot';
  import SelectorMode from './SelectorMode';

  // add any custom elements here to suppress warnings
  Vue.config.ignoredElements.push('selector');

  export default {
    components: {
      SelectorRoot,
      SelectorMode
    },
    computed: {
      ...mapState({
        selector: state => state.selector
      })
    },
    watch: {
      selector() {
        if (this.selector) {
          window.addEventListener('keyup', this.closeOnEsc);
        } else {
          window.removeEventListener('keyup', this.closeOnEsc);
        }
      }
    },
    methods: {
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
  selector {
    position: absolute;
    height: 100vh;
    width: 100vw;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
