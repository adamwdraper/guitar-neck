<template>
  <selector-tuning>
    <h2>Select a Tuning <i @click.prevent="close" class="x"/></h2>
    <tunings>
      <tuning v-for="tuning in tunings" @click.prevent="to(tuning)" :class="{'is-active': params.mode === 'tuning' && params.tuning === tuning.id}" :key="tuning.id">
        {{ tuning.name }}
      </tuning>
    </tunings>
  </selector-tuning>
</template>

<script>
  import Vue from 'vue';
  import { mapState } from 'vuex';
  import { get } from 'lodash';

  // add any custom elements here to suppress warnings
  Vue.config.ignoredElements.push('selector-tuning', 'tunings', 'tuning');

  export default {
    components: {},
    computed: {
      ...mapState({
        tunings: state => state.tunings,
        params: state => state.params
      })
    },
    methods: {
      to(tuning) {
        const params = this.$store.getters.getParams;

        this.$router.push({
          name: 'root',
          params: {
            ...params,
            tuning: get(tuning, 'id')
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
  selector-tuning {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 65em;

    tunings {
      display: flex;
      flex-flow: wrap;
    }

    tuning {
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
      margin: .25em .5em;
      min-width: 10em;

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
