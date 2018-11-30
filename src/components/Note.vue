<template>
  <note @click="setRoot" :class="isRoot ? 'is-root' : ''">
    {{ note }}
  </note>
</template>

<script>
  import Vue from 'vue';
  import { mapState } from 'vuex';

  // add any custom elements here to suppress warnings
  Vue.config.ignoredElements.push('note');

  export default {
    props: {
      note: String
    },
    computed: {
      ...mapState({
        root: state => state.root
      }),
      isRoot() {
        return this.root === this.note;
      }
    },
    methods: {
      setRoot() {
        this.$store.commit('setRoot', this.isRoot ? null : this.note);
      }
    }
  };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  note {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2em;
    width: 2em;
    background: rgb(235, 235, 235);
    color: #3d3d3d;
    border-radius: 1em;
    position: relative;
    // box-shadow: 0 0 1px rgba(99, 114, 130, 0.3), 0 3px 0px rgba(27, 39, 51, 0.15);

    &:hover {
      background: rgb(225, 225, 225);
    }

    &.is-root {
      background: rgb(135, 206, 235);
    }
  }
</style>
