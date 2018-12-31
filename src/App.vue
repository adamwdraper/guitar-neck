<template>
  <div id="app">
    <router-view name="info"></router-view>
    <router-view name="guitar"></router-view>
    <Selector/>
  </div>
</template>

<script>
  import Vue from 'vue';

  import Selector from '@/components/Selector.vue';

  // add any custom elements here to suppress warnings
  Vue.config.ignoredElements.push();

  export default {
    name: 'app',
    components: {
      Selector
    }
  };
</script>

<style lang="scss">
  html,
  body {
      font-family: 'Rubik', sans-serif;
      width: 100vw;
      height: 100vh;
      color: $color-gray-dark;
      margin: 0;
  }

  #app {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
</style>
