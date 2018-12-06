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
        name: 'F',
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
    scalePatterns: {
      major: [
        2,
        2,
        1,
        2,
        2,
        2,
        1
      ],
      minor: [
        2,
        1,
        2,
        2,
        1,
        2,
        2
      ]
    },
    fretCount: 22,
    tuning: null,
    noteGrid: null,
    focus: null,
    root: null,
    scale: 'major'
  },
  mutations: {
    setNoteGrid(state, noteGrid) {
      state.noteGrid = noteGrid;
    },
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
