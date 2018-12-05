<template>
  <div id="app">
    <Guitar/>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Guitar from './components/Guitar.vue';

  // add any custom elements here to suppress warnings
  Vue.config.ignoredElements.push();

  export default {
    name: 'app',
    components: {
      Guitar
    }
  };
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
</style>
