<template>
  <headstock>
    <String class="no-string" v-for="string in tunings.strings" :string="string"/>
    <nut></nut>
  </headstock>
</template>

<script>
  import Vue from 'vue';
  import { mapState } from 'vuex';
  import String from './String.vue';

  // add any custom elements here to suppress warnings
  Vue.config.ignoredElements.push('headstock', 'nut');

  export default {
    components: {
      String
    },
    computed: {
      ...mapState({
        tuning: state => state.tuning
      }),
      tunings() {
        const tunings = {
          strings: []
        };

        for (let tuning of this.tuning) {
          tunings.strings.push({
            note: tuning
          });
        }

        return tunings;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  headstock {
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: gray;
    padding: 2px .5em 2px 0;
    border-radius: .25em 0 0 .25em;
  }

  nut {
    background: white;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: .5em;
    border-radius: .25em 0 0 .25em;
  }
</style>
