import Vue from 'vue'
import Vuex from 'vuex'

import { notes, intervals } from '@/config/notes.js';
import scales from '@/config/scales.js';
import chords from '@/config/chords.js';

import { find, findIndex, toLower, get } from 'lodash';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes,
    intervals,
    modes: {
      scales,
      chords
    },
    fretCount: 22,
    tuning: null,
    noteGrid: null,
    root: null,
    mode: null,
    pattern: null,
    selector: null
  },
  getters: {},
  mutations: {
    setNoteGrid(state, noteGrid) {
      state.noteGrid = noteGrid;
    },
    setTuning(state, tuning) {
      state.tuning = tuning;
    },
    setSelector(state, selector) {
      state.selector = selector;
    },
    setParams(state, params) {
      const root = find(state.notes, note => note.id === toLower(get(params, 'root', 'c')));
      const mode = toLower(get(params, 'mode', 'scale'));
      const patternName = toLower(get(params, 'pattern', 'major'));

      // generate pattern notes
      const pattern = find(get(state, `modes.${mode}s`), pattern => pattern.id === patternName);
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
      const length = mode === 'scale' ? pattern.semitones.length - 1 : pattern.semitones.length;

      // iterate through semitones to add the rest of the scale notes
      for (let i = 0; i < length; i++) {
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
