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
      const root = find(state.notes, note => note.id === toLower(get(params, 'root', 'c')));
      const mode = toLower(get(params, 'mode', 'scale'));
      const patternName = toLower(get(params, 'pattern', 'major'));

      // generate pattern notes
      const pattern = get(state, `modes.${mode}.${patternName}`);
      const rootIndex = findIndex(state.notes, n => n.id === root.id);
      const notes = [...state.notes.slice(rootIndex), ...state.notes.slice(0, rootIndex)];

      // add root of scale
      pattern.notes = [
        {
          ...notes[0],
          interval: state.intervals[0]
        }
      ];

      let semitones = 0;

      // iterate through semitones to add the rest of the scale notes
      for (let i = 0; i < pattern.semitones.length - 1; i++) {
        semitones += pattern.semitones[i];

        pattern.notes.push({
          ...notes[semitones],
          interval: state.intervals[semitones]
        });
      }

      // set param objects
      state.root = root;
      state.mode = mode;
      state.pattern = Object.assign({}, pattern);
    }
  },
  actions: {}
})
