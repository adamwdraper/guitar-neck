<template>
  <div id="app">
    <router-view name="info"></router-view>
    <router-view name="guitar"></router-view>
  </div>
</template>

<script>
  import Vue from 'vue';

  // add any custom elements here to suppress warnings
  Vue.config.ignoredElements.push();

  export default {
    name: 'app'
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
