<template>
  <div id="app">
    <Guitar/>
    <Info/>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Guitar from './components/Guitar.vue';
  import Info from './components/Info.vue';

  // add any custom elements here to suppress warnings
  Vue.config.ignoredElements.push();

  export default {
    name: 'app',
    components: {
      Guitar,
      Info
    }
  };
</script>

<style lang="scss">
  html,
  body {
      font-family: 'Rubik', sans-serif;
      width: 100vw;
      height: 100vh;
      color: #263d42;
      margin: 0;
  }

  #app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
</style>
