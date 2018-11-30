import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [
      'A',
      'A#',
      'B',
      'C',
      'C#',
      'D',
      'D#',
      'E',
      'F',
      'F#',
      'G',
      'G#'
    ],
    fretCount: 22,
    tuning: [
      'E',
      'B',
      'G',
      'D',
      'A',
      'E'
    ],
    root: 'A'
  },
  mutations: {
    setRoot(state, note) {
      state.root = note;
    }
  },
  actions: {

  }
})
