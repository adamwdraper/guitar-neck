import Vue from 'vue'
import Vuex from 'vuex'

import { findIndex } from 'lodash';

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
        0,
        2,
        4,
        5,
        7,
        9,
        11
      ],
      minor: [
        0,
        2,
        3,
        5,
        7,
        8,
        10
      ]
    },
    fretCount: 22,
    tuning: null,
    noteGrid: null,
    focus: null,
    root: null,
    scale: 'major'
  },
  getters: {
    getRootScale: state => {
      if (!state.root) {
        return [];
      }
      
      const pattern = state.scalePatterns[state.scale];
      const rootIndex = findIndex(state.notes, n => n.name === state.root.name);
      const notes = [...state.notes.slice(rootIndex), ...state.notes.slice(0, rootIndex)];

      return pattern.map(i => notes[i]);
    }
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
