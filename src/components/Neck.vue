<template>
  <neck>
    <frets>
      <Fret v-for="(fret, index) in frets" :strings="fret.strings" :fretNumber="index" :class="`fret-${index}`" :key="index + 1"/>
    </frets>
  </neck>
</template>

<script>
  import Vue from 'vue';
  import { mapState } from 'vuex';
  import Fret from './Fret.vue';

  // add any custom elements here to suppress warnings
  Vue.config.ignoredElements.push('neck', 'frets');

  export default {
    components: {
      Fret
    },
    computed: {
      ...mapState({
        noteGrid: state => state.noteGrid,
        fretCount: state => state.fretCount,
        tuning: state => state.tuning
      }),
      frets() {
        return this.noteGrid;
      }
    }
  };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  neck {
    display: flex;
    transform: perspective(10em) rotateY(-.5deg) rotateX(1deg);
  }

  frets {
    display: flex;
  }
</style>
