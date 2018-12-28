import Vue from 'vue'
import Vuex from 'vuex'

import { notes, intervals } from '@/config/notes.js';
import scale from '@/config/scales.js';

import { find, findIndex, toLower, get } from 'lodash';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes,
    intervals,
    modes: {
      scale
    },
    fretCount: 22,
    tuning: null,
    noteGrid: null,
    root: null,
    mode: null,
    pattern: null
  },
  getters: {},
  mutations: {
    setNoteGrid(state, noteGrid) {
      state.noteGrid = noteGrid;
    },
    setTuning(state, tuning) {
      state.tuning = tuning;
    },
    setParams(state, params) {
      const root = find(state.notes, note => note.id === toLower(params.root));
      const mode = toLower(params.mode);
      const patternName = toLower(params.pattern);

      // generate pattern notes
      const pattern = get(state, `modes.${mode}.${patternName}`);
      const rootIndex = findIndex(state.notes, n => n.id === root.id);
      const notes = [...state.notes.slice(rootIndex), ...state.notes.slice(0, rootIndex)];

      pattern.notes = pattern.steps.map(i => ({
        ...notes[i],
        interval: state.intervals[i]
      }));

      // set param objects
      state.root = root;
      state.mode = mode;
      state.pattern = Object.assign({}, pattern);
    }
  },
  actions: {}
})
