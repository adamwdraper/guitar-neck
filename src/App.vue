<template>
  <div id="app">
    <Neck/>
  </div>
</template>

<script>
import Neck from './components/Neck.vue';

export default {
  name: 'app',
  components: {
    Neck
  }
}
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
