<template>
  <neck>
    <frets>
      <Fret v-for="(fret, index) in frets" :strings="fret.strings" :key="index + 1"/>
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
    transform: perspective(100em) rotateY(-5deg);
  }

  frets {
    display: flex;
  }

  frets {
    border-top: 2px solid whitesmoke;
    border-bottom: 2px solid whitesmoke;
  }
</style>
