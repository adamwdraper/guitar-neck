<template>
  <info>
    <template v-if="root">
      <stat>
        <label>
          Note
        </label>
        <value>
          {{ root.name }}
        </value>
      </stat>
      <stat>
        <label>
          Fret
        </label>
        <value>
          {{ root.fret }}
        </value>
      </stat>
      <stat>
        <label>
          String
        </label>
        <value>
          {{ root.string }}
        </value>
      </stat>
    </template>
    <template v-else>
      Select a note
    </template>
  </info>
</template>

<script>
  import Vue from 'vue';
  import { mapState } from 'vuex';

  // add any custom elements here to suppress warnings
  Vue.config.ignoredElements.push('note');

  export default {
    computed: {
      ...mapState({
        root: state => state.root
      })
    }
  };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  info {
    display: flex;
    margin-top: 3em;
    justify-content: center;
    align-items: center;

    stat {
      display: flex;
      flex-direction: column;
      margin: 2em;
      min-width: 5em;

      label {

      }

      value {
        font-size: 2em;
      }
    }
  }
</style>
