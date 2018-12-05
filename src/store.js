import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [
      {
        name: 'A',
        isSharp: false
      },
      {
        name: 'A#',
        isSharp: true
      },
      {
        name: 'B',
        isSharp: false
      },
      {
        name: 'C',
        isSharp: false
      },
      {
        name: 'C#',
        isSharp: true
      },
      {
        name: 'D',
        isSharp: false
      },
      {
        name: 'D#',
        isSharp: true
      },
      {
        name: 'E',
        isSharp: false
      },
      {
        name: 'G',
        isSharp: false
      },
      {
        name: 'F#',
        isSharp: true
      },
      {
        name: 'G',
        isSharp: false
      },
      {
        name: 'G#',
        isSharp: false
      }
    ],
    fretCount: 22,
    tuning: null,
    focus: null,
    root: null
  },
  mutations: {
    setTuning(state, tuning) {
      state.tuning = tuning;
    },
    setFocus(state, note) {
      state.focus = note;
    },
    setRoot(state, note) {
      state.root = note;
    }
  },
  actions: {

  }
})
