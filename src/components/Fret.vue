<template>
  <fret>
    <string v-for="string in strings">
      <note>
        {{ string.note}}
      </note>
    </string>
  </fret>
</template>

<script>
  import Vue from 'vue';

  export default {
    props: {
      strings: Array
    }
  };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  fret {
    display: flex;
    flex-direction: column;
    border-right: 2px silver solid;
  }

  fret {
    position: relative;
    background-color: ghostwhite;

    &:nth-child(3)::before,
    &:nth-child(5)::before,
    &:nth-child(7)::before,
    &:nth-child(9)::before,
    &:nth-child(15)::before,
    &:nth-child(17)::before,
    &:nth-child(19)::before,
    &:nth-child(21)::before {
      background: rgba(225, 225, 225, .7);
      position: absolute;
      display: flex;
      top: calc(50% - .5em);
      left: calc(50% - .5em);
      height: 1em;
      width: 1em;
      border-radius: 1em;
      border: 2px solid silver;
      content: "";
    }

    &:nth-child(12)::before,
    &:nth-child(24)::before {
      background: rgba(225, 225, 225, .7);
      position: absolute;
      display: flex;
      top: calc(35% - .5em);
      left: calc(50% - .5em);
      height: 1em;
      width: 1em;
      border-radius: 1em;
      border: 2px solid silver;
      content: "";
    }

    &:nth-child(12)::after,
    &:nth-child(24)::after {
      background: rgba(225, 225, 225, .7);
      position: absolute;
      display: flex;
      top: calc(65% - .5em);
      left: calc(50% - .5em);
      height: 1em;
      width: 1em;
      border-radius: 1em;
      border: 2px solid silver;
      content: "";
      z-index: 1;
    }

    string {
      padding: .25em .75em;
      z-index: 2;
    }

    note {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2em;
      width: 2em;
      background: rgba(135, 206, 235, .7);
      color: #3d3d3d;
      border-radius: 1em;
      position: relative;
    }
  }
</style>
