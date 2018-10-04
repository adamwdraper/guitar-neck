<template>
    <note>
      {{ note }}
    </note>
  </fret>
</template>

<script>
  import Vue from 'vue';

  export default {
    props: {
      note: String
    }
  };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  note {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2em;
    width: 2em;
    background: rgba(135, 206, 235, .8);
    color: #3d3d3d;
    border-radius: 1em;
    position: relative;
  }
</style>
