<template>
  <div id="app">
    <guitar>
      <Headstock/>
      <Neck/>
    </guitar>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapState } from 'vuex';

  import Headstock from './components/Headstock.vue';
  import Neck from './components/Neck.vue';

  // add any custom elements here to suppress warnings
  Vue.config.ignoredElements.push('guitar');

  export default {
    name: 'app',
    components: {
      Headstock,
      Neck
    },
    computed: {
      ...mapState({
        notes: state => state.notes
      }),
    },
    created() {
      // set initial tuning
      const tuning = [
        this.notes[7],
        this.notes[2],
        this.notes[10],
        this.notes[5],
        this.notes[0],
        this.notes[7]
      ];

      this.$store.commit('setTuning', tuning);
    }
  }
  </script>

  <style lang="scss">
  html,
  body {
      font-family: 'Rubik', sans-serif;
      width: 100vw;
      height: 100vh;
  }

  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  guitar {
    display: flex;
    transform: perspective(100em) rotateY(-5deg);
  }
</style>
