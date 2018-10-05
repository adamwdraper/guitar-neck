<template>
  <div id="app">
    <guitar>
      <Headstock/>
      <Neck/>
    </guitar>
  </div>
</template>

<script>
import Headstock from './components/Headstock.vue';
import Neck from './components/Neck.vue';

export default {
  name: 'app',
  components: {
    Headstock,
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

guitar {
  display: flex;
  transform: perspective(100em) rotateY(-5deg);
}
</style>
