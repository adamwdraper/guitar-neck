<template>
  <headstock>
    <String class="no-string" v-for="(string, index) in tunings.strings" :string="string" :key="index"/>
    <nut></nut>
    <!-- <notes>
      <w>
        <n v-for="note in notes" :class="note.toLowerCase().replace(/#/, '-sharp')">{{ note }}</n>
      </w>
    </notes> -->
  </headstock>
</template>

<script>
  import Vue from 'vue';
  import { mapState } from 'vuex';
  import String from './String.vue';

  // add any custom elements here to suppress warnings
  Vue.config.ignoredElements.push('headstock', 'nut', 'notes', 'w', 'n');

  export default {
    components: {
      String
    },
    computed: {
      ...mapState({
        notes: state => state.notes,
        tuning: state => state.tuning
      }),
      tunings() {
        const tunings = {
          strings: []
        };

        for (let tuning of this.tuning) {
          tunings.strings.push({
            note: tuning
          });
        }

        return tunings;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $notes-circle-size: 6em;
  $sharps-circle-size: 10em;
  $a-deg: 270deg;
  $a-sharp-deg: 300deg;
  $b-deg: 321deg;
  $c-deg: 12deg;
  $c-sharp-deg: 35deg;
  $d-deg: 63deg;
  $d-sharp-deg: 85deg;
  $e-deg: 114deg;
  $f-deg: 165deg;
  $f-sharp-deg: 190deg;
  $g-deg: 216deg;
  $g-sharp-deg: 245deg;

  headstock {
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: gray;
    padding: 2px .5em 2px 0;
    border-radius: .25em 0 0 .25em;
  }

  nut {
    background: white;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: .5em;
    border-radius: .25em 0 0 .25em;
  }

  notes {
    border: 4em solid rgba(255,255,255, .8);
    position: absolute;
    display: none;
    width: 2.5em;
    height: 2.5em;
    padding: 0;
    border-radius: 50%;
    z-index: 6;
    align-items: center;
    justify-content: center;

    n {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 50%;
      bottom: 50%;
      height: 2em;
      width: 2em;
      margin-top: -1em;
      margin-left: -1em;
      background: silver;
      font-size: .8em;
      color: #3d3d3d;
      border-radius: 1em;

      &.a {
        transform: rotate($a-deg) translate($notes-circle-size/2) rotate(-$a-deg);
      }

      &.a-sharp {
        transform: rotate($a-sharp-deg) translate($sharps-circle-size/2) rotate(-$a-sharp-deg);
      }

      &.b {
        transform: rotate($b-deg) translate($notes-circle-size/2) rotate(-$b-deg);
      }

      &.c {
        transform: rotate($c-deg) translate($notes-circle-size/2) rotate(-$c-deg);
      }

      &.c-sharp {
        transform: rotate($c-sharp-deg) translate($sharps-circle-size/2) rotate(-$c-sharp-deg);
      }

      &.d {
        transform: rotate($d-deg) translate($notes-circle-size/2) rotate(-$d-deg);
      }

      &.d-sharp {
        transform: rotate($d-sharp-deg) translate($sharps-circle-size/2) rotate(-$d-sharp-deg);
      }

      &.e {
        transform: rotate($e-deg) translate($notes-circle-size/2) rotate(-$e-deg);
      }

      &.f {
        transform: rotate($f-deg) translate($notes-circle-size/2) rotate(-$f-deg);
      }

      &.f-sharp {
        transform: rotate($f-sharp-deg) translate($sharps-circle-size/2) rotate(-$f-sharp-deg);
      }

      &.g {
        transform: rotate($g-deg) translate($notes-circle-size/2) rotate(-$g-deg);
      }

      &.g-sharp {
        transform: rotate($g-sharp-deg) translate($sharps-circle-size/2) rotate(-$g-sharp-deg);
      }
    }
  }
</style>
